import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialize Handsontable by using bindings.</h1>

      <h2>Setup a component</h2>
      <p>Control Handsontable by binding properties in the template in a declarative way.
      <a href="https://docs.handsontable.com/Options.html" target="_blank">Explore the list of
      available options ${octicons['link-external'].toSVG()}</a> and move forward to configuring
      Handsontable.</p>
      <div class="infobox infobox-info">
        <p>Please note that the changes in the bindings are being observed and automatically propagated to the spreadsheet.</p>
      </div>
      <iframe class="stackblitz" style="min-height: 300px;"
        src="https://stackblitz.com/edit/handsontable-angular-bindings?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Setup a template</h2>
      <p>To display Handsontable, you need to place each attribute separately inside a particular tag.</p>
      <iframe class="stackblitz" style="min-height: 250px;"
        src="https://stackblitz.com/edit/handsontable-angular-bindings?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/handsontable-angular-bindings?ctl=1&embed=1
        &hideExplorer=1&hideNavigation=1&view=preview"></iframe>
    </div>
  `
})
export class ExDeclarativeWayComponent {}
