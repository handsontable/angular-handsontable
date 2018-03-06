import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>More wrappers</h1>
      <div class="flex-grid">
        <mat-card class="docs-card" *ngFor="let wrapper of wrappers; let i = index;">
          <mat-card-header>
            <mat-card-title>{{wrapper.title}}</mat-card-title>
            <mat-card-subtitle>{{wrapper.subtitle}}</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image [src]="wrapper.img">
          <mat-card-actions>
            <a [href]="wrapper.url.download" target="_blank" mat-button>Download <app-octicon icon="link-external"></app-octicon></a>
            <a [href]="wrapper.url.github" target="_blank" mat-button>View on GitHub <app-octicon icon="link-external"></app-octicon></a>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `
})
export class MoreWrappersComponent {
  wrappers = [
    { title: 'React.js', subtitle: 'react-handsontable', img: 'assets/other-wrappers/React.png', url: {
      download: 'https://github.com/handsontable/react-handsontable/wiki/Installation-guide',
      github: 'https://github.com/handsontable/react-handsontable' } },
    { title: 'Polymer', subtitle: 'hot-table', img: 'assets/other-wrappers/Polymer.png', url: {
      download: 'http://handsontable.github.io/hot-table/', github: 'https://github.com/handsontable/hot-table' } },
    { title: 'Angular 1.x', subtitle: 'ngHandsontable', img: 'assets/other-wrappers/Angular.png', url: {
      download: 'http://handsontable.github.io/ngHandsontable/', github: 'https://github.com/handsontable/ngHandsontable' } },
    { title: 'Vue.js', subtitle: 'vue-handsontable-official', img: 'assets/other-wrappers/Vue.png', url: {
      download: 'https://github.com/handsontable/vue-handsontable-official/wiki/Installation-guide',
      github: 'https://github.com/handsontable/vue-handsontable-official' } },
  ];
}
