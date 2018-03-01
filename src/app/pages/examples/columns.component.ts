import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Define columns using component</h1>

      <h2>Setup a component</h2>
      <p>Define an array of objects containing a configuration of particular columns.</p>
      <iframe class="stackblitz" style="min-height: 500px;"
        src="https://stackblitz.com/edit/handsontable-angular-columns?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Setup a template</h2>
      <p>You can bind controls in an HTML template to properties of the component by using
      a directive called <code>*ngFor</code>. In the example below, we use it to dynamically change
      the number of columns displayed in a spreadsheet.</p>
      <iframe class="stackblitz" style="min-height: 250px;"
        src="https://stackblitz.com/edit/handsontable-angular-columns?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 500px;"
        src="https://stackblitz.com/edit/handsontable-angular-columns?ctl=1&embed=1
        &hideExplorer=1&hideNavigation=1&view=preview"></iframe>
    </div>
  `
})
export class ExColumnsComponent {}
