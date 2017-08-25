import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';

import * as octicons from 'octicons';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="docs-topbar mat-elevation-z6">
      <a md-button routerLink="/" routerLinkActive="" title="Handsontable for Angular"><img class="logo" src="/assets/Handsontable_logo_200x40.svg" alt=""/> for Angular</a>
      <div class="flex-spacer"></div>
      <a md-button href="https://github.com/handsontable/angular-handsontable" title="Find us on GitHub">
      ${octicons['mark-github'].toSVG({width: 21, height: 21, style: 'vertical-align: -6px; margin-right: 5px;'})} <span>Github</span></a>
    </nav>
    <md-sidenav-container>
      <md-sidenav mode="side" opened="true">
        <nav class="docs-nav">
          <ul>
          <li><a md-button routerLink="/" routerLinkActive="">Introduction</a></li>
            <li><a md-button routerLink="/quickstart" routerLinkActive="active">QuickStart</a></li>
            <li>
              <button md-button class="btn-block" [ngClass]="{'active': menuExamples}" (click)=toggleMenuExample()>
              Examples <span class="label label-inverted">${octicons['kebab-vertical'].toSVG()}</span></button>
              <ul class="docs-nav--sub">
                <li><a md-button routerLink="/examples/settings-object" routerLinkActive="active">By settings object</a></li>
                <li><a md-button routerLink="/examples/declarative-way" routerLinkActive="active">In declarative way</a></li>
                <li><a md-button routerLink="/examples/static-columns" routerLinkActive="active">Static columns</a></li>
                <li><a md-button routerLink="/examples/dynamic-columns" routerLinkActive="active">Dynamic columns</a></li>
                <li><a md-button routerLink="/examples/access-to-handsontable" routerLinkActive="active">Access to Handsontable</a></li>
                <li><a md-button routerLink="/examples/hooks" routerLinkActive="active">Hook support</a></li>
                <li><a md-button routerLink="/examples/remote-data" routerLinkActive="active">Remote data</a></li>
              </ul>
            </li>
            <li><a md-button href="https://docs.handsontable.com/pro/latest/Core.html" target="_blank">
              API Reference <span class="label label-inverted">${octicons['link-external'].toSVG()}</span></a></li>
            <li><a md-button routerLink="/license" routerLinkActive="active">License</a></li>
            <li><a md-button routerLink="/limitations" routerLinkActive="active">Known limitations</a></li>
            <li><a md-button routerLink="/support" routerLinkActive="active">Support</a></li>
            <li><a md-button routerLink="/more-wrappers" routerLinkActive="active">More wrappers</a></li>
          </ul>
        </nav>
      </md-sidenav>
      <div id="content">
        <router-outlet></router-outlet>
        <footer class="docs-footer">
          <div class="flex-spacer"></div>
          <div class="docs-footer-copyright">
            <p>Handsoncode &copy; {{getYear()}}. Code licensed under an <a routerLink="/license">MIT-style License</a>.
            Documentation licensed under <a href="http://creativecommons.org/licenses/by/4.0/" rel="nofollow" target="_blank">CC BY 4.0</a>.</p>
          </div>
        </footer>
      </div>
    </md-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  private isUrlInitialized: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title ) {
    router.events.subscribe((val: NavigationStart) => {
      if (!this.isUrlInitialized) {
        this.menuExamples = val.url.includes('examples');
        this.isUrlInitialized = true;
      }
    });
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(`Handsontable for Angular${event['title'] || ''}`));
  }

  menuExamples: boolean = false;

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  toggleMenuExample() {
    this.menuExamples = !this.menuExamples;
  }
}
