import { Component, DebugElement, NgModule } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from '../src/hot-registerer.service';

@Component({
  selector: 'test-component',
  template: ``,
  providers: [ HotRegisterer ],
})
export class TestComponent {
  public prop: object = {};

  hot(instance: string): Handsontable {
    return this.hotRegisterer.getInstance(instance);
  };

  constructor(public hotRegisterer: HotRegisterer) { }
}
