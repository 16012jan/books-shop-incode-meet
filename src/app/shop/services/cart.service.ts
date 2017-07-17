import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Book} from '../../shared/classes/book';

@Injectable()
export class CartService {

  public book$: Subject<Book> = new Subject<Book>();

  constructor() { }

}
