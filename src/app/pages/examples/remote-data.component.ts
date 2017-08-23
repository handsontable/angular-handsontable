import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  template: `
    <div class="docs-header">
      <h1>Remote data</h1>
    </div>
    <div class="docs-content">
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>
      <h2>Result:</h2>
      <p>
        <button md-raised-button (click)="loadData()">Load data</button>
      </p>
      <p [hidden]="!isLoading">
        <md-progress-bar mode="indeterminate"></md-progress-bar>
      </p>
      <hot-table
        height="500"
        fixedColumnsLeft="1"
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
  urlSufix: string = 'Invoices';
  isLoading: boolean = false;

  constructor(private _http: HttpClient) {}

  loadData() {
    this.isLoading = true;

    this._http.get(`http://services.odata.org/V3/Northwind/Northwind.svc/${this.urlSufix}`)
      .subscribe((res: Response) => {
        this.data = res['value'];
        this.urlSufix = res['odata.nextLink'] || 'Invoices';
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
      `  urlSufix: string = 'Invoices';`,
      `  isLoading: boolean = false;`,
      ``,
      `  constructor(private _http: HttpClient) {}`,
      ``,
      `  loadData() {`,
      `    this.isLoading = true;`,
      ``,
      '    this._http.get(`http://services.odata.org/V3/Northwind/Northwind.svc/${this.urlSufix}`)',
      `      .subscribe((res: Response) => {`,
      `        this.data = res['value'];`,
      `        this.urlSufix = res['odata.nextLink'] || 'Invoices';`,
      `      });`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<button (click)="loadData()">Load data</button>`,
      `<p [hidden]="!isLoading">`,
      `  <md-progress-bar mode="indeterminate"></md-progress-bar>`,
      `</p>`,
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