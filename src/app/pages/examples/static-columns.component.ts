import { Component } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  template: `
    <div class="docs-content">
      <h1><code>&lt;hot-column&gt;</code> elements defined statically</h1>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result:</h2>
      <hot-table height="250" [data]="data">
        <hot-column></hot-column>
        <hot-column></hot-column>
        <hot-column></hot-column>
        <hot-column></hot-column>
        <hot-column></hot-column>
        <hot-column></hot-column>
        <hot-column></hot-column>
      </hot-table>
    </div>
  `
})
export class ExStaticColumnsComponent {
  data: any[] = Handsontable.helper.createSpreadsheetData(25, 25);

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
      `  data: Handsontable.helper.createSpreadsheetData(10, 20),`,
      `}`,
    ].join('\n'),
    [
      `<hot-table height="250" [data]="data">`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `  <hot-column></hot-column>`,
      `</hot-table>`,
    ].join('\n'),
  ];
}