import { NgModule } from '@angular/core';

import {MdButtonModule, MdToolbarModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
  ],
  declarations: []
})
export class MaterialModule { }
