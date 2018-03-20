import { Component, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable-pro';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h2>Set up a template</h2>
      <p>Define table by tag <code>hot-table</code> with <code>[settings]</code> object.</p>
      <iframe class="stackblitz" style="min-height: 50px;"
        src="https://stackblitz.com/edit/angular-handsontable-custom-renderer?embed=1&file=app/app.component.html
        &hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Set up a component</h2>
      <p>Then create settings object with renderer property for columns.</p>
      <iframe class="stackblitz" style="min-height: 600px;"
      src="https://stackblitz.com/edit/angular-handsontable-custom-renderer?embed=1&file=app/app.component.ts
      &hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/angular-handsontable-custom-renderer?embed=1
        &file=app/app.component.ts&view=preview&hideExplorer=1&hideNavigation=1"></iframe>

    </div>
  `
})
export class ExCustomRendererComponent {}
