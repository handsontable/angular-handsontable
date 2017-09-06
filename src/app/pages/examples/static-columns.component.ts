import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Define static columns using tags</h1>

      <h2>Setup a component</h2>
      <p>You can define column using custom element. Column initialized in this way can has defined
      with the same bindings as the <code>hot-table</code> element.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Setup a template</h2>
      <p>Pass appropriate bindings to the selected tags. For instance, if you want to define a
      column’s width, you can add it inside the main <code>hot-table</code> tag.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>The result</h2>
      <hot-table height="250" [colHeaders]="true" [rowHeaders]="true" [data]="data">
        <hot-column type="date"></hot-column>
        <hot-column [readOnly]="true"></hot-column>
        <hot-column type="numeric"></hot-column>
        <hot-column width="200"></hot-column>
      </hot-table>

    </div>
  `
})
export class ExStaticColumnsComponent {
  data: any[] = Handsontable.helper.createSpreadsheetData(10, 25);
  readOnly: boolean = true;

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
      `  data: any[] = Handsontable.helper.createSpreadsheetData(10, 20);`,
      `}`,
    ].join('\n'),
    [
      `<hot-table height="250" [colWidths]="true" [colHeaders]="true" [data]="data">`,
      `  <hot-column type="date"></hot-column>`,
      `  <hot-column [readOnly]="true"></hot-column>`,
      `  <hot-column type="numeric"></hot-column>`,
      `  <hot-column width="200"></hot-column>`,
      `</hot-table>`,
    ].join('\n'),
  ];
}