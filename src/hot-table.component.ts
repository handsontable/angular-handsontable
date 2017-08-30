import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import Handsontable from 'handsontable';

import { HotRegisterer } from './hot-registerer.service';
import { HotHelper } from './hot-settings.utils';
import { HotColumnComponent } from './hot-column.component';

@Component({
  selector: 'hot-table',
  template: ``,
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
  @Input() bindRowsWithHeaders: boolean | string;
  @Input() cell: any[];
  @Input() cells: (row: number, column: number, prop: object) => object;
  @Input() checkedTemplate: boolean | string;
  @Input() className: string | string[];
  @Input() colHeaders: boolean | string[] | ((column: number) => string);
  @Input() collapsibleColumns: boolean | object[];
  @Input() columnHeaderHeight: number | number[];
  @Input() columns: object[] | ((column: number) => object);
  @Input() columnSorting: boolean | object;
  @Input() columnSummary: object;
  @Input() colWidths: number | number[] | string | ((column: number) => number);
  @Input() commentedCellClassName: string;
  @Input() comments: boolean | object[];
  @Input() contextMenu: boolean | object | object[];
  @Input() copyable: boolean;
  @Input() copyColsLimit: number;
  @Input() copyPaste: boolean;
  @Input() copyRowsLimit: number;
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
  @Input() dropdownMenu: boolean | object | object[];
  @Input() editor: boolean | string | (() => void);
  @Input() enterBeginsEditing: boolean;
  @Input() enterMoves: object | (() => void);
  @Input() fillHandle: boolean | string | object;
  @Input() filter: boolean;
  @Input() filteringCaseSensitive: boolean;
  @Input() filters: boolean;
  @Input() fixedColumnsLeft: number;
  @Input() fixedRowsBottom: number;
  @Input() fixedRowsTop: number;
  @Input() format: string;
  @Input() formulas: boolean;
  @Input() fragmentSelection: boolean | string;
  @Input() ganttChart: object;
  @Input() headerTooltips: boolean | object;
  @Input() height: number | (() => number);
  @Input() hiddenColumns: boolean | object;
  @Input() hiddenRows: boolean | object;
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
  @Input() nestedHeaders: any[];
  @Input() noWordWrapClassName: string;
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
  @Input() trimRows: boolean | number[];
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

  @Output() public afterAddChild: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterBeginEditing: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCellMetaReset: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterChange: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterChangesObserved: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterColumnMove: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterColumnResize: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterColumnSort: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterContextMenuDefaultOptions: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterContextMenuHide: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterContextMenuShow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCopy: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCopyLimit: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCreateCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCreateRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterCut: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDeselect: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDestroy: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDetachChild: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDocumentKeyDown: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDropdownMenuDefaultOptions: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDropdownMenuHide: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterDropdownMenuShow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterFilter: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterGetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterGetColHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterGetColumnHeaderRenderers: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterGetRowHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterGetRowHeaderRenderers: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterInit: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterLoadData: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterModifyTransformEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterModifyTransformStart: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterMomentumScroll: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterOnCellCornerDblClick: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterOnCellCornerMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterOnCellMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterOnCellMouseOver: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterOnCellMouseOut: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterPluginsInitialized: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRedo: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRemoveCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRemoveRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRender: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRenderer: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRowMove: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterRowResize: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterScrollHorizontally: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterScrollVertically: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSelection: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSelectionByProp: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSelectionEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSelectionEndByProp: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSetDataAtCell: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterSetDataAtRowProp: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterTrimRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterUndo: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterUntrimRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterUpdateSettings: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterValidate: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterViewportColumnCalculatorOverride: EventEmitter<any[]> = new EventEmitter();
  @Output() public afterViewportRowCalculatorOverride: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeAddChild: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeAutofill: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeAutofillInsidePopulate: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeCellAlignment: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeChange: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeChangeRender: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeColumnMove: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeColumnResize: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeColumnSort: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeContextMenuSetItems: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeCopy: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeCreateCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeCreateRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeCut: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeDetachChild: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeDrawBorders: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeDropdownMenuSetItems: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeFilter: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeGetCellMeta: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeInit: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeInitWalkontable: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeKeyDown: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeOnCellMouseDown: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeOnCellMouseOut: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeOnCellMouseOver: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforePaste: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRedo: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRemoveCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRemoveRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRender: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRenderer: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRowMove: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeRowResize: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeSetRangeEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeSetRangeStart: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeStretchingColumnWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeTouchScroll: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeUndo: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeValidate: EventEmitter<any[]> = new EventEmitter();
  @Output() public beforeValueRender: EventEmitter<any[]> = new EventEmitter();
  @Output() public construct: EventEmitter<any[]> = new EventEmitter();
  @Output() public hiddenColumn: EventEmitter<any[]> = new EventEmitter();
  @Output() public hiddenRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public init: EventEmitter<any[]> = new EventEmitter();
  @Output() public manualRowHeights: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyAutofillRange: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyColHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyColumnHeaderHeight: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyColWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyCopyableRange: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyData: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyRow: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyRowHeader: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyRowHeaderWidth: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyRowHeight: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyRowData: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyTransformEnd: EventEmitter<any[]> = new EventEmitter();
  @Output() public modifyTransformStart: EventEmitter<any[]> = new EventEmitter();
  @Output() public persistentStateLoad: EventEmitter<any[]> = new EventEmitter();
  @Output() public persistentStateReset: EventEmitter<any[]> = new EventEmitter();
  @Output() public persistentStateSave: EventEmitter<any[]> = new EventEmitter();
  @Output() public skipLengthCache: EventEmitter<any[]> = new EventEmitter();
  @Output() public unmodifyCol: EventEmitter<any[]> = new EventEmitter();
  @Output() public unmodifyRow: EventEmitter<any[]> = new EventEmitter();

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
