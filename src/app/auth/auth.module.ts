import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MaterialModule} from '../material.module/material.module';
import {AuthRouting} from './auth.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
