import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-header">
      <h1>QuickStart</h1>
    </div>
    <div class="docs-content">
      <h1>Prepare Angular project</h1>
      <p>You need to create the Angular project first.</p>
      <p>To do this, you have to follow QuickStart instructions on the official Angular site.</p>
      <p>You can find it here: <a href="https://angular.io/guide/quickstart" rel="nofollow"><code>@angular/cli</code></a>.</p>
      
      <h1>Add <code>angular-handsontable</code> to package.json</h1>
      <p>Firstly you have to install wrapper via your favourit package manager</p>
      <docs-code [input]='example1'></docs-code>
      <p>Secondly it's necessary to load Handsontable before zone.js</p>
      <docs-code [input]='example2'></docs-code>
    </div>
  `
})
export class QuickStartComponent {
  example1: string = [
    'npm install --save-prod angular-handsontable',
    '// or',
    'yarn add angular-handsontable',
  ].join('\n');
  example2: string = [
    `import 'handsontable';`,
    `/*********************************************`,
    `* Zone JS is required by Angular itself.`,
    `*/`,
    `import 'zone.js/dist/zone';  // Included with Angular CLI.`,
  ].join('\n');
}