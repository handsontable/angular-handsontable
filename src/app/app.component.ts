import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
})
export class AppComponent {
  getYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
