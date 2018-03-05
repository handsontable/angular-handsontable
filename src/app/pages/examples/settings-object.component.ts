import { Component, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable-pro';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialization using a settings object</h1>

      <h2>Set up a component</h2>
      <p>You can control the spreadsheet by passing various options defining its style, behavior,
      plugins in use etc. To do that, create an object, in which you can place all the chosen options.</p>
      <p><a href="https://docs.handsontable.com/Options.html" target="_blank">See the complete list
      of options ${octicons['link-external'].toSVG()}</a>.</p>
      <iframe class="stackblitz" style="min-height: 400px;"
        src="https://stackblitz.com/edit/handsontable-angular-settings-object?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>
      <div class="infobox infobox-info">
      <p>Please note that the changes in the settings object are not automatically observed and propagated to the spreadsheet.
        If you use a dynamic option then you should implement this component using bindings.</p>
      </div>

      <h2>Set up a template</h2>
      <p>To display Handsontable, you need to add a <code>hot-table</code> element in your template file. To set
      the options for Handsontable, pass a <code>[settings]="settings"</code> attribute to the
      newly created element.</p>
      <iframe class="stackblitz" style="min-height: 150px;"
        src="https://stackblitz.com/edit/handsontable-angular-settings-object?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/handsontable-angular-settings-object?ctl=1&embed=1
        &hideExplorer=1&hideNavigation=1&view=preview"></iframe>

    </div>
  `
})
export class ExSettingsObjectComponent {}
