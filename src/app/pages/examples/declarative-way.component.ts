import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialize Handsontable by using bindings.</h1>

      <h2>Setup a component</h2>
      <p>DControl Handsontable by binding properties in the template in a declarative way.
      <a href="https://docs.handsontable.com/Options.html" target="_blank">Explore the list of
      available options ${octicons['link-external'].toSVG()}</a> and move forward to configuring
      Handsontable.</p>
      <div class="infobox infobox-info">
        <p>Please note that the changes in the bindings are being observed and automatically propagated to the spreadsheet.</p>
      </div>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Setup a template</h2>
      <p>To display Handsontable, you need to place each attribute separately inside a particular tag.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>The result</h2>
      <p>
        <button md-raised-button (click)="colWidths=100">Change colWidths to 100</button>
        <button md-raised-button (click)="colWidths=undefined">Reset colWidths to default</button>
        </p>
      <hot-table height="249" [colWidths]="colWidths" [colHeaders]="colHeaders" [rowHeaders]="rowHeaders" [data]="data"></hot-table>

    </div>
  `
})
export class ExDeclarativeWayComponent {
  data: any[] = Handsontable.helper.createSpreadsheetData(25, 50);
  colHeaders: boolean = true;
  rowHeaders: boolean = true;
  colWidths: number = 50;

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
      `  data: any[] = Handsontable.helper.createSpreadsheetData(25, 50);`,
      `  colHeaders: boolean = true;`,
      `  rowHeaders: boolean = true;`,
      `  colWidths: number = 50;`,
      `}`,
    ].join('\n'),
    [
      `<button (click)="colWidths=50">Change colWidths to 50</button>`,
      `<button (click)="colWidths=100">Change colWidths to 100</button>`,
      `<hot-table`,
      `   height="250"`,
      `   [colHeaders]="colHeaders"`,
      `   [rowHeaders]="rowHeaders"`,
      `   [colWidths]="colWidths"`,
      `   [data]="data"`,
      `></hot-table>`,
    ].join('\n'),
  ];
}