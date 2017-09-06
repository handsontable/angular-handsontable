import { Component, ElementRef, NgZone } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from 'angular-handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Use hooks to bind Handsontable to an outside component</h1>
      
      <h2>Set up a module</h2>
      <p>If you would like to use <code>ngModel</code> directive, you have to define
      <code>FormModule</code> first. It's necessary to import <code>FormModule</code> after
      <code>BrowserModule</code>.</p>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      
      <h2>Set up a component</h2>
      <p>Except the code responsible for all the logic behind your app, you need to add
        a <code>HotRegisterer</code> service to be able to register and control the Handsontable’s
        instance.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>

      <h2>Setup a template</h2>
      <p>When you use hook callback as binding, the context of method is your component. If you
        expect to get hook params, them all are in <code>$event</code> variable. EventEmitter could
        return only one variable and because of this, we decided to return <code>$event</code>
        as an array of params <code>[p1, p2, p3, p4, p5, p6]</code>.</p>
      <div class="infobox infobox-info">
        <p>Please note that only hooks defined inside the settings object can return <code>false</code>.</p>
      </div>
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
      <hot-table [colHeaders]="true" [rowHeaders]="true" hotId="hotInstance"
        (afterSelectionEnd)="syncSelection()"
        [outsideClickDeselects]="false" 
        [data]="data"></hot-table>

      <h2>Learn more:</h2>
      <ul>
        <li><a href="https://docs.handsontable.com/Hooks.html#events" target="_blank">Handsontable Hooks</a></li>
      </ul>

    </div>
  `
})
export class ExHooksComponent {
  instance: string = "hotInstance";
  data: any[] = Handsontable.helper.createSpreadsheetData(10, 10);
  coordX: string;
  coordY: string;
  newValue: string;

  constructor(private _ngZone: NgZone, private _hotRegisterer: HotRegisterer) {}

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

  syncSelection($event) {
    const hot = this._hotRegisterer.getInstance(this.instance);
    [this.coordY, this.coordX] = hot.getSelected();
    const x = parseInt(this.coordX, 10);
    const y = parseInt(this.coordY, 10);

    this.newValue = hot.getDataAtCell(y, x);
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
      ``,
      `  syncSelection() {`,
      `    const hot = this._hotRegisterer.getInstance(this.instance);`,
      `    [this.coordY, this.coordX] = hot.getSelected();`,
      `    const x = parseInt(this.coordX, 10);`,
      `    const y = parseInt(this.coordY, 10);`,
      ``,
      `    this.newValue = hot.getDataAtCell(y, x);`,
      ` }`,
      `}`,
    ].join('\n'),
    [
      `<input placeholder="Column" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordX">`,
      `<input placeholder="Row" type="number" min="0" (input)="selectCell($event)" [(ngModel)]="coordY">`,
      `<input placeholder="Set new value" (input)="changeValue($event)" [(ngModel)]="newValue">`,
      ``,
      `<hot-table [colHeaders]="true" [rowHeaders]="true"`,
      `  (afterSelectionEnd)="syncSelection()"`,
      `  [outsideClickDeselects]="false"`,
      `  hotId="hotInstance"></hot-table>`,
    ].join('\n'),
  ];
}