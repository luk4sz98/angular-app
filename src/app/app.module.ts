import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { QuoteComponent } from './Quote/quote/quote.component';
import { BooksComponent } from './Books/books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './Books/book/book.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './Users/user-list/user-list.component';
import { UserDetailedComponent } from './Users/user-detailed/user-detailed.component';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { UserAddComponent } from './Users/user-add/user-add.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UserPostsComponent } from './Users/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent,
    BooksComponent,
    BookComponent,
    FooterComponent,
    UserListComponent,
    UserDetailedComponent,
    UserAddComponent,
    UserEditComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
