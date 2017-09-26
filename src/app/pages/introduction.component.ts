import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <div class="infobox infobox-info">
        <h2>Latest version <strong>1.0.0-beta3</strong>, released on <strong>September 26th, 2017</strong></h2>
        <p>Compatible with Handsontable Community Edition v0.34.4 and Pro v1.14.2</p>
        <p>Requirements:</p>
        <ul>
          <li><code>node</code> v6.9.0+</li>
          <li><code>npm</code> v3.0.0+</li>
          <li><code>typescript</code> v2.2.0+</li>
          <li><code>@angular/cli</code> v1.1.0+</li>
        </ul>
      </div>
      <h2>Getting started</h2>
      <p><a href="https://handsontable.com/" target="_blank" title="JavaScript Spreadsheet Library">
      Handsontable ${octicons['link-external'].toSVG()}</a> is a spreadsheet component for web apps.
      This wrapper for Angular offers the same scope of features as a pure version of Handsontable,
      so it’s a perfect match for all of your Angular-based apps in which a spreadsheet component
      is required.</p>
      <p>Follow links below to learn more about the installation process:</p>
      <ul>
        <li><a routerLink="/quick-start" fragment="prepare-project">Setting up the environment</a></li>
        <li><a routerLink="/quick-start" fragment="install-wrapper">Installing and use</a></li>
      </ul>

      <h2>Why should I use it?</h2>
      <p>First and foremost, it will cut the development time of your app. By using this wrapper,
      you don’t have to worry about the compatibility issues, and if you stumble across one, you
      can easily make a <a href="https://github.com/handsontable/angular-handsontable/compare" target="_blank">pull
      request ${octicons['link-external'].toSVG()}</a> with a solution or
      <a href="https://github.com/handsontable/angular-handsontable/issues/new" target="_blank">
      report it on GitHub ${octicons['link-external'].toSVG()}</a>. For less experienced developers,
      we prepared a series of examples - from basic implementations to much more advanced setups.</p>

      <h2>Examples</h2>
      <ul>
        <li><a routerLink="/examples/settings-object">Initialization using a settings object</a></li>
        <li><a routerLink="/examples/declarative-way">Initialize Handsontable by using bindings</a></li>
        <li><a routerLink="/examples/static-columns">Define static columns using tags</a></li>
        <li><a routerLink="/examples/dynamic-columns">Define dynamic columns using a *ngFor loop</a></li>
        <li><a routerLink="/examples/access-to-handsontable">Access the Handsontable instance</a></li>
        <li><a routerLink="/examples/hooks">Use hooks to bind Handsontable with an outside component</a></li>
        <li><a routerLink="/examples/remote-data">Bind Handsontable with a remote data source</a></li>
      </ul>

      <h2>Contributing</h2>
      <p>Everyone is welcome to contribute to this open source project. If you feel that something needs to be tweaked or fixed, let us know.</p>
      <ul>
        <li><a routerLink="/support">Become a contributor</a></li>
        <li><a href="https://github.com/handsontable/angular-handsontable/issues/new" target="_blank">Report an issue ${octicons['link-external'].toSVG()}</a></li>
      </ul>

      <h2>Copyright and license</h2>
      <ul>
        <li>Handsontable Community Edition is released under the <a routerLink="/license">MIT license</a>. Copyrights belong to Handsoncode sp. z o.o.</li>
        <li>angular-handsontable is released under the <a routerLink="/license">MIT license</a>. Copyrights belong to Handsoncode sp. z o.o.</li>
        <li>Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0 ${octicons['link-external'].toSVG()}</a>.</li>
      </ul>

      <h2>Next step</h2>
      <ul>
        <li><a routerLink="/quick-start">Install angular-handsontable</a></li>
      </ul>
    </div>
  `
})
export class IntroductionComponent {}