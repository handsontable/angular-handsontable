import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialization in a declarative way</h1>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-4 w QuickStart.</a></p>

      <h2>Component</h2>
      <p>Dodaj w komponencie <a href="https://docs.handsontable.com/Options.html" target="_blank">opcje Handsontable ${octicons['link-external'].toSVG()}</a>,
      które chcesz ustawić dla tabeli.</p>
      <div class="infobox infobox-info">
        <p>Własności zdefiniowane w ten sposób są śledzone przez Angular.<br/>
        Oznacza to, że zmiana ich wartości zostanie odzwierciedlona w Handsontable.</p>
      </div>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Template</h2>
      <p>Aby poprawnie wyświetlić Handsontable w komponencie, należy dodać tag <code>hot-table</code>.
        Obiekt ustawień przekazujemy do komponentu pod atrybutem <code>[settings]="settings"</code>.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>Result</h2>
      <p>
        <button md-raised-button (click)="colWidths=50">Change colWidths to 50</button>
        <button md-raised-button (click)="colWidths=100">Change colWidths to 100</button>
        </p>
      <hot-table height="250" [colWidths]="colWidths" [colHeaders]="colHeaders" [rowHeaders]="rowHeaders" [data]="data"></hot-table>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/examples/static-columns">Definiowanie statycznych kolumn.</a></p>
      <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
        ${octicons['link-external'].toSVG()}</a></p>
      <p><a md-raised-button href="https://angular.io/guide/template-syntax#property-binding--property-" rel="nofollow" target="_blank">Available binding methods
        ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class ExDeclarativeWayComponent {
  data: any[] = Handsontable.helper.createSpreadsheetData(25, 25);
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
      `  data: any[] = Handsontable.helper.createSpreadsheetData(25, 25);`,
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