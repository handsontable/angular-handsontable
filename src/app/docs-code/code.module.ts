import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodeComponent } from './code.component';
import { DocsMaterialModule } from '../docs-material.module';

@NgModule({
  declarations: [
    CodeComponent,
  ],
  imports: [
    BrowserModule,
    DocsMaterialModule,
  ],
  exports: [
    CodeComponent,
  ],
})
export class CodeModule { }
