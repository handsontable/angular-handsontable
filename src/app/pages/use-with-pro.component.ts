import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Use with Handsontable Pro</h1>
      <h2 id="prepare-project">Step 1. Set up the development environment</h2>
      <p>If you are new to Angular, then the easiest way to set up your project is to read
      <a href="https://angular.io/guide/quickstart" rel="nofollow">this guide ${octicons['link-external'].toSVG()}</a>,
      which is a part of official documentation of Angular. When your app is properly configured,
      move forward to step 2.</p>

      <h2 id="install-wrapper">Step 2. Add the wrapper to your project</h2>
      <p>Although there are many ways to install this wrapper, we recommend using the most popular,
      which is npm/yarn:</p>
      <p><strong>npm</strong></p>
      <app-docs-code lang='bash' input='npm install @handsontable-pro/angular handsontable-pro'></app-docs-code>
      <p><strong>yarn</strong></p>
      <app-docs-code lang='bash' input='yarn add @handsontable-pro/angular handsontable-pro'></app-docs-code>

      <h2 id="add-wrapper-in-module">Step 3. Import a wrapper</h2>
      <p>Import the wrapper module to your application by importing it into your main module.</p>
      <iframe class="stackblitz" style="min-height: 300px;" src="https://stackblitz.com/edit/handsontable-pro-angular?embed=1
        &file=app/app.module.ts&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2 id="use-wrapper-in-template">Step 4. Add CSS styles</h2>
      <p>You can import predefined Handsontable styles, directly from the npm package.</p>
      <iframe class="stackblitz" src="https://stackblitz.com/edit/handsontable-pro-angular?embed=1
        &file=styles.css&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2 id="use-wrapper-in-template">Step 5. Add an HTML tag</h2>
      <p>Place an HTML tag in the component file <code>src/app/app.component.html</code> to
      initialize Handsontable.</p>
      <iframe class="stackblitz" style="min-height: 300px;" src="https://stackblitz.com/edit/handsontable-pro-angular?embed=1
        &file=app/app.component.html&hideExplorer=1&hideNavigation=1&view=editor"></iframe>

      <h2 id="it-works">The result</h2>
      <iframe class="stackblitz" style="min-height: 600px;" src="https://stackblitz.com/edit/handsontable-pro-angular?ctl=1&embed=1
        &file=app/app.module.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>
    </div>
  `
})
export class UseWithProComponent { }
