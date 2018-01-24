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
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as Handsontable from 'handsontable-pro';

import { HotRegisterer } from './hot-registerer.service';
import { HotHelper } from './hot-settings.utils';
import { HotColumnComponent } from './hot-column.component';

@Component({
  selector: 'hot-table',
  template: '',
  encapsulation: ViewEncapsulation.None,
  providers: [ HotRegisterer, HotHelper ],
})

export class HotTableComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
  private hotInstance: Handsontable;
  private container: HTMLElement;
  private columnsComponents: HotColumnComponent[] = [];

  @Input() settings: object;
  @Input() hotId: string;

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
  @Input() multiSelect: boolean;
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

  @Output() afterBeginEditing: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCellMetaReset: EventEmitter<any[]> = new EventEmitter();
  @Output() afterChange: EventEmitter<any[]> = new EventEmitter();
  @Output() afterChangesObserved: EventEmitter<any[]> = new EventEmitter();
  @Output() afterColumnMove: EventEmitter<any[]> = new EventEmitter();
  @Output() afterColumnResize: EventEmitter<any[]> = new EventEmitter();
  @Output() afterColumnSort: EventEmitter<any[]> = new EventEmitter();
  @Output() afterContextMenuDefaultOptions: EventEmitter<any[]> = new EventEmitter();
  @Output() afterContextMenuHide: EventEmitter<any[]> = new EventEmitter();
  @Output() afterContextMenuShow: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCopy: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCopyLimit: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCreateCol: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCreateRow: EventEmitter<any[]> = new EventEmitter();
  @Output() afterCut: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDeselect: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDestroy: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDocumentKeyDown: EventEmitter<any[]> = new EventEmitter();
  @Output() afterGetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() afterGetColHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() afterGetColumnHeaderRenderers: EventEmitter<any[]> = new EventEmitter();
  @Output() afterGetRowHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() afterGetRowHeaderRenderers: EventEmitter<any[]> = new EventEmitter();
  @Output() afterInit: EventEmitter<any[]> = new EventEmitter();
  @Output() afterLanguageChange: EventEmitter<any[]> = new EventEmitter();
  @Output() afterListen: EventEmitter<any[]> = new EventEmitter();
  @Output() afterLoadData: EventEmitter<any[]> = new EventEmitter();
  @Output() afterModifyTransformEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() afterModifyTransformStart: EventEmitter<any[]> = new EventEmitter();
  @Output() afterMomentumScroll: EventEmitter<any[]> = new EventEmitter();
  @Output() afterOnCellCornerDblClick: EventEmitter<any[]> = new EventEmitter();
  @Output() afterOnCellCornerMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() afterOnCellMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() afterOnCellMouseOut: EventEmitter<any[]> = new EventEmitter();
  @Output() afterOnCellMouseOver: EventEmitter<any[]> = new EventEmitter();
  @Output() afterPaste: EventEmitter<any[]> = new EventEmitter();
  @Output() afterPluginsInitialized: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRedo: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRemoveCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRemoveCol: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRemoveRow: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRender: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRenderer: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRowMove: EventEmitter<any[]> = new EventEmitter();
  @Output() afterRowResize: EventEmitter<any[]> = new EventEmitter();
  @Output() afterScrollHorizontally: EventEmitter<any[]> = new EventEmitter();
  @Output() afterScrollVertically: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSelection: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSelectionByProp: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSelectionEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSelectionEndByProp: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSetDataAtCell: EventEmitter<any[]> = new EventEmitter();
  @Output() afterSetDataAtRowProp: EventEmitter<any[]> = new EventEmitter();
  @Output() afterUndo: EventEmitter<any[]> = new EventEmitter();
  @Output() afterUnlisten: EventEmitter<any[]> = new EventEmitter();
  @Output() afterUpdateSettings: EventEmitter<any[]> = new EventEmitter();
  @Output() afterValidate: EventEmitter<any[]> = new EventEmitter();
  @Output() afterViewportColumnCalculatorOverride: EventEmitter<any[]> = new EventEmitter();
  @Output() afterViewportRowCalculatorOverride: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeAutofill: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeAutofillInsidePopulate: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeCellAlignment: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeChange: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeChangeRender: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeColumnMove: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeColumnResize: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeColumnSort: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeContextMenuSetItems: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeCopy: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeCreateCol: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeCreateRow: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeCut: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeDrawBorders: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeGetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeInit: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeInitWalkontable: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeKeyDown: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeLanguageChange: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeOnCellMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeOnCellMouseOut: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeOnCellMouseOver: EventEmitter<any[]> = new EventEmitter();
  @Output() beforePaste: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRedo: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRemoveCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRemoveCol: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRemoveRow: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRender: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRenderer: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRowMove: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeRowResize: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeSetRangeEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeSetRangeStart: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeStretchingColumnWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeTouchScroll: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeUndo: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeValidate: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeValueRender: EventEmitter<any[]> = new EventEmitter();
  @Output() construct: EventEmitter<any[]> = new EventEmitter();
  @Output() init: EventEmitter<any[]> = new EventEmitter();
  @Output() manualRowHeights: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyAutofillRange: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyCol: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyColHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyColumnHeaderHeight: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyColWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyCopyableRange: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyData: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyRow: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyRowData: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyRowHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyRowHeaderWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyRowHeight: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyTransformEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() modifyTransformStart: EventEmitter<any[]> = new EventEmitter();
  @Output() persistentStateLoad: EventEmitter<any[]> = new EventEmitter();
  @Output() persistentStateReset: EventEmitter<any[]> = new EventEmitter();
  @Output() persistentStateSave: EventEmitter<any[]> = new EventEmitter();
  @Output() skipLengthCache: EventEmitter<any[]> = new EventEmitter();
  @Output() unmodifyCol: EventEmitter<any[]> = new EventEmitter();
  @Output() unmodifyRow: EventEmitter<any[]> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private _ngZone: NgZone,
    private _hotRegisterer: HotRegisterer,
    private _hotHelper: HotHelper) { }

  ngOnInit() {
    this.container = document.createElement('div');

    if (this.hotId) {
      this.container.id = this.hotId;
    }

    this.el.nativeElement.appendChild(this.container);
  }

  ngAfterContentInit() {
    let options = this._hotHelper.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      let columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotHelper.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container, options);
    });

    if (this.hotId) {
      this._hotRegisterer.registerInstance(this.hotId, this.hotInstance);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hotInstance === void 0) {
      return;
    }

    let newOptions = this._hotHelper.prepareChanges(changes);

    this.updateHotTable(newOptions);
  }

  ngOnDestroy() {
    this.hotInstance.destroy();

    if (this.hotId) {
      this._hotRegisterer.removeInstance(this.hotId);
    }
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
      let columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotHelper.mergeSettings(column));
      });

      let newOptions = {
        columns: columns
      };

      this.updateHotTable(newOptions);
    }
  }

  onAfterColumnsNumberChange() {
    let columns = [];

    if (this.columnsComponents.length > 0) {
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotHelper.mergeSettings(column));
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
