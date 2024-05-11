import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books = [
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

  editedBook: any;
  isEditFormVisible: boolean = false;

  startEdit(book: any) {
    this.editedBook = { ...book };
    this.isEditFormVisible = true;
  }

  saveEdit() {
    const index = this.books.findIndex(book => book.id === this.editedBook.id);
    if (index !== -1) {
      this.books[index] = { ...this.editedBook };
      console.log('Zapisano zmiany:', this.editedBook);
    } else {
      console.error('Nie można znaleźć książki do zapisania zmian.');
    }
    
    this.editedBook = null;
    this.isEditFormVisible = false;
  }
}
