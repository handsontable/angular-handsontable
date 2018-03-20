import { Component, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable-pro';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h2>Set up a template</h2>
      <p>Define 2 tables to tests context menu actions across two instances of <code>hot-table</code> property.</p>
      <iframe class="stackblitz" style="min-height: 300px;"
      src="https://stackblitz.com/edit/angular-handsontable-issue-28?embed=1&file=app/app.component.html
      &hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Set up a component</h2>
      <p>To see this feature it in action you need to make right-click on cell.</p>
      <iframe class="stackblitz" style="min-height: 400px;"
        src="https://stackblitz.com/edit/angular-handsontable-issue-28
        ?embed=1&file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor">
      </iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/angular-handsontable-issue-28
        ?embed=1&file=app/app.component.ts&view=preview&hideExplorer=1&hideNavigation=1"></iframe>

    </div>
  `
})
export class ExContextMenuComponent {}
