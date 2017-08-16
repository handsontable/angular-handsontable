import { Component } from '@angular/core';

@Component({
  template: `
    <div class="docs-header">
      <h1>Contact</h1>
    </div>
    <div class="docs-content">
      <h2>Feedback</h2>
      <p>Jeśli chciałbyś podzielić się z nami swoją opinią na temat wrappera, możesz skontaktować
      się z nami za pomocą <a href="https://handsontable.com/contact.html">formularza kontaktowego</a>
      lub pisząc bezpośrednio na adres <a href="mailto:hello@handsontable.com">hello@handsontable.com</a>.</p>

      <h2>Dla zgłaszających błędy</h2>
      <p>Upewnij się, że znaleziony przez Ciebie problem nie został już zgłoszony na issue boardzie projektu.</p>
      <p>Jeśli problem nie został jeszcze zgłoszony, możesz śmiało go
      <a href="https://github.com/handsontable/angular-handsontable/issues/new">dodać</a>.
      <p>Aby ułatwić dodawanie nowego zgłoszenia przygotowaliśmy jego wzór. Postaraj się wypełnić
      wszystkie pola jak najdokładniej potrafisz.</p>
      <h2>Dla kontrybutorów</h2>
    </div>
  `
})
export class ContactComponent {}