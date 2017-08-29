import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1><code>&lt;hot-column&gt;</code> elements defined statically</h1>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-4 w QuickStart.</a></p>

      <h2>Component</h2>
      <p>Możesz użyć helperów dołączonych do Handsontable. np. do zdefiniowania przykładowego zestawu danych.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Template</h2>
      <p>Wrapper obsługuje dodatkowy komponent <code>hot-column</code> reprezentujący pojedynczą kolumnę.
        Jest to zwyczajnie inna reprezentacja opcji <a href="https://docs.handsontable.com/Options.html#columns"
        target="_blank"><code>columns</code> ${octicons['link-external'].toSVG()}</a></p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>Result</h2>
      <hot-table height="250" [data]="data">
        <hot-column data="3"></hot-column>
        <hot-column [readOnly]="true"></hot-column>
        <hot-column type="numeric"></hot-column>
        <hot-column width="200"></hot-column>
      </hot-table>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/examples/dynamic-columns">Dynamicznie definiowane kolumny</a></p>
      <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
        ${octicons['link-external'].toSVG()}</a></p>
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
      `<hot-table height="250" [data]="data">`,
      `  <hot-column data="3"></hot-column>`,
      `  <hot-column [readOnly]="true"></hot-column>`,
      `  <hot-column type="numeric"></hot-column>`,
      `  <hot-column width="200"></hot-column>`,
      `</hot-table>`,
    ].join('\n'),
  ];
}