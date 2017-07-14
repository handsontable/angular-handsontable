import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HandsontableModule } from './hottable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HandsontableModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
