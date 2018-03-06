import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OcticonsComponent } from './octicons.component';

@NgModule({
  declarations: [
    OcticonsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    OcticonsComponent,
  ],
})
export class OcticonsModule { }
