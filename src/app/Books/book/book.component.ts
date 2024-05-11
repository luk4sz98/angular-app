import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../Models/book";
import { BookService } from "../../Services/bookService";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent {
  @Input() editedBook!: Book | null;

  @Output() editFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private bookService: BookService,
    private toastr: ToastrService
  ) {}

  saveEdit() {
    const result = this.bookService.editBook(this.editedBook!);
    if (result) {
      this.toastr.success("Zaaktualizowano książkę!", "Sukces", {
        timeOut: 3000,
      });
      this.editFinished.emit(true);
    } else {
      this.toastr.error("Wystąpił błąd podczas aktualizacji książki!", "Błąd", {
        timeOut: 3000,
      });
      this.editFinished.emit(false);
    }
    this.editedBook = null;
  }
}
