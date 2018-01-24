/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HotTableModule } from '../dist';

@Component({
  selector: 'app',
  template: `<hot-table></hot-table>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HotTableModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
