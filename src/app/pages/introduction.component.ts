import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-header">
      <h1>Introduction</h1>
    </div>
    <div class="docs-content">
      <p>Wrapper dla Handsontable jest opublikowany pod nazwą <code>angular-handsontable</code></p>
      <p>Aby zainstalować najnowszą wersję wrappera, użyj jednej z poniższych komend.

      <div class="infobox infobox-error">
        <p>Używanie wrappera bez korzystania z managera paczek nie jest polecane.</p>
      </div>

      <h2>Manager pakietów <code>npm</code></h2>
      <docs-code lang="bash" input="npm install --save angular-handsontable"></docs-code>

      <h2>Manager pakietów <code>yarn</code></h2>
      <docs-code lang="bash" input="yarn add angular-handsontable"></docs-code>
    </div>
  `
})
export class IntroductionComponent {}