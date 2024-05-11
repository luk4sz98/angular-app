// book.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: any;
  @Input() isEditFormVisible: boolean | undefined;
  @Input() editedBook: any;

  saveEdit() {
    // Tutaj umieść logikę zapisu edytowanej książki
  }
}
