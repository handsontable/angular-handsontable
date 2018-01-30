import { Component } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

import { HotTableRegisterer } from '../../dist/pro';

@Component({
  selector: 'app-root',
  template: `<hot-table></hot-table>`
})
export class AppComponent {
  id: string = 'hot';
  public prop: object = {};

  constructor (
    private _registerer: HotTableRegisterer
  ) { }

  getHotInstance(instance: string): Handsontable {
    return this._registerer.getInstance(instance);
  };
}
