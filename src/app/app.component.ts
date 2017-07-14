import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HandsontableRegisterer } from './handsontable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HandsontableRegisterer ],
})

export class AppComponent {
  title: string = 'app';
  headers: boolean = false;
  dataset: any[] = [];

  constructor(private handsontableRegisterer: HandsontableRegisterer) { }

  getInstance(id: any): void {
    console.log(this.handsontableRegisterer.getInstance(id));
  }

  toggleHeaders(): void {
    this.headers = !this.headers;
  }

  loadData(): void {
    this.dataset = Handsontable.helper.createSpreadsheetData(10, 10);
  }
}
