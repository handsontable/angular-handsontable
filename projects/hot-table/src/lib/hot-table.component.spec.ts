import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

@Component({
  selector: 'hot-test-component',
  template: ''
})
export class TestComponent {
  public prop: object = {};
  id = 'hot';

  constructor (private _registerer: HotTableRegisterer) { }

  getHotInstance(instance: string): Handsontable {
    return this._registerer.getInstance(instance);
  }
}

describe('HotTableComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ HotTableModule.forRoot() ],
    });
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it(`should render 'hot-table'`, async() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table></hot-table>`
      }
    });
    await TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const elem = fixture.nativeElement;

      fixture.detectChanges();

      expect(elem.querySelectorAll('.handsontable').length).toBeGreaterThan(0);
    });
  });
});
