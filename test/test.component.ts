import { Component, OnChanges } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from '../src/hot-registerer.service';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  providers: [ HotRegisterer ],
})

export class AppComponent {
  colWidths: number = 60;
  headers: boolean = true;
  columnsArr: object[] = [
    {},
    {
      type: 'dropdown',
      source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo']
    },
    {}
  ];
  settingsObj: object = {
    data: Handsontable.helper.createSpreadsheetData(10, 10),
    rowHeights: 50,
  }

  constructor(private hotRegisterer: HotRegisterer) { }

  getInstance(id: any): Handsontable {
    return this.hotRegisterer.getInstance(id);
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
