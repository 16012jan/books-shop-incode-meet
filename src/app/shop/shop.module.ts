import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import {routing} from './shop.router';
import {MaterialModule} from '../material.module/material.module';
import { CartComponent } from './cart/cart.component';
import {CartService} from './services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BooksComponent,
    CartComponent,
  ],
  providers: [
    CartService
  ]
})
export class ShopModule { }
