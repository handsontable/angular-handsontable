import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-header">
      <h1>OtherWrappersComponent</h1>
    </div>
    <div class="docs-content">
      <div class="flex-grid">
        <md-card class="docs-card" *ngFor="let wrapper of wrappers; let i = index;">
          <md-card-header>
            <md-card-title>{{wrapper.title}}</md-card-title>
            <md-card-subtitle>{{wrapper.subtitle}}</md-card-subtitle>
          </md-card-header>
          <img md-card-image [src]="wrapper.img">
          <md-card-actions>
            <a [href]="wrapper.url.download" md-button>Download</a>
            <a [href]="wrapper.url.github" md-button>View on GitHub</a>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  `
})
export class OtherWrappersComponent {
  wrappers = [
    { title: 'React.js', subtitle: 'react-handsontable', img: '', url: { download: '', github: '' } },
    { title: 'Polymer', subtitle: 'hot-table', img: '', url: { download: '', github: '' } },
    { title: 'Angular 1.x', subtitle: 'ngHandsontable', img: '', url: { download: '', github: '' } },
    { title: 'Vue.js', subtitle: 'vue-handsontable-official', img: '', url: { download: '', github: '' } },
  ]
}