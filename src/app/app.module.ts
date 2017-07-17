import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module/material.module';

import { AppRouting} from './app.router';

import { AppComponent } from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CartComponent} from './shop/cart/cart.component';
import {CartService} from './shop/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRouting,
    MaterialModule,
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
