import {
  Component,
  ElementRef,
  NgZone,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  Input,
} from '@angular/core';

import * as Handsontable from 'handsontable';

import { HotTableRegisterer } from './hot-table-registerer.service';
import { HotSettingsResolver } from './hot-settings-resolver.service';
import { HotColumnComponent } from './hot-column.component';

@Component({
  // tslint:disable-next-line
  selector: 'hot-table',
  template: '',
  encapsulation: ViewEncapsulation.None,
  providers: [ HotTableRegisterer, HotSettingsResolver ],
})

export class HotTableComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
  private hotInstance: Handsontable;
  private container: HTMLElement;
  private columnsComponents: HotColumnComponent[] = [];

  @Input() settings: Handsontable.GridSettings;
  @Input() hotId: string;

  @Input() activeHeaderClassName: string;
  @Input() allowEmpty: boolean;
  @Input() allowHtml: boolean;
  @Input() allowInsertColumn: boolean;
  @Input() allowInsertRow: boolean;
  @Input() allowInvalid: boolean;
  @Input() allowRemoveColumn: boolean;
  @Input() allowRemoveRow: boolean;
  @Input() autoColumnSize: boolean | object;
  @Input() autoComplete: any[];
  @Input() autoRowSize: boolean | object;
  @Input() autoWrapCol: boolean;
  @Input() autoWrapRow: boolean;
  @Input() cell: any[];
  @Input() cells: (row: number, column: number, prop: object) => object;
  @Input() checkedTemplate: boolean | string;
  @Input() className: string | string[];
  @Input() colHeaders: boolean | string[] | ((column: number) => string);
  @Input() columnHeaderHeight: number | number[];
  @Input() columns: object[] | ((column: number) => object);
  @Input() columnSorting: boolean | object;
  @Input() colWidths: number | number[] | string | ((column: number) => number);
  @Input() commentedCellClassName: string;
  @Input() comments: boolean | object[];
  @Input() contextMenu: boolean | object | object[];
  @Input() copyable: boolean;
  @Input() copyPaste: boolean | object;
  @Input() correctFormat: boolean;
  @Input() currentColClassName: string;
  @Input() currentHeaderClassName: string;
  @Input() currentRowClassName: string;
  @Input() customBorders: boolean | object[];
  @Input() data: any[];
  @Input() dataSchema: object;
  @Input() dateFormat: string;
  @Input() debug: boolean;
  @Input() defaultDate: string;
  @Input() disableVisualSelection: boolean | string | string[];
  @Input() dragToScroll: boolean;
  @Input() editor: boolean | string | (() => void);
  @Input() enterBeginsEditing: boolean;
  @Input() enterMoves: object | (() => void);
  @Input() fillHandle: boolean | string | object;
  @Input() filter: boolean;
  @Input() filteringCaseSensitive: boolean;
  @Input() fixedColumnsLeft: number;
  @Input() fixedRowsTop: number;
  @Input() format: string;
  @Input() fragmentSelection: boolean | string;
  @Input() height: number | (() => number);
  @Input() invalidCellClassName: string;
  @Input() label: object;
  @Input() language: string;
  @Input() manualColumnFreeze: boolean;
  @Input() manualColumnMove: boolean | number[];
  @Input() manualColumnResize: boolean | number[];
  @Input() manualRowMove: boolean | number[];
  @Input() manualRowResize: boolean | number[];
  @Input() maxCols: number;
  @Input() maxRows: number;
  @Input() mergeCells: boolean | object[];
  @Input() minCols: number;
  @Input() minRows: number;
  @Input() minSpareCols: number;
  @Input() minSpareRows: number;
  @Input() noWordWrapClassName: string;
  @Input() numericFormat: any;
  @Input() observeChanges: boolean;
  @Input() observeDOMVisibility: boolean;
  @Input() outsideClickDeselects: boolean | ((event: Event) => boolean);
  @Input() pasteMode: string;
  @Input() persistentState: boolean;
  @Input() placeholder: any;
  @Input() placeholderCellClassName: string;
  @Input() preventOverflow: boolean | string;
  @Input() readOnly: boolean;
  @Input() readOnlyCellClassName: string;
  @Input() renderAllRows: boolean;
  @Input() renderer: string | (() => void);
  @Input() rowHeaders: boolean | string[] | (() => string);
  @Input() rowHeaderWidth: number | number[];
  @Input() rowHeights: number | number[] | string | ((row: number) => number);
  @Input() search: boolean;
  @Input() selectionMode: string;
  @Input() selectOptions: string[] | number[];
  @Input() skipColumnOnPaste: boolean;
  @Input() sortByRelevance: boolean;
  @Input() sortFunction: (sortOrder: boolean) => void;
  @Input() sortIndicator: boolean;
  @Input() source: any[] | (() => void);
  @Input() startCols: number;
  @Input() startRows: number;
  @Input() stretchH: string;
  @Input() strict: boolean;
  @Input() tableClassName: string | string[];
  @Input() tabMoves: object;
  @Input() title: string;
  @Input() trimDropdown: boolean;
  @Input() trimWhitespace: boolean;
  @Input() type: string;
  @Input() uncheckedTemplate: boolean | string;
  @Input() undo: boolean;
  @Input() validator: string | RegExp | (() => void);
  @Input() viewportColumnRenderingOffset: number | string;
  @Input() viewportRowRenderingOffset: number | string;
  @Input() visibleRows: number;
  @Input() width: number| (() => number);
  @Input() wordWrap: boolean;

  @Input() afterBeginEdting: (row: number, column: number) => void;
  @Input() afterCellMetaReset: () => void;
  @Input() afterChange: (changes: any[], source: string) => void;
  @Input() afterChangesObserved: () => void;
  @Input() afterColumnMove: (startColumn: number, endColumn: number) => void;
  @Input() afterColumnResize: (currentColumn: number, newSize: number, isDoubleClick: boolean) => void;
  @Input() afterColumnSort: (column: number, order: boolean) => void;
  @Input() afterContextMenuDefaultOptions: (predefinedItems: any[]) => void;
  @Input() afterContextMenuHide: (context: object) => void;
  @Input() beforeContextMenuShow: (context: object) => void;
  @Input() afterContextMenuShow: (context: object) => void;
  @Input() afterCopy: (data: any[], coords: any[]) => void;
  @Input() afterCopyLimit: (selectedRows: number, selectedColumnds: number, copyRowsLimit: number, copyColumnsLimit: number) => void;
  @Input() afterCreateCol: (index: number, amount: number) => void;
  @Input() afterCreateRow: (index: number, amount: number) => void;
  @Input() afterCut: (data: any[], coords: any[]) => void;
  @Input() afterDeselect: () => void;
  @Input() afterDestroy: () => void;
  @Input() afterDocumentKeyDown: (event: Event) => void;
  @Input() afterGetCellMeta: (row: number, col: number, cellProperties: Handsontable.GridSettings) => void;
  @Input() afterGetColHeader: (col: number, TH: Element) => void;
  @Input() afterGetColumnHeaderRenderers: (array: any[]) => void;
  @Input() afterGetRowHeader: (row: number, TH: Element) => void;
  @Input() afterGetRowHeaderRenderers: (array: any[]) => void;
  @Input() afterInit: () => void;
  @Input() afterLoadData: (firstTime: boolean) => void;
  @Input() afterModifyTransformEnd: (coords: Handsontable.wot.CellCoords, rowTransformDir: number, colTransformDir: number) => void;
  @Input() afterModifyTransformStart: (coords: Handsontable.wot.CellCoords, rowTransformDir: number, colTransformDir: number) => void;
  @Input() afterMomentumScroll: () => void;
  @Input() afterOnCellCornerDblClick: (event: object) => void;
  @Input() afterOnCellCornerMouseDown: (event: object) => void;
  @Input() afterOnCellMouseDown: (event: object, coords: object, TD: Element) => void;
  @Input() afterOnCellMouseOver: (event: object, coords: object, TD: Element) => void;
  @Input() afterOnCellMouseOut: (event: object, coords: object, TD: Element) => void;
  @Input() afterPaste: (data: any[], coords: any[]) => void;
  @Input() afterPluginsInitialized: () => void;
  @Input() afterRedo: (action: object) => void;
  @Input() afterRemoveCol: (index: number, amount: number) => void;
  @Input() afterRemoveRow: (index: number, amount: number) => void;
  @Input() afterRender: (isForced: boolean) => void;
  @Input() afterRenderer: (TD: Element, row: number, col: number,
    prop: string | number, value: string, cellProperties: Handsontable.GridSettings) => void;
  @Input() afterRowMove: (startRow: number, endRow: number) => void;
  @Input() afterRowResize: (currentRow: number, newSize: number, isDoubleClick: boolean) => void;
  @Input() afterScrollHorizontally: () => void;
  @Input() afterScrollVertically: () => void;
  @Input() afterSelection: (r: number, c: number, r2: number, c2: number, preventScrolling: object, selectionLayerLevel: number) => void;
  @Input() afterSelectionByProp: (r: number, p: string, r2: number, p2: string,
    preventScrolling: object, selectionLayerLevel: number) => void;
  @Input() afterSelectionEnd: (r: number, c: number, r2: number, c2: number, selectionLayerLevel: number) => void;
  @Input() afterSelectionEndByProp: (r: number, p: string, r2: number, p2: string, selectionLayerLevel: number) => void;
  @Input() afterSetCellMeta: (row: number, col: number, key: string, value: any) => void;
  @Input() afterSetDataAtCell: (changes: any[], source: string) => void;
  @Input() afterSetDataAtRowProp: (changes: any[], source: string) => void;
  @Input() afterUndo: (action: object) => void;
  @Input() afterUpdateSettings: () => void;
  @Input() afterValidate: (isValid: boolean, value: any, row: number, prop: string | number, source: string) => void | boolean;
  @Input() afterViewportColumnCalculatorOverride: (calc: object) => void;
  @Input() afterViewportRowCalculatorOverride: (calc: object) => void;
  @Input() beforeAutofill: (start: object, end: object, data: any[]) => void;
  @Input() beforeAutofillInsidePopulate: (index: object, direction: string, input: any[], deltas: any[]) => void;
  @Input() beforeCellAlignment: (stateBefore: any, range: any, type: string, alignmentClass: string) => void;
  @Input() beforeChange: (changes: any[], source: string) => void;
  @Input() beforeChangeRender: (changes: any[], source: string) => void;
  @Input() beforeColumnMove: (startColumn: number, endColumn: number) => void;
  @Input() beforeColumnResize: (currentColumn: number, newSize: number, isDoubleClick: boolean) => void;
  @Input() beforeColumnSort: (column: number, order: boolean) => void;
  @Input() beforeContextMenuSetItems: (menuItems: any[]) => void;
  @Input() beforeCopy: (data: any[], coords: any[]) => any;
  @Input() beforeCreateCol: (index: number, amount: number, source: string) => void;
  @Input() beforeCreateRow: (index: number, amount: number, source: string) => void;
  @Input() beforeCut: (data: any[], coords: any[]) => any;
  @Input() beforeDrawBorders: (corners: any[], borderClassName: string) => void;
  @Input() beforeGetCellMeta: (row: number, col: number, cellProperties: Handsontable.GridSettings) => void;
  @Input() beforeInit: () => void;
  @Input() beforeInitWalkontable: (walkontableConfig: object) => void;
  @Input() beforeKeyDown: (event: Event) => void;
  @Input() beforeOnCellMouseDown: (event: Event, coords: object, TD: Element) => void;
  @Input() beforeOnCellMouseOut: (event: Event, coords: Handsontable.wot.CellCoords, TD: Element) => void;
  @Input() beforeOnCellMouseOver: (event: Event, coords: Handsontable.wot.CellCoords, TD: Element, blockCalculations: object) => void;
  @Input() beforePaste: (data: any[], coords: any[]) => any;
  @Input() beforeRedo: (action: object) => void;
  @Input() beforeRemoveCol: (index: number, amount: number, logicalCols: any[]) => void;
  @Input() beforeRemoveRow: (index: number, amount: number, logicalRows: any[]) => void;
  @Input() beforeRender: (isForced: boolean, skipRender: object) => void;
  @Input() beforeRenderer: (TD: Element, row: number, col: number,
    prop: string | number, value: string, cellProperties: Handsontable.GridSettings) => void;
  @Input() beforeRowMove: (startRow: number, endRow: number) => void;
  @Input() beforeRowResize: (currentRow: number, newSize: number, isDoubleClick: boolean) => any;
  @Input() beforeSetRangeEnd: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeSetRangeStart: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeStretchingColumnWidth: (stretchedWidth: number, column: number) => void;
  @Input() beforeTouchScroll: () => void;
  @Input() beforeUndo: (action: object) => void;
  @Input() beforeValidate: (value: any, row: number, prop: string | number, source: string) => void;
  @Input() beforeValueRender: (value: any, cellProperties: object) => void;
  @Input() construct: () => void;
  @Input() init: () => void;
  @Input() manualRowHeights: (state: any[]) => void;
  @Input() modifyAutofillRange: (startArea: any[], entireArea: any[]) => void;
  @Input() modifyCol: (col: number) => void;
  @Input() modifyColHeader: (column: number) => void;
  @Input() modifyColWidth: (width: number, col: number) => void;
  @Input() modifyCopyableRange: (copyableRanges: any[]) => void;
  @Input() modifyData: (row: number, column: number, valueHolder: object, ioMode: string) => void;
  @Input() modifyRow: (row: number) => void;
  @Input() modifyRowHeader: (row: number) => void;
  @Input() modifyRowHeaderWidth: (rowHeaderWidth: number) => void;
  @Input() modifyRowHeight: (height: number, row: number) => void;
  @Input() modifyRowSourceData: (row: number) => void;
  @Input() modifyTransformEnd: (delta: Handsontable.wot.CellCoords) => void;
  @Input() modifyTransformStart: (delta: Handsontable.wot.CellCoords) => void;
  @Input() persistentStateLoad: (key: string, valuePlaceholder: object) => void;
  @Input() persistentStateReset: (key: string) => void;
  @Input() persistentStateSave: (key: string, value: any) => void;
  @Input() skipLengthCache: (delay: number) => void;
  @Input() unmodifyCol: (col: number) => void;
  @Input() unmodifyRow: (row: number) => void;

  constructor(
    private el: ElementRef,
    private _ngZone: NgZone,
    private _hotTableRegisterer: HotTableRegisterer,
    private _hotSettingsResolver: HotSettingsResolver
  ) { }

  ngOnInit() {
    this.container = document.createElement('div');

    if (this.hotId) {
      this.container.id = this.hotId;
    }

    this.el.nativeElement.appendChild(this.container);
  }

  ngAfterContentInit() {
    const options = this._hotSettingsResolver.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      const columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container, options);
    });

    if (this.hotId) {
      this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hotInstance === void 0) {
      return;
    }

    const newOptions = this._hotSettingsResolver.prepareChanges(changes);

    this.updateHotTable(newOptions);
  }

  ngOnDestroy() {
    this.hotInstance.destroy();

    if (this.hotId) {
      this._hotTableRegisterer.removeInstance(this.hotId);
    }

    this.el.nativeElement.removeChild(this.container);
    this.container = void 0;
  }

  updateHotTable(newSettings: object) {
    if (!this.hotInstance) {
      return;
    }
    this.hotInstance.updateSettings(newSettings, false);
  }

  onAfterColumnsChange() {
    if (this.columnsComponents === void 0) {
      return;
    }

    if (this.columnsComponents.length > 0) {
      const columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });

      const newOptions = {
        columns: columns
      };

      this.updateHotTable(newOptions);
    }
  }

  onAfterColumnsNumberChange() {
    const columns = [];

    if (this.columnsComponents.length > 0) {
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });
    }

    this.updateHotTable({columns: columns});
  }

  addColumn(column: HotColumnComponent) {
    this.columnsComponents.push(column);
    this.onAfterColumnsNumberChange();
  }

  removeColumn(column: HotColumnComponent) {
    const index = this.columnsComponents.indexOf(column);

    this.columnsComponents.splice(index, 1);
    this.onAfterColumnsNumberChange();
  }
}
