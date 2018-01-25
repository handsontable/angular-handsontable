import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HotRegisterer } from '../../dist/ce';

@Component({
  selector: 'app-root',
  template: `
<hot-table [colHeaders]="true"></hot-table>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor (
    registerer: HotRegisterer
  ) {

  }

}
