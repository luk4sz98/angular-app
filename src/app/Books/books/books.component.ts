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
  isEditFormVisible: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  startEdit(book: Book) {
    this.editedBook = book;
    this.isEditFormVisible = true;
  }

  onEditFinished(event: boolean) {
    if (event) {
      console.log('chuj')
      this.editedBook = null;
      this.isEditFormVisible = false;
    }
  }
}
