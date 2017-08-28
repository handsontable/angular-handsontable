import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-content">
      <h1>Dynamic use of <code>&lt;hot-column&gt;</code> element</h1>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result:</h2>
      <p>
        <button md-raised-button (click)="addColumn()">Add column</button>
        <button md-raised-button (click)="removeColumn()">Remove column</button>
      </p>
      <hot-table>
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
      `import { BrowserModule } from '@angular/platform-browser';`,
      `import { NgModule } from '@angular/core';`,
      `import { AppComponent } from './app.component';`,
      `import { HotTableModule } from 'angular-handsontable';`,
      ``,
      `@NgModule({`,
      `  declarations: [`,
      `    AppComponent`,
      `  ],`,
      `  imports: [`,
      `    BrowserModule,`,
      `    HotTableModule`,
      `  ],`,
      `  providers: [],`,
      `  bootstrap: [AppComponent]`,
      `})`,
      `export class AppModule { }`,
    ].join('\n'),
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