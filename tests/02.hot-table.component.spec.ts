import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestModule } from './test.module';
import { HotRegisterer } from '../src/hot-registerer.service';

import Handsontable from 'handsontable';

describe('hot-table', () => {
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

  describe('inputs', () => {
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
            <hot-table [hotId]="prop.hotTableId"></hot-table>
            <hot-table [hotId]="'hot1'"></hot-table>
            <hot-table hotId="hot2"></hot-table>
          `
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hotTableId'] = 'hot';

        fixture.detectChanges();

        expect(app.hot('hot')).toBeTruthy();
        expect(app.hot('hot1')).toBeTruthy();
        expect(app.hot('hot2')).toBeTruthy();
      });
    }));

    it(`should set 'settings' defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          data: Handsontable.helper.createSpreadsheetData(5, 5)
        };

        fixture.detectChanges();
        expect(app.hot('hot').getDataAtCell(0, 0)).toBe('A1');
      });
    }));

    it(`should set allowEmpty defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowEmpty]="prop.allowEmpty"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowEmpty'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowEmpty']).toBe(false);

        app.prop['allowEmpty'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowEmpty']).toBe(true);
      });
    }));

    it(`should set allowHtml defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowHtml]="prop.allowHtml"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowHtml'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowHtml']).toBe(false);

        app.prop['allowHtml'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowHtml']).toBe(true);
      });
    }));

    it(`should set allowInsertColumn defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowInsertColumn]="prop.allowInsertColumn"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInsertColumn'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInsertColumn']).toBe(false);

        app.prop['allowInsertColumn'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInsertColumn']).toBe(true);
      });
    }));

    it(`should set allowInsertRow defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowInsertRow]="prop.allowInsertRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInsertRow'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInsertRow']).toBe(false);

        app.prop['allowInsertRow'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInsertRow']).toBe(true);
      });
    }));

    it(`should set allowInvalid defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowInvalid]="prop.allowInvalid"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInvalid'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInvalid']).toBe(false);

        app.prop['allowInvalid'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowInvalid']).toBe(true);
      });
    }));

    it(`should set allowRemoveColumn defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowRemoveColumn]="prop.allowRemoveColumn"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowRemoveColumn'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowRemoveColumn']).toBe(false);

        app.prop['allowRemoveColumn'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowRemoveColumn']).toBe(true);
      });
    }));

    it(`should set allowRemoveRow defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [allowRemoveRow]="prop.allowRemoveRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowRemoveRow'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowRemoveRow']).toBe(false);

        app.prop['allowRemoveRow'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['allowRemoveRow']).toBe(true);
      });
    }));

    it(`should set autoColumnSize defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [autoColumnSize]="prop.autoColumnSize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoColumnSize'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoColumnSize']).toBe(false);

        app.prop['autoColumnSize'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoColumnSize']).toBe(true);

        app.prop['autoColumnSize'] = { syncLimit: '40%' };
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoColumnSize']['syncLimit']).toBe('40%');
      });
    }));

    it(`should set autoComplete defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [autoComplete]="prop.autoComplete"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoComplete']).toBeUndefined();

        app.prop['autoComplete'] = ['A'];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoComplete'][0]).toBe('A');
      });
    }));

    it(`should set autoRowSize defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [autoRowSize]="prop.autoRowSize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoRowSize'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoRowSize']).toBe(false);

        app.prop['autoRowSize'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoRowSize']).toBe(true);

        app.prop['autoRowSize'] = { syncLimit: '40%' };
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoRowSize']['syncLimit']).toBe('40%');
      });
    }));

    it(`should set autoWrapCol defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [autoWrapCol]="prop.autoWrapCol"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoWrapCol'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoWrapCol']).toBe(false);

        app.prop['autoWrapCol'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoWrapCol']).toBe(true);
      });
    }));

    it(`should set autoWrapRow defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [autoWrapRow]="prop.autoWrapRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoWrapRow'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(false);

        app.prop['autoWrapRow'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(true);
      });
    }));

    it(`should set bindRowsWithHeaders defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [bindRowsWithHeaders]="prop.bindRowsWithHeaders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['bindRowsWithHeaders'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['autoWrapRow']).toBe(false);

        app.prop['bindRowsWithHeaders'] = 'loose';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['bindRowsWithHeaders']).toBe('loose');
      });
    }));

    it(`should set cell defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [cell]="prop.cell"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['cell'] = [
          {row: 0, col: 0, readOnly: true}
        ];
        fixture.detectChanges();
        expect(app.hot('hot').getCellMeta(0, 0)['readOnly']).toBe(true);
      });
    }));

    it(`should set cells defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [cells]="prop.cells"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['cells'] = function(row, column, prop) {
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
          template: `<hot-table hotId="hot" [checkedTemplate]="prop.checkedTemplate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['checkedTemplate'] = false

        fixture.detectChanges();
        expect(app.hot('hot').getCellMeta(2, 2)['checkedTemplate']).toBe(false);
      });
    }));

    it(`should set className defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [className]="prop.className"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['className'] = 'test'

        fixture.detectChanges();
        expect(app.hot('hot').getCellMeta(2, 2)['className']).toBe('test');
      });
    }));

    it(`should set colHeaders defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [colHeaders]="prop.headers"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['headers'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['colHeaders']).toBe(false);

        app.prop['headers'] = 'Header';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['colHeaders']).toBe('Header');
      });
    }));

    it(`should set collapsibleColumns defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [collapsibleColumns]="prop.collapsibleColumns"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['collapsibleColumns'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['collapsibleColumns']).toBe(true);

        app.prop['collapsibleColumns'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['collapsibleColumns']).toBe(false);
      });
    }));

    it(`should set columnHeaderHeight defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [columnHeaderHeight]="prop.columnHeaderHeight"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnHeaderHeight'] = 40;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columnHeaderHeight']).toBe(40);

        app.prop['columnHeaderHeight'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columnHeaderHeight']).toBe(10);
      });
    }));

    it(`should set columns defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [columns]="prop.columns"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columns'] = [{}, {}, {}];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columns'].length).toBe(3);

        app.prop['columns'] = [{}];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columns'].length).toBe(1);
      });
    }));
    it(`should set columnSorting defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [colHeaders]="true" [columnSorting]="prop.columnSorting"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnSorting'] = true;
        fixture.detectChanges();

        expect(app.hot('hot').getSettings()['columnSorting']).toBe(true);

        app.prop['columnSorting'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columnSorting']).toBe(false);
      });
    });

    it(`should set columnSummary defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [columnSummary]="prop.columnSummary"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnSummary'] = {attr: 1};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['columnSummary']['attr']).toBe(1);
      });
    }));

    it(`should set colWidths defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [colWidths]="prop.colWidths"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['colWidths'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['colWidths']).toBe(10);

        app.prop['colWidths'] = 40;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['colWidths']).toBe(40);
      });
    }));

    it(`should set commentedCellClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [commentedCellClassName]="prop.commentedCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['commentedCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['commentedCellClassName']).toBe('test');
      });
    }));

    it(`should set comments defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [comments]="prop.comments"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['comments'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['comments']).toBe(true);
      });
    }));

    it(`should set contextMenu defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [contextMenu]="prop.contextMenu"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['contextMenu'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['contextMenu']).toBe(true);
      });
    }));

    it(`should set copyable defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [copyable]="prop.copyable"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyable'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['copyable']).toBe(true);
      });
    }));

    it(`should set copyColsLimit defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [copyColsLimit]="prop.copyColsLimit"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyColsLimit'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['copyColsLimit']).toBe(10);
      });
    }));

    it(`should set copyPaste defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [copyPaste]="prop.copyPaste"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyPaste'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['copyPaste']).toBe(false);
      });
    }));

    it(`should set copyRowsLimit defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [copyRowsLimit]="prop.copyRowsLimit"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyRowsLimit'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['copyRowsLimit']).toBe(10);
      });
    }));

    it(`should set correctFormat defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [correctFormat]="prop.correctFormat"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['correctFormat'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['correctFormat']).toBe(true);
      });
    }));

    it(`should set currentColClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [currentColClassName]="prop.currentColClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentColClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['currentColClassName']).toBe('test');
      });
    }));

    it(`should set currentHeaderClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [currentHeaderClassName]="prop.currentHeaderClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentHeaderClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['currentHeaderClassName']).toBe('test');
      });
    }));

    it(`should set currentRowClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [currentRowClassName]="prop.currentRowClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentRowClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['currentRowClassName']).toBe('test');
      });
    }));

    it(`should set customBorders defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [customBorders]="prop.customBorders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['customBorders'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['customBorders']).toBe(true);
      });
    }));

    it(`should set data defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [data]="prop.data"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['data'] = [[1, 2, 3]];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['data'][0][0]).toBe(1);
      });
    }));

    it(`should set dataSchema defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [dataSchema]="prop.dataSchema"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dataSchema'] = {attr: null};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['dataSchema']['attr']).toBe(null);
      });
    }));

    it(`should set dateFormat defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [dateFormat]="prop.dateFormat"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dateFormat'] = 'hh:mm:ss';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['dateFormat']).toBe('hh:mm:ss');
      });
    }));

    it(`should set debug defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [debug]="prop.debug"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['debug'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['debug']).toBe(true);
      });
    }));

    it(`should set defaultDate defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [defaultDate]="prop.defaultDate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['defaultDate'] = '1970-01-01';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['defaultDate']).toBe('1970-01-01');
      });
    }));

    it(`should set disableVisualSelection defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [disableVisualSelection]="prop.disableVisualSelection"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['disableVisualSelection'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['disableVisualSelection']).toBe(true);
      });
    }));

    it(`should set dropdownMenu defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [dropdownMenu]="prop.dropdownMenu"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dropdownMenu'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['dropdownMenu']).toBe(true);
      });
    }));

    it(`should set editor defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [editor]="prop.editor"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['editor'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['editor']).toBe(false);
      });
    }));

    it(`should set enterBeginsEditing defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [enterBeginsEditing]="prop.enterBeginsEditing"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterBeginsEditing'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['enterBeginsEditing']).toBe(false);
      });
    }));

    it(`should set enterMoves defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [enterMoves]="prop.enterMoves"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['enterMoves']['attr']).toBe(1);
      });
    }));

    it(`should set fillHandle defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [fillHandle]="prop.fillHandle"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fillHandle'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['fillHandle']).toBe(false);
      });
    }));

    it(`should set filter defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [filter]="prop.filter"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filter'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['filter']).toBe(true);
      });
    }));

    it(`should set filteringCaseSensitive defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [filteringCaseSensitive]="prop.filteringCaseSensitive"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filteringCaseSensitive'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['filteringCaseSensitive']).toBe(true);
      });
    }));

    it(`should set filters defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [filters]="prop.filters"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filters'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['filters']).toBe(true);
      });
    }));

    it(`should set fixedColumnsLeft defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [fixedColumnsLeft]="prop.fixedColumnsLeft"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedColumnsLeft'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['fixedColumnsLeft']).toBe(10);
      });
    }));

    it(`should set fixedRowsBottom defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [fixedRowsBottom]="prop.fixedRowsBottom"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedRowsBottom'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['fixedRowsBottom']).toBe(10);
      });
    }));

    it(`should set fixedRowsTop defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [fixedRowsTop]="prop.fixedRowsTop"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedRowsTop'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['fixedRowsTop']).toBe(10);
      });
    }));

    it(`should set format defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [format]="prop.format"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['format'] = '$0.00,0';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['format']).toBe('$0.00,0');
      });
    }));

    it(`should set formulas defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [formulas]="prop.formulas"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['formulas'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['formulas']).toBe(true);
      });
    }));

    it(`should set fragmentSelection defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [fragmentSelection]="prop.fragmentSelection"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fragmentSelection'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['fragmentSelection']).toBe(true);
      });
    }));

    it(`should set ganttChart defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [ganttChart]="prop.ganttChart"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['ganttChart'] = {attr:1};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['ganttChart']['attr']).toBe(1);
      });
    }));

    it(`should set headerTooltips defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [headerTooltips]="prop.headerTooltips"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['headerTooltips'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['headerTooltips']).toBe(true);
      });
    }));

    it(`should set height defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [height]="prop.height"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['height'] = 100;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['height']).toBe(100);
      });
    }));

    it(`should set hiddenColumns defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [hiddenColumns]="prop.hiddenColumns"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hiddenColumns'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['hiddenColumns']).toBe(true);
      });
    }));

    it(`should set hiddenRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [hiddenRows]="prop.hiddenRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hiddenRows'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['hiddenRows']).toBe(true);
      });
    }));

    it(`should set invalidCellClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [invalidCellClassName]="prop.invalidCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['invalidCellClassName'] = 'invalid';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['invalidCellClassName']).toBe('invalid');
      });
    }));

    it(`should set label defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [label]="prop.label"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['label'] = {attr:1};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['label']['attr']).toBe(1);
      });
    }));

    it(`should set language defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [language]="prop.language"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['language'] = 'en';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['language']).toBe('en');
      });
    }));

    it(`should set manualColumnFreeze defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [manualColumnFreeze]="prop.manualColumnFreeze"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnFreeze'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['manualColumnFreeze']).toBe(true);
      });
    }));

    it(`should set manualColumnMove defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [manualColumnMove]="prop.manualColumnMove"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnMove'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['manualColumnMove']).toBe(true);
      });
    }));

    it(`should set manualColumnResize defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [manualColumnResize]="prop.manualColumnResize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnResize'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['manualColumnResize']).toBe(true);
      });
    }));

    it(`should set manualRowMove defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [manualRowMove]="prop.manualRowMove"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowMove'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['manualRowMove']).toBe(true);
      });
    }));

    it(`should set manualRowResize defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [manualRowResize]="prop.manualRowResize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowResize'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['manualRowResize']).toBe(true);
      });
    }));

    it(`should set maxCols defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [maxCols]="prop.maxCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxCols'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['maxCols']).toBe(10);
      });
    }));

    it(`should set maxRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [maxRows]="prop.maxRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxRows'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['maxRows']).toBe(10);
      });
    }));

    it(`should set mergeCells defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [mergeCells]="prop.mergeCells"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['mergeCells'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['mergeCells']).toBe(true);
      });
    }));

    it(`should set minCols defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [minCols]="prop.minCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minCols'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['minCols']).toBe(10);
      });
    }));

    it(`should set minRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [minRows]="prop.minRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minRows'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['minRows']).toBe(10);
      });
    }));

    it(`should set minSpareCols defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [minSpareCols]="prop.minSpareCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareCols'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['minSpareCols']).toBe(10);
      });
    }));

    it(`should set minSpareRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [minSpareRows]="prop.minSpareRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareRows'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['minSpareRows']).toBe(10);
      });
    }));

    it(`should set multiSelect defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [multiSelect]="prop.multiSelect"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['multiSelect'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['multiSelect']).toBe(true);
      });
    }));

    it(`should set nestedHeaders defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [nestedHeaders]="prop.nestedHeaders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['nestedHeaders'] = [1, 2, 3];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['nestedHeaders'][1]).toBe(2);
      });
    }));

    it(`should set noWordWrapClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [noWordWrapClassName]="prop.noWordWrapClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['noWordWrapClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['noWordWrapClassName']).toBe('test');
      });
    }));

    xit(`should set observeChanges defined as bindings`, () => {
      // Error during cleanup of component 
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [observeChanges]="prop.observeChanges"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeChanges'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['observeChanges']).toBe(true);
      });
    });

    it(`should set observeDOMVisibility defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [observeDOMVisibility]="prop.observeDOMVisibility"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeDOMVisibility'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['observeDOMVisibility']).toBe(true);
      });
    }));

    it(`should set outsideClickDeselects defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [outsideClickDeselects]="prop.outsideClickDeselects"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['outsideClickDeselects'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['outsideClickDeselects']).toBe(false);
      });
    }));

    it(`should set pasteMode defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [pasteMode]="prop.pasteMode"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['pasteMode'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['pasteMode']).toBe('test');
      });
    }));

    it(`should set persistentState defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [persistentState]="prop.persistentState"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['persistentState'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['persistentState']).toBe(true);
      });
    }));

    it(`should set placeholder defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [placeholder]="prop.placeholder"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholder'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['placeholder']).toBe(true);
      });
    }));

    it(`should set placeholderCellClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [placeholderCellClassName]="prop.placeholderCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholderCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['placeholderCellClassName']).toBe('test');
      });
    }));

    it(`should set preventOverflow defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [preventOverflow]="prop.preventOverflow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['preventOverflow'] = 'horizontal';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['preventOverflow']).toBe('horizontal');

        app.prop['preventOverflow'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['preventOverflow']).toBe(false);
      });
    }));

    it(`should set readOnly defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [readOnly]="prop.readOnly"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnly'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['readOnly']).toBe(true);
      });
    }));

    it(`should set readOnlyCellClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [readOnlyCellClassName]="prop.readOnlyCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnlyCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['readOnlyCellClassName']).toBe('test');
      });
    }));

    it(`should set renderAllRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [renderAllRows]="prop.renderAllRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderAllRows'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['renderAllRows']).toBe(true);
      });
    }));

    it(`should set renderer defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [renderer]="prop.renderer"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderer'] = 'text';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['renderer']).toBe('text');
      });
    }));

    it(`should set rowHeaders defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [rowHeaders]="prop.rowHeaders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaders'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['rowHeaders']).toBe(true);
      });
    }));

    it(`should set rowHeaderWidth defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [rowHeaderWidth]="prop.rowHeaderWidth"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaderWidth'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['rowHeaderWidth']).toBe(10);
      });
    }));

    it(`should set rowHeights defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [rowHeights]="prop.rowHeights"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeights'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['rowHeights']).toBe(10);
      });
    }));

    it(`should set search defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [search]="prop.search"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['search'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['search']).toBe(true);
      });
    }));

    it(`should set selectOptions defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [selectOptions]="prop.selectOptions"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['selectOptions'] = ['test'];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['selectOptions'][0]).toBe('test');
      });
    }));

    it(`should set skipColumnOnPaste defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [skipColumnOnPaste]="prop.skipColumnOnPaste"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['skipColumnOnPaste'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['skipColumnOnPaste']).toBe(true);
      });
    }));

    it(`should set sortByRelevance defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [sortByRelevance]="prop.sortByRelevance"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['sortByRelevance'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['sortByRelevance']).toBe(true);
      });
    }));

    it(`should set sortFunction defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [sortFunction]="prop.sortFunction"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['sortFunction'] = function() {
          return 'test'
        };
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['sortFunction']()).toBe('test');
      });
    }));

    it(`should set sortIndicator defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [sortIndicator]="prop.sortIndicator"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['sortIndicator'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['sortIndicator']).toBe(true);
      });
    }));

    it(`should set source defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [source]="prop.source"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['source'] = [0, 1, 2];
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['source'][1]).toBe(1);
      });
    }));

    it(`should set startCols defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [startCols]="prop.startCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startCols'] = 1;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['startCols']).toBe(1);
      });
    }));

    it(`should set startRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [startRows]="prop.startRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startRows'] = 1;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['startRows']).toBe(1);
      });
    }));

    it(`should set stretchH defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [stretchH]="prop.stretchH"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['stretchH'] = 'all';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['stretchH']).toBe('all');
      });
    }));

    it(`should set strict defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [strict]="prop.strict"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['strict'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['strict']).toBe(true);
      });
    }));

    it(`should set tableClassName defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [tableClassName]="prop.tableClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tableClassName'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['tableClassName']).toBe('test');
      });
    }));

    it(`should set tabMoves defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [tabMoves]="prop.tabMoves"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tabMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['tabMoves']['attr']).toBe(1);
      });
    }));

    it(`should set title defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [title]="prop.title"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['title'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['title']).toBe('test');
      });
    }));

    it(`should set trimDropdown defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [trimDropdown]="prop.trimDropdown"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimDropdown'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['trimDropdown']).toBe(true);
      });
    }));

    it(`should set trimRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [trimRows]="prop.trimRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimRows'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['trimRows']).toBe(true);
      });
    }));

    it(`should set trimWhitespace defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [trimWhitespace]="prop.trimWhitespace"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimWhitespace'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['trimWhitespace']).toBe(true);
      });
    }));

    it(`should set type defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [type]="prop.type"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['type'] = 'date';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['type']).toBe('date');
      });
    }));

    it(`should set uncheckedTemplate defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [uncheckedTemplate]="prop.uncheckedTemplate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['uncheckedTemplate'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['uncheckedTemplate']).toBe(true);
      });
    }));

    it(`should set undo defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [undo]="prop.undo"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['undo'] = true;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['undo']).toBe(true);
      });
    }));

    it(`should set validator defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [validator]="prop.validator"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['validator'] = 'test';
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['validator']).toBe('test');
      });
    }));

    it(`should set viewportColumnRenderingOffset defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [viewportColumnRenderingOffset]="prop.viewportColumnRenderingOffset"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportColumnRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['viewportColumnRenderingOffset']).toBe(10);
      });
    }));

    it(`should set viewportRowRenderingOffset defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [viewportRowRenderingOffset]="prop.viewportRowRenderingOffset"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportRowRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['viewportRowRenderingOffset']).toBe(10);
      });
    }));

    it(`should set visibleRows defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [visibleRows]="prop.visibleRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['visibleRows'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['visibleRows']).toBe(10);
      });
    }));

    it(`should set width defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [width]="prop.width"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['width'] = 10;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['width']).toBe(10);
      });
    }));

    it(`should set wordWrap defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [wordWrap]="prop.wordWrap"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['wordWrap'] = false;
        fixture.detectChanges();
        expect(app.hot('hot').getSettings()['wordWrap']).toBe(false);
      });
    }));
  });

  describe('outputs', () => {
    it(`should run afterAddChild hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterAddChild: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterAddChild')).toBe('test');
      });
    }));

    it(`should run afterBeginEditing hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterBeginEditing: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterBeginEditing')).toBe('test');
      });
    }));

    it(`should run afterCellMetaReset hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCellMetaReset: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCellMetaReset')).toBe('test');
      });
    }));

    it(`should run afterChange hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChange: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterChange')).toBe('test');
      });
    }));

    it(`should run afterChangesObserved hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChangesObserved: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterChangesObserved')).toBe('test');
      });
    }));

    it(`should run afterColumnMove hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnMove: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterColumnMove')).toBe('test');
      });
    }));

    it(`should run afterColumnResize hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnResize: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterColumnResize')).toBe('test');
      });
    }));

    it(`should run afterColumnSort hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnSort: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterColumnSort')).toBe('test');
      });
    }));

    it(`should run afterContextMenuDefaultOptions hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          contextMenu: true,
          afterContextMenuDefaultOptions: function(items) {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterContextMenuDefaultOptions', {items: []})).toBe('test');
      });
    }));

    it(`should run afterContextMenuHide hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuHide: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterContextMenuHide')).toBe('test');
      });
    }));

    it(`should run afterContextMenuShow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuShow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterContextMenuShow')).toBe('test');
      });
    }));

    it(`should run afterCopy hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopy: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCopy')).toBe('test');
      });
    }));

    it(`should run afterCopyLimit hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopyLimit: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCopyLimit')).toBe('test');
      });
    }));

    it(`should run afterCreateCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCreateCol')).toBe('test');
      });
    }));

    it(`should run afterCreateRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCreateRow')).toBe('test');
      });
    }));

    it(`should run afterCut hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCut: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterCut')).toBe('test');
      });
    }));

    it(`should run afterDeselect hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDeselect: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDeselect')).toBe('test');
      });
    }));

    it(`should run afterDestroy hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDestroy: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDestroy')).toBe('test');
      });
    }));

    it(`should run afterDetachChild hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDetachChild: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDetachChild')).toBe('test');
      });
    }));

    it(`should run afterDocumentKeyDown hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDocumentKeyDown: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDocumentKeyDown')).toBe('test');
      });
    }));

    it(`should run afterDropdownMenuDefaultOptions hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuDefaultOptions: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDropdownMenuDefaultOptions')).toBe('test');
      });
    }));

    it(`should run afterDropdownMenuHide hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuHide: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDropdownMenuHide')).toBe('test');
      });
    }));

    it(`should run afterDropdownMenuShow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuShow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterDropdownMenuShow')).toBe('test');
      });
    }));

    it(`should run afterFilter hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterFilter: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterFilter')).toBe('test');
      });
    }));

    it(`should run afterGetCellMeta hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetCellMeta: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterGetCellMeta')).toBe('test');
      });
    }));

    it(`should run afterGetColHeader hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetColHeader: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterGetColHeader')).toBe('test');
      });
    }));

    it(`should run afterGetColumnHeaderRenderers hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetColumnHeaderRenderers: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterGetColumnHeaderRenderers')).toBe('test');
      });
    }));

    it(`should run afterGetRowHeader hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeader: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterGetRowHeader')).toBe('test');
      });
    }));

    it(`should run afterGetRowHeaderRenderers hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeaderRenderers: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterGetRowHeaderRenderers')).toBe('test');
      });
    }));

    it(`should run afterInit hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterInit: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterInit')).toBe('test');
      });
    }));

    it(`should run afterLoadData hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterLoadData: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterLoadData')).toBe('test');
      });
    }));

    it(`should run afterModifyTransformEnd hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformEnd: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterModifyTransformEnd')).toBe('test');
      });
    }));

    it(`should run afterModifyTransformStart hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformStart: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterModifyTransformStart')).toBe('test');
      });
    }));

    it(`should run afterMomentumScroll hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterMomentumScroll: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterMomentumScroll')).toBe('test');
      });
    }));

    it(`should run afterOnCellCornerDblClick hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerDblClick: function() {
            return 'test';
          }
        }
        fixture.detectChanges();
        app.hot('hot').selectCell(0, 0);
        expect(app.hot('hot').runHooks('afterOnCellCornerDblClick')).toBe('test');
      });
    }));

    it(`should run afterOnCellCornerMouseDown hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerMouseDown: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterOnCellCornerMouseDown')).toBe('test');
      });
    }));

    it(`should run afterOnCellMouseDown hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseDown: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterOnCellMouseDown')).toBe('test');
      });
    }));

    it(`should run afterOnCellMouseOver hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOver: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterOnCellMouseOver')).toBe('test');
      });
    }));

    it(`should run afterOnCellMouseOut hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOut: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterOnCellMouseOut')).toBe('test');
      });
    }));

    it(`should run afterPluginsInitialized hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterPluginsInitialized: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterPluginsInitialized')).toBe('test');
      });
    }));

    it(`should run afterRedo hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRedo: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRedo')).toBe('test');
      });
    }));

    it(`should run afterRemoveCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRemoveCol')).toBe('test');
      });
    }));

    it(`should run afterRemoveRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRemoveRow')).toBe('test');
      });
    }));

    it(`should run afterRender hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRender: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRender')).toBe('test');
      });
    }));

    it(`should run afterRenderer hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRenderer: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRenderer')).toBe('test');
      });
    }));

    it(`should run afterRowMove hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowMove: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRowMove')).toBe('test');
      });
    }));

    it(`should run afterRowResize hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowResize: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterRowResize')).toBe('test');
      });
    }));

    it(`should run afterScrollHorizontally hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollHorizontally: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterScrollHorizontally')).toBe('test');
      });
    }));

    it(`should run afterScrollVertically hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollVertically: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterScrollVertically')).toBe('test');
      });
    }));

    it(`should run afterSelection hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelection: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSelection')).toBe('test');
      });
    }));

    it(`should run afterSelectionByProp hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionByProp: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSelectionByProp')).toBe('test');
      });
    }));

    it(`should run afterSelectionEnd hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEnd: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSelectionEnd')).toBe('test');
      });
    }));

    it(`should run afterSelectionEndByProp hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEndByProp: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSelectionEndByProp')).toBe('test');
      });
    }));

    it(`should run afterSetCellMeta hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetCellMeta: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSetCellMeta')).toBe('test');
      });
    }));

    it(`should run afterSetDataAtCell hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtCell: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSetDataAtCell')).toBe('test');
      });
    }));

    it(`should run afterSetDataAtRowProp hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtRowProp: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterSetDataAtRowProp')).toBe('test');
      });
    }));

    it(`should run afterTrimRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterTrimRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterTrimRow')).toBe('test');
      });
    }));

    it(`should run afterUndo hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUndo: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterUndo')).toBe('test');
      });
    }));

    it(`should run afterUntrimRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUntrimRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterUntrimRow')).toBe('test');
      });
    }));

    it(`should run afterUpdateSettings hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUpdateSettings: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterUpdateSettings')).toBe('test');
      });
    }));

    it(`should run afterValidate hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterValidate: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterValidate')).toBe('test');
      });
    }));

    it(`should run afterViewportColumnCalculatorOverride hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportColumnCalculatorOverride: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterViewportColumnCalculatorOverride')).toBe('test');
      });
    }));

    it(`should run afterViewportRowCalculatorOverride hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportRowCalculatorOverride: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('afterViewportRowCalculatorOverride')).toBe('test');
      });
    }));

    it(`should run beforeAddChild hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAddChild: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeAddChild')).toBe('test');
      });
    }));

    it(`should run beforeAutofill hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofill: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeAutofill')).toBe('test');
      });
    }));

    it(`should run beforeAutofillInsidePopulate hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofillInsidePopulate: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeAutofillInsidePopulate')).toBe('test');
      });
    }));

    it(`should run beforeCellAlignment hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCellAlignment: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeCellAlignment')).toBe('test');
      });
    }));

    it(`should run beforeChange hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChange: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeChange', [[0, 0, '', '']])).toBe('test');
      });
    }));

    it(`should run beforeChangeRender hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChangeRender: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeChangeRender')).toBe('test');
      });
    }));

    it(`should run beforeColumnMove hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnMove: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeColumnMove')).toBe('test');
      });
    }));

    it(`should run beforeColumnResize hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnResize: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeColumnResize')).toBe('test');
      });
    }));

    it(`should run beforeColumnSort hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnSort: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeColumnSort')).toBe('test');
      });
    }));

    it(`should run beforeContextMenuSetItems hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeContextMenuSetItems: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeContextMenuSetItems')).toBe('test');
      });
    }));

    it(`should run beforeCopy hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCopy: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeCopy')).toBe('test');
      });
    }));

    it(`should run beforeCreateCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeCreateCol')).toBe('test');
      });
    }));

    it(`should run beforeCreateRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeCreateRow')).toBe('test');
      });
    }));

    it(`should run beforeCut hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCut: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeCut')).toBe('test');
      });
    }));

    it(`should run beforeDetachChild hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDetachChild: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeDetachChild')).toBe('test');
      });
    }));

    it(`should run beforeDrawBorders hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDrawBorders: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeDrawBorders')).toBe('test');
      });
    }));

    it(`should run beforeDropdownMenuSetItems hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDropdownMenuSetItems: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeDropdownMenuSetItems')).toBe('test');
      });
    }));

    it(`should run beforeFilter hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeFilter: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeFilter')).toBe('test');
      });
    }));

    it(`should run beforeGetCellMeta hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeGetCellMeta: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeGetCellMeta')).toBe('test');
      });
    }));

    it(`should run beforeInit hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInit: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeInit')).toBe('test');
      });
    }));

    it(`should run beforeInitWalkontable hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInitWalkontable: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeInitWalkontable')).toBe('test');
      });
    }));

    it(`should run beforeKeyDown hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeKeyDown: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeKeyDown')).toBe('test');
      });
    }));

    it(`should run beforeOnCellMouseDown hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseDown: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeOnCellMouseDown')).toBe('test');
      });
    }));

    it(`should run beforeOnCellMouseOut hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOut: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeOnCellMouseOut')).toBe('test');
      });
    }));

    it(`should run beforeOnCellMouseOver hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOver: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeOnCellMouseOver')).toBe('test');
      });
    }));

    it(`should run beforePaste hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforePaste: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforePaste')).toBe('test');
      });
    }));

    it(`should run beforeRedo hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRedo: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRedo')).toBe('test');
      });
    }));

    it(`should run beforeRemoveCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRemoveCol')).toBe('test');
      });
    }));

    it(`should run beforeRemoveRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRemoveRow')).toBe('test');
      });
    }));

    it(`should run beforeRender hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRender: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRender')).toBe('test');
      });
    }));

    it(`should run beforeRenderer hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRenderer: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRenderer')).toBe('test');
      });
    }));

    it(`should run beforeRowMove hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowMove: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRowMove')).toBe('test');
      });
    }));

    it(`should run beforeRowResize hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowResize: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeRowResize')).toBe('test');
      });
    }));

    it(`should run beforeSetRangeEnd hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeEnd: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeSetRangeEnd')).toBe('test');
      });
    }));

    it(`should run beforeSetRangeStart hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeStart: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeSetRangeStart')).toBe('test');
      });
    }));

    it(`should run beforeStretchingColumnWidth hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeStretchingColumnWidth: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeStretchingColumnWidth')).toBe('test');
      });
    }));

    it(`should run beforeTouchScroll hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeTouchScroll: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeTouchScroll')).toBe('test');
      });
    }));

    it(`should run beforeUndo hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeUndo: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeUndo')).toBe('test');
      });
    }));

    it(`should run beforeValidate hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValidate: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeValidate')).toBe('test');
      });
    }));

    it(`should run beforeValueRender hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValueRender: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('beforeValueRender')).toBe('test');
      });
    }));

    it(`should run construct hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          construct: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('construct')).toBe('test');
      });
    }));

    it(`should run hiddenColumn hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          hiddenColumn: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('hiddenColumn')).toBe('test');
      });
    }));

    it(`should run hiddenRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          hiddenRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('hiddenRow')).toBe('test');
      });
    }));

    it(`should run init hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          init: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('init')).toBe('test');
      });
    }));

    it(`should run manualRowHeights hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          manualRowHeights: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('manualRowHeights')).toBe('test');
      });
    }));

    it(`should run modifyAutofillRange hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyAutofillRange: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyAutofillRange')).toBe('test');
      });
    }));

    it(`should run modifyCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyCol')).toBe('test');
      });
    }));

    it(`should run modifyColHeader hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColHeader: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyColHeader')).toBe('test');
      });
    }));

    it(`should run modifyColumnHeaderHeight hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColumnHeaderHeight: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyColumnHeaderHeight')).toBe('test');
      });
    }));

    it(`should run modifyColWidth hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColWidth: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyColWidth')).toBe('test');
      });
    }));

    it(`should run modifyCopyableRange hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCopyableRange: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyCopyableRange')).toBe('test');
      });
    }));

    it(`should run modifyData hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyData: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyData')).toBe('test');
      });
    }));

    it(`should run modifyRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyRow')).toBe('test');
      });
    }));

    it(`should run modifyRowHeader hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeader: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyRowHeader')).toBe('test');
      });
    }));

    it(`should run modifyRowHeaderWidth hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeaderWidth: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyRowHeaderWidth')).toBe('test');
      });
    }));

    it(`should run modifyRowHeight hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeight: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyRowHeight')).toBe('test');
      });
    }));

    it(`should run modifyRowData hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowData: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyRowData')).toBe('test');
      });
    }));

    it(`should run modifyTransformEnd hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformEnd: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyTransformEnd')).toBe('test');
      });
    }));

    it(`should run modifyTransformStart hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformStart: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('modifyTransformStart')).toBe('test');
      });
    }));

    it(`should run persistentStateLoad hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateLoad: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('persistentStateLoad')).toBe('test');
      });
    }));

    it(`should run persistentStateReset hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateReset: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('persistentStateReset')).toBe('test');
      });
    }));

    it(`should run persistentStateSave hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateSave: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('persistentStateSave')).toBe('test');
      });
    }));

    it(`should run skipLengthCache hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          skipLengthCache: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('skipLengthCache')).toBe('test');
      });
    }));

    it(`should run unmodifyCol hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyCol: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('unmodifyCol')).toBe('test');
      });
    }));

    it(`should run unmodifyRow hook defined in settings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table hotId="hot" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyRow: function() {
            return 'test';
          }
        }

        fixture.detectChanges();
        expect(app.hot('hot').runHooks('unmodifyRow')).toBe('test');
      });
    }));
  });
});