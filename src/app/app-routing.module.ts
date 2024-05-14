import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { QuoteComponent } from './Quote/quote/quote.component';
import { BooksComponent } from './Books/books/books.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { UserAddComponent } from './Users/user-add/user-add.component';
import { UserDetailedComponent } from './Users/user-detailed/user-detailed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'books', component: BooksComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'users/:id', component: UserDetailedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
