import {
  AfterContentInit,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import * as Handsontable from 'handsontable-pro';
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
  @Input() allowEmpty: Handsontable.GridSettings['allowEmpty'];
  @Input() allowHtml: Handsontable.GridSettings['allowHtml'];
  @Input() allowInsertColumn: Handsontable.GridSettings['allowInsertColumn'];
  @Input() allowInsertRow: Handsontable.GridSettings['allowInsertRow'];
  @Input() allowInvalid: Handsontable.GridSettings['allowInvalid'];
  @Input() allowRemoveColumn: Handsontable.GridSettings['allowRemoveColumn'];
  @Input() allowRemoveRow: Handsontable.GridSettings['allowRemoveRow'];
  @Input() autoColumnSize: Handsontable.GridSettings['autoColumnSize'];
  @Input() autoRowSize: Handsontable.GridSettings['autoRowSize'];
  @Input() autoWrapCol: Handsontable.GridSettings['autoWrapCol'];
  @Input() autoWrapRow: Handsontable.GridSettings['autoWrapRow'];
  @Input() cell: Handsontable.GridSettings['cell'];
  @Input() cells: Handsontable.GridSettings['cells'];
  @Input() checkedTemplate: Handsontable.GridSettings['checkedTemplate'];
  @Input() className: Handsontable.GridSettings['className'];
  @Input() colHeaders: Handsontable.GridSettings['colHeaders'];
  @Input() columnHeaderHeight: Handsontable.GridSettings['columnHeaderHeight'];
  @Input() columns: Handsontable.GridSettings['columns'];
  @Input() columnSorting: Handsontable.GridSettings['columnSorting'];
  @Input() colWidths: Handsontable.GridSettings['colWidths'];
  @Input() commentedCellClassName: Handsontable.GridSettings['commentedCellClassName'];
  @Input() comments: Handsontable.GridSettings['comments'];
  @Input() contextMenu: Handsontable.GridSettings['contextMenu'];
  @Input() copyable: Handsontable.GridSettings['copyable'];
  @Input() copyPaste: Handsontable.GridSettings['copyPaste'];
  @Input() correctFormat: Handsontable.GridSettings['correctFormat'];
  @Input() currentColClassName: Handsontable.GridSettings['currentColClassName'];
  @Input() currentHeaderClassName: Handsontable.GridSettings['currentHeaderClassName'];
  @Input() currentRowClassName: Handsontable.GridSettings['currentRowClassName'];
  @Input() customBorders: Handsontable.GridSettings['customBorders'];
  @Input() data: Handsontable.GridSettings['data'];
  @Input() dataSchema: Handsontable.GridSettings['dataSchema'];
  @Input() dateFormat: Handsontable.GridSettings['dateFormat'];
  @Input() debug: Handsontable.GridSettings['debug'];
  @Input() defaultDate: Handsontable.GridSettings['defaultDate'];
  @Input() disableVisualSelection: Handsontable.GridSettings['disableVisualSelection'];
  @Input() dragToScroll: boolean;
  @Input() editor: Handsontable.GridSettings['editor'];
  @Input() enterBeginsEditing: Handsontable.GridSettings['enterBeginsEditing'];
  @Input() enterMoves: Handsontable.GridSettings['enterMoves'];
  @Input() fillHandle: Handsontable.GridSettings['fillHandle'];
  @Input() filter: Handsontable.GridSettings['filter'];
  @Input() filteringCaseSensitive: Handsontable.GridSettings['filteringCaseSensitive'];
  @Input() fixedColumnsLeft: Handsontable.GridSettings['fixedColumnsLeft'];
  @Input() fixedRowsBottom: Handsontable.GridSettings['fixedRowsBottom'];
  @Input() fixedRowsTop: Handsontable.GridSettings['fixedRowsTop'];
  @Input() fragmentSelection: Handsontable.GridSettings['fragmentSelection'];
  @Input() height: Handsontable.GridSettings['height'];
  @Input() invalidCellClassName: Handsontable.GridSettings['invalidCellClassName'];
  @Input() label: Handsontable.GridSettings['label'];
  @Input() language: Handsontable.GridSettings['language'];
  @Input() manualColumnFreeze: Handsontable.GridSettings['manualColumnFreeze'];
  @Input() manualColumnMove: Handsontable.GridSettings['manualColumnMove'];
  @Input() manualColumnResize: Handsontable.GridSettings['manualColumnResize'];
  @Input() manualRowMove: Handsontable.GridSettings['manualRowMove'];
  @Input() manualRowResize: Handsontable.GridSettings['manualRowResize'];
  @Input() maxCols: Handsontable.GridSettings['maxCols'];
  @Input() maxRows: Handsontable.GridSettings['maxRows'];
  @Input() mergeCells: Handsontable.GridSettings['mergeCells'];
  @Input() minCols: Handsontable.GridSettings['minCols'];
  @Input() minRows: Handsontable.GridSettings['minRows'];
  @Input() minSpareCols: Handsontable.GridSettings['minSpareCols'];
  @Input() minSpareRows: Handsontable.GridSettings['minSpareRows'];
  @Input() noWordWrapClassName: Handsontable.GridSettings['noWordWrapClassName'];
  @Input() numericFormat: Handsontable.GridSettings['numericFormat'];
  @Input() observeChanges: Handsontable.GridSettings['observeChanges'];
  @Input() observeDOMVisibility: Handsontable.GridSettings['observeDOMVisibility'];
  @Input() outsideClickDeselects: Handsontable.GridSettings['outsideClickDeselects'];
  @Input() persistentState: Handsontable.GridSettings['persistentState'];
  @Input() placeholder: Handsontable.GridSettings['placeholder'];
  @Input() placeholderCellClassName: Handsontable.GridSettings['placeholderCellClassName'];
  @Input() preventOverflow: Handsontable.GridSettings['preventOverflow'];
  @Input() readOnly: Handsontable.GridSettings['readOnly'];
  @Input() readOnlyCellClassName: Handsontable.GridSettings['readOnlyCellClassName'];
  @Input() renderAllRows: Handsontable.GridSettings['renderAllRows'];
  @Input() renderer: Handsontable.GridSettings['renderer'];
  @Input() rowHeaders: Handsontable.GridSettings['rowHeaders'];
  @Input() rowHeaderWidth: Handsontable.GridSettings['rowHeaderWidth'];
  @Input() rowHeights: Handsontable.GridSettings['rowHeights'];
  @Input() search: Handsontable.GridSettings['search'];
  @Input() selectionMode: Handsontable.GridSettings['selectionMode'];
  @Input() selectOptions: Handsontable.GridSettings['selectOptions'];
  @Input() skipColumnOnPaste: Handsontable.GridSettings['skipColumnOnPaste'];
  @Input() sortByRelevance: Handsontable.GridSettings['sortByRelevance'];
  @Input() source: Handsontable.GridSettings['source'];
  @Input() startCols: Handsontable.GridSettings['startCols'];
  @Input() startRows: Handsontable.GridSettings['startRows'];
  @Input() stretchH: Handsontable.GridSettings['stretchH'];
  @Input() strict: Handsontable.GridSettings['strict'];
  @Input() tableClassName: Handsontable.GridSettings['tableClassName'];
  @Input() tabMoves: Handsontable.GridSettings['tabMoves'];
  @Input() title: Handsontable.GridSettings['title'];
  @Input() trimDropdown: Handsontable.GridSettings['trimDropdown'];
  @Input() trimWhitespace: Handsontable.GridSettings['trimWhitespace'];
  @Input() type: Handsontable.GridSettings['type'];
  @Input() uncheckedTemplate: Handsontable.GridSettings['uncheckedTemplate'];
  @Input() undo: Handsontable.GridSettings['undo'];
  @Input() validator: Handsontable.GridSettings['validator'];
  @Input() viewportColumnRenderingOffset: Handsontable.GridSettings['viewportColumnRenderingOffset'];
  @Input() viewportRowRenderingOffset: Handsontable.GridSettings['viewportRowRenderingOffset'];
  @Input() visibleRows: Handsontable.GridSettings['visibleRows'];
  @Input() width: Handsontable.GridSettings['width'];
  @Input() wordWrap: Handsontable.GridSettings['wordWrap'];
  // handsontable hooks
  @Input() afterBeginEditing: Handsontable.GridSettings['afterBeginEdting'];
  @Input() afterCellMetaReset: Handsontable.GridSettings['afterCellMetaReset'];
  @Input() afterChange: Handsontable.GridSettings['afterChange'];
  @Input() afterChangesObserved: Handsontable.GridSettings['afterChangesObserved'];
  @Input() afterColumnMove: Handsontable.GridSettings['afterColumnMove'];
  @Input() afterColumnResize: Handsontable.GridSettings['afterColumnResize'];
  @Input() afterColumnSort: Handsontable.GridSettings['afterColumnSort'];
  @Input() afterContextMenuDefaultOptions: Handsontable.GridSettings['afterContextMenuDefaultOptions'];
  @Input() afterContextMenuHide: Handsontable.GridSettings['afterContextMenuHide'];
  @Input() afterContextMenuShow: Handsontable.GridSettings['afterContextMenuShow'];
  @Input() afterCopy: Handsontable.GridSettings['afterCopy'];
  @Input() afterCopyLimit: Handsontable.GridSettings['afterCopyLimit'];
  @Input() afterCreateCol: Handsontable.GridSettings['afterCreateCol'];
  @Input() afterCreateRow: Handsontable.GridSettings['afterCreateRow'];
  @Input() afterCut: Handsontable.GridSettings['afterCut'];
  @Input() afterDeselect: Handsontable.GridSettings['afterDeselect'];
  @Input() afterDestroy: Handsontable.GridSettings['afterDestroy'];
  @Input() afterDocumentKeyDown: Handsontable.GridSettings['afterDocumentKeyDown'];
  @Input() afterDrawSelection: (currentRow: number, currentColumn: number,
    cornersOfSelection: number[], layerLevel: number | void) => string | void;
  @Input() afterGetCellMeta: Handsontable.GridSettings['afterGetCellMeta'];
  @Input() afterGetColHeader: Handsontable.GridSettings['afterGetColHeader'];
  @Input() afterGetColumnHeaderRenderers: Handsontable.GridSettings['afterGetColumnHeaderRenderers'];
  @Input() afterGetRowHeader: Handsontable.GridSettings['afterGetRowHeader'];
  @Input() afterGetRowHeaderRenderers: Handsontable.GridSettings['afterGetRowHeaderRenderers'];
  @Input() afterInit: Handsontable.GridSettings['afterInit'];
  @Input() afterLanguageChange: (languageCode: string) => void;
  @Input() afterListen: () => void;
  @Input() afterLoadData: Handsontable.GridSettings['afterLoadData'];
  @Input() afterMergeCells: (cellRange: Handsontable.wot.CellRange, mergeParent: object, auto: boolean) => void;
  @Input() afterModifyTransformEnd: Handsontable.GridSettings['afterModifyTransformEnd'];
  @Input() afterModifyTransformStart: Handsontable.GridSettings['afterModifyTransformStart'];
  @Input() afterMomentumScroll: Handsontable.GridSettings['afterMomentumScroll'];
  @Input() afterOnCellContextMenu: Handsontable.GridSettings['afterOnCellContextMenu'];
  @Input() afterOnCellCornerDblClick: Handsontable.GridSettings['afterOnCellCornerDblClick'];
  @Input() afterOnCellCornerMouseDown: Handsontable.GridSettings['afterOnCellCornerMouseDown'];
  @Input() afterOnCellMouseDown: Handsontable.GridSettings['afterOnCellMouseDown'];
  @Input() afterOnCellMouseOut: Handsontable.GridSettings['afterOnCellMouseOut'];
  @Input() afterOnCellMouseOver: Handsontable.GridSettings['afterOnCellMouseOver'];
  @Input() afterOnCellMouseUp: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement) => void;
  @Input() afterPaste: Handsontable.GridSettings['afterPaste'];
  @Input() afterPluginsInitialized: Handsontable.GridSettings['afterPluginsInitialized'];
  @Input() afterRedo: Handsontable.GridSettings['afterRedo'];
  @Input() afterRemoveCellMeta: (row: number, column: number, key: string, value: any) => void;
  @Input() afterRemoveCol: Handsontable.GridSettings['afterRemoveCol'];
  @Input() afterRemoveRow: Handsontable.GridSettings['afterRemoveRow'];
  @Input() afterRender: Handsontable.GridSettings['afterRender'];
  @Input() afterRenderer: Handsontable.GridSettings['afterRenderer'];
  @Input() afterRowMove: Handsontable.GridSettings['afterRowMove'];
  @Input() afterRowResize: Handsontable.GridSettings['afterRowResize'];
  @Input() afterScrollHorizontally: Handsontable.GridSettings['afterScrollHorizontally'];
  @Input() afterScrollVertically: Handsontable.GridSettings['afterScrollVertically'];
  @Input() afterSelection: Handsontable.GridSettings['afterSelection'];
  @Input() afterSelectionByProp: Handsontable.GridSettings['afterSelectionByProp'];
  @Input() afterSelectionEnd: Handsontable.GridSettings['afterSelectionEnd'];
  @Input() afterSelectionEndByProp: Handsontable.GridSettings['afterSelectionEndByProp'];
  @Input() afterSetCellMeta: Handsontable.GridSettings['afterSetCellMeta'];
  @Input() afterSetDataAtCell: Handsontable.GridSettings['afterSetDataAtCell'];
  @Input() afterSetDataAtRowProp: Handsontable.GridSettings['afterSetDataAtRowProp'];
  @Input() afterUndo: Handsontable.GridSettings['afterUndo'];
  @Input() afterUnlisten: () => void;
  @Input() afterUnmergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() afterUpdateSettings: Handsontable.GridSettings['afterUpdateSettings'];
  @Input() afterValidate: Handsontable.GridSettings['afterValidate'];
  @Input() afterViewportColumnCalculatorOverride: Handsontable.GridSettings['afterViewportColumnCalculatorOverride'];
  @Input() afterViewportRowCalculatorOverride: Handsontable.GridSettings['afterViewportRowCalculatorOverride'];
  @Input() beforeAutofill: Handsontable.GridSettings['beforeAutofill'];
  @Input() beforeAutofillInsidePopulate: Handsontable.GridSettings['beforeAutofillInsidePopulate'];
  @Input() beforeCellAlignment: Handsontable.GridSettings['beforeCellAlignment'];
  @Input() beforeChange: Handsontable.GridSettings['beforeChange'];
  @Input() beforeChangeRender: Handsontable.GridSettings['beforeChangeRender'];
  @Input() beforeColumnMove: Handsontable.GridSettings['beforeColumnMove'];
  @Input() beforeColumnResize: Handsontable.GridSettings['beforeColumnResize'];
  @Input() beforeColumnSort: Handsontable.GridSettings['beforeColumnSort'];
  @Input() beforeContextMenuSetItems: Handsontable.GridSettings['beforeContextMenuSetItems'];
  @Input() beforeContextMenuShow: Handsontable.GridSettings['beforeContextMenuShow'];
  @Input() beforeCopy: Handsontable.GridSettings['beforeCopy'];
  @Input() beforeCreateCol: Handsontable.GridSettings['beforeCreateCol'];
  @Input() beforeCreateRow: Handsontable.GridSettings['beforeCreateRow'];
  @Input() beforeCut: Handsontable.GridSettings['beforeCut'];
  @Input() beforeDrawBorders: Handsontable.GridSettings['beforeDrawBorders'];
  @Input() beforeGetCellMeta: Handsontable.GridSettings['beforeGetCellMeta'];
  @Input() beforeInit: Handsontable.GridSettings['beforeInit'];
  @Input() beforeInitWalkontable: Handsontable.GridSettings['beforeInitWalkontable'];
  @Input() beforeKeyDown: Handsontable.GridSettings['beforeKeyDown'];
  @Input() beforeLanguageChange: (languageCode: string) => void;
  @Input() beforeMergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() beforeOnCellContextMenu: Handsontable.GridSettings['beforeOnCellContextMenu'];
  @Input() beforeOnCellMouseDown: Handsontable.GridSettings['beforeOnCellMouseDown'];
  @Input() beforeOnCellMouseOut: Handsontable.GridSettings['beforeOnCellMouseOut'];
  @Input() beforeOnCellMouseOver: Handsontable.GridSettings['beforeOnCellMouseOver'];
  @Input() beforeOnCellMouseUp: (event: Event, coords: Handsontable.wot.CellCoords, TD: HTMLTableCellElement, controller: object) => void;
  @Input() beforePaste: Handsontable.GridSettings['beforePaste'];
  @Input() beforeRedo: Handsontable.GridSettings['beforeRedo'];
  @Input() beforeRemoveCellClassNames: (action: object) => string[] | void;
  @Input() beforeRemoveCellMeta: (row: number, column: number, key: string, value: any) => void;
  @Input() beforeRemoveCol: Handsontable.GridSettings['beforeRemoveCol'];
  @Input() beforeRemoveRow: Handsontable.GridSettings['beforeRemoveRow'];
  @Input() beforeRender: Handsontable.GridSettings['beforeRender'];
  @Input() beforeRenderer: Handsontable.GridSettings['beforeRenderer'];
  @Input() beforeRowMove: Handsontable.GridSettings['beforeRowMove'];
  @Input() beforeRowResize: Handsontable.GridSettings['beforeRowResize'];
  @Input() beforeSetRangeEnd: Handsontable.GridSettings['beforeSetRangeEnd'];
  @Input() beforeSetRangeStart: Handsontable.GridSettings['beforeSetRangeStart'];
  @Input() beforeSetRangeStartOnly: (coords: Handsontable.wot.CellCoords) => void;
  @Input() beforeStretchingColumnWidth: Handsontable.GridSettings['beforeStretchingColumnWidth'];
  @Input() beforeTouchScroll: Handsontable.GridSettings['beforeTouchScroll'];
  @Input() beforeUndo: Handsontable.GridSettings['beforeUndo'];
  @Input() beforeUnmergeCells: (cellRange: Handsontable.wot.CellRange, auto: boolean) => void;
  @Input() beforeValidate: Handsontable.GridSettings['beforeValidate'];
  @Input() beforeValueRender: Handsontable.GridSettings['beforeValueRender'];
  @Input() construct: Handsontable.GridSettings['construct'];
  @Input() init: Handsontable.GridSettings['init'];
  @Input() modifyAutofillRange: Handsontable.GridSettings['modifyAutofillRange'];
  @Input() modifyCol: Handsontable.GridSettings['modifyCol'];
  @Input() modifyColHeader: Handsontable.GridSettings['modifyColHeader'];
  @Input() modifyColumnHeaderHeight: () => void;
  @Input() modifyColWidth: Handsontable.GridSettings['modifyColWidth'];
  @Input() modifyCopyableRange: Handsontable.GridSettings['modifyCopyableRange'];
  @Input() modifyData: Handsontable.GridSettings['modifyData'];
  @Input() modifyGetCellCoords: (row: number, column: number, topmost: boolean) => void;
  @Input() modifyRow: Handsontable.GridSettings['modifyRow'];
  @Input() modifyRowData: (row: number) => void;
  @Input() modifyRowHeader: Handsontable.GridSettings['modifyRowHeader'];
  @Input() modifyRowHeaderWidth: Handsontable.GridSettings['modifyRowHeaderWidth'];
  @Input() modifyRowHeight: Handsontable.GridSettings['modifyRowHeight'];
  @Input() modifyRowSourceData: Handsontable.GridSettings['modifyRowSourceData'];
  @Input() modifyTransformEnd: Handsontable.GridSettings['modifyTransformEnd'];
  @Input() modifyTransformStart: Handsontable.GridSettings['modifyTransformStart'];
  @Input() persistentStateLoad: Handsontable.GridSettings['persistentStateLoad'];
  @Input() persistentStateReset: Handsontable.GridSettings['persistentStateReset'];
  @Input() persistentStateSave: Handsontable.GridSettings['persistentStateSave'];
  @Input() skipLengthCache: Handsontable.GridSettings['skipLengthCache'];
  @Input() unmodifyCol: Handsontable.GridSettings['unmodifyCol'];
  @Input() unmodifyRow: Handsontable.GridSettings['unmodifyRow'];
  // handsontable-pro options
  @Input() bindRowsWithHeaders: Handsontable.GridSettings['bindRowsWithHeaders'];
  @Input() collapsibleColumns: Handsontable.GridSettings['collapsibleColumns'];
  @Input() columnSummary: Handsontable.GridSettings['columnSummary'];
  @Input() dropdownMenu: Handsontable.GridSettings['dropdownMenu'];
  @Input() filters: Handsontable.GridSettings['filters'];
  @Input() formulas: Handsontable.GridSettings['formulas'];
  @Input() ganttChart: Handsontable.GridSettings['ganttChart'];
  @Input() headerTooltips: Handsontable.GridSettings['headerTooltips'];
  @Input() hiddenColumns: Handsontable.GridSettings['hiddenColumns'];
  @Input() hiddenRows: Handsontable.GridSettings['hiddenRows'];
  @Input() licenseKey: Handsontable.GridSettings['licenseKey'];
  @Input() multiColumnSorting: Handsontable.GridSettings['multiColumnSorting'];
  @Input() nestedHeaders: Handsontable.GridSettings['nestedHeaders'];
  @Input() nestedRows: Handsontable.GridSettings['nestedRows'];
  @Input() trimRows: Handsontable.GridSettings['nestedRows'];
  // handsontable-pro hooks
  @Input() afterAddChild: Handsontable.GridSettings['afterAddChild'];
  @Input() afterDetachChild: Handsontable.GridSettings['afterDetachChild'];
  @Input() afterDropdownMenuDefaultOptions: Handsontable.GridSettings['afterDropdownMenuDefaultOptions'];
  @Input() afterDropdownMenuHide: Handsontable.GridSettings['afterDropdownMenuHide'];
  @Input() afterDropdownMenuShow: Handsontable.GridSettings['afterDropdownMenuShow'];
  @Input() afterFilter: Handsontable.GridSettings['afterFilter'];
  @Input() afterTrimRow: Handsontable.GridSettings['afterTrimRow'];
  @Input() afterUntrimRow: Handsontable.GridSettings['afterUntrimRow'];
  @Input() beforeAddChild: Handsontable.GridSettings['beforeAddChild'];
  @Input() beforeDetachChild: Handsontable.GridSettings['beforeDetachChild'];
  @Input() beforeDropdownMenuSetItems: Handsontable.GridSettings['beforeDropdownMenuSetItems'];
  @Input() beforeDropdownMenuShow: Handsontable.GridSettings['beforeDropdownMenuShow'];
  @Input() beforeFilter: Handsontable.GridSettings['beforeFilter'];
  @Input() hiddenColumn: Handsontable.GridSettings['hiddenColumn'];
  @Input() hiddenRow: Handsontable.GridSettings['hiddenRow'];

  constructor(
    private _ngZone: NgZone,
    private _hotTableRegisterer: HotTableRegisterer,
    private _hotSettingResolver: HotSettingsResolver,
  ) {}

  ngAfterContentInit(): void {
    const options: Handsontable.GridSettings = this._hotSettingResolver.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      const columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingResolver.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container.nativeElement, options);

      if (this.hotId) {
        this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
      }
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.hotInstance === void 0) {
      return;
    }

    const newOptions: Handsontable.GridSettings = this._hotSettingResolver.prepareChanges(changes);

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

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance.updateSettings(newSettings, false);
    });
  }

  onAfterColumnsChange(): void {
    if (this.columnsComponents === void 0) {
      return;
    }

    if (this.columnsComponents.length > 0) {
      const columns: Handsontable.GridSettings[] = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingResolver.mergeSettings(column));
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
        columns.push(this._hotSettingResolver.mergeSettings(column));
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
