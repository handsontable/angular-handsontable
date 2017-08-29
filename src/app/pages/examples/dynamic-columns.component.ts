import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Dynamic use of <code>&lt;hot-column&gt;</code> element</h1>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-4 w QuickStart.</a></p>
      
      <h2>Component</h2>
      <p>Zdefiniuj tablicę obiektów, zawierających konfigurację kolumn.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Template</h2>
      <p>Korzystając z <code>*ngFor</code> możesz dynamicznie zmieniać liczbę wyświetlanych kolumn.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>Result</h2>
      <p>
        <button md-raised-button (click)="addColumn()">Add column</button>
        <button md-raised-button (click)="removeColumn()">Remove column</button>
      </p>
      <hot-table>
        <hot-column *ngFor="let column of columns"></hot-column>
      </hot-table>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/examples/access-to-handsontable">Dostęp do instancji Handsontable.</a></p>
      <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
        ${octicons['link-external'].toSVG()}</a></p>
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