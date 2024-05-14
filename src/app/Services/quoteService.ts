import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: string[] = [
    "Sukces to nie końcówka podróży, to sposób podróżowania. - Zig Ziglar",
    "Wiara jest siłą, która czyni możliwe to, co niemożliwe. - Napoleon Hill",
    "Zawsze wybieraj odwagę nad komfortem. - Brené Brown",
    "Nigdy nie przestawaj marzyć. - Walt Disney",
    "Osiągnięcie sukcesu to walka o to, co kochasz. - Pelé",
    "Prawdziwe przywództwo polega na tym, żeby pomagać innym w ich rozwoju. - Bill Bradley",
    "Sukces nie jest kluczem do szczęścia. Szczęście jest kluczem do sukcesu. - Albert Schweitzer",
    "Najlepszy sposób przewidzenia przyszłości to ją stworzyć. - Peter Drucker",
    "Pamiętaj, aby cieszyć się drogą, nie tylko końcowym celem. - Jack Canfield",
    "Nigdy nie jest za późno, aby stać się tym, kim chcesz być. - George Eliot"
  ];

  constructor() { }

  getRandomQuote() : Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return of(this.quotes[randomIndex]);
  }
}
