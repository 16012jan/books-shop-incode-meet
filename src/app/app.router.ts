import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'base',
    loadChildren: './shop/shop.module#ShopModule'
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
