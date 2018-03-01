import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  template: `
    <div class="docs-content">
      <h1>Access the Handsontable instance</h1>

      <h2>Set up a component</h2>
      <p>Except for the code responsible for all the logic behind your app, you need to add
      a <code>HotTableRegisterer</code> service to be able to register and control the Handsontable’s instance.</p>
      <iframe class="stackblitz" style="min-height: 550px;"
        src="https://stackblitz.com/edit/handsontable-angular-access-to-handsontable?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Set up a template</h2>
      <p>To register an instance in a <code>HotTableRegisterer</code> service you need to define
      a <code>hotId</code> value. Your Handsontable instance will be registered using that ID.</p>
      <iframe class="stackblitz" style="min-height: 300px;"
        src="https://stackblitz.com/edit/handsontable-angular-access-to-handsontable?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 500px;"
        src="https://stackblitz.com/edit/handsontable-angular-access-to-handsontable?ctl=1&embed=1
        &hideExplorer=1&hideNavigation=1&view=preview"></iframe>
    </div>
  `
})
export class ExAccessToHandsontableComponent {}
