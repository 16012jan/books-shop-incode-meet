import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CartComponent} from '../../shop/cart/cart.component';

@Component({
  selector: 'books-shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private component: ComponentRef<CartComponent>;

  @ViewChild('cart', { read: ViewContainerRef })
  public cart: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  public showCart() {
    const cartFactory = this.resolver.resolveComponentFactory(CartComponent);
    if (!this.component) {
      this.component = this.cart.createComponent(cartFactory);
    } else {
      this.component.destroy();
      this.component = undefined;
    }
  }

}
