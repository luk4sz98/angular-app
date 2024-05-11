import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'To', year: 1986, author: 'Stephen King', price: 39.99 },
    { id: 2, title: 'Harry Potter i Kamień Filozoficzny', year: 1997, author: 'J.K. Rowling', price: 49.99 },
    { id: 3, title: 'Władca Pierścieni: Drużyna Pierścienia', year: 1954, author: 'J.R.R. Tolkien', price: 59.99 },
    { id: 4, title: 'Wieża Jaskółki', year: 1997, author: 'Andrzej Sapkowski', price: 29.99 },
    { id: 5, title: 'Zdobywca', year: 2011, author: 'David Baldacci', price: 39.99 },
    { id: 6, title: 'Percy Jackson i Bogowie Olimpijscy: Złodziej Pioruna', year: 2005, author: 'Rick Riordan', price: 34.99 },
    { id: 7, title: 'Marsjanin', year: 2011, author: 'Andy Weir', price: 44.99 },
    { id: 8, title: 'Dziewczyna z pociągu', year: 2015, author: 'Paula Hawkins', price: 36.99 },
    { id: 9, title: 'Duma i uprzedzenie', year: 1813, author: 'Jane Austen', price: 24.99 },
    { id: 10, title: 'Mężczyźni, którzy nienawidzą kobiet', year: 2005, author: 'Stieg Larsson', price: 42.99 }
  ];

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  editBook(book: Book): boolean {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      return true;
    } else {
      return false;
    }
  }
}
