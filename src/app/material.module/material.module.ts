import { NgModule } from '@angular/core';

import {MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
  ],
  declarations: []
})
export class MaterialModule { }
