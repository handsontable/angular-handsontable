import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Define dynamic columns using a *ngFor loop</h1>
      
      <h2>Setup a component</h2>
      <p>Define an array of objects containing a configuration of particular columns.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Setup a template</h2>
      <p>You can bind controls in an HTML template to properties of the component by using
      a directive called <code>*ngFor</code>. In the example below, we use it to dynamically change
      the number of columns displayed in a spreadsheet.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>The result</h2>
      <p>
        <button md-raised-button (click)="addColumn()">Add column</button>
        <button md-raised-button (click)="removeColumn()">Remove column</button>
      </p>
      <hot-table [colHeaders]="true" [rowHeaders]="true">
        <hot-column *ngFor="let column of columns"></hot-column>
      </hot-table>
    </div>
  `
})
export class ExDynamicColumnsComponent {
  columns: object[] = [ {}, {}, {}, {}, {}, {} ];

  addColumn() {
    this.columns.push({});
  }
  removeColumn() {
    this.columns.pop();
  }

  examples: string[] = [
    [
      `import { Component } from '@angular/core';`,
      `import Handsontable from 'handsontable';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  columns: object[] = [ {}, {}, {}, {}, {}, {} ];`,
      ``,
      `  addColumn() {`,
      `    this.columns.push({});`,
      `  }`,
      ``,
      `  removeColumn() {`,
      `    this.columns.pop();`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<button (click)="addColumn()">Add column</button>`,
      `<button (click)="removeColumn()">Remove column</button>`,
      `<hot-table>`,
      `  <hot-column *ngFor="let column of columns"></hot-column>`,
      `</hot-table>`,
    ].join('\n'),
  ];
}