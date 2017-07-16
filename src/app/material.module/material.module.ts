import { NgModule } from '@angular/core';

import {
  MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule, MdInputModule,
  MdChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule
  ],
  declarations: []
})
export class MaterialModule { }
