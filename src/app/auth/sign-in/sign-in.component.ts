import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VALIDATORS} from '../../shared/validators.const';

@Component({
  selector: 'books-shop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;
  constructor(private location: Location,
              private fb: FormBuilder) {
    this.signInForm = fb.group({
      email: [null, VALIDATORS.email],
      password: [null, VALIDATORS.password]
    })
  }

  public goBack() {
    this.location.back()
  }

}
