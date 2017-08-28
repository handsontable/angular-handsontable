import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-content">
      <h1>Support</h1>
      <h2 id="report-bug">Dla zgłaszających błędy</h2>
      <p>Jeśli problem nie został jeszcze zgłoszony, możesz śmiało go
      <a href="https://github.com/handsontable/angular-handsontable/issues/new"
        title="Add new issue to the angular-handsontable issue board.">dodać</a>.
      <p>Aby ułatwić dodawanie nowego zgłoszenia przygotowaliśmy jego wzór.<br/>
      Postaraj się wypełnić wszystkie pola jak najdokładniej potrafisz.</p>
      <div class="infobox infobox-info">
        <p>Zachęcamy również do rozwiązywania znalezionych problemów.<br/>
        Zostań kontrybutorem naszego oprogramowania, szczegóły znajdziesz w <a href="/contact#contributors"
        title="Become a angular-handsontable contributor.">części poświęconej kontrybutorom</a>.</p>
      </div>

      <h2 id="feature-request">Dla zgłaszających udoskonalenia</h2>
      <p>Miło nam, że chcesz pomagać w rozwoju naszego oprogramowania. Jesteśmy otwarci na pomysły
      społeczności. Jeśli chcesz podzielić się z nami swoim pomysłem, możesz to zrobić
      <a href="https://github.com/handsontable/angular-handsontable/issues/new?&title=${encodeURIComponent('Feature request:')}&body=${encodeURIComponent('<!-- description -->')}">tutaj</a>.</p>
      <div class="infobox infobox-info">
        <p>Jeśli chciałbyś wykonać zgłoszone przez siebie udoskonalenie, zapoznaj się najpierw z opisem 
        w <a href="/contact#contributors" title="Become a angular-handsontable contributor.">części poświęconej kontrybutorom</a>.</p>
      </div>

      <h2 id="contributors">Dla kontrybutorów</h2>
      <p>Your contributions to this project are very welcome. If you want to fix a bug or propose a new feature,
      you can open a new Pull Request but first make sure it follows these general rules:</p>
      <ol>
        <li>Sign this <a href="https://goo.gl/forms/yuutGuN0RjsikVpM2">Contributor License Agreement</a> to allow us to publish your changes to the code.</li>
        <li>Make your changes on a separate branch. This will speed up the merging process.</li>
        <li>Always make the target of your pull request the develop <code>branch</code>, not <code>master</code>.</li>
        <li>Do not edit files in <code>dist/</code> directory.</li>
        <li><strong>Important: For any change you make, please add at least one test case</strong> in <code>tests/</code>.
        That will help us understand the issue and make sure that it stays fixed forever.</li>
        <li>Please review our <a href="https://github.com/handsontable/handsontable/wiki/Coding-style">coding style</a> for instructions on how to properly style the code.</li>
        <li>Add a thorough description of all the changes.</li>
      </ol>
      <p>Thank you for your commitment!</p>
    </div>
  `
})
export class SupportComponent {}