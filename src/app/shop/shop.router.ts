import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {ModuleWithProviders} from '@angular/core';

const shopRouter: Routes = [
  {
    path: '',
    children: [
      {
        path: 'books',
        component: BooksComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(shopRouter);
