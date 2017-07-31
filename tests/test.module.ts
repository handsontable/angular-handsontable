import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { HotTableModule } from './hot-table.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
  ],
  providers: [],
  bootstrap: [ TestComponent ]
})

export class TestModule { }