import {Routes} from '@angular/router';

import {authRoutes} from './auth/auth.routes';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  ...authRoutes,
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
