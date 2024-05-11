import { Component } from '@angular/core';
import { Book } from '../../Models/book';
import { BookService } from '../../Services/bookService';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books!: Book[];
  editedBook!: Book | null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  startEdit(book: Book) {
    this.editedBook = Object.assign({}, book);
  }

  isSelected(book: Book) {
    return this.editedBook?.id === book.id;
  }

  onEditFinished(event: boolean) {
    if (event) {
      this.editedBook = null;
    }
  }
}
