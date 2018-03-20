import { Component, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable-pro';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h2>Set up a component with template</h2>
      <p>Simple custom editor can be made by extending <code>Handsontable.editors.TextEditor</code></p>
      <iframe class="stackblitz" style="min-height: 600px;"
      src="https://stackblitz.com/edit/angular-handsontable-custom-editor?embed=1
      &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <p>Click on cell in second column to see that our Custom Editor is working.</p>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/angular-handsontable-custom-editor?embed=1&file=app/app.component.ts
        &view=preview&hideExplorer=1&hideNavigation=1"></iframe>

    </div>
  `
})
export class ExCustomEditorComponent {}
