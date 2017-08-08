import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="docs-navbar">
      <a href="http://handsontable.com" title="Handsontable">handsontable</a>
    </nav>
    <md-sidenav-container>
      <md-sidenav mode="side" opened="true">
        <nav>
          <ul>
            <li><a routerLink="/quickstart" routerLinkActive="active">Quick start</a></li>
            <li><a routerLink="/installation" routerLinkActive="active">Installation</a></li>
            <li><a routerLink="/basic-usage" routerLinkActive="active">Basic usage</a></li>
            <li><a routerLink="/examples" routerLinkActive="active">Examples</a></li>
            <li><a routerLink="/license" routerLinkActive="active">License</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
            <li><a href="#other-wrappers" routerLinkActive="active">Other wrappers</a></li>
          </ul>
        </nav>
      </md-sidenav>
      <div id="content">
        <router-outlet></router-outlet>
        <footer id="other-wrappers" class="app-footer">
          <ul>
            <li>react-handsontable (react.js)</li>
            <li>hot-table (polymer)</li>
            <li>ngHandsontable (angular1.x)</li>
            <li>vue-handsontable-official (vue.js)</li>
          </ul>
        </footer>
      </div>
    </md-sidenav-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
