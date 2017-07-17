import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VALIDATORS} from '../../shared/validators.const';

@Component({
  selector: 'books-shop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  constructor(private location: Location,
              private fb: FormBuilder) {

    this.signUpForm = fb.group({
      email: [null, VALIDATORS.email],
      passwordGroup: fb.group({
        password: [null, VALIDATORS.password],
        passwordConfirmation: [null]
      }, { validator: this.equalValidator })
    })
  }

  private equalValidator({value}: FormGroup): {[key: string]: boolean} {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : {equal: true}
  }


  public goBack() {
    this.location.back()
  }

}
