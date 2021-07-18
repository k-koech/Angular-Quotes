import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent{
  maxUpvote: number = 0;
  
  quotes:Quote[] = [
    new Quote(1,"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking","Steve Jobs", 'Kelvin',new Date(2021,6,13),0,0),
    new Quote(2,'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that','Martin Luther King,', 'Sharon',new Date(2020,1,24),0,0),
  ];
   
  
  addNewQuote(quote: Quote)
  {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  downVote(index: number)
  {
    this.quotes[index].downvotes = this.quotes[index].downvotes-1;
  }

  upVote(index: number)
  {
    this.quotes[index].upvotes = this.quotes[index].upvotes+1;

    this.maxUpvote = Math.max.apply(Math, this.quotes.map(function(o) { return o.upvotes; }));
    
  }

  deleteQuote(isDelete: any, index: number){
    if (isDelete) 
    {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

}
