import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  template: `
    <div class="docs-header">
      <h1>Hooks support</h1>
    </div>
    <div class="docs-content">
      <!--<docs-code lang="typescript" title="/src/app/app.module.ts" start='1' [input]="examples[0]"></docs-code>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[1]"></docs-code>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[2]"></docs-code>-->
      <h2>Result:</h2>
      <p>
        <button md-raised-button (click)="loadData()">Load data</button>
      </p>
      <hot-table
        height="500"
        fixedColumnsLeft="1" 
        [rowHeaders]="true"
        [colHeaders]="colHeaders"
        [dataSchema]="dataSchema"
        [data]="data"></hot-table>
    </div>
  `
})
export class ExRemoteDataComponent implements OnInit {
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

  constructor(private _http: HttpClient) {}

  ngOnInit() {

  }

  loadData() {
    this._http.get('http://services.odata.org/V3/Northwind/Northwind.svc/Invoices')
      .subscribe((res: Response) => {
        this.data = res['value'];
      });
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