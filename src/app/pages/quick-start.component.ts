import { Component } from '@angular/core';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>QuickStart</h1>
      <h2 id="prepare-project">Krok 1. Przygotowanie projektu</h2>
      <p>Postępuj zgodnie z <a href="https://angular.io/guide/quickstart" rel="nofollow">opisem kroków</a> dostępnym na oficjalnej stronie Angular.io.</p>

      <h2 id="install-wrapper">Krok 2. Dodanie <code>angular-handsontable</code> do projektu</h2>
      <p>Do tego celu możesz użyć jednej z poniższych komend.</p>
      <docs-code lang='bash' input='npm install angular-handsontable'></docs-code>
      <p>lub</p>
      <docs-code lang='bash' input='yarn add angular-handsontable'></docs-code>

      <h2 id="zonejs-workaround">Krok 3. Załadowanie Handsontable przed Zone.js</h2>
      <div class="infobox infobox-warning">
        <p>Niestety występuje problem z nadpisywaniem natywnego <code>window.Promise</code> przez Handsontable i Zone.js</p>
        <p>Jeśli Handsontable nie zostanie załadowane przed zone.js, to przy próbie uruchomienia aplikacji w przeglądarce otrzymamy jedynie błąd w konsoli przeglądarki.</p>
      </div>
      <docs-code start='49' [input]='example3'></docs-code>

      <h2 id="add-wrapper-in-module">Krok 4. Dodanie wrappera do głównego modułu aplikacji</h2>
      <p>Zaimportuj moduł wrappera do główneg modułu aplikacji (domyślnie jest to <code>src/app/app.module.ts</code>)</p>
      <docs-code input="import { HotTableModule } from 'angular-handsontable';"></docs-code>
      <p>Następnie dodaj zaimportowany moduł do sekcji <code>imports</code> poniżej <code>BrowserModule</code>.</p>
      <p>Poniższy fragment przedstawia przykładową zawartość <code>app.module.ts</code></p>
      <docs-code start='1' [input]='example4'></docs-code>

      <h2 id="use-wrapper-in-template">Krok 5. Dodanie elementu do szablonu komponentu</h2>
      <p>W pliku szablonu komponentu <code>src/app/app.component.html</code> wystarczy umieścić tag wrappera:</p>
      <docs-code start='1' lang="html" [input]="example5"></docs-code>

      <h2 id="it-works">Gotowe!</h2>
      <figure class="mat-elevation-z1">
        <img src="/assets/quickstart/img_example_5.png" alt=""/>
      </figure>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/examples">Zobacz przygotowane przez nas przykłady.</a></p>
      <p><a md-raised-button href="https://docs.handsontable.com">Zapoznaj się z dokumentacją Handsontable. ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class QuickStartComponent {
  example3: string = [
    ``,
    `import 'handsontable/dist/handsontable';`,
    ``,
    `/*********************************************************`,
    `* Zone JS is required by Angular itself.`,
    `*/`,
    `import 'zone.js/dist/zone';  // Included with Angular CLI.`,
    ` `,
  ].join('\n');

  example4: string = [
    `import { BrowserModule } from '@angular/platform-browser';`,
    `import { NgModule } from '@angular/core';`,
    `import { AppComponent } from './app.component';`,
    `import { HotTableModule } from 'angular-handsontable';`,
    ``,
    `@NgModule({`,
    `  declarations: [`,
    `    AppComponent`,
    `  ],`,
    `  imports: [`,
    `    BrowserModule,`,
    `    HotTableModule`,
    `  ],`,
    `  providers: [],`,
    `  bootstrap: [AppComponent]`,
    `})`,
    `export class AppModule { }`,
  ].join('\n');

  example5: string = [`<hot-table></hot-table>`].join('\n');
  
}