import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ModuleWithProviders} from '@angular/core';

const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
