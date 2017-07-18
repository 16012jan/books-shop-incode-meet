import {Component} from '@angular/core';
import {Book} from '../../shared/classes/book';

@Component({
  selector: 'books-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public books: Array<Book> = [];

  constructor() {}

  public deleteBook(book: Book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

}
