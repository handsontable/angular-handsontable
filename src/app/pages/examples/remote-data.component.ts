import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Bind Handsontable to a remote data source</h1>

      <h2>Setup a module</h2>
      <p>Add an <code>HttpClientModule</code> module to the main module to handle the asynchronous requests.</p>
      <iframe class="stackblitz" style="min-height: 500px;"
        src="https://stackblitz.com/edit/handsontable-angular-remote-data?embed=1
        &file=app/app.module.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Setup a service</h2>
      <p>Except for the code responsible for all the logic behind your app, you need to import
        an <code>HttpClient</code> class to be able to handle asynchronous requests from/to the server.</p>
      <iframe class="stackblitz" style="min-height: 350px;"
        src="https://stackblitz.com/edit/handsontable-angular-remote-data?embed=1
        &file=app/app.service.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Setup a component</h2>
      <p>Add properties what do you need and load data using service.</p>
      <iframe class="stackblitz" style="min-height: 1100px;"
        src="https://stackblitz.com/edit/handsontable-angular-remote-data?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Template</h2>
      <p>Define the options and their attributes as you like. Every change of the <code>data</code>
        attribute will result in loading a new set of data to the Handsontable instance (exactly
        the same as using <code>loadData()</code> manually).</p>
      <iframe class="stackblitz" style="min-height: 300px;"
        src="https://stackblitz.com/edit/handsontable-angular-remote-data?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/handsontable-angular-remote-data?ctl=1&embed=1
        &hideExplorer=1&hideNavigation=1&view=preview"></iframe>
    </div>
  `
})
export class ExRemoteDataComponent {}
