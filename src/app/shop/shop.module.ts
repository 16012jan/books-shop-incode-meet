import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import {routing} from './shop.router';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    BooksComponent,
  ]
})
export class ShopModule { }
