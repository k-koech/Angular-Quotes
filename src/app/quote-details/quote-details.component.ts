import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotesFromChild!: Quote;

  @Output() delete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.delete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
