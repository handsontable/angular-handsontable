import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { element } from 'protractor';
import * as Handsontable from 'handsontable-pro';

import { HotTableModule } from '../../dist/pro';
import { TestComponent } from './test.component';

describe('HotColumnComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ HotTableModule.forRoot() ],
    });
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it(`should be possible to render static hot-column element inside hot-table`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot">
            <hot-column></hot-column>
            <hot-column></hot-column>
            <hot-column></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();
      expect(app.getHotInstance(app.id).countCols()).toBe(3);
    });
  });

  it(`should be possible to change dynamically the number of columns`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot">
            <hot-column *ngFor="let column of prop.columns; let i = index"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      app.prop['columns'] = [ {}, {}, {} ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).countCols()).toBe(3);

      app.prop['columns'].push({});
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).countCols()).toBe(4);
    });
  });

  it(`should set allowHtml defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowHtml]="column.allowHtml"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowHtml: false
      };
      app.prop['columns'] = [
        {},
        {
          allowHtml: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowHtml']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowHtml']).toBe(true);
    });
  });

  it(`should set allowInsertColumn defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowInsertColumn]="column.allowInsertColumn"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowInsertColumn: false
      };
      app.prop['columns'] = [
        {},
        {
          allowInsertColumn: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowInsertColumn']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowInsertColumn']).toBe(true);
    });
  });

  it(`should set allowInsertRow defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowInsertRow]="column.allowInsertRow"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowInsertRow: false
      };
      app.prop['columns'] = [
        {},
        {
          allowInsertRow: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowInsertRow']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowInsertRow']).toBe(true);
    });
  });

  it(`should set allowInvalid defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowInvalid]="column.allowInvalid"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowInvalid: false
      };
      app.prop['columns'] = [
        {},
        {
          allowInvalid: true
        }
      ];

      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowInvalid']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowInvalid']).toBe(true);
    });
  });

  it(`should set allowRemoveColumn defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowRemoveColumn]="column.allowRemoveColumn"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowRemoveColumn: false
      };
      app.prop['columns'] = [
        {},
        {
          allowRemoveColumn: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowRemoveColumn']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowRemoveColumn']).toBe(true);
    });
  });

  it(`should set allowRemoveRow defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [allowRemoveRow]="column.allowRemoveRow"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        allowRemoveRow: false
      };
      app.prop['columns'] = [
        {},
        {
          allowRemoveRow: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['allowRemoveRow']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['allowRemoveRow']).toBe(true);
    });
  });

  it(`should set autoColumnSize defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [autoColumnSize]="column.autoColumnSize"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        autoColumnSize: false
      };
      app.prop['columns'] = [
        {},
        {
          autoColumnSize: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['autoColumnSize']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['autoColumnSize']).toBe(true);
    });
  });

  it(`should set autoComplete defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [autoComplete]="column.autoComplete"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        autoComplete: [1]
      };
      app.prop['columns'] = [
        {},
        {
          autoComplete: ['a']
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['autoComplete'][0]).toBe(1);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['autoComplete'][0]).toBe('a');
    });
  });

  it(`should set autoRowSize defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [autoRowSize]="column.autoRowSize"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        autoRowSize: false
      };
      app.prop['columns'] = [
        {},
        {
          autoRowSize: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['autoRowSize']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['autoRowSize']).toBe(true);
    });
  });

  it(`should set autoWrapCol defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [autoWrapCol]="column.autoWrapCol"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        autoWrapCol: false
      };
      app.prop['columns'] = [
        {},
        {
          autoWrapCol: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['autoWrapCol']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['autoWrapCol']).toBe(true);
    });
  });

  it(`should set autoWrapRow defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [autoWrapRow]="column.autoWrapRow"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        autoWrapRow: false
      };
      app.prop['columns'] = [
        {},
        {
          autoWrapRow: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['autoWrapRow']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['autoWrapRow']).toBe(true);
    });
  });

  it(`should set bindRowsWithHeaders defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [bindRowsWithHeaders]="column.bindRowsWithHeaders"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        bindRowsWithHeaders: false
      };
      app.prop['columns'] = [
        {},
        {
          bindRowsWithHeaders: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['bindRowsWithHeaders']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['bindRowsWithHeaders']).toBe(true);
    });
  });

  it(`should set cell defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [cell]="column.cell"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        cell: [{row: 0, col: 0, readOnly: true}]
      };
      app.prop['columns'] = [
        {},
        {
          cell: [{row: 0, col: 0, readOnly: false}]
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['cell'][0].readOnly).toBe(true);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['cell'][0].readOnly).toBe(false);
    });
  });

  it(`should set cells defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [cells]="column.cells"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        cells: function() { return { data: 1 }; }
      };
      app.prop['columns'] = [
        {},
        {
          cells: function() { return { data: 0 }}
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['cells']().data).toBe(1);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['cells']().data).toBe(0);
    });
  });

  it(`should set checkedTemplate defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [checkedTemplate]="column.checkedTemplate"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        checkedTemplate: false
      };
      app.prop['columns'] = [
        {},
        {
          checkedTemplate: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['checkedTemplate']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['checkedTemplate']).toBe(true);
    });
  });


  it(`should set className defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [className]="column.className"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        className: false
      };
      app.prop['columns'] = [
        {},
        {
          className: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['className']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['className']).toBe(true);
    });
  });

  it(`should set colHeaders defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [colHeaders]="column.colHeaders"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        colHeaders: false
      };
      app.prop['columns'] = [
        {},
        {
          colHeaders: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['colHeaders']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['colHeaders']).toBe(true);
    });
  });

  it(`should set collapsibleColumns defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [collapsibleColumns]="column.collapsibleColumns"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        collapsibleColumns: false
      };
      app.prop['columns'] = [
        {},
        {
          collapsibleColumns: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['collapsibleColumns']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['collapsibleColumns']).toBe(true);
    });
  });

  it(`should set columnHeaderHeight defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [columnHeaderHeight]="column.columnHeaderHeight"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        columnHeaderHeight: false
      };
      app.prop['columns'] = [
        {},
        {
          columnHeaderHeight: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['columnHeaderHeight']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['columnHeaderHeight']).toBe(true);
    });
  });

  it(`should set columns defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [columns]="column.columns"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['columns'] = [
        {},
        {
          columns: [
            {},
            { data: 1 }
          ]
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['columns'][1].data).toBe(void 0);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['columns'][1].data).toBe(1);
    });
  });

  it(`should set columnSorting defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [columnSorting]="column.columnSorting"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        columnSorting: false
      };
      app.prop['columns'] = [
        {},
        {
          columnSorting: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['columnSorting']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['columnSorting']).toBe(true);
    });
  });

  it(`should set columnSummary defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [columnSummary]="column.columnSummary"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        columnSummary: false
      };
      app.prop['columns'] = [
        {},
        {
          columnSummary: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['columnSummary']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['columnSummary']).toBe(true);
    });
  });

  it(`should set colWidths defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [colWidths]="column.colWidths"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        colWidths: false
      };
      app.prop['columns'] = [
        {},
        {
          colWidths: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['colWidths']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['colWidths']).toBe(true);
    });
  });

  it(`should set commentedCellClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [commentedCellClassName]="column.commentedCellClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        commentedCellClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          commentedCellClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['commentedCellClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['commentedCellClassName']).toBe(true);
    });
  });

  it(`should set comments defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [comments]="column.comments"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        comments: false
      };
      app.prop['columns'] = [
        {},
        {
          comments: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['comments']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['comments']).toBe(true);
    });
  });

  it(`should set contextMenu defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [contextMenu]="column.contextMenu"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        contextMenu: false
      };
      app.prop['columns'] = [
        {},
        {
          contextMenu: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['contextMenu']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['contextMenu']).toBe(true);
    });
  });

  it(`should set copyable defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [copyable]="column.copyable"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        copyable: false
      };
      app.prop['columns'] = [
        {},
        {
          copyable: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['copyable']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['copyable']).toBe(true);
    });
  });

  it(`should set copyPaste defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [copyPaste]="column.copyPaste"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        copyPaste: false
      };
      app.prop['columns'] = [
        {},
        {
          copyPaste: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['copyPaste']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['copyPaste']).toBe(true);
    });
  });

  it(`should set correctFormat defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [correctFormat]="column.correctFormat"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        correctFormat: false
      };
      app.prop['columns'] = [
        {},
        {
          correctFormat: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['correctFormat']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['correctFormat']).toBe(true);
    });
  });

  it(`should set currentColClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [currentColClassName]="column.currentColClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        currentColClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          currentColClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['currentColClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['currentColClassName']).toBe(true);
    });
  });

  it(`should set currentHeaderClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [currentHeaderClassName]="column.currentHeaderClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        currentHeaderClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          currentHeaderClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['currentHeaderClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['currentHeaderClassName']).toBe(true);
    });
  });

  it(`should set currentRowClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [currentRowClassName]="column.currentRowClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        currentRowClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          currentRowClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['currentRowClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['currentRowClassName']).toBe(true);
    });
  });

  it(`should set customBorders defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [customBorders]="column.customBorders"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        customBorders: false
      };
      app.prop['columns'] = [
        {},
        {
          customBorders: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['customBorders']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['customBorders']).toBe(true);
    });
  });

  it(`should set data defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [data]="column.data"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        data: [[1, 2]]
      };
      app.prop['columns'] = [
        {},
        {
          data: 0
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['data']).toBe(void 0);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['data']).toBe(0);
    });
  });

  it(`should set dataSchema defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [dataSchema]="column.dataSchema"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        dataSchema: false
      };
      app.prop['columns'] = [
        {},
        {
          dataSchema: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['dataSchema']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['dataSchema']).toBe(true);
    });
  });

  it(`should set dateFormat defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [dateFormat]="column.dateFormat"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        dateFormat: false
      };
      app.prop['columns'] = [
        {},
        {
          dateFormat: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['dateFormat']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['dateFormat']).toBe(true);
    });
  });

  it(`should set debug defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [debug]="column.debug"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        debug: false
      };
      app.prop['columns'] = [
        {},
        {
          debug: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['debug']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['debug']).toBe(true);
    });
  });

  it(`should set defaultDate defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [defaultDate]="column.defaultDate"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        defaultDate: false
      };
      app.prop['columns'] = [
        {},
        {
          defaultDate: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['defaultDate']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['defaultDate']).toBe(true);
    });
  });

  it(`should set disableVisualSelection defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [disableVisualSelection]="column.disableVisualSelection"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        disableVisualSelection: false
      };
      app.prop['columns'] = [
        {},
        {
          disableVisualSelection: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['disableVisualSelection']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['disableVisualSelection']).toBe(true);
    });
  });

  it(`should set dropdownMenu defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [dropdownMenu]="column.dropdownMenu"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        dropdownMenu: false
      };
      app.prop['columns'] = [
        {},
        {
          dropdownMenu: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['dropdownMenu']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['dropdownMenu']).toBe(true);
    });
  });

  it(`should set editor defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [editor]="column.editor"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        editor: false
      };
      app.prop['columns'] = [
        {},
        {
          editor: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['editor']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['editor']).toBe(true);
    });
  });

  it(`should set enterBeginsEditing defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [enterBeginsEditing]="column.enterBeginsEditing"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        enterBeginsEditing: false
      };
      app.prop['columns'] = [
        {},
        {
          enterBeginsEditing: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['enterBeginsEditing']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['enterBeginsEditing']).toBe(true);
    });
  });

  it(`should set enterMoves defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [enterMoves]="column.enterMoves"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        enterMoves: false
      };
      app.prop['columns'] = [
        {},
        {
          enterMoves: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['enterMoves']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['enterMoves']).toBe(true);
    });
  });

  it(`should set fillHandle defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [fillHandle]="column.fillHandle"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        fillHandle: false
      };
      app.prop['columns'] = [
        {},
        {
          fillHandle: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['fillHandle']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['fillHandle']).toBe(true);
    });
  });

  it(`should set filter defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [filter]="column.filter"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        filter: false
      };
      app.prop['columns'] = [
        {},
        {
          filter: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['filter']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['filter']).toBe(true);
    });
  });

  it(`should set filteringCaseSensitive defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [filteringCaseSensitive]="column.filteringCaseSensitive"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        filteringCaseSensitive: false
      };
      app.prop['columns'] = [
        {},
        {
          filteringCaseSensitive: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['filteringCaseSensitive']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['filteringCaseSensitive']).toBe(true);
    });
  });

  it(`should set filters defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [filters]="column.filters"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        filters: false
      };
      app.prop['columns'] = [
        {},
        {
          filters: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['filters']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['filters']).toBe(true);
    });
  });

  it(`should set fixedColumnsLeft defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [fixedColumnsLeft]="column.fixedColumnsLeft"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        fixedColumnsLeft: false
      };
      app.prop['columns'] = [
        {},
        {
          fixedColumnsLeft: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['fixedColumnsLeft']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['fixedColumnsLeft']).toBe(true);
    });
  });

  it(`should set fixedRowsBottom defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [fixedRowsBottom]="column.fixedRowsBottom"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        fixedRowsBottom: false
      };
      app.prop['columns'] = [
        {},
        {
          fixedRowsBottom: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['fixedRowsBottom']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['fixedRowsBottom']).toBe(true);
    });
  });

  it(`should set fixedRowsTop defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [fixedRowsTop]="column.fixedRowsTop"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        fixedRowsTop: false
      };
      app.prop['columns'] = [
        {},
        {
          fixedRowsTop: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['fixedRowsTop']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['fixedRowsTop']).toBe(true);
    });
  });

  it(`should set formulas defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [formulas]="column.formulas"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        formulas: false
      };
      app.prop['columns'] = [
        {},
        {
          formulas: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['formulas']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['formulas']).toBe(true);
    });
  });

  it(`should set fragmentSelection defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [fragmentSelection]="column.fragmentSelection"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        fragmentSelection: false
      };
      app.prop['columns'] = [
        {},
        {
          fragmentSelection: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['fragmentSelection']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['fragmentSelection']).toBe(true);
    });
  });

  it(`should set ganttChart defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [ganttChart]="column.ganttChart"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        ganttChart: false
      };
      app.prop['columns'] = [
        {},
        {
          ganttChart: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['ganttChart']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['ganttChart']).toBe(true);
    });
  });

  it(`should set headerTooltips defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [headerTooltips]="column.headerTooltips"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        headerTooltips: false
      };
      app.prop['columns'] = [
        {},
        {
          headerTooltips: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['headerTooltips']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['headerTooltips']).toBe(true);
    });
  });

  it(`should set height defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [height]="column.height"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        height: 10
      };
      app.prop['columns'] = [
        {},
        {
          height: 100
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['height']).toBe(10);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['height']).toBe(100);
    });
  });

  it(`should set hiddenColumns defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [hiddenColumns]="column.hiddenColumns"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        hiddenColumns: false
      };
      app.prop['columns'] = [
        {},
        {
          hiddenColumns: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['hiddenColumns']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['hiddenColumns']).toBe(true);
    });
  });

  it(`should set hiddenRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [hiddenRows]="column.hiddenRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        hiddenRows: false
      };
      app.prop['columns'] = [
        {},
        {
          hiddenRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['hiddenRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['hiddenRows']).toBe(true);
    });
  });

  it(`should set invalidCellClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [invalidCellClassName]="column.invalidCellClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        invalidCellClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          invalidCellClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['invalidCellClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['invalidCellClassName']).toBe(true);
    });
  });

  it(`should set label defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [label]="column.label"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        label: false
      };
      app.prop['columns'] = [
        {},
        {
          label: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['label']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['label']).toBe(true);
    });
  });

  xit(`should set language defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [language]="column.language"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        language: false
      };
      app.prop['columns'] = [
        {},
        {
          language: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['language']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['language']).toBe(true);
    });
  });

  it(`should set manualColumnFreeze defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [manualColumnFreeze]="column.manualColumnFreeze"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        manualColumnFreeze: false
      };
      app.prop['columns'] = [
        {},
        {
          manualColumnFreeze: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['manualColumnFreeze']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['manualColumnFreeze']).toBe(true);
    });
  });

  it(`should set manualColumnMove defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [manualColumnMove]="column.manualColumnMove"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        manualColumnMove: false
      };
      app.prop['columns'] = [
        {},
        {
          manualColumnMove: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['manualColumnMove']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['manualColumnMove']).toBe(true);
    });
  });

  it(`should set manualColumnResize defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [manualColumnResize]="column.manualColumnResize"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        manualColumnResize: false
      };
      app.prop['columns'] = [
        {},
        {
          manualColumnResize: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['manualColumnResize']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['manualColumnResize']).toBe(true);
    });
  });

  it(`should set manualRowMove defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [manualRowMove]="column.manualRowMove"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        manualRowMove: false
      };
      app.prop['columns'] = [
        {},
        {
          manualRowMove: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['manualRowMove']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['manualRowMove']).toBe(true);
    });
  });

  it(`should set manualRowResize defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [manualRowResize]="column.manualRowResize"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        manualRowResize: false
      };
      app.prop['columns'] = [
        {},
        {
          manualRowResize: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['manualRowResize']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['manualRowResize']).toBe(true);
    });
  });

  it(`should set maxCols defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [maxCols]="column.maxCols"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        maxCols: 100
      };
      app.prop['columns'] = [
        {},
        {
          maxCols: 10
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['maxCols']).toBe(100);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['maxCols']).toBe(10);
    });
  });

  it(`should set maxRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [maxRows]="column.maxRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        maxRows: false
      };
      app.prop['columns'] = [
        {},
        {
          maxRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['maxRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['maxRows']).toBe(true);
    });
  });

  it(`should set mergeCells defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [mergeCells]="column.mergeCells"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        mergeCells: false
      };
      app.prop['columns'] = [
        {},
        {
          mergeCells: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['mergeCells']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['mergeCells']).toBe(true);
    });
  });

  it(`should set minCols defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [minCols]="column.minCols"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        minCols: false
      };
      app.prop['columns'] = [
        {},
        {
          minCols: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['minCols']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['minCols']).toBe(true);
    });
  });

  it(`should set minRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [minRows]="column.minRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        minRows: false
      };
      app.prop['columns'] = [
        {},
        {
          minRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['minRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['minRows']).toBe(true);
    });
  });

  it(`should set minSpareCols defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [minSpareCols]="column.minSpareCols"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        minSpareCols: false
      };
      app.prop['columns'] = [
        {},
        {
          minSpareCols: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['minSpareCols']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['minSpareCols']).toBe(true);
    });
  });

  it(`should set minSpareRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [minSpareRows]="column.minSpareRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        minSpareRows: false
      };
      app.prop['columns'] = [
        {},
        {
          minSpareRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['minSpareRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['minSpareRows']).toBe(true);
    });
  });

  it(`should set multiSelect defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [multiSelect]="column.multiSelect"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        multiSelect: false
      };
      app.prop['columns'] = [
        {},
        {
          multiSelect: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['multiSelect']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['multiSelect']).toBe(true);
    });
  });

  it(`should set noWordWrapClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [noWordWrapClassName]="column.noWordWrapClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        noWordWrapClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          noWordWrapClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['noWordWrapClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['noWordWrapClassName']).toBe(true);
    });
  });

  it(`should set observeChanges defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [observeChanges]="column.observeChanges"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        observeChanges: false
      };
      app.prop['columns'] = [
        {},
        {
          observeChanges: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['observeChanges']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['observeChanges']).toBe(true);
    });
  });

  it(`should set observeDOMVisibility defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [observeDOMVisibility]="column.observeDOMVisibility"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        observeDOMVisibility: false
      };
      app.prop['columns'] = [
        {},
        {
          observeDOMVisibility: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['observeDOMVisibility']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['observeDOMVisibility']).toBe(true);
    });
  });

  it(`should set outsideClickDeselects defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [outsideClickDeselects]="column.outsideClickDeselects"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        outsideClickDeselects: false
      };
      app.prop['columns'] = [
        {},
        {
          outsideClickDeselects: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['outsideClickDeselects']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['outsideClickDeselects']).toBe(true);
    });
  });

  it(`should set persistentState defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [persistentState]="column.persistentState"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        persistentState: false
      };
      app.prop['columns'] = [
        {},
        {
          persistentState: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['persistentState']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['persistentState']).toBe(true);
    });
  });

  it(`should set placeholder defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [placeholder]="column.placeholder"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        placeholder: false
      };
      app.prop['columns'] = [
        {},
        {
          placeholder: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['placeholder']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['placeholder']).toBe(true);
    });
  });

  it(`should set placeholderCellClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [placeholderCellClassName]="column.placeholderCellClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        placeholderCellClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          placeholderCellClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['placeholderCellClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['placeholderCellClassName']).toBe(true);
    });
  });

  it(`should set preventOverflow defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [preventOverflow]="column.preventOverflow"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        preventOverflow: false
      };
      app.prop['columns'] = [
        {},
        {
          preventOverflow: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['preventOverflow']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['preventOverflow']).toBe(true);
    });
  });

  it(`should set readOnly defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [readOnly]="column.readOnly"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        readOnly: false
      };
      app.prop['columns'] = [
        {},
        {
          readOnly: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['readOnly']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['readOnly']).toBe(true);
    });
  });

  it(`should set readOnlyCellClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [readOnlyCellClassName]="column.readOnlyCellClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        readOnlyCellClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          readOnlyCellClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['readOnlyCellClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['readOnlyCellClassName']).toBe(true);
    });
  });

  it(`should set renderAllRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [renderAllRows]="column.renderAllRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        renderAllRows: false
      };
      app.prop['columns'] = [
        {},
        {
          renderAllRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['renderAllRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['renderAllRows']).toBe(true);
    });
  });

  it(`should set renderer defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [renderer]="column.renderer"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        renderer: 'date'
      };
      app.prop['columns'] = [
        {},
        {
          renderer: 'text'
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['renderer']).toBe('date');
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['renderer']).toBe('text');
    });
  });

  it(`should set rowHeaders defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [rowHeaders]="column.rowHeaders"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        rowHeaders: false
      };
      app.prop['columns'] = [
        {},
        {
          rowHeaders: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['rowHeaders']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['rowHeaders']).toBe(true);
    });
  });

  it(`should set rowHeaderWidth defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [rowHeaderWidth]="column.rowHeaderWidth"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        rowHeaderWidth: false
      };
      app.prop['columns'] = [
        {},
        {
          rowHeaderWidth: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['rowHeaderWidth']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['rowHeaderWidth']).toBe(true);
    });
  });

  it(`should set rowHeights defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [rowHeights]="column.rowHeights"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        rowHeights: false
      };
      app.prop['columns'] = [
        {},
        {
          rowHeights: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['rowHeights']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['rowHeights']).toBe(true);
    });
  });

  it(`should set search defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [search]="column.search"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        search: false
      };
      app.prop['columns'] = [
        {},
        {
          search: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['search']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['search']).toBe(true);
    });
  });

  it(`should set selectOptions defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [selectOptions]="column.selectOptions"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        selectOptions: false
      };
      app.prop['columns'] = [
        {},
        {
          selectOptions: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['selectOptions']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['selectOptions']).toBe(true);
    });
  });

  it(`should set skipColumnOnPaste defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [skipColumnOnPaste]="column.skipColumnOnPaste"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        skipColumnOnPaste: false
      };
      app.prop['columns'] = [
        {},
        {
          skipColumnOnPaste: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['skipColumnOnPaste']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['skipColumnOnPaste']).toBe(true);
    });
  });

  it(`should set sortByRelevance defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [sortByRelevance]="column.sortByRelevance"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        sortByRelevance: false
      };
      app.prop['columns'] = [
        {},
        {
          sortByRelevance: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['sortByRelevance']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['sortByRelevance']).toBe(true);
    });
  });

  it(`should set sortFunction defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [sortFunction]="column.sortFunction"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        sortFunction: false
      };
      app.prop['columns'] = [
        {},
        {
          sortFunction: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['sortFunction']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['sortFunction']).toBe(true);
    });
  });

  it(`should set sortIndicator defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [sortIndicator]="column.sortIndicator"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        sortIndicator: false
      };
      app.prop['columns'] = [
        {},
        {
          sortIndicator: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['sortIndicator']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['sortIndicator']).toBe(true);
    });
  });

  it(`should set source defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [source]="column.source"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        source: false
      };
      app.prop['columns'] = [
        {},
        {
          source: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['source']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['source']).toBe(true);
    });
  });

  it(`should set startCols defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [startCols]="column.startCols"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        startCols: false
      };
      app.prop['columns'] = [
        {},
        {
          startCols: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['startCols']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['startCols']).toBe(true);
    });
  });

  it(`should set startRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [startRows]="column.startRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        startRows: false
      };
      app.prop['columns'] = [
        {},
        {
          startRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['startRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['startRows']).toBe(true);
    });
  });

  it(`should set stretchH defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [stretchH]="column.stretchH"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        stretchH: false
      };
      app.prop['columns'] = [
        {},
        {
          stretchH: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['stretchH']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['stretchH']).toBe(true);
    });
  });

  it(`should set strict defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [strict]="column.strict"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        strict: false
      };
      app.prop['columns'] = [
        {},
        {
          strict: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['strict']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['strict']).toBe(true);
    });
  });

  it(`should set tableClassName defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [tableClassName]="column.tableClassName"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        tableClassName: false
      };
      app.prop['columns'] = [
        {},
        {
          tableClassName: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['tableClassName']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['tableClassName']).toBe(true);
    });
  });

  it(`should set tabMoves defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [tabMoves]="column.tabMoves"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        tabMoves: false
      };
      app.prop['columns'] = [
        {},
        {
          tabMoves: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['tabMoves']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['tabMoves']).toBe(true);
    });
  });

  it(`should set title defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [title]="column.title"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        title: false
      };
      app.prop['columns'] = [
        {},
        {
          title: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['title']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['title']).toBe(true);
    });
  });

  it(`should set trimDropdown defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [trimDropdown]="column.trimDropdown"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        trimDropdown: false
      };
      app.prop['columns'] = [
        {},
        {
          trimDropdown: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['trimDropdown']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['trimDropdown']).toBe(true);
    });
  });

  it(`should set trimRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [trimRows]="column.trimRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        trimRows: false
      };
      app.prop['columns'] = [
        {},
        {
          trimRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['trimRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['trimRows']).toBe(true);
    });
  });

  it(`should set trimWhitespace defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [trimWhitespace]="column.trimWhitespace"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        trimWhitespace: false
      };
      app.prop['columns'] = [
        {},
        {
          trimWhitespace: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['trimWhitespace']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['trimWhitespace']).toBe(true);
    });
  });

  it(`should set type defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [type]="column.type"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        type: 'date'
      };
      app.prop['columns'] = [
        {},
        {
          type: 'text'
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['type']).toBe('date');
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['type']).toBe('text');
    });
  });

  it(`should set uncheckedTemplate defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [uncheckedTemplate]="column.uncheckedTemplate"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        uncheckedTemplate: false
      };
      app.prop['columns'] = [
        {},
        {
          uncheckedTemplate: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['uncheckedTemplate']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['uncheckedTemplate']).toBe(true);
    });
  });

  it(`should set undo defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [undo]="column.undo"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        undo: false
      };
      app.prop['columns'] = [
        {},
        {
          undo: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['undo']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['undo']).toBe(true);
    });
  });

  it(`should set validator defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [validator]="column.validator"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        validator: false
      };
      app.prop['columns'] = [
        {},
        {
          validator: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['validator']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['validator']).toBe(true);
    });
  });

  it(`should set viewportColumnRenderingOffset defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [viewportColumnRenderingOffset]="column.viewportColumnRenderingOffset"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        viewportColumnRenderingOffset: false
      };
      app.prop['columns'] = [
        {},
        {
          viewportColumnRenderingOffset: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['viewportColumnRenderingOffset']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['viewportColumnRenderingOffset']).toBe(true);
    });
  });

  it(`should set viewportRowRenderingOffset defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [viewportRowRenderingOffset]="column.viewportRowRenderingOffset"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        viewportRowRenderingOffset: false
      };
      app.prop['columns'] = [
        {},
        {
          viewportRowRenderingOffset: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['viewportRowRenderingOffset']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['viewportRowRenderingOffset']).toBe(true);
    });
  });

  it(`should set visibleRows defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [visibleRows]="column.visibleRows"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        visibleRows: false
      };
      app.prop['columns'] = [
        {},
        {
          visibleRows: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['visibleRows']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['visibleRows']).toBe(true);
    });
  });

  it(`should set width defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [width]="column.width"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        width: 100
      };
      app.prop['columns'] = [
        {},
        {
          width: 10
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['width']).toBe(void 0);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['width']).toBe(10);
    });
  });

  it(`should set wordWrap defined as bindings`, () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot" [settings]="prop.settings">
            <hot-column *ngFor="let column of prop.columns; let i = index"
                        [wordWrap]="column.wordWrap"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      app.prop['settings'] = {
        wordWrap: false
      };
      app.prop['columns'] = [
        {},
        {
          wordWrap: true
        }
      ];
      fixture.detectChanges();
      expect(app.getHotInstance(app.id).getCellMeta(0, 0)['wordWrap']).toBe(false);
      expect(app.getHotInstance(app.id).getCellMeta(0, 1)['wordWrap']).toBe(true);
    });
  });
});
