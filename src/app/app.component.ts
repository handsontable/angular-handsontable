import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from './hotregisterer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HotRegisterer ],
})

export class AppComponent {
  colWidths: number = 60;
  headers: boolean = true;
  columnsArr: object[] = [{}, {}, {}];
  settingsObj: object = {
    data: Handsontable.helper.createSpreadsheetData(10, 10),
    rowHeights: 50,
  }

  constructor(private hotRegisterer: HotRegisterer) { }

  getInstance(id: any): void {
    console.log(this.hotRegisterer.getInstance(id));
  }

  addColumn(): void {
    this.columnsArr.push({});
  }

  removeColumn(): void {
    this.columnsArr.pop();
  }

  changeColWidth(value) {
    this.colWidths = value;
  }

  toggleHeaders() {
    this.headers = !this.headers;
  }
}
