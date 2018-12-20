import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import * as Handsontable from 'handsontable';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ HotTableModule.forRoot() ],
    });
  }));

  it(`should render 'hot-table'`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<hot-table></hot-table>`
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const elem = fixture.nativeElement;

      fixture.detectChanges();

      expect(elem.querySelectorAll('.handsontable').length).toBeGreaterThan(0);
    });
  });

  describe('inputs', () => {
    it(`should add reference to 'hotRegisterer' by attribute`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        fixture.detectChanges();

        expect(app.getHotInstance(app.id)).toBeTruthy();
      });
    });

    it(`should register every hot-table component with added ID attribute`, () => {
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

        expect(app.getHotInstance(app.prop['hotTableId'])).toBeDefined();
        expect(app.getHotInstance('hot1')).toBeDefined();
        expect(app.getHotInstance('hot2')).toBeDefined();
      });
    });

    it(`should set 'settings' defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          data: Handsontable.helper.createSpreadsheetData(5, 5)
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getDataAtCell(0, 0)).toBe('A1');
      });
    });

    it(`should be possible to get custom option over to 'settings' defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          customOption: 'test',
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['customOption']).toBe('test');
      });
    });

    it(`should set activeHeaderClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [activeHeaderClassName]="prop.activeHeaderClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['activeHeaderClassName'] = 'active';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['activeHeaderClassName']).toBe('active');

        app.prop['activeHeaderClassName'] = 'active_header';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['activeHeaderClassName']).toBe('active_header');
      });
    });

    it(`should set allowEmpty defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowEmpty]="prop.allowEmpty"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowEmpty'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowEmpty']).toBe(false);

        app.prop['allowEmpty'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowEmpty']).toBe(true);
      });
    });

    it(`should set allowHtml defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowHtml]="prop.allowHtml"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowHtml'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowHtml']).toBe(false);

        app.prop['allowHtml'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowHtml']).toBe(true);
      });
    });

    it(`should set allowInsertColumn defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInsertColumn]="prop.allowInsertColumn"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInsertColumn'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInsertColumn']).toBe(false);

        app.prop['allowInsertColumn'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInsertColumn']).toBe(true);
      });
    });

    it(`should set allowInsertRow defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInsertRow]="prop.allowInsertRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInsertRow'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInsertRow']).toBe(false);

        app.prop['allowInsertRow'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInsertRow']).toBe(true);
      });
    });

    it(`should set allowInvalid defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInvalid]="prop.allowInvalid"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowInvalid'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInvalid']).toBe(false);

        app.prop['allowInvalid'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowInvalid']).toBe(true);
      });
    });

    it(`should set allowRemoveColumn defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowRemoveColumn]="prop.allowRemoveColumn"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowRemoveColumn'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowRemoveColumn']).toBe(false);

        app.prop['allowRemoveColumn'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowRemoveColumn']).toBe(true);
      });
    });

    it(`should set allowRemoveRow defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowRemoveRow]="prop.allowRemoveRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['allowRemoveRow'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowRemoveRow']).toBe(false);

        app.prop['allowRemoveRow'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['allowRemoveRow']).toBe(true);
      });
    });

    it(`should set autoColumnSize defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoColumnSize]="prop.autoColumnSize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoColumnSize'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoColumnSize']).toBe(false);

        app.prop['autoColumnSize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoColumnSize']).toBe(true);

        app.prop['autoColumnSize'] = { syncLimit: '40%' };
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoColumnSize']['syncLimit']).toBe('40%');
      });
    });

    it(`should set autoRowSize defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoRowSize]="prop.autoRowSize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoRowSize'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoRowSize']).toBe(false);

        app.prop['autoRowSize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoRowSize']).toBe(true);

        app.prop['autoRowSize'] = { syncLimit: '40%' };
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoRowSize']['syncLimit']).toBe('40%');
      });
    });

    it(`should set autoWrapCol defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoWrapCol]="prop.autoWrapCol"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoWrapCol'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoWrapCol']).toBe(false);

        app.prop['autoWrapCol'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoWrapCol']).toBe(true);
      });
    });

    it(`should set autoWrapRow defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoWrapRow]="prop.autoWrapRow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['autoWrapRow'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoWrapRow']).toBe(false);

        app.prop['autoWrapRow'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['autoWrapRow']).toBe(true);
      });
    });

    it(`should set cell defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [cell]="prop.cell"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['cell'] = [
          {row: 0, col: 0, readOnly: true}
        ];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(0, 0)['readOnly']).toBe(true);
      });
    });

    it(`should set cells defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [cells]="prop.cells"></hot-table>`
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
        expect(app.getHotInstance(app.id).getCellMeta(2, 2)['className']).toBe('cell_2_2');
      });
    });

    it(`should set checkedTemplate defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [checkedTemplate]="prop.checkedTemplate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['checkedTemplate'] = false;

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(2, 2)['checkedTemplate']).toBe(false);
      });
    });

    it(`should set className defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [className]="prop.className"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['className'] = 'test';

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(2, 2)['className']).toBe('test');
      });
    });

    it(`should set colHeaders defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="prop.headers"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['headers'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['colHeaders']).toBe(false);

        app.prop['headers'] = ['Header'];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['colHeaders'][0]).toBe('Header');
      });
    });

    it(`should set columnHeaderHeight defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [columnHeaderHeight]="prop.columnHeaderHeight"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnHeaderHeight'] = 40;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columnHeaderHeight']).toBe(40);

        app.prop['columnHeaderHeight'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columnHeaderHeight']).toBe(10);
      });
    });

    it(`should set columns defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [columns]="prop.columns"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columns'] = [{}, {}, {}];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columns'].length).toBe(3);

        app.prop['columns'] = [{}];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columns'].length).toBe(1);
      });
    });
    it(`should set columnSorting defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="true" [columnSorting]="prop.columnSorting"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnSorting'] = true;
        fixture.detectChanges();

        expect(app.getHotInstance(app.id).getSettings()['columnSorting']).toBe(true);

        app.prop['columnSorting'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columnSorting']).toBe(false);
      });
    });

    it(`should set colWidths defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colWidths]="prop.colWidths"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['colWidths'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['colWidths']).toBe(10);

        app.prop['colWidths'] = 40;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['colWidths']).toBe(40);
      });
    });

    it(`should set commentedCellClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [commentedCellClassName]="prop.commentedCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['commentedCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['commentedCellClassName']).toBe('test');
      });
    });

    it(`should set comments defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [comments]="prop.comments"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['comments'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['comments']).toBe(true);
      });
    });

    it(`should set contextMenu defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [contextMenu]="prop.contextMenu"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['contextMenu'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['contextMenu']).toBe(true);
      });
    });

    it(`should set copyable defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [copyable]="prop.copyable"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyable'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['copyable']).toBe(true);
      });
    });

    it(`should set copyPaste defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [copyPaste]="prop.copyPaste"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyPaste'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['copyPaste']).toBe(false);
      });
    });

    it(`should set correctFormat defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [correctFormat]="prop.correctFormat"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['correctFormat'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['correctFormat']).toBe(true);
      });
    });

    it(`should set currentColClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentColClassName]="prop.currentColClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentColClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentColClassName']).toBe('test');
      });
    });

    it(`should set currentHeaderClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentHeaderClassName]="prop.currentHeaderClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentHeaderClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentHeaderClassName']).toBe('test');
      });
    });

    it(`should set currentRowClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentRowClassName]="prop.currentRowClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentRowClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentRowClassName']).toBe('test');
      });
    });

    it(`should set customBorders defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [customBorders]="prop.customBorders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['customBorders'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['customBorders']).toBe(true);
      });
    });

    it(`should set data defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [data]="prop.data"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['data'] = [[1, 2, 3]];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['data'][0][0]).toBe(1);
      });
    });

    it(`should set dataSchema defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [dataSchema]="prop.dataSchema"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dataSchema'] = {attr: null};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['dataSchema']['attr']).toBe(null);
      });
    });

    it(`should set dateFormat defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [dateFormat]="prop.dateFormat"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dateFormat'] = 'hh:mm:ss';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['dateFormat']).toBe('hh:mm:ss');
      });
    });

    it(`should set debug defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [debug]="prop.debug"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['debug'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['debug']).toBe(true);
      });
    });

    it(`should set defaultDate defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [defaultDate]="prop.defaultDate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['defaultDate'] = '1970-01-01';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['defaultDate']).toBe('1970-01-01');
      });
    });

    it(`should set disableVisualSelection defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [disableVisualSelection]="prop.disableVisualSelection"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['disableVisualSelection'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['disableVisualSelection']).toBe(true);
      });
    });

    it(`should set editor defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [editor]="prop.editor"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['editor'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['editor']).toBe(false);
      });
    });

    it(`should set enterBeginsEditing defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [enterBeginsEditing]="prop.enterBeginsEditing"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterBeginsEditing'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['enterBeginsEditing']).toBe(false);
      });
    });

    it(`should set enterMoves defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [enterMoves]="prop.enterMoves"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['enterMoves']['attr']).toBe(1);
      });
    });

    it(`should set fillHandle defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fillHandle]="prop.fillHandle"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fillHandle'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fillHandle']).toBe(false);
      });
    });

    it(`should set filter defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [filter]="prop.filter"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filter'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['filter']).toBe(true);
      });
    });

    it(`should set filteringCaseSensitive defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [filteringCaseSensitive]="prop.filteringCaseSensitive"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filteringCaseSensitive'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['filteringCaseSensitive']).toBe(true);
      });
    });

    it(`should set fixedColumnsLeft defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fixedColumnsLeft]="prop.fixedColumnsLeft"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedColumnsLeft'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fixedColumnsLeft']).toBe(10);
      });
    });

    it(`should set fixedRowsTop defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fixedRowsTop]="prop.fixedRowsTop"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedRowsTop'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fixedRowsTop']).toBe(10);
      });
    });

    it(`should set fragmentSelection defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fragmentSelection]="prop.fragmentSelection"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fragmentSelection'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fragmentSelection']).toBe(true);
      });
    });

    it(`should set height defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [height]="prop.height"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['height'] = 100;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['height']).toBe(100);
      });
    });

    it(`should set invalidCellClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [invalidCellClassName]="prop.invalidCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['invalidCellClassName'] = 'invalid';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['invalidCellClassName']).toBe('invalid');
      });
    });

    it(`should set label defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [label]="prop.label"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['label'] = { attr: 1 };
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['label']['attr']).toBe(1);
      });
    });

    it(`should set language defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [language]="prop.language"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['language'] = 'en-US';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['language']).toBe('en-US');
      });
    });

    it(`should set manualColumnFreeze defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnFreeze]="prop.manualColumnFreeze"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnFreeze'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnFreeze']).toBe(true);
      });
    });

    it(`should set manualColumnMove defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnMove]="prop.manualColumnMove"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnMove'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnMove']).toBe(true);
      });
    });

    it(`should set manualColumnResize defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnResize]="prop.manualColumnResize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnResize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnResize']).toBe(true);
      });
    });

    it(`should set manualRowMove defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualRowMove]="prop.manualRowMove"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowMove'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualRowMove']).toBe(true);
      });
    });

    it(`should set manualRowResize defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualRowResize]="prop.manualRowResize"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowResize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualRowResize']).toBe(true);
      });
    });

    it(`should set maxCols defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [maxCols]="prop.maxCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['maxCols']).toBe(10);
      });
    });

    it(`should set maxRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [maxRows]="prop.maxRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['maxRows']).toBe(10);
      });
    });

    it(`should set mergeCells defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [mergeCells]="prop.mergeCells"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['mergeCells'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['mergeCells']).toBe(true);
      });
    });

    it(`should set minCols defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minCols]="prop.minCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minCols']).toBe(10);
      });
    });

    it(`should set minRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minRows]="prop.minRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minRows']).toBe(10);
      });
    });

    it(`should set minSpareCols defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minSpareCols]="prop.minSpareCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minSpareCols']).toBe(10);
      });
    });

    it(`should set minSpareRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minSpareRows]="prop.minSpareRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minSpareRows']).toBe(10);
      });
    });

    it(`should set noWordWrapClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [noWordWrapClassName]="prop.noWordWrapClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['noWordWrapClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['noWordWrapClassName']).toBe('test');
      });
    });

    xit(`should set observeChanges defined as bindings`, () => {
      // `observeChanges` plugin is unstable
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [observeChanges]="prop.observeChanges"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeChanges'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['observeChanges']).toBe(true);
      });
    });

    it(`should set observeDOMVisibility defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [observeDOMVisibility]="prop.observeDOMVisibility"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeDOMVisibility'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['observeDOMVisibility']).toBe(false);
      });
    });

    it(`should set outsideClickDeselects defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [outsideClickDeselects]="prop.outsideClickDeselects"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['outsideClickDeselects'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['outsideClickDeselects']).toBe(false);
      });
    });

    it(`should set persistentState defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [persistentState]="prop.persistentState"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['persistentState'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['persistentState']).toBe(true);
      });
    });

    it(`should set placeholder defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [placeholder]="prop.placeholder"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholder'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['placeholder']).toBe(true);
      });
    });

    it(`should set placeholderCellClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [placeholderCellClassName]="prop.placeholderCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholderCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['placeholderCellClassName']).toBe('test');
      });
    });

    it(`should set preventOverflow defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [preventOverflow]="prop.preventOverflow"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['preventOverflow'] = 'horizontal';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['preventOverflow']).toBe('horizontal');

        app.prop['preventOverflow'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['preventOverflow']).toBe(false);
      });
    });

    it(`should set readOnly defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [readOnly]="prop.readOnly"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnly'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['readOnly']).toBe(true);
      });
    });

    it(`should set readOnlyCellClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [readOnlyCellClassName]="prop.readOnlyCellClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnlyCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['readOnlyCellClassName']).toBe('test');
      });
    });

    it(`should set renderAllRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [renderAllRows]="prop.renderAllRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderAllRows'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['renderAllRows']).toBe(true);
      });
    });

    it(`should set renderer defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [renderer]="prop.renderer"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderer'] = 'text';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['renderer']).toBe('text');
      });
    });

    it(`should set rowHeaders defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeaders]="prop.rowHeaders"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaders'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeaders']).toBe(true);
      });
    });

    it(`should set rowHeaderWidth defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeaderWidth]="prop.rowHeaderWidth"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaderWidth'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeaderWidth']).toBe(10);
      });
    });

    it(`should set rowHeights defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeights]="prop.rowHeights"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeights'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeights']).toBe(10);
      });
    });

    it(`should set search defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [search]="prop.search"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['search'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['search']).toBe(true);
      });
    });

    it(`should set selectionMode defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [selectionMode]="prop.selectionMode"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['selectionMode']).toBe('multiple');

        app.prop['selectionMode'] = 'single';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['selectionMode']).toBe('single');

        app.prop['selectionMode'] = 'range';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['selectionMode']).toBe('range');
      });
    });

    it(`should set selectOptions defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [selectOptions]="prop.selectOptions"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['selectOptions'] = ['test'];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['selectOptions'][0]).toBe('test');
      });
    });

    it(`should set skipColumnOnPaste defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [skipColumnOnPaste]="prop.skipColumnOnPaste"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['skipColumnOnPaste'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['skipColumnOnPaste']).toBe(true);
      });
    });

    it(`should set sortByRelevance defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [sortByRelevance]="prop.sortByRelevance"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['sortByRelevance'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['sortByRelevance']).toBe(true);
      });
    });

    it(`should set source defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [source]="prop.source"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['source'] = [0, 1, 2];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['source'][1]).toBe(1);
      });
    });

    it(`should set startCols defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [startCols]="prop.startCols"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startCols'] = 1;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['startCols']).toBe(1);
      });
    });

    it(`should set startRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [startRows]="prop.startRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startRows'] = 1;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['startRows']).toBe(1);
      });
    });

    it(`should set stretchH defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [stretchH]="prop.stretchH"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['stretchH'] = 'all';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['stretchH']).toBe('all');
      });
    });

    it(`should set strict defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [strict]="prop.strict"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['strict'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['strict']).toBe(true);
      });
    });

    it(`should set tableClassName defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [tableClassName]="prop.tableClassName"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tableClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['tableClassName']).toBe('test');
      });
    });

    it(`should set tabMoves defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [tabMoves]="prop.tabMoves"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tabMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['tabMoves']['attr']).toBe(1);
      });
    });

    it(`should set title defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [title]="prop.title"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['title'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['title']).toBe('test');
      });
    });

    it(`should set trimDropdown defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [trimDropdown]="prop.trimDropdown"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimDropdown'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['trimDropdown']).toBe(true);
      });
    });

    it(`should set trimWhitespace defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [trimWhitespace]="prop.trimWhitespace"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimWhitespace'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['trimWhitespace']).toBe(true);
      });
    });

    it(`should set type defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [type]="prop.type"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['type'] = 'date';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['type']).toBe('date');
      });
    });

    it(`should set uncheckedTemplate defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [uncheckedTemplate]="prop.uncheckedTemplate"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['uncheckedTemplate'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['uncheckedTemplate']).toBe(true);
      });
    });

    it(`should set undo defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [undo]="prop.undo"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['undo'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['undo']).toBe(true);
      });
    });

    it(`should set validator defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [validator]="prop.validator"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['validator'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['validator']).toBe('test');
      });
    });

    it(`should set viewportColumnRenderingOffset defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [viewportColumnRenderingOffset]="prop.viewportColumnRenderingOffset"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportColumnRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['viewportColumnRenderingOffset']).toBe(10);
      });
    });

    it(`should set viewportRowRenderingOffset defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [viewportRowRenderingOffset]="prop.viewportRowRenderingOffset"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportRowRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['viewportRowRenderingOffset']).toBe(10);
      });
    });

    it(`should set visibleRows defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [visibleRows]="prop.visibleRows"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['visibleRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['visibleRows']).toBe(10);
      });
    });

    it(`should set width defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [width]="prop.width"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['width'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['width']).toBe(10);
      });
    });

    it(`should set wordWrap defined as bindings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [wordWrap]="prop.wordWrap"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['wordWrap'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['wordWrap']).toBe(false);
      });
    });
  });

  describe('hooks', () => {
    it(`should use Handsontable instance as a first argument, if is defined as a property in settings object`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterInit: (hot) => {
            return hot;
          }
        };

        fixture.detectChanges();

        const constructorName = app.getHotInstance(app.id).constructor.name;
        expect(app.getHotInstance(app.id).runHooks('afterInit').constructor.name).toBe(constructorName);
      });
    });

    it(`should run afterBeginEditing hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterBeginEditing: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterBeginEditing')).toBe('test');
      });
    });

    it(`should run afterCellMetaReset hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCellMetaReset: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCellMetaReset')).toBe('test');
      });
    });

    it(`should run afterChange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterChange')).toBe('test');
      });
    });

    it(`should run afterChangesObserved hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChangesObserved: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterChangesObserved')).toBe('test');
      });
    });

    it(`should run afterColumnMove hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnMove')).toBe('test');
      });
    });

    it(`should run afterColumnResize hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnResize')).toBe('test');
      });
    });

    it(`should run afterColumnSort hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnSort: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnSort')).toBe('test');
      });
    });

    it(`should run afterContextMenuDefaultOptions hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
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
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuDefaultOptions', {items: []})).toBe('test');
      });
    });

    it(`should run afterContextMenuHide hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuHide: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuHide')).toBe('test');
      });
    });

    it(`should run afterContextMenuShow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuShow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuShow')).toBe('test');
      });
    });

    it(`should run afterCopy hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCopy')).toBe('test');
      });
    });

    it(`should run afterCopyLimit hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopyLimit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCopyLimit')).toBe('test');
      });
    });

    it(`should run afterCreateCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCreateCol')).toBe('test');
      });
    });

    it(`should run afterCreateRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCreateRow')).toBe('test');
      });
    });

    it(`should run afterCut hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCut')).toBe('test');
      });
    });

    it(`should run afterDeselect hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDeselect: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDeselect')).toBe('test');
      });
    });

    it(`should run afterDestroy hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDestroy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDestroy')).toBe('test');
      });
    });

    it(`should run afterDocumentKeyDown hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDocumentKeyDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDocumentKeyDown')).toBe('test');
      });
    });

    it(`should run afterDrawSelection hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDrawSelection: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDrawSelection')).toBe('test');
      });
    });

    it(`should run afterGetCellMeta hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetCellMeta')).toBe('test');
      });
    });

    it(`should run afterGetColHeader hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          colHeaders: true,
          afterGetColHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();

        const elem = fixture.nativeElement;
        const TH = elem.querySelector('th');

        expect(app.getHotInstance(app.id).runHooks('afterGetColHeader', 0, TH)).toBe('test');
      });
    });

    it(`should run afterGetColumnHeaderRenderers hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;
        let afterGetColumnHeaderRenderersCount = 0;

        app.prop['settings'] = {
          afterGetColumnHeaderRenderers: () => {
            afterGetColumnHeaderRenderersCount++;
          }
        };

        fixture.detectChanges();
        expect(afterGetColumnHeaderRenderersCount).toBeGreaterThan(0);
      });
    });

    it(`should run afterGetRowHeader hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetRowHeader')).toBe('test');
      });
    });

    it(`should run afterGetRowHeaderRenderers hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeaderRenderers: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetRowHeaderRenderers')).toBe('test');
      });
    });

    it(`should run afterInit hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterInit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterInit')).toBe('test');
      });
    });

    it(`should run afterLanguageChange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterLanguageChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterLanguageChange')).toBe('test');
      });
    });

    it(`should run afterListen hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterListen: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterListen')).toBe('test');
      });
    });

    it(`should run afterLoadData hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterLoadData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterLoadData')).toBe('test');
      });
    });

    it(`should run afterMergeCells hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterMergeCells: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterMergeCells')).toBe('test');
      });
    });

    it(`should run afterModifyTransformEnd hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterModifyTransformEnd')).toBe('test');
      });
    });

    it(`should run afterModifyTransformStart hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterModifyTransformStart')).toBe('test');
      });
    });

    it(`should run afterMomentumScroll hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterMomentumScroll: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterMomentumScroll')).toBe('test');
      });
    });

    it(`should run afterOnCellContextMenu hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellContextMenu: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellContextMenu')).toBe('test');
      });
    });

    it(`should run afterOnCellCornerDblClick hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerDblClick: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        app.getHotInstance(app.id).selectCell(0, 0);
        expect(app.getHotInstance(app.id).runHooks('afterOnCellCornerDblClick')).toBe('test');
      });
    });

    it(`should run afterOnCellCornerMouseDown hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellCornerMouseDown')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseDown hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseDown')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseOver hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOver: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseOver')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseOut hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseOut')).toBe('test');
      });
    });

    it(`should run afterPaste hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterPaste: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterPaste')).toBe('test');
      });
    });

    it(`should run afterPluginsInitialized hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterPluginsInitialized: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterPluginsInitialized')).toBe('test');
      });
    });

    it(`should run afterRedo hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRedo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRedo')).toBe('test');
      });
    });

    it(`should run afterRemoveCellMeta hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRemoveCellMeta')).toBe('test');
      });
    });

    it(`should run afterRemoveCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRemoveCol')).toBe('test');
      });
    });

    it(`should run afterRemoveRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRemoveRow')).toBe('test');
      });
    });

    it(`should run afterRender hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRender')).toBe('test');
      });
    });

    it(`should run afterRenderer hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRenderer: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRenderer')).toBe('test');
      });
    });

    it(`should run afterRowMove hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRowMove')).toBe('test');
      });
    });

    it(`should run afterRowResize hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRowResize')).toBe('test');
      });
    });

    it(`should run afterScrollHorizontally hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollHorizontally: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterScrollHorizontally')).toBe('test');
      });
    });

    it(`should run afterScrollVertically hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollVertically: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterScrollVertically')).toBe('test');
      });
    });

    it(`should run afterSelection hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelection: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelection')).toBe('test');
      });
    });

    it(`should run afterSelectionByProp hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionByProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionByProp')).toBe('test');
      });
    });

    it(`should run afterSelectionEnd hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionEnd')).toBe('test');
      });
    });

    it(`should run afterSelectionEndByProp hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEndByProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionEndByProp')).toBe('test');
      });
    });

    it(`should run afterSetCellMeta hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetCellMeta')).toBe('test');
      });
    });

    it(`should run afterSetDataAtCell hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtCell: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetDataAtCell')).toBe('test');
      });
    });

    it(`should run afterSetDataAtRowProp hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtRowProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetDataAtRowProp')).toBe('test');
      });
    });

    it(`should run afterUndo hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUndo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUndo')).toBe('test');
      });
    });

    it(`should run afterUnlisten hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUnlisten: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUnlisten')).toBe('test');
      });
    });

    it(`should run afterUnmergeCells hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUnmergeCells: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUnmergeCells')).toBe('test');
      });
    });

    it(`should run afterUpdateSettings hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUpdateSettings: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUpdateSettings', {})).toBe('test');
      });
    });

    it(`should run afterValidate hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterValidate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterValidate')).toBe('test');
      });
    });

    it(`should run afterViewportColumnCalculatorOverride hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportColumnCalculatorOverride: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterViewportColumnCalculatorOverride')).toBe('test');
      });
    });

    it(`should run afterViewportRowCalculatorOverride hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportRowCalculatorOverride: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterViewportRowCalculatorOverride')).toBe('test');
      });
    });

    it(`should run beforeAutofill hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofill: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeAutofill')).toBe('test');
      });
    });

    it(`should run beforeAutofillInsidePopulate hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofillInsidePopulate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeAutofillInsidePopulate')).toBe('test');
      });
    });

    it(`should run beforeCellAlignment hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCellAlignment: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCellAlignment')).toBe('test');
      });
    });

    it(`should run beforeChange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeChange', [[0, 0, '', '']])).toBe('test');
      });
    });

    it(`should run beforeChangeRender hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChangeRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeChangeRender')).toBe('test');
      });
    });

    it(`should run beforeColumnMove hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnMove')).toBe('test');
      });
    });

    it(`should run beforeColumnResize hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnResize')).toBe('test');
      });
    });

    it(`should run beforeColumnSort hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnSort: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnSort')).toBe('test');
      });
    });

    it(`should run beforeContextMenuSetItems hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeContextMenuSetItems: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeContextMenuSetItems')).toBe('test');
      });
    });

    it(`should run beforeContextMenuShow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeContextMenuShow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeContextMenuShow')).toBe('test');
      });
    });

    it(`should run beforeCopy hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCopy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCopy')).toBe('test');
      });
    });

    it(`should run beforeCreateCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCreateCol')).toBe('test');
      });
    });

    it(`should run beforeCreateRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCreateRow')).toBe('test');
      });
    });

    it(`should run beforeCut hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCut')).toBe('test');
      });
    });

    it(`should run beforeDrawBorders hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDrawBorders: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeDrawBorders')).toBe('test');
      });
    });

    it(`should run beforeGetCellMeta hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeGetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeGetCellMeta')).toBe('test');
      });
    });

    it(`should run beforeInit hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeInit')).toBe('test');
      });
    });

    it(`should run beforeInitWalkontable hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInitWalkontable: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeInitWalkontable')).toBe('test');
      });
    });

    it(`should run beforeKeyDown hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeKeyDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeKeyDown')).toBe('test');
      });
    });

    it(`should run beforeLanguageChange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeLanguageChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeLanguageChange')).toBe('test');
      });
    });

    it(`should run beforeMergeCells hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeMergeCells: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeMergeCells', void 0, true)).toBe('test');
      });
    });

    it(`should run beforeOnCellContextMenu hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellContextMenu: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellContextMenu')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseDown hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseDown')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseOut hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseOut')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseOver hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOver: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseOver')).toBe('test');
      });
    });

    it(`should run beforePaste hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforePaste: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforePaste')).toBe('test');
      });
    });

    it(`should run beforeRedo hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRedo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRedo')).toBe('test');
      });
    });

    it(`should run beforeRemoveCellClassNames hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveCellClassNames: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveCellClassNames')).toBe('test');
      });
    });

    it(`should run beforeRemoveCellMeta hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveCellMeta')).toBe('test');
      });
    });

    it(`should run beforeRemoveCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveCol')).toBe('test');
      });
    });

    it(`should run beforeRemoveRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveRow')).toBe('test');
      });
    });

    it(`should run beforeRender hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRender')).toBe('test');
      });
    });

    it(`should run beforeRenderer hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRenderer: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRenderer')).toBe('test');
      });
    });

    it(`should run beforeRowMove hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRowMove')).toBe('test');
      });
    });

    it(`should run beforeRowResize hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRowResize')).toBe('test');
      });
    });

    it(`should run beforeSetRangeEnd hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeSetRangeEnd')).toBe('test');
      });
    });

    it(`should run beforeSetRangeStart hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeSetRangeStart')).toBe('test');
      });
    });

    it(`should run beforeSetRangeStartOnly hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeStartOnly: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeSetRangeStartOnly')).toBe('test');
      });
    });

    it(`should run beforeStretchingColumnWidth hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeStretchingColumnWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeStretchingColumnWidth')).toBe('test');
      });
    });

    it(`should run beforeTouchScroll hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeTouchScroll: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeTouchScroll')).toBe('test');
      });
    });

    it(`should run beforeUndo hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeUndo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeUndo')).toBe('test');
      });
    });

    it(`should run beforeUnmergeCells hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeUnmergeCells: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeUnmergeCells')).toBe('test');
      });
    });

    it(`should run beforeValidate hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValidate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeValidate')).toBe('test');
      });
    });

    it(`should run beforeValueRender hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValueRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeValueRender')).toBe('test');
      });
    });

    it(`should run construct hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          construct: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('construct')).toBe('test');
      });
    });

    it(`should run init hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          init: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('init')).toBe('test');
      });
    });

    it(`should run modifyAutofillRange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyAutofillRange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyAutofillRange')).toBe('test');
      });
    });

    it(`should run modifyCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyCol')).toBe('test');
      });
    });

    it(`should run modifyColHeader hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColHeader')).toBe('test');
      });
    });

    it(`should run modifyColumnHeaderHeight hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColumnHeaderHeight: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColumnHeaderHeight')).toBe('test');
      });
    });

    it(`should run modifyColWidth hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColWidth')).toBe('test');
      });
    });

    it(`should run modifyCopyableRange hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCopyableRange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyCopyableRange')).toBe('test');
      });
    });

    it(`should run modifyData hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyData')).toBe('test');
      });
    });

    it(`should run modifyGetCellCoords hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyGetCellCoords: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyGetCellCoords')).toBe('test');
      });
    });

    it(`should run modifyRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRow')).toBe('test');
      });
    });

    it(`should run modifyRowHeader hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeader')).toBe('test');
      });
    });

    it(`should run modifyRowHeaderWidth hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeaderWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeaderWidth')).toBe('test');
      });
    });

    it(`should run modifyRowHeight hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeight: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeight')).toBe('test');
      });
    });

    it(`should run modifyRowData hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowData')).toBe('test');
      });
    });

    it(`should run modifyTransformEnd hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyTransformEnd')).toBe('test');
      });
    });

    it(`should run modifyTransformStart hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyTransformStart')).toBe('test');
      });
    });

    it(`should run persistentStateLoad hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateLoad: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateLoad')).toBe('test');
      });
    });

    it(`should run persistentStateReset hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateReset: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateReset')).toBe('test');
      });
    });

    it(`should run persistentStateSave hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateSave: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateSave')).toBe('test');
      });
    });

    it(`should run skipLengthCache hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          skipLengthCache: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('skipLengthCache')).toBe('test');
      });
    });

    it(`should run unmodifyCol hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('unmodifyCol')).toBe('test');
      });
    });

    it(`should run unmodifyRow hook defined in settings`, () => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('unmodifyRow')).toBe('test');
      });
    });
  });
});
