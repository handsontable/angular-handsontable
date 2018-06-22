import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';

import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  template: ``
})
export class TestComponent {
  id: string = 'hot';
  public prop: object = {};

  constructor (
    private _registerer: HotTableRegisterer
  ) { }

  getHotInstance(instance: string): Handsontable {
    return this._registerer.getInstance(instance);
  };
}
