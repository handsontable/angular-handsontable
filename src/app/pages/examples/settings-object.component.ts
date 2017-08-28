import { Component, ViewEncapsulation } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialization by settings object</h1>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result:</h2>
      <hot-table [settings]="settings"></hot-table>
    </div>
  `
})
export class ExSettingsObjectComponent {
  settings = {
    data: Handsontable.helper.createSpreadsheetData(10, 20),
    colHeaders: true,
    rowHeaders: true,
  };

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
      `  settings = {`,
      `    data: Handsontable.helper.createSpreadsheetData(10, 20),`,
      `    colHeaders: true,`,
      `    rowHeaders: true,`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<hot-table [settings]="settings"></hot-table>`,
    ].join('\n'),
  ];
}