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
      <h2>Czym jest wrapper?</h2>
      <p>Wrapper jest przygotowanym przez nas modułem Angular, który możesz zaimportować do swojego projektu, korzystając z preferowanego przez Ciebie managera pakietów.</p>
      <p>Staramy się, by wrapper mógł być użyty przez developera niezależnie od tego, czy korzysta z angular-cli, webpacka czy SystemJS do budowy swojego projektu.</p>
      <div class="infobox">
        <p>Przydatne linki:</p>
        <ol>
          <li><a routerLink="/quickstart" fragment="prepare-project">Jak przygotować projekt Angular?</a></li>
          <li><a routerLink="/quickstart" fragment="install-wrapper">Jak zainstalować wrapper angular-handsontable?</a></li>
        </ol>
      </div>

      <h2>Dlaczego powinieneś użyć wrapper?</h2>
      <p>Przede wszystkim, ze względu na oszczędność Twojego czasu. Dokładamy wszelkich starań, aby korzystanie z naszego oprogramowania było łatwe i przyjemne,
      niezależnie od poziomu umiejętności developera. Dbamy o naszych klientów, więc stale ulepszamy i poprawiamy nasze produkty.</p>
      <div class="infobox">
        <p>Przydatne linki:</p>
        <ol>
          <li><a routerLink="/quickstart">Quick start</a></li>
          <li><a href="https://github.com/handsontable/angular-handsontable/issues" target="_blank">Issue board for angular-handsontable ${octicons['link-external'].toSVG()}</a></li>
          <li><a routerLink="/more-wrappers">More wrappers for Handsontable</a></li>
        </ol>
      </div>

      <h2>Kto rozwija wrapper?</h2>
      <p>Za rozwój wrappera odpowiedzialny jest głównie zespół Handsontable. Jednakże jesteśmy otwarci na społeczność skupioną wokół naszego projektu,
      dlatego Ty również możesz zostać kontrybutorem.</p>
      <div class="infobox">
        <p>Przydatne linki:</p>
        <ol>
          <li><a href="https://handsontable.com/team.html" target="_blank">Zespół Handsontable ${octicons['link-external'].toSVG()}</a></li>
          <li><a routerLink="/support" fragment="contributors">Jak zostać kontrybutorem?</a></li>
        </ol>
      </div>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/quickstart">Stwórz swój pierwszy komponent z Handsontable na pokładzie.</a></p>
      <p><a md-raised-button href="https://handsontable.com" target="_blank">Dowiedz się więcej na temat Handsontable. ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class IntroductionComponent {}