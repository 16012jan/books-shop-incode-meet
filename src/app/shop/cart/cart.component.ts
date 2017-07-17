import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {Book} from '../../shared/classes/book';

@Component({
  selector: 'books-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public books: Array<Book>;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.book$.subscribe((book: Book) => {
      this.books.push(book);
    });
  }

}
