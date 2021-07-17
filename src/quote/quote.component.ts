import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent{
  maxUpvote: number = 0;
  myA =  [
    {
      "x": "8/11/2009",
      "y": 10
    },
    {
      "x": "8/12/2009",
      "y": 70
    },
    {
      "x": "8/13/2009",
      "y": 98
    },
    {
      "x": "8/14/2009",
      "y": 10
    }
  ];
  
  quotes:Quote[] = [
    new Quote(1,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', 'Kelvin',new Date(2021,6,13),0,0),
    new Quote(2,'The way to get started is to quit talking and begin doing.','Walt Disney', 'Mercy',new Date(2017,1,24),0,0),
    new Quote(3,'Don\'t judge each day by the harvest you reap but by the seeds that you plant.','Robert Louis Stevenson', 'Mike Mwangi',new Date(2020,11,31),0,0),
    new Quote(4,'Whoever is happy will make others happy too.','Anne Frank', 'Joel',new Date(2021,1,9),0,0),
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

    console.log( Math.max.apply(Math, this.quotes.map(function(o) 
   { 
     return o.upvotes; 
   })) )
  }


}
