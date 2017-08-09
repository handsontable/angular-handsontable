import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DocsMaterialModule } from './docs-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomepageComponent } from './homepage.component';
// import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocsMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
