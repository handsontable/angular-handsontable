import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './test.component';
import { HotTableModule } from './hottable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
