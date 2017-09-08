import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Bind Handsontable to a remote data source</h1>
      
      <h2>Setup a module</h2>
      <p>Add an <code>HttpClientModule</code> module to the main module to handle the asynchronous requests.</p>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Setup a component</h2>
      <p>Except for the code responsible for all the logic behind your app, you need to import
        an <code>HttpClient</code> class to be able to handle asynchronous requests from/to the server.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>

      <h2>Template</h2>
      <p>Define the options and their attributes as you like. Every change of the <code>data</code>
        attribute will result in loading a new set of data to the Handsontable instance (exactly
        the same as using <code>loadData()</code> manually).</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>

      <h2>The result</h2>
      <p>
        <button md-raised-button (click)="loadData()">Load data</button>
      </p>
      <p [hidden]="!isLoading">
        <md-progress-bar mode="indeterminate"></md-progress-bar>
      </p>
      <hot-table
        height="295"
        fixedColumnsLeft="1"
        startRows="15"
        colWidths="100"
        [settings]="settings"
        [rowHeaders]="true"
        [colHeaders]="true"
        [columns]="columns"
        [data]="data"></hot-table>
    </div>
  `
})
export class ExRemoteDataComponent {
  data: any[];
  columns: object[] = [
    {data: 'id', title: 'Id'},
    {data: 'airdate', title: 'AirDate'},
    {data: 'airtime', title: 'AirTime'},
    {data: 'name', title: 'Name', width: 200},
    {data: 'number', title: 'Number'},
    {data: 'runtime', title: 'Runtime'},
    {data: 'season', title: 'Season'},
    {data: 'summary', title: 'Summary', renderer: 'html', width: 800},
  ];
  settings: object = {
    afterLoadData: (firstLoad) => {
      if(!firstLoad) {
        this.isLoading = false;
      }
    },
  };
  isLoading: boolean = false;

  constructor(private _http: HttpClient) {}

  loadData() {
    this.isLoading = true;

    this._http.get(`//api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes`)
      .subscribe((res: Response) => {
        this.data = res['_embedded']['episodes'];
      });
  }

  examples: string[] = [
    [
      `import { BrowserModule } from '@angular/platform-browser';`,
      `import { NgModule } from '@angular/core';`,
      `import { HttpClientModule } from '@angular/common/http';`,
      `import { AppComponent } from './app.component';`,
      `import { HotTableModule } from 'angular-handsontable';`,
      ``,
      `@NgModule({`,
      `  declarations: [`,
      `    AppComponent`,
      `  ],`,
      `  imports: [`,
      `    BrowserModule,`,
      `    HttpClientModule,`,
      `    HotTableModule`,
      `  ],`,
      `  providers: [],`,
      `  bootstrap: [AppComponent]`,
      `})`,
      `export class AppModule { }`,
    ].join('\n'),
    [
      `import { Component } from '@angular/core';`,
      `import { HttpClient } from '@angular/common/http';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  data: any[];`,
      `  columns: object[] = [`,
      `    {data: 'id', title: 'Id'},`,
      `    {data: 'airdate', title: 'AirDate'},`,
      `    {data: 'airtime', title: 'AirTime'},`,
      `    {data: 'name', title: 'Name', width: 200},`,
      `    {data: 'number', title: 'Number'},`,
      `    {data: 'runtime', title: 'Runtime'},`,
      `    {data: 'season', title: 'Season'},`,
      `    {data: 'summary', title: 'Summary', renderer: 'html', width: 800},`,
      `  ];`,
      `  settings: object = {`,
      `    afterLoadData: (firstLoad) => {`,
      `      if(!firstLoad) {`,
      `        this.isLoading = false;`,
      `      }`,
      `    },`,
      `  };`,
      `  isLoading: boolean = false;`,
      ``,
      `  constructor(private _http: HttpClient) {}`,
      ``,
      `  loadData() {`,
      `    this.isLoading = true;`,
      ``,
      '    this._http.get(`//api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes`)',
      `      .subscribe((res: Response) => {`,
      `        this.data = res['_embedded']['episodes'];`,
      `      });`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<button (click)="loadData()">Load data</button>`,
      `<p [hidden]="!isLoading">Loading...</p>`,
      `<hot-table`,
      `  height="295"`,
      `  fixedColumnsLeft="1"`,
      `  startRows="15"`,
      `  colWidths="100"`,
      `  [settings]="settings"`,
      `  [rowHeaders]="true"`,
      `  [colHeaders]="true"`,
      `  [columns]="columns"`,
      `  [data]="data"></hot-table>`,
    ].join('\n'),
  ];
}