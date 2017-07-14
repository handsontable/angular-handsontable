import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HandsontableComponent } from './handsontable.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HandsontableComponent ],
  exports: [ HandsontableComponent ],
})

export class HandsontableModule { }
