import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Quick start</h1>
      <h2 id="prepare-project">Step 1. Set up the development environment</h2>
      <p>If you are new to Angular, then the easiest way to set up your project is to read
      <a href="https://angular.io/guide/quickstart" rel="nofollow">this guide ${octicons['link-external'].toSVG()}</a>,
      which is a part of official documentation of Angular. When your app is properly configured,
      move forward to step 2.</p>

      <h2 id="install-wrapper">Step 2. Add angular-handsontable to the project</h2>
      <p>Although there are many ways to install this wrapper, we recommend using the most popular,
      which is npm/yarn:</p>
      <p><strong>npm</strong></p>
      <docs-code lang='bash' input='npm install angular-handsontable'></docs-code>
      <p><strong>yarn</strong></p>
      <docs-code lang='bash' input='yarn add angular-handsontable'></docs-code>

      <h2 id="zonejs-workaround">Step 3. Import Handsontable before Zone.js</h2>
      <div class="infobox infobox-warning">
        <p>This is quite unfortunate, but you need to import Handsontable before Zone.js.</p>
        <p>There is a conflict between those two when accessing <code>window.Promise</code>.</p>
      </div>
      <docs-code start='49' title="/src/polyfills.ts" [input]='example3'></docs-code>

      <h2 id="add-wrapper-in-module">Step 4. Import a wrapper</h2>
      <p>Add an angular-handsontable wrapper to your application by importing it as a dependency.</p>
      <docs-code input="import { HotTableModule } from 'angular-handsontable';"></docs-code>
      <p>Place that statement below the BrowserModule class like in the following example of file
      <code>app.module.ts</code>:</p>
      <docs-code start='1' title="/src/app/app.module.ts"  [input]='example4'></docs-code>

      <h2 id="use-wrapper-in-template">Step 5. Add CSS styles</h2>
      <p>You can import predefined Handsontable styles, directly from the npm package.</p>
      <docs-code start='1' title="/src/styles.css" lang="css" [input]="example5"></docs-code>

      <h2 id="use-wrapper-in-template">Step 6. Add an HTML tag</h2>
      <p>Place an HTML tag in the component file <code>src/app/app.component.html</code> to
      initialize Handsontable.</p>
      <docs-code start='1' title="/src/app/app.component.html" lang="html" [input]="example6"></docs-code>

      <h2 id="it-works">The result</h2>
      <hot-table [colHeaders]="true" [rowHeaders]="true"></hot-table>

      <h2>Learn more</h2>
      <ul>
        <li><a href="https://docs.handsontable.com/Options.html" target="_blank">Settings in Handsontable
          ${octicons['link-external'].toSVG()}</a></li>
      </ul>
    </div>
  `
})
export class QuickStartComponent {
  example3: string = [
    ``,
    `import 'handsontable';`,
    ``,
    `/*********************************************************`,
    `* Zone JS is required by Angular itself.`,
    `*/`,
    `import 'zone.js/dist/zone';  // Included with Angular CLI.`,
    ` `,
  ].join('\n');

  example4: string = [
    `import { BrowserModule } from '@angular/platform-browser';`,
    `import { NgModule } from '@angular/core';`,
    `import { AppComponent } from './app.component';`,
    `import { HotTableModule } from 'angular-handsontable';`,
    ``,
    `@NgModule({`,
    `  declarations: [`,
    `    AppComponent`,
    `  ],`,
    `  imports: [`,
    `    BrowserModule,`,
    `    HotTableModule`,
    `  ],`,
    `  providers: [],`,
    `  bootstrap: [AppComponent]`,
    `})`,
    `export class AppModule { }`,
  ].join('\n');

  example5: string = [`@import '~handsontable/dist/handsontable.full.css';`].join('\n');
  example6: string = [`<hot-table></hot-table>`].join('\n');
  
}