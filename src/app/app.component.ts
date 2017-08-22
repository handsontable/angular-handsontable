import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as octicons from 'octicons';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="docs-topbar mat-elevation-z6">
      <a md-button href="https://handsontable.com" title="Handsontable"><img class="logo" src="/assets/Handsontable_logo_200x40.svg" alt=""/></a>
      <div class="flex-spacer"></div>
      <a md-button href="https://github.com/handsontable/angular-handsontable" title="Find us on GitHub">
      ${octicons['mark-github'].toSVG({width: 21, height: 21, style: 'vertical-align: -6px; margin-right: 5px;'})} <span>Github</span></a>
    </nav>
    <md-sidenav-container>
      <md-sidenav mode="side" opened="true">
        <nav class="docs-nav">
          <ul>
            <li><a md-button routerLink="/quickstart" routerLinkActive="active">Quick start</a></li>
            <li><a md-button routerLink="/installation" routerLinkActive="active">Installation</a></li>
            <li><a md-button routerLink="/license" routerLinkActive="active">License</a></li>
            <li><a md-button routerLink="/contact" routerLinkActive="active">Contact</a></li>
            <li><a md-button routerLink="/other-wrappers" routerLinkActive="active">Other wrappers</a></li>
            <li><a md-button routerLink="/limitations" routerLinkActive="active">Known limitations</a></li>
            <li><a md-button href="https://github.com/handsontable/angular-handsontable/issues">Open issues <span class="label label-inverted">${octicons['link-external'].toSVG()}</span></a></li>
          </ul>
          <h3 class="nav-cat">Examples</h3>
          <ul>
            <li><a md-button routerLink="/examples/settings-object" routerLinkActive="active">By settings object</a></li>
            <li><a md-button routerLink="/examples/declarative-way" routerLinkActive="active">In declarative way</a></li>
            <li><a md-button routerLink="/examples/static-columns" routerLinkActive="active">Static columns</a></li>
            <li><a md-button routerLink="/examples/dynamic-columns" routerLinkActive="active">Dynamic columns</a></li>
            <li><a md-button routerLink="/examples/access-to-handsontable" routerLinkActive="active">Access to Handsontable instance</a></li>
            <li><a md-button routerLink="/examples/hooks" routerLinkActive="active">Hook support</a></li>
            <li><a md-button routerLink="/examples/remote-data" routerLinkActive="active">Remote data</a></li>
          </ul>
        </nav>
      </md-sidenav>
      <div id="content">
        <router-outlet></router-outlet>
        <footer class="docs-footer">
          <ul class="docs-footer-links">
            <li><a md-button href="https://docs.handsontable.com">Learn Handsontable</a></li>
          </ul>
          <div class="flex-spacer"></div>
          <div class="docs-footer-copyright">
            <p>Handsoncode &copy; {{getYear()}}</p>
          </div>
        </footer>
      </div>
    </md-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  ngOnInit() { }
}
