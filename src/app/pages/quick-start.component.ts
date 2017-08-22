import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-header">
      <h1>QuickStart</h1>
    </div>
    <div class="docs-content">
      <ol class="steps">
        <li>
          <h2>Przygotowanie projektu</h2>
          <p>Aby przygotować nowy projekt należy postępować według kroków opisanych w sekcji
          <a href="https://angular.io/guide/quickstart" rel="nofollow">QuickStart</a> na oficjalnej
          stronie Angular.io.</p>
        </li>
        <li>
          <h2>Dodanie <code>angular-handsontable</code> przy użyciu managera pakietów.</h2>
          <docs-code lang='bash' input='npm install --save-prod angular-handsontable'></docs-code>
          <p>lub</p>
          <docs-code lang='bash' input='yarn add angular-handsontable'></docs-code>
        </li>
        <li>
          <h2>Załadowanie Handsontable przed Zone.js</h2>
          <div class="infobox infobox-warning">
            <p>Niestety występuje problem z nadpisywaniem natywnego <code>window.Promise</code> przez Handsontable i Zone.js</p>
            <p>Jeśli Handsontable nie zostanie załadowane przed zone.js, to przy próbie uruchomienia aplikacji w przeglądarce otrzymamy jedynie błąd w konsoli przeglądarki.</p>
          </div>
          <docs-code start='49' [input]='example3'></docs-code>
        </li>
        <li>
          <h2>Dodanie wrappera do głównego modułu aplikacji</h2>
          <p>Zaimportuj moduł z komponentem Handsontable do <code>src/app/app.module.ts</code></p>
          <docs-code input="import { HotTableModule } from 'angular-handsontable';"></docs-code>
          <p>Następnie dodaj zaimportowany moduł do sekcji <code>imports</code> dekoratora.</p>
          <docs-code start='1' [input]='example4'></docs-code>
        </li>
        <li>
          <h2>Dodanie elementu do szablonu komponentu</h2>
          <p>W pliku szablonu komponentu <code>src/app/app.component.html</code> wystarczy umieścić tag wrappera:</p>
          <docs-code start='1' lang="html" [input]="example5"></docs-code>
        </li>
        <li>
          <h2>Gotowe!</h2>
          <figure class="mat-elevation-z1">
            <img src="/assets/quickstart/img_example_5.png" alt=""/>
          </figure>
        </li>
      </ol>
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