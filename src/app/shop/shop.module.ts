import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import {routing} from './shop.router';
import {MaterialModule} from '../material.module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BooksComponent,
  ],
})
export class ShopModule { }
