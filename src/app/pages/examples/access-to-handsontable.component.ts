import { Component, ViewChild, ElementRef } from '@angular/core';
import { HotRegisterer } from 'angular-handsontable/index';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Access the Handsontable instance</h1>

      <h2>Setup a module</h2>
      <p>If you would like to use <code>ngModel</code> directive, you have to define
      <code>FormModule</code> first. It's necessary to import <code>FormModule</code> after
      <code>BrowserModule</code>.</p>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      
      <h2>Set up a component</h2>
      <p>Except for the code responsible for all the logic behind your app, you need to add
      a <code>HotRegisterer</code> service to be able to register and control the Handsontable’s instance.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      
      <h2>Set up a template</h2>
      <p>To register an instance in a <code>HotRegisterer</code> service you need to define
      a <code>hotId</code> value. Your Handsontable instance will be registered using that ID.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>

      <h2>The result</h2>
      <p>
        <md-input-container>
          <input mdInput placeholder="Column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="Row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">
        </md-input-container>
        <md-input-container>
          <input mdInput placeholder="Set new value" (input)="changeValue($event)" [(ngModel)]="newValue">
        </md-input-container>
      </p>
      <hot-table [colHeaders]="true" [rowHeaders]="true" [outsideClickDeselects]="false" hotId="hotInstance"></hot-table>
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
      `import { FormsModule } from '@angular/forms';`,
      `import { AppComponent } from './app.component';`,
      `import { HotTableModule } from 'angular-handsontable';`,
      ``,
      `@NgModule({`,
      `  declarations: [`,
      `    AppComponent`,
      `  ],`,
      `  imports: [`,
      `    BrowserModule,`,
      `    FormsModule,`,
      `    HotTableModule`,
      `  ],`,
      `  providers: [],`,
      `  bootstrap: [AppComponent]`,
      `})`,
      `export class AppModule { }`,
    ].join('\n'),
    [
      `import { Component } from '@angular/core';`,
      `import { HotRegisterer } from 'angular-handsontable';`,
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
      `<input placeholder="Column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">`,
      `<input placeholder="Row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">`,
      `<input placeholder="Set new value" (input)="changeValue($event)" [(ngModel)]="newValue">`,
      ``,
      `<hot-table [colHeaders]="true" [rowHeaders]="true" [outsideClickDeselects]="false" hotId="hotInstance"></hot-table>`,
    ].join('\n'),
  ];
}