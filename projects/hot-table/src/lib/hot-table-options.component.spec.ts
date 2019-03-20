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

  describe('inputs', () => {
    it('should support all of the available options in Handsontable', async() => {
        const options = Object.keys(Handsontable.DefaultSettings.prototype);
        const unsupportedSettings = ['isEmptyRow', 'isEmptyCol'];
        const template = `<hot-table [hotId]="id" ${options.map(option => unsupportedSettings.includes(option) ?
            '' :
            `[${option}]="prop.${option}"`).join(' ')}></hot-table>`;

        TestBed.overrideComponent(TestComponent, {
          set: {
            template: template
          }
        });
        await TestBed.compileComponents().then(() => {
          fixture = TestBed.createComponent(TestComponent);
          const elem = fixture.nativeElement;

          fixture.detectChanges();

          expect(elem.querySelectorAll('.handsontable').length).toBeGreaterThan(0);
        });
    });

    it(`should add reference to 'hotRegisterer' by attribute`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        fixture.detectChanges();

        expect(app.getHotInstance(app.id)).toBeTruthy();
      });
    });

    it(`should register every hot-table component with added ID attribute`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `
            <hot-table [hotId]="prop.hotTableId"></hot-table>
            <hot-table [hotId]="'hot1'"></hot-table>
            <hot-table hotId="hot2"></hot-table>
          `
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hotTableId'] = 'hot';

        fixture.detectChanges();

        expect(app.getHotInstance(app.prop['hotTableId'])).toBeDefined();
        expect(app.getHotInstance('hot1')).toBeDefined();
        expect(app.getHotInstance('hot2')).toBeDefined();
      });
    });

    it(`should set 'settings' defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          data: Handsontable.helper.createSpreadsheetData(5, 5)
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getDataAtCell(0, 0)).toBe('A1');
      });
    });

    it(`should be possible to get custom option over to 'settings' defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          customOption: 'test',
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['customOption']).toBe('test');
      });
    });

    it(`should set activeHeaderClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [activeHeaderClassName]="prop.activeHeaderClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowEmpty defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowEmpty]="prop.allowEmpty"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowHtml defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowHtml]="prop.allowHtml"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowInsertColumn defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInsertColumn]="prop.allowInsertColumn"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowInsertRow defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInsertRow]="prop.allowInsertRow"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowInvalid defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowInvalid]="prop.allowInvalid"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowRemoveColumn defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowRemoveColumn]="prop.allowRemoveColumn"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set allowRemoveRow defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [allowRemoveRow]="prop.allowRemoveRow"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set autoColumnSize defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoColumnSize]="prop.autoColumnSize"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set autoRowSize defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoRowSize]="prop.autoRowSize"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set autoWrapCol defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoWrapCol]="prop.autoWrapCol"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set autoWrapRow defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [autoWrapRow]="prop.autoWrapRow"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set bindRowsWithHeaders defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [bindRowsWithHeaders]="prop.bindRowsWithHeaders"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['bindRowsWithHeaders'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['bindRowsWithHeaders']).toBe(false);

        app.prop['bindRowsWithHeaders'] = 'loose';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['bindRowsWithHeaders']).toBe('loose');
      });
    });

    it(`should set cell defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [cell]="prop.cell"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['cell'] = [
          {row: 0, col: 0, readOnly: true}
        ];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(0, 0)['readOnly']).toBe(true);
      });
    });

    it(`should set cells defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [cells]="prop.cells"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set checkedTemplate defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [checkedTemplate]="prop.checkedTemplate"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['checkedTemplate'] = false;

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(2, 2)['checkedTemplate']).toBe(false);
      });
    });

    it(`should set className defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [className]="prop.className"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['className'] = 'test';

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getCellMeta(2, 2)['className']).toBe('test');
      });
    });

    it(`should set colHeaders defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="prop.headers"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set collapsibleColumns defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [hiddenColumns]="true" [nestedHeaders]="prop.nestedHeaders"
          [collapsibleColumns]="prop.collapsibleColumns" [colHeaders]="true"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['nestedHeaders'] = ['H', {label: 'I', colspan: 2}, {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, 'M'];

        app.prop['collapsibleColumns'] = [
          {row: -2, col: 1, collapsible: true},
          {row: -2, col: 3, collapsible: true}
        ];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['collapsibleColumns']).toBeDefined();

        app.prop['collapsibleColumns'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['collapsibleColumns']).toBe(false);
      });
    });

    it(`should set columnHeaderHeight defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [columnHeaderHeight]="prop.columnHeaderHeight"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set columns defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [columns]="prop.columns"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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
    it(`should set columnSorting defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="true" [columnSorting]="prop.columnSorting"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set columnSummary defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [columnSummary]="prop.columnSummary"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['columnSummary'] = {attr: 1};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['columnSummary']['attr']).toBe(1);
      });
    });

    it(`should set colWidths defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colWidths]="prop.colWidths"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set commentedCellClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [commentedCellClassName]="prop.commentedCellClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['commentedCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['commentedCellClassName']).toBe('test');
      });
    });

    it(`should set comments defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [comments]="prop.comments"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['comments'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['comments']).toBe(true);
      });
    });

    it(`should set contextMenu defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [contextMenu]="prop.contextMenu"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['contextMenu'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['contextMenu']).toBe(true);
      });
    });

    it(`should set copyable defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [copyable]="prop.copyable"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyable'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['copyable']).toBe(true);
      });
    });

    it(`should set copyPaste defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [copyPaste]="prop.copyPaste"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['copyPaste'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['copyPaste']).toBe(false);
      });
    });

    it(`should set correctFormat defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [correctFormat]="prop.correctFormat"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['correctFormat'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['correctFormat']).toBe(true);
      });
    });

    it(`should set currentColClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentColClassName]="prop.currentColClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentColClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentColClassName']).toBe('test');
      });
    });

    it(`should set currentHeaderClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentHeaderClassName]="prop.currentHeaderClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentHeaderClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentHeaderClassName']).toBe('test');
      });
    });

    it(`should set currentRowClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [currentRowClassName]="prop.currentRowClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['currentRowClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['currentRowClassName']).toBe('test');
      });
    });

    it(`should set customBorders defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [customBorders]="prop.customBorders"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['customBorders'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['customBorders']).toBe(true);
      });
    });

    it(`should set data defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [data]="prop.data"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['data'] = [[1, 2, 3]];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['data'][0][0]).toBe(1);
      });
    });

    it(`should set dataSchema defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [dataSchema]="prop.dataSchema"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dataSchema'] = {attr: null};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['dataSchema']['attr']).toBe(null);
      });
    });

    it(`should set dateFormat defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [dateFormat]="prop.dateFormat"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dateFormat'] = 'hh:mm:ss';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['dateFormat']).toBe('hh:mm:ss');
      });
    });

    it(`should set debug defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [debug]="prop.debug"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['debug'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['debug']).toBe(true);
      });
    });

    it(`should set defaultDate defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [defaultDate]="prop.defaultDate"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['defaultDate'] = '1970-01-01';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['defaultDate']).toBe('1970-01-01');
      });
    });

    it(`should set disableVisualSelection defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [disableVisualSelection]="prop.disableVisualSelection"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['disableVisualSelection'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['disableVisualSelection']).toBe(true);
      });
    });

    it(`should set dropdownMenu defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [dropdownMenu]="prop.dropdownMenu"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['dropdownMenu'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['dropdownMenu']).toBe(true);
      });
    });

    it(`should set editor defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [editor]="prop.editor"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['editor'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['editor']).toBe(false);
      });
    });

    it(`should set enterBeginsEditing defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [enterBeginsEditing]="prop.enterBeginsEditing"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterBeginsEditing'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['enterBeginsEditing']).toBe(false);
      });
    });

    it(`should set enterMoves defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [enterMoves]="prop.enterMoves"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['enterMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['enterMoves']['attr']).toBe(1);
      });
    });

    it(`should set fillHandle defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fillHandle]="prop.fillHandle"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fillHandle'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fillHandle']).toBe(false);
      });
    });

    it(`should set filter defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [filter]="prop.filter"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filter'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['filter']).toBe(true);
      });
    });

    it(`should set filteringCaseSensitive defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [filteringCaseSensitive]="prop.filteringCaseSensitive"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filteringCaseSensitive'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['filteringCaseSensitive']).toBe(true);
      });
    });

    it(`should set filters defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [filters]="prop.filters"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['filters'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['filters']).toBe(true);
      });
    });

    it(`should set fixedColumnsLeft defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fixedColumnsLeft]="prop.fixedColumnsLeft"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedColumnsLeft'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fixedColumnsLeft']).toBe(10);
      });
    });

    it(`should set fixedRowsBottom defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fixedRowsBottom]="prop.fixedRowsBottom"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedRowsBottom'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fixedRowsBottom']).toBe(10);
      });
    });

    it(`should set fixedRowsTop defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fixedRowsTop]="prop.fixedRowsTop"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fixedRowsTop'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fixedRowsTop']).toBe(10);
      });
    });

    it(`should set formulas defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [formulas]="prop.formulas"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['formulas'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['formulas']).toBe(true);
      });
    });

    it(`should set fragmentSelection defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [fragmentSelection]="prop.fragmentSelection"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['fragmentSelection'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['fragmentSelection']).toBe(true);
      });
    });

    it(`should set ganttChart defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="true" [nestedHeaders]="true" [ganttChart]="prop.ganttChart"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['ganttChart'] = { attr: 1 };
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['ganttChart']['attr']).toBe(1);
      });
    });

    it(`should set headerTooltips defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [headerTooltips]="prop.headerTooltips"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['headerTooltips'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['headerTooltips']).toBe(true);
      });
    });

    it(`should set height defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [height]="prop.height"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['height'] = 100;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['height']).toBe(100);
      });
    });

    it(`should set hiddenColumns defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [hiddenColumns]="prop.hiddenColumns"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hiddenColumns'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['hiddenColumns']).toBe(true);
      });
    });

    it(`should set hiddenRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [hiddenRows]="prop.hiddenRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['hiddenRows'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['hiddenRows']).toBe(true);
      });
    });

    it(`should set invalidCellClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [invalidCellClassName]="prop.invalidCellClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['invalidCellClassName'] = 'invalid';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['invalidCellClassName']).toBe('invalid');
      });
    });

    it(`should set label defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [label]="prop.label"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['label'] = { attr: 1 };
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['label']['attr']).toBe(1);
      });
    });

    it(`should set language defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [language]="prop.language"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['language'] = 'en-US';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['language']).toBe('en-US');
      });
    });

    it(`should set manualColumnFreeze defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnFreeze]="prop.manualColumnFreeze"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnFreeze'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnFreeze']).toBe(true);
      });
    });

    it(`should set manualColumnMove defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnMove]="prop.manualColumnMove"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnMove'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnMove']).toBe(true);
      });
    });

    it(`should set manualColumnResize defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualColumnResize]="prop.manualColumnResize"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualColumnResize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualColumnResize']).toBe(true);
      });
    });

    it(`should set manualRowMove defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualRowMove]="prop.manualRowMove"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowMove'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualRowMove']).toBe(true);
      });
    });

    it(`should set manualRowResize defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [manualRowResize]="prop.manualRowResize"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['manualRowResize'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['manualRowResize']).toBe(true);
      });
    });

    it(`should set maxCols defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [maxCols]="prop.maxCols"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['maxCols']).toBe(10);
      });
    });

    it(`should set maxRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [maxRows]="prop.maxRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['maxRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['maxRows']).toBe(10);
      });
    });

    it(`should set mergeCells defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [mergeCells]="prop.mergeCells"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['mergeCells'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['mergeCells']).toBe(true);
      });
    });

    it(`should set minCols defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minCols]="prop.minCols"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minCols']).toBe(10);
      });
    });

    it(`should set minRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minRows]="prop.minRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minRows']).toBe(10);
      });
    });

    it(`should set minSpareCols defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minSpareCols]="prop.minSpareCols"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareCols'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minSpareCols']).toBe(10);
      });
    });

    it(`should set minSpareRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [minSpareRows]="prop.minSpareRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['minSpareRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['minSpareRows']).toBe(10);
      });
    });

    it(`should set nestedHeaders defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [colHeaders]="true" [nestedHeaders]="prop.nestedHeaders"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['nestedHeaders'] = [['1', '2', '3']];
        fixture.detectChanges();

        expect(app.getHotInstance(app.id).getSettings()['nestedHeaders'][0][1]).toBe('2');
      });
    });

    it(`should set noWordWrapClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [noWordWrapClassName]="prop.noWordWrapClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['noWordWrapClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['noWordWrapClassName']).toBe('test');
      });
    });

    xit(`should set observeChanges defined as bindings`, async() => {
      // `observeChanges` plugin is unstable
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [observeChanges]="prop.observeChanges"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeChanges'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['observeChanges']).toBe(true);
      });
    });

    it(`should set observeDOMVisibility defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [observeDOMVisibility]="prop.observeDOMVisibility"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['observeDOMVisibility'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['observeDOMVisibility']).toBe(false);
      });
    });

    it(`should set outsideClickDeselects defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [outsideClickDeselects]="prop.outsideClickDeselects"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['outsideClickDeselects'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['outsideClickDeselects']).toBe(false);
      });
    });

    it(`should set persistentState defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [persistentState]="prop.persistentState"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['persistentState'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['persistentState']).toBe(true);
      });
    });

    it(`should set placeholder defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [placeholder]="prop.placeholder"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholder'] = 'cell placeholder';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['placeholder']).toBe('cell placeholder');
      });
    });

    it(`should set placeholderCellClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [placeholderCellClassName]="prop.placeholderCellClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['placeholderCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['placeholderCellClassName']).toBe('test');
      });
    });

    it(`should set preventOverflow defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [preventOverflow]="prop.preventOverflow"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set readOnly defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [readOnly]="prop.readOnly"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnly'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['readOnly']).toBe(true);
      });
    });

    it(`should set readOnlyCellClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [readOnlyCellClassName]="prop.readOnlyCellClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['readOnlyCellClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['readOnlyCellClassName']).toBe('test');
      });
    });

    it(`should set renderAllRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [renderAllRows]="prop.renderAllRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderAllRows'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['renderAllRows']).toBe(true);
      });
    });

    it(`should set renderer defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [renderer]="prop.renderer"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['renderer'] = 'text';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['renderer']).toBe('text');
      });
    });

    it(`should set rowHeaders defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeaders]="prop.rowHeaders"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaders'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeaders']).toBe(true);
      });
    });

    it(`should set rowHeaderWidth defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeaderWidth]="prop.rowHeaderWidth"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeaderWidth'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeaderWidth']).toBe(10);
      });
    });

    it(`should set rowHeights defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [rowHeights]="prop.rowHeights"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['rowHeights'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['rowHeights']).toBe(10);
      });
    });

    it(`should set search defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [search]="prop.search"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['search'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['search']).toBe(true);
      });
    });

    it(`should set selectionMode defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [selectionMode]="prop.selectionMode"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
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

    it(`should set selectOptions defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [selectOptions]="prop.selectOptions"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['selectOptions'] = ['test'];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['selectOptions'][0]).toBe('test');
      });
    });

    it(`should set skipColumnOnPaste defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [skipColumnOnPaste]="prop.skipColumnOnPaste"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['skipColumnOnPaste'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['skipColumnOnPaste']).toBe(true);
      });
    });

    it(`should set sortByRelevance defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [sortByRelevance]="prop.sortByRelevance"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['sortByRelevance'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['sortByRelevance']).toBe(true);
      });
    });

    it(`should set source defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [source]="prop.source"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['source'] = [0, 1, 2];
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['source'][1]).toBe(1);
      });
    });

    it(`should set startCols defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [startCols]="prop.startCols"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startCols'] = 1;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['startCols']).toBe(1);
      });
    });

    it(`should set startRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [startRows]="prop.startRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['startRows'] = 1;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['startRows']).toBe(1);
      });
    });

    it(`should set stretchH defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [stretchH]="prop.stretchH"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['stretchH'] = 'all';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['stretchH']).toBe('all');
      });
    });

    it(`should set strict defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [strict]="prop.strict"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['strict'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['strict']).toBe(true);
      });
    });

    it(`should set tableClassName defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [tableClassName]="prop.tableClassName"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tableClassName'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['tableClassName']).toBe('test');
      });
    });

    it(`should set tabMoves defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [tabMoves]="prop.tabMoves"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['tabMoves'] = {attr: 1};
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['tabMoves']['attr']).toBe(1);
      });
    });

    it(`should set title defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [title]="prop.title"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['title'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['title']).toBe('test');
      });
    });

    it(`should set trimDropdown defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [trimDropdown]="prop.trimDropdown"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimDropdown'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['trimDropdown']).toBe(true);
      });
    });

    it(`should set trimRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [trimRows]="prop.trimRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimRows'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['trimRows']).toBe(true);
      });
    });

    it(`should set trimWhitespace defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [trimWhitespace]="prop.trimWhitespace"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['trimWhitespace'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['trimWhitespace']).toBe(true);
      });
    });

    it(`should set type defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [type]="prop.type"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['type'] = 'date';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['type']).toBe('date');
      });
    });

    it(`should set uncheckedTemplate defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [uncheckedTemplate]="prop.uncheckedTemplate"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['uncheckedTemplate'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['uncheckedTemplate']).toBe(true);
      });
    });

    it(`should set undo defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [undo]="prop.undo"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['undo'] = true;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['undo']).toBe(true);
      });
    });

    it(`should set validator defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [validator]="prop.validator"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['validator'] = 'test';
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['validator']).toBe('test');
      });
    });

    it(`should set viewportColumnRenderingOffset defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [viewportColumnRenderingOffset]="prop.viewportColumnRenderingOffset"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportColumnRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['viewportColumnRenderingOffset']).toBe(10);
      });
    });

    it(`should set viewportRowRenderingOffset defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [viewportRowRenderingOffset]="prop.viewportRowRenderingOffset"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['viewportRowRenderingOffset'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['viewportRowRenderingOffset']).toBe(10);
      });
    });

    it(`should set visibleRows defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [visibleRows]="prop.visibleRows"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['visibleRows'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['visibleRows']).toBe(10);
      });
    });

    it(`should set width defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [width]="prop.width"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['width'] = 10;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['width']).toBe(10);
      });
    });

    it(`should set wordWrap defined as bindings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [wordWrap]="prop.wordWrap"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['wordWrap'] = false;
        fixture.detectChanges();
        expect(app.getHotInstance(app.id).getSettings()['wordWrap']).toBe(false);
      });
    });
  });
});
