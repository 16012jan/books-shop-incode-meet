import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'books-shop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private location: Location) { }

  public goBack() {
    this.location.back()
  }

}
