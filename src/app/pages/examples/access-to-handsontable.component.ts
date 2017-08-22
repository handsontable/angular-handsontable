import { Component, ViewChild, ElementRef } from '@angular/core';
import { HotRegisterer } from 'angular-handsontable/src/hot-registerer.service';

@Component({
  template: `
    <div class="docs-header">
      <h1>Access to Handsontable instance</h1>
    </div>
    <div class="docs-content">
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result:</h2>
      <p>
        <md-input-container>
          <input mdInput placeholder="column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="new value" (input)="changeValue($event)" [(ngModel)]="newValue">
        </md-input-container>
      </p>
      <hot-table width="300" height="200" [outsideClickDeselects]="false" hotId="hotInstance"></hot-table>
    </div>
  `
})
export class ExAccessToHandsontableComponent {
  instance: string = "hotInstance";
  coordX: string;
  coordY: string;
  newValue: string;

  constructor(private _hotRegisterer: HotRegisterer) {}

  selectCell($event) {
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);
    const hot = this._hotRegisterer.getInstance(this.instance);

    if (isNaN(x) || isNaN(y)) {
      hot.deselectCell();
      return false;
    }

    if (hot.selectCell(y, x)) {
      $event.target.focus();
      
    } else {
      hot.deselectCell();
    }

    hot.unlisten();
  }

  changeValue($event) {
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);
    
    if (isNaN(x) || isNaN(y)) {
      return false;
    }

    const hot = this._hotRegisterer.getInstance(this.instance);

    hot.setDataAtCell(y, x, $event.target.value);
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
      `import { HotRegisterer } from 'angular-handsontable/src/hot-registerer.service';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  instance: string = "hotInstance";`,
      `  coordX: string;`,
      `  coordY: string;`,
      `  newValue: string;`,
      ``,
      `  constructor(private _hotRegisterer: HotRegisterer) {}`,
      ``,
      `  selectCell($event) {`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      ``,
      `    if (isNaN(x) || isNaN(y)) {`,
      `      hot.deselectCell();`,
      `      return false;`,
      `    }`,
      ``,
      `    if (hot.selectCell(y, x)) {`,
      `      $event.target.focus();`,
      ``,
      `    } else {`,
      `      hot.deselectCell();`,
      `    }`,
      `  `,
      `    hot.unlisten();`,
      `  }`,
      ``,
      `  changeValue($event) {`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      ``,
      `    if (isNaN(x) || isNaN(y)) {`,
      `      return false;`,
      `    }`,
      ``,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      ``,
      `    hot.setDataAtCell(y, x, $event.target.value);`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<input placeholder="column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">`,
      `<input placeholder="row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">`,
      `<input placeholder="new value" (input)="changeValue($event)" [(ngModel)]="newValue">`,
      ``,
      `<hot-table width="300" height="200" [outsideClickDeselects]="false" hotId="hotInstance"></hot-table>`,
    ].join('\n'),
  ];
}