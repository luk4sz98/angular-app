import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../Services/quoteService';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  randomQuote!: string;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.showRandomQuote();
  }

  showRandomQuote() {
    this.quoteService.getRandomQuote()
      .subscribe(x => this.randomQuote = x);
  }
}
