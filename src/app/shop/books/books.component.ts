import { Component, OnInit } from '@angular/core';
import {Book, BOOKS_MOK} from '../../shared/classes/book';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'books-shop-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: Array<Book>;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.books = BOOKS_MOK;
  }

  public likePlus(book: Book) {
    book.likes += 1;
  }

  public buyBook(book: Book) {
    this.cartService.sendBook(book);
  }

}
