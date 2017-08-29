import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1><code>angular-handsontable</code> with external source data</h1>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-3 w QuickStart.</a></p>
      
      <h2>Module</h2>
      <p>Oprócz wrappera dodaj do głównego modułu <code>HttpClientModule</code> by obsłużyć asynchroniczne żądania.</p>
      <docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Component</h2>
      <p>Oprócz zdefiniowania zmiennych potrzebnych do interakcji, potrzebujesz również dodać <code>HttpClient</code>.
        Dzięki niemu jest możliwe jest wysyłanie asynchronicznych żądań do serwera.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>

      <h2>Template</h2>
      <p>Zdefiniuj niezbędne atrybuty. Każda zmiana atrybutu <code>data</code> będzie ładowała
      do Handsontable nowy zestaw danych.Zupełnie jak przy ręcznym wykonywaniu
      <a href="https://docs.handsontable.com/Core.html#loadData" target="_blank"><code>loadData</code>${octicons['link-external'].toSVG()}</a></p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>

      <h2>Result</h2>
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
      <h2>Następne kroki</h2>
        <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
          ${octicons['link-external'].toSVG()}</a></p>
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

    this._http.get(`http://services.odata.org/V3/Northwind/Northwind.svc/Invoices`)
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
      '    this._http.get(`http://services.odata.org/V3/Northwind/Northwind.svc/Invoices`)',
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