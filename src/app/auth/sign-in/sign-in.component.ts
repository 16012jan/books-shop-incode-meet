import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'books-shop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private location: Location) { }

  public goBack() {
    this.location.back()
  }

}
