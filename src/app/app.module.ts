import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { QuoteComponent } from './Quote/quote/quote.component';
import { BooksComponent } from './Books/books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './Books/book/book.component';
import { FooterComponent } from './Shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent,
    BooksComponent,
    BookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
