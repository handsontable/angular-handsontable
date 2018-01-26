import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HotTableRegisterer } from '../../dist/pro';

@Component({
  selector: 'app-root',
  template: `
    <hot-table></hot-table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor (
    private registerer: HotTableRegisterer
  ) {

  }

  ngAfterViewInit() {
    console.log(this.registerer);
  }

}
