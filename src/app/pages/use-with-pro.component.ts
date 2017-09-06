import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Use with Handsontable Pro</h1>
      <h2>Install handsontable-pro</h2>
      <p>Follow <a href="https://my.handsontable.com/install.html" target="_blank">these instructions ${octicons['link-external'].toSVG()}</a>
      to install the handsontable-pro package.</p>

      <h2>Setup the CSS</h2>
      <p>You can import the styles directly from the <code>handsontable-pro</code> package.</p>
      <docs-code lang='css' title="/src/styles.css" input="@import '~handsontable-pro/dist/handsontable.full.css';"></docs-code>

      <h2>Modify the <code>tsconfig.json</code> file</h2>
      <p>Set <code>paths</code> in <code>compilerOptions</code>, as presented below.</p>
      <docs-code start="19" title="/tsconfig.json" [input]="example"></docs-code>
    </div>
  `
})
export class UseWithProComponent {
  example: string = [
    `"paths": {`,
    `  "handsontable": ["../node_modules/handsontable-pro/dist/handsontable.js"]`,
    `}`,
  ].join('\n');

}
