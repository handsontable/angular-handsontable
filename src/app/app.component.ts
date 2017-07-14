import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HandsontableRegisterer } from './hottable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HandsontableRegisterer ],
})

export class AppComponent {
  title: string = 'app';
  colWidth: number = 60;
  headers: boolean = true;
  dataset: any[] = Handsontable.helper.createSpreadsheetData(10, 10);
  columnsArr: object[] = [{}, {}, {}]

  constructor(private handsontableRegisterer: HandsontableRegisterer) { }

  getInstance(id: any): void {
    console.log(this.handsontableRegisterer.getInstance(id));
  }

  addColumn(): void {
    this.columnsArr.push({});
  }

  reduceColumn(): void {
    this.columnsArr.pop();
  }

  changeWidth(event) {
    this.colWidth = parseInt(event.target.value, 10);
  }
}
