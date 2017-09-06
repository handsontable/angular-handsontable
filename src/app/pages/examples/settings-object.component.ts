import { Component, ViewEncapsulation } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialization using a settings object</h1>

      <h2>Setup a component</h2>
      <p>You can control the spreadsheet by passing various options defining its style, behavior,
      plugins in use etc. To do that, create an object, in which you can place all the chosen options.</p>
      <p><a href="https://docs.handsontable.com/Options.html" target="_blank">See the complete list
      of options ${octicons['link-external'].toSVG()}</a>.</p>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>
      <div class="infobox infobox-info">
        <p>Please note that the changes in a settings object are not automatically observed and
        propagated to the spreadsheet. If you use a dynamic option then you should implement this
        component by using bindings.</p>
      </div>

      <h2>Setup a template</h2>
      <p>To display Handsontable, you need to add a <code>hot-table</code> element in your template file. To set
      the options for Handsontable, pass a <code>[settings]="settings"</code> attribute to the
      newly created element.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>The result</h2>
      <hot-table height="249" [settings]="settings"></hot-table>

    </div>
  `
})
export class ExSettingsObjectComponent {
  settings = {
    data: Handsontable.helper.createSpreadsheetData(25, 50),
    colHeaders: true,
    rowHeaders: true,
  };

  examples: string[] = [
    [
      `import { Component } from '@angular/core';`,
      `import Handsontable from 'handsontable';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  settings = {`,
      `    data: Handsontable.helper.createSpreadsheetData(25, 50),`,
      `    colHeaders: true,`,
      `    rowHeaders: true,`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<hot-table [settings]="settings"></hot-table>`,
    ].join('\n'),
  ];
}