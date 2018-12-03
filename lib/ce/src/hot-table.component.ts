import {
  AfterContentInit,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from './hot-table-registerer.service';
import { HotSettingsResolver } from './hot-settings-resolver.service';
import { HotColumnComponent } from './hot-column.component';

@Component({
  // tslint:disable-next-line
  selector: 'hot-table',
  template: '<div #container [id]="hotId"></div>',
  encapsulation: ViewEncapsulation.None,
  providers: [ HotTableRegisterer, HotSettingsResolver ],
})
export class HotTableComponent implements AfterContentInit, OnChanges, OnDestroy {
  @ViewChild('container') public container;

  private hotInstance: Handsontable;
  private columnsComponents: HotColumnComponent[] = [];
  // component inputs
  @Input() settings: Handsontable.GridSettings;
  @Input() hotId: string;
  // handsontable options
  @Input() activeHeaderClassName: string;
  @Input() allowEmpty: boolean;
  @Input() allowHtml: boolean;
  @Input() allowInsertColumn: boolean;
  @Input() allowInsertRow: boolean;
  @Input() allowInvalid: boolean;
  @Input() allowRemoveColumn: boolean;
  @Input() allowRemoveRow: boolean;
  @Input() autoColumnSize: boolean | object;
  @Input() autoRowSize: boolean | object;
  @Input() autoWrapCol: boolean;
  @Input() autoWrapRow: boolean;
  @Input() cell: object[];
  @Input() cells: (row: number, column: number, prop: object) => object;
  @Input() checkedTemplate: boolean | string | number;
  @Input() className: string | string[];
  @Input() colHeaders: boolean | string[] | ((column: number) => string);
  @Input() columnHeaderHeight: number | number[];
  @Input() columns: object[] | ((column: number) => object);
  @Input() columnSorting: boolean | object;
  @Input() colWidths: number | number[] | string | string[] | ((column: number) => number);
  @Input() commentedCellClassName: string;
  @Input() comments: boolean | object[];
  @Input() contextMenu: boolean | string[] | object;
  @Input() copyable: boolean;
  @Input() copyPaste: boolean | object;
  @Input() correctFormat: boolean;
  @Input() currentColClassName: string;
  @Input() currentHeaderClassName: string;
  @Input() currentRowClassName: string;
  @Input() customBorders: boolean | object[];
  @Input() data: any[][] | object[];
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
  @Input() numericFormat: object;
  @Input() observeChanges: boolean;
  @Input() observeDOMVisibility: boolean;
  @Input() outsideClickDeselects: boolean | ((event: Event) => boolean);
  @Input() persistentState: boolean;
  @Input() placeholder: string;
  @Input() placeholderCellClassName: string;
  @Input() preventOverflow: boolean | string;
  @Input() readOnly: boolean;
  @Input() readOnlyCellClassName: string;
  @Input() renderAllRows: boolean;
  @Input() renderer: string | ((instance: Handsontable, TD: HTMLTableCellElement, row: number, col: number, prop: number | string,
    value: any, cellProperties: Handsontable.GridSettings) => void);
  @Input() rowHeaders: boolean | string[] | ((row: number) => string);
  @Input() rowHeaderWidth: number | number[];
  @Input() rowHeights: number | number[] | string | string[] | ((row: number) => number);
  @Input() search: boolean;
  @Input() selectionMode: string;
  @Input() selectOptions: string[] | number[];
  @Input() skipColumnOnPaste: boolean;
  @Input() sortByRelevance: boolean;
  @Input() sortFunction: (sortOrder: boolean) => (a: [number, any], b: [number, any]) => boolean;
  @Input() sortIndicator: boolean;
  @Input() source: any[] | (() => void);
  @Input() startCols: number;
  @Input() startRows: number;
  @Input() stretchH: string;
  @Input() strict: boolean;
  @Input() tableClassName: string | string[];
  @Input() tabMoves: object | ((event: Event) => object);
  @Input() title: string;
  @Input() trimDropdown: boolean;
  @Input() trimWhitespace: boolean;
  @Input() type: string;
  @Input() uncheckedTemplate: boolean | string | number;
  @Input() undo: boolean;
  @Input() validator: string | RegExp | ((value: any, callback: (result: boolean) => void) => void);
  @Input() viewportColumnRenderingOffset: number | string;
  @Input() viewportRowRenderingOffset: number | string;
  @Input() visibleRows: number;
  @Input() width: number| (() => number);
  @Input() wordWrap: boolean;
  // handsontable hooks
  @Input() afterBeginEditing: (row: number, column: number) => void;
  @Input() afterCellMetaReset: () => void;
  @Input() afterChange: (changes: [number, string | number, any, any][], source: string) => void;
  @Input() afterChangesObserved: () => void;
  @Input() afterColumnMove: (columns: number[], target: number) => void;
  @Input() afterColumnResize: (currentColumn: number, newSize: number, isDoubleClick: boolean) => void;
  @Input() afterColumnSort: (column: number, order: string) => void;
  @Input() afterContextMenuDefaultOptions: (predefinedItems: any[]) => void;
  @Input() afterContextMenuHide: (context: Handsontable.plugins.ContextMenu) => void;
  @Input() afterContextMenuShow: (context: Handsontable.plugins.ContextMenu) => void;
  @Input() afterCopy: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => void;
  @Input() afterCopyLimit: (selectedRows: number, selectedColumnds: number, copyRowsLimit: number, copyColumnsLimit: number) => void;
  @Input() afterCreateCol: (index: number, amount: number, source: string) => void;
  @Input() afterCreateRow: (index: number, amount: number, source: string) => void;
  @Input() afterCut: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => void;
  @Input() afterDeselect: () => void;
  @Input() afterDestroy: () => void;
  @Input() afterDocumentKeyDown: (event: Event) => void;
  @Input() afterDrawSelection: (currentRow: number, curren13tColumn: number,
    cornersOfSelection: number[], layerLevel: number | void) => string | void;
  @Input() afterGetCellMeta: (row: number, column: number, cellProperties: Handsontable.GridSettings) => void;
  @Input() afterGetColHeader: (column: number, TH: HTMLTableCellElement) => void;
  @Input() afterGetColumnHeaderRenderers: (renderers: (() => void)[]) => void;
  @Input() afterGetRowHeader: (row: number, TH: HTMLTableCellElement) => void;
  @Input() afterGetRowHeaderRenderers: (renderers: (() => void)[]) => void;
  @Input() afterInit: () => void;
  @Input() afterLanguageChange: (languageCode: string) => void;
  @Input() afterListen: () => void;
  @Input() afterLoadData: (initialLoad: boolean) => void;
  @Input() afterMergeCells: (cellRange: Handsontable.wot.CellRange, mergeParent: object, auto: boolean) => void;
  @Input() afterModifyTransformEnd: (coords: Handsontable.wot.CellCoords, rowTransformDir: number, colTransformDir: number) => void;
  @Input() afterModifyTransformStart: (coords: Handsontable.wot.CellCoords, rowTransformDir: number, colTransformDir: number) => void;
  @Input() afterMomentumScroll: () => void;
  @Input() afterOnCellContextMenu: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() afterOnCellCornerDblClick: (event: Event) => void;
  @Input() afterOnCellCornerMouseDown: (event: Event) => void;
  @Input() afterOnCellMouseDown: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() afterOnCellMouseOut: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() afterOnCellMouseOver: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() afterPaste: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => void;
  @Input() afterPluginsInitialized: () => void;
  @Input() afterRedo: (action: object) => void;
  @Input() afterRemoveCellMeta: (row: number, column: number, key: string, value: any) => void;
  @Input() afterRemoveCol: (index: number, amount: number, physicalColumns: number[], source: string) => void;
  @Input() afterRemoveRow: (index: number, amount: number, physicalRows: number[], source: string) => void;
  @Input() afterRender: (isForced: boolean) => void;
  @Input() afterRenderer: (TD: HTMLTableCellElement, row: number, col: number,
    prop: string | number, value: string, cellProperties: Handsontable.GridSettings) => void;
  @Input() afterRowMove: (rows: number[], target: number) => void;
  @Input() afterRowResize: (currentRow: number, newSize: number, isDoubleClick: boolean) => void;
  @Input() afterScrollHorizontally: () => void;
  @Input() afterScrollVertically: () => void;
  @Input() afterSelection: (row: number, column: number, row2: number, column2: number,
    preventScrolling: object, selectionLayerLevel: number) => void;
  @Input() afterSelectionByProp: (row: number, prop: string, row2: number, prop2: string,
    preventScrolling: object, selectionLayerLevel: number) => void;
  @Input() afterSelectionEnd: (row: number, column: number, row2: number, column2: number, selectionLayerLevel: number) => void;
  @Input() afterSelectionEndByProp: (row: number, prop: string, row2: number, prop2: string, selectionLayerLevel: number) => void;
  @Input() afterSetCellMeta: (row: number, column: number, key: string, value: any) => void;
  @Input() afterSetDataAtCell: (changes: [number, string | number, any, any][], source: string) => void;
  @Input() afterSetDataAtRowProp: (changes: [number, string | number, any, any][], source: string) => void;
  @Input() afterUndo: (action: object) => void;
  @Input() afterUnlisten: () => void;
  @Input() afterUnmergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() afterUpdateSettings: (settings: object) => void;
  @Input() afterValidate: (isValid: boolean, value: any, row: number, prop: string | number, source: string) => void | boolean;
  @Input() afterViewportColumnCalculatorOverride: (calc: object) => void;
  @Input() afterViewportRowCalculatorOverride: (calc: object) => void;
  @Input() beforeAutofill: (start: object, end: object, data: any[][]) => void;
  @Input() beforeAutofillInsidePopulate: (index: object, direction: string, input: any[][], deltas: any[]) => void;
  @Input() beforeCellAlignment: (stateBefore: object, range: Handsontable.wot.CellRange[], type: string, alignmentClass: string) => void;
  @Input() beforeChange: (changes: [number, string | number, any, any][], source: string) => void;
  @Input() beforeChangeRender: (changes: [number, string | number, any, any][], source: string) => void;
  @Input() beforeColumnMove: (columns: number[], target: number) => boolean | void;
  @Input() beforeColumnResize: (currentColumn: number, newSize: number, isDoubleClick: boolean) => number | void;
  @Input() beforeColumnSort: (column: number, order: boolean) => void;
  @Input() beforeContextMenuSetItems: (menuItems: object[]) => void;
  @Input() beforeContextMenuShow: (context: Handsontable.plugins.ContextMenu) => void;
  @Input() beforeCopy: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => boolean | void;
  @Input() beforeCreateCol: (index: number, amount: number, source: string) => void;
  @Input() beforeCreateRow: (index: number, amount: number, source: string) => void;
  @Input() beforeCut: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => boolean | void;
  @Input() beforeDrawBorders: (corners: any[], borderClassName: string) => void;
  @Input() beforeGetCellMeta: (row: number, column: number, cellProperties: Handsontable.GridSettings) => void;
  @Input() beforeInit: () => void;
  @Input() beforeInitWalkontable: (walkontableConfig: object) => void;
  @Input() beforeKeyDown: (event: Event) => void;
  @Input() beforeLanguageChange: (languageCode: string) => void;
  @Input() beforeMergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() beforeOnCellContextMenu: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() beforeOnCellMouseDown: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement, controller: object) => void;
  @Input() beforeOnCellMouseOut: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() beforeOnCellMouseOver: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement, controller: object) => void;
  @Input() beforePaste: (data: any[][], coords: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => any;
  @Input() beforeRedo: (action: object) => void;
  @Input() beforeRemoveCellClassNames: (action: object) => string[] | void;
  @Input() beforeRemoveCellMeta: (row: number, column: number, key: string, value: any) => void;
  @Input() beforeRemoveCol: (index: number, amount: number, physicalColumns: number[], source: string) => void;
  @Input() beforeRemoveRow: (index: number, amount: number, physicalRows: number[], source: string) => void;
  @Input() beforeRender: (isForced: boolean) => void;
  @Input() beforeRenderer: (TD: HTMLTableCellElement, row: number, column: number, prop: string | number,
    value: any, cellProperties: Handsontable.GridSettings) => void;
  @Input() beforeRowMove: (rows: number[], target: number) => boolean | void;
  @Input() beforeRowResize: (currentRow: number, newSize: number, isDoubleClick: boolean) => number | void;
  @Input() beforeSetRangeEnd: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeSetRangeStart: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeSetRangeStartOnly: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeStretchingColumnWidth: (stretchedWidth: number, column: number) => number;
  @Input() beforeTouchScroll: () => void;
  @Input() beforeUndo: (action: object) => void;
  @Input() beforeUnmergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() beforeValidate: (value: any, row: number, prop: string | number, source: string) => void;
  @Input() beforeValueRender: (value: any, cellProperties: object) => void;
  @Input() construct: () => void;
  @Input() init: () => void;
  @Input() modifyAutofillRange: (startArea: number[], entireArea: number[]) => void;
  @Input() modifyCol: (column: number) => void;
  @Input() modifyColHeader: (column: number) => void;
  @Input() modifyColWidth: (width: number, column: number) => void;
  @Input() modifyCopyableRange: (copyableRanges: {startRow: number, startCol: number, endRow: number, endCol: number}[]) => void;
  @Input() modifyData: (row: number, column: number, valueHolder: object, ioMode: string) => void;
  @Input() modifyGetCellCoords: (row: number, column: number, topmost: boolean) => void;
  @Input() modifyRow: (row: number) => void;
  @Input() modifyRowData: (row: number) => void;
  @Input() modifyRowHeader: (row: number) => void;
  @Input() modifyRowHeaderWidth: (rowHeaderWidth: number) => void;
  @Input() modifyRowHeight: (height: number, row: number) => void;
  @Input() modifyRowSourceData: (row: number) => void;
  @Input() modifyTransformEnd: (delta: Handsontable.wot.CellCoords) => void;
  @Input() modifyTransformStart: (delta: Handsontable.wot.CellCoords) => void;
  @Input() persistentStateLoad: (key: string, valuePlaceholder: object) => void;
  @Input() persistentStateReset: (key?: string) => void;
  @Input() persistentStateSave: (key: string, value: any) => void;
  @Input() skipLengthCache: (delay: number) => void;
  @Input() unmodifyCol: (col: number) => void;
  @Input() unmodifyRow: (row: number) => void;

  constructor(
    private _ngZone: NgZone,
    private _hotTableRegisterer: HotTableRegisterer,
    private _hotSettingsResolver: HotSettingsResolver,
  ) {}

  ngAfterContentInit(): void {
    const options: Handsontable.GridSettings = this._hotSettingsResolver.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      const columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container.nativeElement, options);
    });

    if (this.hotId) {
      this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.hotInstance === void 0) {
      return;
    }

    const newOptions: Handsontable.GridSettings = this._hotSettingsResolver.prepareChanges(changes);

    this.updateHotTable(newOptions);
  }

  ngOnDestroy(): void {
    this._ngZone.runOutsideAngular(() => {
      this.hotInstance.destroy();
    });

    if (this.hotId) {
      this._hotTableRegisterer.removeInstance(this.hotId);
    }
  }

  updateHotTable(newSettings: Handsontable.GridSettings): void {
    if (!this.hotInstance) {
      return;
    }

    this.hotInstance.updateSettings(newSettings, false);
  }

  onAfterColumnsChange(): void {
    if (this.columnsComponents === void 0) {
      return;
    }

    if (this.columnsComponents.length > 0) {
      const columns: Handsontable.GridSettings[] = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });

      const newOptions = {
        columns: columns
      };

      this.updateHotTable(newOptions);
    }
  }

  onAfterColumnsNumberChange(): void {
    const columns: Handsontable.GridSettings[] = [];

    if (this.columnsComponents.length > 0) {
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });
    }

    this.updateHotTable({columns: columns});
  }

  addColumn(column: HotColumnComponent): void {
    this.columnsComponents.push(column);
    this.onAfterColumnsNumberChange();
  }

  removeColumn(column: HotColumnComponent): void {
    const index: number = this.columnsComponents.indexOf(column);

    this.columnsComponents.splice(index, 1);
    this.onAfterColumnsNumberChange();
  }
}
