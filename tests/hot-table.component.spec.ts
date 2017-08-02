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
    if (fixture) {
      fixture.destroy();
    }
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

  it(`should set className defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [className]="prop['className']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['className'] = 'test'

      fixture.detectChanges();
      expect(app.hot('hot').getCellMeta(2, 2)['className']).toBe('test');
    });
  }));

  it(`should set colHeaders defined as bindings`, async(() => {
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

      app['prop']['headers'] = 'Header';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['colHeaders']).toBe('Header');
    });
  }));

  it(`should set collapsibleColumns defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [collapsibleColumns]="prop['collapsibleColumns']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['collapsibleColumns'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['collapsibleColumns']).toBe(true);

      app['prop']['collapsibleColumns'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['collapsibleColumns']).toBe(false);
    });
  }));

  it(`should set columnHeaderHeight defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [columnHeaderHeight]="prop['columnHeaderHeight']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['columnHeaderHeight'] = 40;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columnHeaderHeight']).toBe(40);

      app['prop']['columnHeaderHeight'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columnHeaderHeight']).toBe(10);
    });
  }));

  it(`should set columns defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [columns]="prop['columns']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['columns'] = [{}, {}, {}];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columns'].length).toBe(3);

      app['prop']['columns'] = [{}];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columns'].length).toBe(1);
    });
  }));
  it(`should set columnSorting defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [colHeaders]="true" [columnSorting]="prop['columnSorting']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['columnSorting'] = true;
      fixture.detectChanges();

      expect(app.hot('hot').getSettings()['columnSorting']).toBe(true);

      app['prop']['columnSorting'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columnSorting']).toBe(false);
    });
  });

  it(`should set columnSummary defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [columnSummary]="prop['columnSummary']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['columnSummary'] = {attr: 1};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['columnSummary']['attr']).toBe(1);
    });
  }));

  it(`should set colWidths defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [colWidths]="prop['colWidths']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['colWidths'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['colWidths']).toBe(10);

      app['prop']['colWidths'] = 40;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['colWidths']).toBe(40);
    });
  }));

  it(`should set commentedCellClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [commentedCellClassName]="prop['commentedCellClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['commentedCellClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['commentedCellClassName']).toBe('test');
    });
  }));

  it(`should set comments defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [comments]="prop['comments']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['comments'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['comments']).toBe(true);
    });
  }));

  it(`should set contextMenu defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [contextMenu]="prop['contextMenu']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['contextMenu'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['contextMenu']).toBe(true);
    });
  }));

  it(`should set copyable defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [copyable]="prop['copyable']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['copyable'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['copyable']).toBe(true);
    });
  }));

  it(`should set copyColsLimit defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [copyColsLimit]="prop['copyColsLimit']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['copyColsLimit'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['copyColsLimit']).toBe(10);
    });
  }));

  it(`should set copyPaste defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [copyPaste]="prop['copyPaste']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['copyPaste'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['copyPaste']).toBe(false);
    });
  }));

  it(`should set copyRowsLimit defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [copyRowsLimit]="prop['copyRowsLimit']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['copyRowsLimit'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['copyRowsLimit']).toBe(10);
    });
  }));

  it(`should set correctFormat defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [correctFormat]="prop['correctFormat']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['correctFormat'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['correctFormat']).toBe(true);
    });
  }));

  it(`should set currentColClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [currentColClassName]="prop['currentColClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['currentColClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['currentColClassName']).toBe('test');
    });
  }));

  it(`should set currentHeaderClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [currentHeaderClassName]="prop['currentHeaderClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['currentHeaderClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['currentHeaderClassName']).toBe('test');
    });
  }));

  it(`should set currentRowClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [currentRowClassName]="prop['currentRowClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['currentRowClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['currentRowClassName']).toBe('test');
    });
  }));

  it(`should set customBorders defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [customBorders]="prop['customBorders']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['customBorders'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['customBorders']).toBe(true);
    });
  }));

  it(`should set data defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [data]="prop['data']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['data'] = [[1, 2, 3]];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['data'][0][0]).toBe(1);
    });
  }));

  it(`should set dataSchema defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [dataSchema]="prop['dataSchema']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['dataSchema'] = {attr: null};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['dataSchema']['attr']).toBe(null);
    });
  }));

  it(`should set dateFormat defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [dateFormat]="prop['dateFormat']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['dateFormat'] = 'hh:mm:ss';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['dateFormat']).toBe('hh:mm:ss');
    });
  }));

  it(`should set debug defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [debug]="prop['debug']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['debug'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['debug']).toBe(true);
    });
  }));

  it(`should set defaultDate defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [defaultDate]="prop['defaultDate']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['defaultDate'] = '1970-01-01';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['defaultDate']).toBe('1970-01-01');
    });
  }));

  it(`should set disableVisualSelection defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [disableVisualSelection]="prop['disableVisualSelection']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['disableVisualSelection'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['disableVisualSelection']).toBe(true);
    });
  }));

  it(`should set dropdownMenu defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [dropdownMenu]="prop['dropdownMenu']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['dropdownMenu'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['dropdownMenu']).toBe(true);
    });
  }));

  it(`should set editor defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [editor]="prop['editor']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['editor'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['editor']).toBe(false);
    });
  }));

  it(`should set enterBeginsEditing defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [enterBeginsEditing]="prop['enterBeginsEditing']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['enterBeginsEditing'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['enterBeginsEditing']).toBe(false);
    });
  }));

  it(`should set enterMoves defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [enterMoves]="prop['enterMoves']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['enterMoves'] = {attr: 1};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['enterMoves']['attr']).toBe(1);
    });
  }));

  it(`should set fillHandle defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [fillHandle]="prop['fillHandle']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['fillHandle'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['fillHandle']).toBe(false);
    });
  }));

  it(`should set filter defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [filter]="prop['filter']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['filter'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['filter']).toBe(true);
    });
  }));

  it(`should set filteringCaseSensitive defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [filteringCaseSensitive]="prop['filteringCaseSensitive']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['filteringCaseSensitive'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['filteringCaseSensitive']).toBe(true);
    });
  }));

  it(`should set filters defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [filters]="prop['filters']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['filters'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['filters']).toBe(true);
    });
  }));

  it(`should set fixedColumnsLeft defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [fixedColumnsLeft]="prop['fixedColumnsLeft']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['fixedColumnsLeft'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['fixedColumnsLeft']).toBe(10);
    });
  }));

  it(`should set fixedRowsBottom defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [fixedRowsBottom]="prop['fixedRowsBottom']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['fixedRowsBottom'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['fixedRowsBottom']).toBe(10);
    });
  }));

  it(`should set fixedRowsTop defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [fixedRowsTop]="prop['fixedRowsTop']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['fixedRowsTop'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['fixedRowsTop']).toBe(10);
    });
  }));

  it(`should set format defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [format]="prop['format']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['format'] = '$0.00,0';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['format']).toBe('$0.00,0');
    });
  }));

  it(`should set formulas defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [formulas]="prop['formulas']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['formulas'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['formulas']).toBe(true);
    });
  }));

  it(`should set fragmentSelection defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [fragmentSelection]="prop['fragmentSelection']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['fragmentSelection'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['fragmentSelection']).toBe(true);
    });
  }));

  it(`should set ganttChart defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [ganttChart]="prop['ganttChart']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['ganttChart'] = {attr:1};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['ganttChart']['attr']).toBe(1);
    });
  }));

  it(`should set headerTooltips defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [headerTooltips]="prop['headerTooltips']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['headerTooltips'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['headerTooltips']).toBe(true);
    });
  }));

  it(`should set height defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [height]="prop['height']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['height'] = 100;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['height']).toBe(100);
    });
  }));

  it(`should set hiddenColumns defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [hiddenColumns]="prop['hiddenColumns']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['hiddenColumns'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['hiddenColumns']).toBe(true);
    });
  }));

  it(`should set hiddenRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [hiddenRows]="prop['hiddenRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['hiddenRows'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['hiddenRows']).toBe(true);
    });
  }));

  it(`should set invalidCellClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [invalidCellClassName]="prop['invalidCellClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['invalidCellClassName'] = 'invalid';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['invalidCellClassName']).toBe('invalid');
    });
  }));

  it(`should set label defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [label]="prop['label']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['label'] = {attr:1};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['label']['attr']).toBe(1);
    });
  }));

  it(`should set language defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [language]="prop['language']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['language'] = 'en';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['language']).toBe('en');
    });
  }));

  it(`should set manualColumnFreeze defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [manualColumnFreeze]="prop['manualColumnFreeze']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['manualColumnFreeze'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['manualColumnFreeze']).toBe(true);
    });
  }));

  it(`should set manualColumnMove defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [manualColumnMove]="prop['manualColumnMove']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['manualColumnMove'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['manualColumnMove']).toBe(true);
    });
  }));

  it(`should set manualColumnResize defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [manualColumnResize]="prop['manualColumnResize']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['manualColumnResize'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['manualColumnResize']).toBe(true);
    });
  }));

  it(`should set manualRowMove defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [manualRowMove]="prop['manualRowMove']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['manualRowMove'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['manualRowMove']).toBe(true);
    });
  }));

  it(`should set manualRowResize defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [manualRowResize]="prop['manualRowResize']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['manualRowResize'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['manualRowResize']).toBe(true);
    });
  }));

  it(`should set maxCols defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [maxCols]="prop['maxCols']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['maxCols'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['maxCols']).toBe(10);
    });
  }));

  it(`should set maxRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [maxRows]="prop['maxRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['maxRows'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['maxRows']).toBe(10);
    });
  }));

  it(`should set mergeCells defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [mergeCells]="prop['mergeCells']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['mergeCells'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['mergeCells']).toBe(true);
    });
  }));

  it(`should set minCols defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [minCols]="prop['minCols']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['minCols'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['minCols']).toBe(10);
    });
  }));

  it(`should set minRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [minRows]="prop['minRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['minRows'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['minRows']).toBe(10);
    });
  }));

  it(`should set minSpareCols defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [minSpareCols]="prop['minSpareCols']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['minSpareCols'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['minSpareCols']).toBe(10);
    });
  }));

  it(`should set minSpareRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [minSpareRows]="prop['minSpareRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['minSpareRows'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['minSpareRows']).toBe(10);
    });
  }));

  it(`should set multiSelect defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [multiSelect]="prop['multiSelect']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['multiSelect'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['multiSelect']).toBe(true);
    });
  }));

  it(`should set nestedHeaders defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [nestedHeaders]="prop['nestedHeaders']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['nestedHeaders'] = [1, 2, 3];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['nestedHeaders'][1]).toBe(2);
    });
  }));

  it(`should set noWordWrapClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [noWordWrapClassName]="prop['noWordWrapClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['noWordWrapClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['noWordWrapClassName']).toBe('test');
    });
  }));

  xit(`should set observeChanges defined as bindings`, () => {
    // Error during cleanup of component 
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [observeChanges]="prop['observeChanges']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['observeChanges'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['observeChanges']).toBe(true);
    });
  });

  it(`should set observeDOMVisibility defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [observeDOMVisibility]="prop['observeDOMVisibility']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['observeDOMVisibility'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['observeDOMVisibility']).toBe(true);
    });
  }));

  it(`should set outsideClickDeselects defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [outsideClickDeselects]="prop['outsideClickDeselects']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['outsideClickDeselects'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['outsideClickDeselects']).toBe(false);
    });
  }));

  it(`should set pasteMode defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [pasteMode]="prop['pasteMode']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['pasteMode'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['pasteMode']).toBe('test');
    });
  }));

  it(`should set persistentState defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [persistentState]="prop['persistentState']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['persistentState'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['persistentState']).toBe(true);
    });
  }));

  it(`should set placeholder defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [placeholder]="prop['placeholder']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['placeholder'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['placeholder']).toBe(true);
    });
  }));

  it(`should set placeholderCellClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [placeholderCellClassName]="prop['placeholderCellClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['placeholderCellClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['placeholderCellClassName']).toBe('test');
    });
  }));

  xit(`should set preventOverflow defined as bindings`, async(() => {
    // Is not updated by updateSettings()?
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [preventOverflow]="prop['preventOverflow']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['preventOverflow'] = 'horizontal';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['preventOverflow']).toBe('horizontal');
    });
  }));

  it(`should set readOnly defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [readOnly]="prop['readOnly']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['readOnly'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['readOnly']).toBe(true);
    });
  }));

  it(`should set readOnlyCellClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [readOnlyCellClassName]="prop['readOnlyCellClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['readOnlyCellClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['readOnlyCellClassName']).toBe('test');
    });
  }));

  it(`should set renderAllRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [renderAllRows]="prop['renderAllRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['renderAllRows'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['renderAllRows']).toBe(true);
    });
  }));

  it(`should set renderer defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [renderer]="prop['renderer']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['renderer'] = 'text';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['renderer']).toBe('text');
    });
  }));

  it(`should set rowHeaders defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [rowHeaders]="prop['rowHeaders']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['rowHeaders'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['rowHeaders']).toBe(true);
    });
  }));

  it(`should set rowHeaderWidth defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [rowHeaderWidth]="prop['rowHeaderWidth']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['rowHeaderWidth'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['rowHeaderWidth']).toBe(10);
    });
  }));

  it(`should set rowHeights defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [rowHeights]="prop['rowHeights']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['rowHeights'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['rowHeights']).toBe(10);
    });
  }));

  it(`should set search defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [search]="prop['search']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['search'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['search']).toBe(true);
    });
  }));

  it(`should set selectOptions defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [selectOptions]="prop['selectOptions']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['selectOptions'] = ['test'];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['selectOptions'][0]).toBe('test');
    });
  }));

  it(`should set skipColumnOnPaste defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [skipColumnOnPaste]="prop['skipColumnOnPaste']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['skipColumnOnPaste'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['skipColumnOnPaste']).toBe(true);
    });
  }));

  it(`should set sortByRelevance defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [sortByRelevance]="prop['sortByRelevance']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['sortByRelevance'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['sortByRelevance']).toBe(true);
    });
  }));

  it(`should set sortFunction defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [sortFunction]="prop['sortFunction']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['sortFunction'] = function() {
        return 'test'
      };
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['sortFunction']()).toBe('test');
    });
  }));

  it(`should set sortIndicator defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [sortIndicator]="prop['sortIndicator']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['sortIndicator'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['sortIndicator']).toBe(true);
    });
  }));

  it(`should set source defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [source]="prop['source']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['source'] = [0, 1, 2];
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['source'][1]).toBe(1);
    });
  }));

  it(`should set startCols defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [startCols]="prop['startCols']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['startCols'] = 1;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['startCols']).toBe(1);
    });
  }));

  it(`should set startRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [startRows]="prop['startRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['startRows'] = 1;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['startRows']).toBe(1);
    });
  }));

  it(`should set stretchH defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [stretchH]="prop['stretchH']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['stretchH'] = 'all';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['stretchH']).toBe('all');
    });
  }));

  it(`should set strict defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [strict]="prop['strict']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['strict'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['strict']).toBe(true);
    });
  }));

  it(`should set tableClassName defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [tableClassName]="prop['tableClassName']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['tableClassName'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['tableClassName']).toBe('test');
    });
  }));

  it(`should set tabMoves defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [tabMoves]="prop['tabMoves']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['tabMoves'] = {attr: 1};
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['tabMoves']['attr']).toBe(1);
    });
  }));

  it(`should set title defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [title]="prop['title']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['title'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['title']).toBe('test');
    });
  }));

  it(`should set trimDropdown defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [trimDropdown]="prop['trimDropdown']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['trimDropdown'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['trimDropdown']).toBe(true);
    });
  }));

  it(`should set trimRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [trimRows]="prop['trimRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['trimRows'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['trimRows']).toBe(true);
    });
  }));

  it(`should set trimWhitespace defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [trimWhitespace]="prop['trimWhitespace']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['trimWhitespace'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['trimWhitespace']).toBe(true);
    });
  }));

  it(`should set type defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [type]="prop['type']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['type'] = 'date';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['type']).toBe('date');
    });
  }));

  it(`should set uncheckedTemplate defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [uncheckedTemplate]="prop['uncheckedTemplate']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['uncheckedTemplate'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['uncheckedTemplate']).toBe(true);
    });
  }));

  it(`should set undo defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [undo]="prop['undo']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['undo'] = true;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['undo']).toBe(true);
    });
  }));

  it(`should set validator defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [validator]="prop['validator']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['validator'] = 'test';
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['validator']).toBe('test');
    });
  }));

  it(`should set viewportColumnRenderingOffset defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [viewportColumnRenderingOffset]="prop['viewportColumnRenderingOffset']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['viewportColumnRenderingOffset'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['viewportColumnRenderingOffset']).toBe(10);
    });
  }));

  it(`should set viewportRowRenderingOffset defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [viewportRowRenderingOffset]="prop['viewportRowRenderingOffset']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['viewportRowRenderingOffset'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['viewportRowRenderingOffset']).toBe(10);
    });
  }));

  it(`should set visibleRows defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [visibleRows]="prop['visibleRows']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['visibleRows'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['visibleRows']).toBe(10);
    });
  }));

  it(`should set width defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [width]="prop['width']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['width'] = 10;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['width']).toBe(10);
    });
  }));

  it(`should set wordWrap defined as bindings`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table hotId="hot" [wordWrap]="prop['wordWrap']"></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app['prop']['wordWrap'] = false;
      fixture.detectChanges();
      expect(app.hot('hot').getSettings()['wordWrap']).toBe(false);
    });
  }));
});