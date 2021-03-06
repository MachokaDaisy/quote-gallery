import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  addQuote= new Quote("", "", "", new Date())

  @Output() newQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.newQuote.emit(this.addQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
