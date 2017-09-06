import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';
import * as octicons from 'octicons';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="docs-topbar mat-elevation-z6">
      <a md-button class="logo" routerLink="/" routerLinkActive="" title="Handsontable for Angular">Handsontable for Angular</a>
      <button md-button class="three-bars" (click)="sidenav.toggle()">${octicons['three-bars'].toSVG()}</button>
      <div class="flex-spacer"></div>
      <a md-button class="icon-gh" href="https://github.com/handsontable/angular-handsontable" title="Find us on GitHub" target="_blank">
      ${octicons['mark-github'].toSVG({width: 21, height: 21, style: 'vertical-align: -6px; margin-right: 5px;'})} <span>Github ${octicons['link-external'].toSVG()}</span></a>
    </nav>
    <md-sidenav-container (window:resize)="onResize($event)">
      <md-sidenav #sidenav [mode]="mode" [opened]="openNav">
        <nav class="docs-nav">
          <ul>
            <li><a md-button [routerLinkActiveOptions]="{ exact: true }" routerLink="/" routerLinkActive="active">Introduction</a></li>
            <li><a md-button routerLink="/quick-start" routerLinkActive="active">Quick start</a></li>
            <li><a md-button routerLink="/use-with-pro" routerLinkActive="active">Use with Pro version</a></li>
            <li>
              <button md-button class="btn-block" [ngClass]="{'open': menuExamples}" (click)=toggleMenuExample()>
              Examples <span class="label label-inverted">${octicons['kebab-vertical'].toSVG()}</span></button>
              <ul class="docs-nav--sub">
                <li><a md-button routerLink="/examples/settings-object" routerLinkActive="active">By settings object</a></li>
                <li><a md-button routerLink="/examples/declarative-way" routerLinkActive="active">By using bindings</a></li>
                <li><a md-button routerLink="/examples/static-columns" routerLinkActive="active">Column component</a></li>
                <li><a md-button routerLink="/examples/dynamic-columns" routerLinkActive="active">Dynamic columns</a></li>
                <li><a md-button routerLink="/examples/access-to-handsontable" routerLinkActive="active">Access to Handsontable</a></li>
                <li><a md-button routerLink="/examples/hooks" routerLinkActive="active">Hook support</a></li>
                <li><a md-button routerLink="/examples/remote-data" routerLinkActive="active">Remote data</a></li>
              </ul>
            </li>
            <li><a md-button href="https://docs.handsontable.com/Core.html" target="_blank">
              API Reference <span class="label label-inverted">${octicons['link-external'].toSVG()}</span></a></li>
            <li><a md-button routerLink="/license" routerLinkActive="active">License</a></li>
            <li><a md-button routerLink="/support" routerLinkActive="active">Support</a></li>
            <li><a md-button routerLink="/more-wrappers" routerLinkActive="active">More wrappers</a></li>
          </ul>
        </nav>
      </md-sidenav>
      <div #content id="content">
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
  @ViewChild('content') content: ElementRef;
  @ViewChild('sidenav') sidenav: MdSidenav;
  private isUrlInitialized: boolean = false;
  private hash = location.hash;
  private menuExamples: boolean = false;
  private openNav: boolean = true;
  private mode: string = 'side';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title ) {
    router.events
    .filter((event) => event instanceof NavigationStart)
    .subscribe((event: NavigationStart) => {
      this.menuExamples = event.url.includes('examples');
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
      .subscribe((event) => {
        this.titleService.setTitle(`Handsontable for Angular${event['title'] || ''}`);

        if (this.hash.length < 1) {
          this.content.nativeElement.parentElement.scrollTop = 0;
        }

        if (window.innerWidth <= 767) {
          this.sidenav.close();
        }
      });

      this.setMode(window.innerWidth);
  }

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  toggleMenuExample() {
    this.menuExamples = !this.menuExamples;
  }

  setMode(size) {
    this.mode = size <= 767 ? 'over' : 'side';

    if (size > 767 && !this.openNav) {
      this.sidenav.open();

    } else if (size <= 767 && this.openNav) {
      this.sidenav.close();
    }
  }
  onResize(event) {
    this.setMode(event.target.innerWidth);
  }
}
