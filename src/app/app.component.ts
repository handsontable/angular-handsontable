import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="docs-topbar mat-elevation-z6">
      <a mat-button class="logo" routerLink="/" routerLinkActive="" title="Handsontable for Angular">Handsontable for Angular</a>
      <button mat-button class="three-bars" (click)="sidenav.toggle()"><app-octicon icon="three-bars"></app-octicon></button>
      <div class="flex-spacer"></div>
      <a mat-button class="icon-gh" href="https://github.com/handsontable/angular-handsontable" title="Find us on GitHub" target="_blank">
      <app-octicon icon="mark-github"></app-octicon> <span>Github <app-octicon icon="link-external"></app-octicon></span></a>
    </nav>
    <mat-sidenav-container (window:resize)="onResize($event)">
      <mat-sidenav #sidenav [mode]="mode" [opened]="openNav">
        <nav class="docs-nav">
          <ul>
            <li><a mat-button [routerLinkActiveOptions]="{ exact: true }" routerLink="/" routerLinkActive="active">Introduction</a></li>
            <li><a mat-button routerLink="/quick-start" routerLinkActive="active">Quick start</a></li>
            <li><a mat-button routerLink="/use-with-pro" routerLinkActive="active">Use with Pro version</a></li>
            <li>
              <button mat-button class="btn-block" [ngClass]="{'open': menuExamples}" (click)=toggleMenuExample()>
              Examples <span class="label label-inverted"><app-octicon icon="kebab-vertical"></app-octicon></span></button>
              <ul class="docs-nav--sub">
                <li><a mat-button routerLink="/examples/settings-object" routerLinkActive="active">By settings object</a></li>
                <li><a mat-button routerLink="/examples/declarative-way" routerLinkActive="active">By using bindings</a></li>
                <li><a mat-button routerLink="/examples/column-component" routerLinkActive="active">Column component</a></li>
                <li><a mat-button routerLink="/examples/access-to-handsontable" routerLinkActive="active">Access to Handsontable</a></li>
                <li><a mat-button routerLink="/examples/hooks" routerLinkActive="active">Events support</a></li>
                <li><a mat-button routerLink="/examples/remote-data" routerLinkActive="active">Remote data</a></li>
                <li><a mat-button routerLink="/examples/observe-data-changes" routerLinkActive="active">Observe data changes</a></li>
              </ul>
            </li>
            <li><a mat-button href="https://docs.handsontable.com/Core.html" target="_blank">
              API Reference <span class="label label-inverted"><app-octicon icon="link-external"></app-octicon></span></a></li>
            <li><a mat-button href="https://github.com/handsontable/angular-handsontable/releases" target="_blank">
              Release notes <span class="label label-inverted"><app-octicon icon="link-external"></app-octicon></span></a></li>
            <li><a mat-button routerLink="/license" routerLinkActive="active">License</a></li>
            <li><a mat-button routerLink="/support" routerLinkActive="active">Support</a></li>
            <li><a mat-button routerLink="/more-wrappers" routerLinkActive="active">More wrappers</a></li>
          </ul>
        </nav>
      </mat-sidenav>
      <div #content id="content">
        <router-outlet></router-outlet>
        <footer class="docs-footer">
          <div class="flex-spacer"></div>
          <div class="docs-footer-copyright">
            <p>Handsoncode &copy; {{getYear()}}. Code licensed under an <a routerLink="/license">MIT-style License</a>.
            Documentation licensed under
            <a href="http://creativecommons.org/licenses/by/4.0/" rel="nofollow" target="_blank">CC BY 4.0</a>.</p>
          </div>
        </footer>
      </div>
    </mat-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('sidenav') sidenav: MatSidenav;

  private isUrlInitialized = false;
  private hash = location.hash;
  menuExamples = false;
  openNav = true;
  mode = 'side';

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
        while (route.firstChild) {
          route = route.firstChild;
        }

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
