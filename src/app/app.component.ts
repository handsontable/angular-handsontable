import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  entryComponents: [MenuComponent],
  template: `
    <nav class="docs-topbar mat-elevation-z6">
      <a mat-button class="logo" routerLink="/" routerLinkActive="" title="Handsontable for Angular">Handsontable for Angular</a>
      <button mat-button class="three-bars" (click)="toggle()"><app-octicon icon="three-bars"></app-octicon></button>
      <div class="flex-spacer"></div>
      <a mat-button class="icon-gh" href="https://github.com/handsontable/angular-handsontable" title="Find us on GitHub" target="_blank">
      <app-octicon icon="mark-github"></app-octicon> <span>Github <app-octicon icon="link-external"></app-octicon></span></a>
    </nav>
    <mat-sidenav-container (window:resize)="onResize($event)">
      <mat-sidenav #sidenav [mode]="mode" [opened]="openNav">
        <app-menu #menu [(examples)]="menuExamples"></app-menu>
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
  @ViewChild('menu') menu: MenuComponent;
  @ViewChild('sidenav') sidenav: MatSidenav;

  private isUrlInitialized = false;
  private hash = location.hash;

  menuExamples = false;
  openNav: boolean = true;
  mode: string = 'side';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
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
          this.close();
        }
      });
      this.router.events
        .filter((event) => event instanceof NavigationStart)
        .subscribe((event: NavigationStart) => {
          this.menuExamples = event.url.includes('examples');
      });
      this.setMode(window.innerWidth);
  }

  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  setMode(size) {
    this.mode = size <= 767 ? 'over' : 'side';

    if (size > 767 && !this.openNav) {
      this.sidenav.open();

    } else if (size <= 767 && this.openNav) {
      this.sidenav.close();
    }
  }

  toggle() {
    this.sidenav.toggle();
  }

  onResize(event) {
    this.setMode(event.target.innerWidth);
  }

  close() {
    this.sidenav.close();
  }
}
