
import {Validators} from '@angular/forms';
export const VALIDATORS = {
  email: [
    Validators.required,
    Validators.pattern('.+?@.+?\\..+')
  ],
  password: [
    Validators.required,
    Validators.minLength(8)]
};
