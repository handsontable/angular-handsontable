import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestModule } from './test.module';
import { HotRegisterer } from '../src/hot-registerer.service';

import Handsontable from 'handsontable';

describe('HotTable', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ TestComponent ],
        imports: [ TestModule ]
    });
  });

  afterEach(() => {
    fixture.destroy();
  });

  it(`should render 'hot-table'`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const element = fixture.nativeElement;

      fixture.detectChanges();

      expect(element.querySelectorAll('hot-table').length).toBe(1);
    });
  }));

  it(`should add reference to 'hotRegisterer' by attribute`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();

      expect(app.hot('hot')).toBeTruthy();
    });
  }));

  it(`should register every hot-table component with added ID attribute`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table [hotId]="prop['hotTableId']"></hot-table>
          <hot-table [hotId]="'hot1'"></hot-table>
          <hot-table hotId="hot2"></hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['hotTableId'] = 'hot';

      fixture.detectChanges();

      expect(app.hot('hot')).toBeTruthy();
      expect(app.hot('hot1')).toBeTruthy();
      expect(app.hot('hot2')).toBeTruthy();
    });
  }));

  it(`should set 'settings' defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [settings]="prop['settings']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['settings'] = {
        data: Handsontable.helper.createSpreadsheetData(5, 5)
      };

      fixture.detectChanges();
      expect(app.hot('hot').getDataAtCell(0, 0)).toBe('A1');
    });
  }));

  it(`should set allowEmpty defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowEmpty]="prop['allowEmpty']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowEmpty'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowEmpty']).toBe(false);

      app['prop']['allowEmpty'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowEmpty']).toBe(true);
    });
  }));

  it(`should set allowHtml defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowHtml]="prop['allowHtml']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowHtml'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowHtml']).toBe(false);

      app['prop']['allowHtml'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowHtml']).toBe(true);
    });
  }));

  it(`should set allowInsertColumn defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowInsertColumn]="prop['allowInsertColumn']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowInsertColumn'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInsertColumn']).toBe(false);

      app['prop']['allowInsertColumn'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInsertColumn']).toBe(true);
    });
  }));

  it(`should set allowInsertRow defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowInsertRow]="prop['allowInsertRow']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowInsertRow'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInsertRow']).toBe(false);

      app['prop']['allowInsertRow'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInsertRow']).toBe(true);
    });
  }));

  it(`should set allowInvalid defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowInvalid]="prop['allowInvalid']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowInvalid'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInvalid']).toBe(false);

      app['prop']['allowInvalid'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowInvalid']).toBe(true);
    });
  }));

  it(`should set allowRemoveColumn defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowRemoveColumn]="prop['allowRemoveColumn']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowRemoveColumn'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowRemoveColumn']).toBe(false);

      app['prop']['allowRemoveColumn'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowRemoveColumn']).toBe(true);
    });
  }));

  it(`should set allowRemoveRow defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [allowRemoveRow]="prop['allowRemoveRow']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['allowRemoveRow'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowRemoveRow']).toBe(false);

      app['prop']['allowRemoveRow'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['allowRemoveRow']).toBe(true);
    });
  }));

  it(`should set autoColumnSize defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [autoColumnSize]="prop['autoColumnSize']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['autoColumnSize'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoColumnSize']).toBe(false);

      app['prop']['autoColumnSize'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoColumnSize']).toBe(true);

      app['prop']['autoColumnSize'] = { syncLimit: '40%' };
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoColumnSize']['syncLimit']).toBe('40%');
    });
  }));

  it(`should set autoComplete defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [autoComplete]="prop['autoComplete']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoComplete']).toBeUndefined();

      app['prop']['autoComplete'] = ['A'];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoComplete'][0]).toBe('A');
    });
  }));

  it(`should set autoRowSize defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [autoRowSize]="prop['autoRowSize']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['autoRowSize'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoRowSize']).toBe(false);

      app['prop']['autoRowSize'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoRowSize']).toBe(true);

      app['prop']['autoRowSize'] = { syncLimit: '40%' };
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoRowSize']['syncLimit']).toBe('40%');
    });
  }));

  it(`should set autoWrapCol defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [autoWrapCol]="prop['autoWrapCol']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['autoWrapCol'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoWrapCol']).toBe(false);

      app['prop']['autoWrapCol'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoWrapCol']).toBe(true);
    });
  }));

  it(`should set autoWrapRow defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [autoWrapRow]="prop['autoWrapRow']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['autoWrapRow'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(false);

      app['prop']['autoWrapRow'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(true);
    });
  }));

  it(`should set bindRowsWithHeaders defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [bindRowsWithHeaders]="prop['bindRowsWithHeaders']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['bindRowsWithHeaders'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(false);

      app['prop']['bindRowsWithHeaders'] = 'loose';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['bindRowsWithHeaders']).toBe('loose');
    });
  }));

  it(`should set cell defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [cell]="prop['cell']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['cell'] = [
        {row: 0, col: 0, readOnly: true}
      ];
      fixture.detectChanges();
      expect(app.hot('hot').getCellMeta(0, 0)['readOnly']).toBe(true);
    });
  }));

  it(`should set cells defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [cells]="prop['cells']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['cells'] = function(row, column, prop) {
        return {
          className: `cell_${row}_${column}`
        };
      };

      fixture.detectChanges();
      expect(app.hot('hot').getCellMeta(2, 2)['className']).toBe('cell_2_2');
    });
  }));

  it(`should set checkedTemplate defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [checkedTemplate]="prop['checkedTemplate']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['checkedTemplate'] = false

      fixture.detectChanges();
      expect(app.hot('hot').getCellMeta(2, 2)['checkedTemplate']).toBe(false);
    });
  }));

  it(`should set and change colHeaders defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [colHeaders]="prop['headers']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['headers'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['colHeaders']).toBe(false);

      app['prop']['headers'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['colHeaders']).toBe(true);
    });
  }));
});