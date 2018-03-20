import { Component, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable-pro';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h2>Set up a template</h2>
      <p>You can observe data changes by setting on tag <code>hot-table</code> property <code>[observeChanges]="true"</code></p>
      <iframe class="stackblitz" style="min-height: 300px;"
      src="https://stackblitz.com/edit/angular-xvphjn-s9tzrw?embed=1&file=src/app/heroes/heroes.component.html
      &hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Set up a component</h2>
      <p>To see this feature it in action you need to define data for the table.</p>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/angular-xvphjn-s9tzrw?embed=1&file=src/app/heroes/heroes.component.ts&hideExplorer=1
        &hideNavigation=1&view=editor"></iframe>
      <div class="infobox infobox-info">
      <p>Enabling observeChanges switches table into one-way data binding where changes are applied into data source
      (from outside table) will be automatically reflected in the table.</p>
      </div>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;"
        src="https://stackblitz.com/edit/angular-xvphjn-s9tzrw?ctl=1&embed=1
        &hideExplorer=1
        &hideNavigation=1&view=preview&hideExplorer=1&hideNavigation=1"></iframe>

    </div>
  `
})
export class ExObserveChangesComponent {}
