import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { QuoteComponent } from './Quote/quote/quote.component';
import { BooksComponent } from './Books/books/books.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
