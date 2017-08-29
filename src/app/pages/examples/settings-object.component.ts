import { Component, ViewEncapsulation } from '@angular/core';
import Handsontable from 'handsontable';
import * as octicons from 'octicons';

@Component({
  template: `
    <div class="docs-content">
      <h1>Initialization by settings object</h1><h2></h2>
      <p><a md-raised-button routerLink="/quickstart">Przygotuj projekt według kroków 1-4 w QuickStart.</a></p>

      <h2>Component</h2>
      <p>Dodaj w komponencie zmienną <code>settings</code> będącą obiektem, w którym możesz umieścisz
      <a href="https://docs.handsontable.com/Options.html" target="_blank">dostępne opcje ${octicons['link-external'].toSVG()}</a>.</p>
      <div class="infobox infobox-info">
        <p>Obiekty nie są domyślnie obserwowane pod względem zmian w kluczach przypisanych do obiektu.
          Oznacza to, że jeśli przypiszesz kluczom dynamicznie zmienne, to ich zmiana nie zostanie zarejestrowana w tabeli.</p>
      </div>
      <docs-code lang="typescript" title="/src/app/app.component.ts" start='1' [input]="examples[0]"></docs-code>

      <h2>Template</h2>
      <p>Aby poprawnie wyświetlić Handsontable w komponencie, należy dodać tag <code>hot-table</code>.
        Obiekt ustawień przekazujemy do komponentu pod atrybutem <code>[settings]="settings"</code>.</p>
      <docs-code lang="html" title="/src/app/app.component.html" start='1' [input]="examples[1]"></docs-code>

      <h2>Result</h2>
      <hot-table [settings]="settings"></hot-table>

      <h2>Następne kroki</h2>
      <p><a md-raised-button routerLink="/examples/declarative-way">Definiowanie Handsontable za pomocą atrybutów.</a></p>
      <p><a md-raised-button href="https://docs.handsontable.com/Options.html" target="_blank">Opcje dostępne do zdefiniowania w Handsontable.
        ${octicons['link-external'].toSVG()}</a></p>
      <p><a md-raised-button href="https://angular.io/guide/template-syntax#property-binding--property-" rel="nofollow" target="_blank">Available binding methods
        ${octicons['link-external'].toSVG()}</a></p>
    </div>
  `
})
export class ExSettingsObjectComponent {
  settings = {
    data: Handsontable.helper.createSpreadsheetData(10, 20),
    colHeaders: true,
    rowHeaders: true,
  };

  examples: string[] = [
    [
      `import { Component } from '@angular/core';`,
      `import Handsontable from 'handsontable';`,
      ``,
      `@Component({`,
      `  selector: 'app-root',`,
      `  templateUrl: './app.component.html',`,
      `  styleUrls: ['./app.component.css']`,
      `})`,
      `export class AppComponent {`,
      `  settings = {`,
      `    data: Handsontable.helper.createSpreadsheetData(10, 20),`,
      `    colHeaders: true,`,
      `    rowHeaders: true,`,
      `  }`,
      `}`,
    ].join('\n'),
    [
      `<hot-table [settings]="settings"></hot-table>`,
    ].join('\n'),
  ];
}