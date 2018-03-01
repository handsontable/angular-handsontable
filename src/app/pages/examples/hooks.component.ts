import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Use hooks to bind Handsontable to an outside component</h1>

      <h2>Set up a component</h2>
      <p>Except for the code responsible for all the logic behind your app, you need to add
        a <code>HotTableRegisterer</code> service to be able to register and control the Handsontable’s
        instance.</p>
      <iframe class="stackblitz" style="min-height: 650px;"
        src="https://stackblitz.com/edit/handsontable-angular-hooks?embed=1
        &file=app/app.component.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>Setup a template</h2>
      <p>When you use hook callback as binding, the context of the method is your component. If you
        expect to get hook params, they all are in <code>$event</code> variable. EventEmitter could
        return only one variable and because of this, we decided to return <code>$event</code>
        as a object with reference to the Handsontable instance and an array of params <code>[p1, p2, p3, p4, p5, p6]</code>.</p>
      <div class="infobox infobox-info">
        <p>Please note that only hooks defined inside the settings object can return <code>false</code>.</p>
      </div>
      <iframe class="stackblitz" style="min-height: 300px;"
        src="https://stackblitz.com/edit/handsontable-angular-hooks?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2>The result</h2>
      <iframe class="stackblitz" style="min-height: 550px;"
        src="https://stackblitz.com/edit/handsontable-angular-hooks?ctl=1
        &embed=1&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

      <h2>Learn more:</h2>
      <ul>
        <li><a href="https://docs.handsontable.com/Hooks.html#events" target="_blank">Handsontable Hooks
          ${octicons['link-external'].toSVG()}</a></li>
      </ul>

    </div>
  `
})
export class ExHooksComponent {}
