import { NgModule } from '@angular/core';

import {
  MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule, MdInputModule,
  MdChipsModule, MdGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule,
    MdGridListModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule,
    MdGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
