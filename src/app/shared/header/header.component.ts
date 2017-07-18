import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CartComponent} from '../../shop/cart/cart.component';
import {CartService} from '../../shop/services/cart.service';
import {Book, BOOKS_MOK} from '../classes/book';

@Component({
  selector: 'books-shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private component: ComponentRef<CartComponent>;

  @ViewChild('cart', { read: ViewContainerRef })
  public cart: ViewContainerRef;

  private books: Array<Book> = [];

  constructor(private resolver: ComponentFactoryResolver,
              private cartService: CartService) {

    this.cartService.book$.subscribe((book: Book) => {
      console.log(book);
      this.books.push(book);
    })
  }

  public showCart() {
    const cartFactory = this.resolver.resolveComponentFactory(CartComponent);
    if (!this.component) {
      this.component = this.cart.createComponent(cartFactory);
      this.component.instance.books = this.books;
    } else {
      this.component.destroy();
      this.component = undefined;
    }
  }

}
