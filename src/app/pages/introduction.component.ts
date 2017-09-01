import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <div class="infobox infobox-info">
        <h2>Latest version <strong>1.0.0-beta1</strong>, released on <strong>00.00.0000</strong></h2>
        <p>Compatible with Handsontable Community Edition v0.34.0 and Pro v1.13.0</p>
        <p><a md-raised-button href="https://github.com/handsontable/angular-handsontable/releases" target="_blank">Release notes</a></p>
      </div>
      <h2>What is a wrapper? </h2>
      <p>The wrapper is an Angular module that we have made that can be imported into your project using your preferred package manager.</p>
      <p>We try to make the wrapper compatible with both angular-cli, webpack as well as SystemJS.</p>
      <div class="infobox">
        <p>Useful links:</p>
        <ol>
          <li><a routerLink="/quickstart" fragment="prepare-project">How to prepare an Angular project</a></li>
          <li><a routerLink="/quickstart" fragment="install-wrapper">How to install the angular-handsontable wrapper</a></li>
        </ol>
      </div>

      <h2>Why should you use a wrapper?</h2>
      <p>First of all, to save time. We make every effort to make using our software easy and enjoyable,
      regardless of developer skill level. We take care of our customers by continually improve and improve our products.</p>
      <div class="infobox">
        <p>Useful links:</p>
        <ol>
          <li><a routerLink="/quickstart">Quick start</a></li>
          <li><a href="https://github.com/handsontable/angular-handsontable/issues" target="_blank">Issue board for angular-handsontable ${octicons['link-external'].toSVG()}</a></li>
          <li><a routerLink="/more-wrappers">More wrappers for Handsontable</a></li>
        </ol>
      </div>

      <h2>Who develops the wrapper?</h2>
      <p>Handsontable is responsible for the development of the wrapper. However, we are open to the community centered around our project,
      - that's why you too can become a contributor:</p>
      <div class="infobox">
        <p>Useful links:</p>
        <ol>
          <li><a href="https://handsontable.com/team.html" target="_blank">Handsontable Team ${octicons['link-external'].toSVG()}</a></li>
          <li><a routerLink="/support" fragment="contributors">How to become a contributor? </a></li>
        </ol>
      </div>

      <h2>Next steps</h2>
      <p><a md-raised-button routerLink="/quickstart">Create your first component using Handsontable.</a></p>
      <p><a md-raised-button href="https://handsontable.com" target="_blank">Learn more about Handsontable. ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class IntroductionComponent {}
