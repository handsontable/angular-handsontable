import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodeComponent } from './code.component';
import { DocsMaterialModule } from '../docs-material.module';
import { OcticonsModule } from '../octicons/octicons.module';

@NgModule({
  declarations: [
    CodeComponent,
  ],
  imports: [
    BrowserModule,
    DocsMaterialModule,
    OcticonsModule,
  ],
  exports: [
    CodeComponent,
  ],
})
export class CodeModule { }
