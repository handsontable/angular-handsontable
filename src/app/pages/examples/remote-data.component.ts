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
      <p>Except the code responsible for all the logic behind your app, you need to import
        an <code>HttpClient</code> class to be able to handle asynchronous requests from/to the server.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>

      <h2>Template</h2>
      <p>ZDefine the options and their attributes as you like. Every change of the <code>data</code>
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
        height="300"
        fixedColumnsLeft="1"
        startRows="15"
        [settings]="settings"
        [rowHeaders]="true"
        [colHeaders]="colHeaders"
        [dataSchema]="dataSchema"
        [data]="data"></hot-table>
      
    </div>
  `
})
export class ExRemoteDataComponent {
  data: any[];
  dataSchema: object = {
    "ShipName": null,
    "ShipAddress": null,
    "ShipCity": null,
    "ShipRegion": null,
    "ShipPostalCode": null,
    "ShipCountry": null,
    "CustomerID": null,
    "CustomerName": null,
    "Address": null,
    "City": null,
    "Region": null,
    "PostalCode": null,
    "Country": null,
    "Salesperson": null,
    "OrderID": null,
    "OrderDate": null,
    "RequiredDate": null,
    "ShippedDate": null,
    "ShipperName": null,
    "ProductID": null,
    "ProductName": null,
    "UnitPrice": null,
    "Quantity": null,
    "Discount": null,
    "ExtendedPrice": null,
    "Freight": null
  };
  colHeaders: string[] = Object.keys(this.dataSchema);
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

    this._http.get(`//services.odata.org/V3/Northwind/Northwind.svc/Invoices`)
      .subscribe((res: Response) => {
        this.data = res['value'];
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
      `  dataSchema: object = {`,
      `    "ShipName": null,`,
      `    "ShipAddress": null,`,
      `    "ShipCity": null,`,
      `    "ShipRegion": null,`,
      `    "ShipPostalCode": null,`,
      `    "ShipCountry": null,`,
      `    "CustomerID": null,`,
      `    "CustomerName": null,`,
      `    "Address": null,`,
      `    "City": null,`,
      `    "Region": null,`,
      `    "PostalCode": null,`,
      `    "Country": null,`,
      `    "Salesperson": null,`,
      `    "OrderID": null,`,
      `    "OrderDate": null,`,
      `    "RequiredDate": null,`,
      `    "ShippedDate": null,`,
      `    "ShipperName": null,`,
      `    "ProductID": null,`,
      `    "ProductName": null,`,
      `    "UnitPrice": null,`,
      `    "Quantity": null,`,
      `    "Discount": null,`,
      `    "ExtendedPrice": null,`,
      `    "Freight": null`,
      `  };`,
      `  colHeaders: string[] = Object.keys(this.dataSchema);`,
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
      '    this._http.get(`//services.odata.org/V3/Northwind/Northwind.svc/Invoices`)',
      `      .subscribe((res: Response) => {`,
      `        this.data = res['value'];`,
      `      });`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<button (click)="loadData()">Load data</button>`,
      `<p [hidden]="!isLoading">Loading...</p>`,
      `<hot-table`,
      `  height="500"`,
      `  fixedColumnsLeft="1"`,
      `  [settings]="settings"`,
      `  [rowHeaders]="true"`,
      `  [colHeaders]="colHeaders"`,
      `  [dataSchema]="dataSchema"`,
      `  [data]="data"></hot-table>`,
    ].join('\n'),
  ];
}