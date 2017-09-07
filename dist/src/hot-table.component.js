import { Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import Handsontable from 'handsontable';
import { HotRegisterer } from './hot-registerer.service';
import { HotHelper } from './hot-settings.utils';
var HotTableComponent = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} _ngZone
     * @param {?} _hotRegisterer
     * @param {?} _hotHelper
     */
    function HotTableComponent(el, _ngZone, _hotRegisterer, _hotHelper) {
        this.el = el;
        this._ngZone = _ngZone;
        this._hotRegisterer = _hotRegisterer;
        this._hotHelper = _hotHelper;
        this.columnsComponents = [];
        this.afterAddChild = new EventEmitter();
        this.afterBeginEditing = new EventEmitter();
        this.afterCellMetaReset = new EventEmitter();
        this.afterChange = new EventEmitter();
        this.afterChangesObserved = new EventEmitter();
        this.afterColumnMove = new EventEmitter();
        this.afterColumnResize = new EventEmitter();
        this.afterColumnSort = new EventEmitter();
        this.afterContextMenuDefaultOptions = new EventEmitter();
        this.afterContextMenuHide = new EventEmitter();
        this.afterContextMenuShow = new EventEmitter();
        this.afterCopy = new EventEmitter();
        this.afterCopyLimit = new EventEmitter();
        this.afterCreateCol = new EventEmitter();
        this.afterCreateRow = new EventEmitter();
        this.afterCut = new EventEmitter();
        this.afterDeselect = new EventEmitter();
        this.afterDestroy = new EventEmitter();
        this.afterDetachChild = new EventEmitter();
        this.afterDocumentKeyDown = new EventEmitter();
        this.afterDropdownMenuDefaultOptions = new EventEmitter();
        this.afterDropdownMenuHide = new EventEmitter();
        this.afterDropdownMenuShow = new EventEmitter();
        this.afterFilter = new EventEmitter();
        this.afterGetCellMeta = new EventEmitter();
        this.afterGetColHeader = new EventEmitter();
        this.afterGetColumnHeaderRenderers = new EventEmitter();
        this.afterGetRowHeader = new EventEmitter();
        this.afterGetRowHeaderRenderers = new EventEmitter();
        this.afterInit = new EventEmitter();
        this.afterLoadData = new EventEmitter();
        this.afterModifyTransformEnd = new EventEmitter();
        this.afterModifyTransformStart = new EventEmitter();
        this.afterMomentumScroll = new EventEmitter();
        this.afterOnCellCornerDblClick = new EventEmitter();
        this.afterOnCellCornerMouseDown = new EventEmitter();
        this.afterOnCellMouseDown = new EventEmitter();
        this.afterOnCellMouseOver = new EventEmitter();
        this.afterOnCellMouseOut = new EventEmitter();
        this.afterPluginsInitialized = new EventEmitter();
        this.afterRedo = new EventEmitter();
        this.afterRemoveCol = new EventEmitter();
        this.afterRemoveRow = new EventEmitter();
        this.afterRender = new EventEmitter();
        this.afterRenderer = new EventEmitter();
        this.afterRowMove = new EventEmitter();
        this.afterRowResize = new EventEmitter();
        this.afterScrollHorizontally = new EventEmitter();
        this.afterScrollVertically = new EventEmitter();
        this.afterSelection = new EventEmitter();
        this.afterSelectionByProp = new EventEmitter();
        this.afterSelectionEnd = new EventEmitter();
        this.afterSelectionEndByProp = new EventEmitter();
        this.afterSetCellMeta = new EventEmitter();
        this.afterSetDataAtCell = new EventEmitter();
        this.afterSetDataAtRowProp = new EventEmitter();
        this.afterTrimRow = new EventEmitter();
        this.afterUndo = new EventEmitter();
        this.afterUntrimRow = new EventEmitter();
        this.afterUpdateSettings = new EventEmitter();
        this.afterValidate = new EventEmitter();
        this.afterViewportColumnCalculatorOverride = new EventEmitter();
        this.afterViewportRowCalculatorOverride = new EventEmitter();
        this.beforeAddChild = new EventEmitter();
        this.beforeAutofill = new EventEmitter();
        this.beforeAutofillInsidePopulate = new EventEmitter();
        this.beforeCellAlignment = new EventEmitter();
        this.beforeChange = new EventEmitter();
        this.beforeChangeRender = new EventEmitter();
        this.beforeColumnMove = new EventEmitter();
        this.beforeColumnResize = new EventEmitter();
        this.beforeColumnSort = new EventEmitter();
        this.beforeContextMenuSetItems = new EventEmitter();
        this.beforeCopy = new EventEmitter();
        this.beforeCreateCol = new EventEmitter();
        this.beforeCreateRow = new EventEmitter();
        this.beforeCut = new EventEmitter();
        this.beforeDetachChild = new EventEmitter();
        this.beforeDrawBorders = new EventEmitter();
        this.beforeDropdownMenuSetItems = new EventEmitter();
        this.beforeFilter = new EventEmitter();
        this.beforeGetCellMeta = new EventEmitter();
        this.beforeInit = new EventEmitter();
        this.beforeInitWalkontable = new EventEmitter();
        this.beforeKeyDown = new EventEmitter();
        this.beforeOnCellMouseDown = new EventEmitter();
        this.beforeOnCellMouseOut = new EventEmitter();
        this.beforeOnCellMouseOver = new EventEmitter();
        this.beforePaste = new EventEmitter();
        this.beforeRedo = new EventEmitter();
        this.beforeRemoveCol = new EventEmitter();
        this.beforeRemoveRow = new EventEmitter();
        this.beforeRender = new EventEmitter();
        this.beforeRenderer = new EventEmitter();
        this.beforeRowMove = new EventEmitter();
        this.beforeRowResize = new EventEmitter();
        this.beforeSetRangeEnd = new EventEmitter();
        this.beforeSetRangeStart = new EventEmitter();
        this.beforeStretchingColumnWidth = new EventEmitter();
        this.beforeTouchScroll = new EventEmitter();
        this.beforeUndo = new EventEmitter();
        this.beforeValidate = new EventEmitter();
        this.beforeValueRender = new EventEmitter();
        this.construct = new EventEmitter();
        this.hiddenColumn = new EventEmitter();
        this.hiddenRow = new EventEmitter();
        this.init = new EventEmitter();
        this.manualRowHeights = new EventEmitter();
        this.modifyAutofillRange = new EventEmitter();
        this.modifyCol = new EventEmitter();
        this.modifyColHeader = new EventEmitter();
        this.modifyColumnHeaderHeight = new EventEmitter();
        this.modifyColWidth = new EventEmitter();
        this.modifyCopyableRange = new EventEmitter();
        this.modifyData = new EventEmitter();
        this.modifyRow = new EventEmitter();
        this.modifyRowHeader = new EventEmitter();
        this.modifyRowHeaderWidth = new EventEmitter();
        this.modifyRowHeight = new EventEmitter();
        this.modifyRowData = new EventEmitter();
        this.modifyTransformEnd = new EventEmitter();
        this.modifyTransformStart = new EventEmitter();
        this.persistentStateLoad = new EventEmitter();
        this.persistentStateReset = new EventEmitter();
        this.persistentStateSave = new EventEmitter();
        this.skipLengthCache = new EventEmitter();
        this.unmodifyCol = new EventEmitter();
        this.unmodifyRow = new EventEmitter();
    }
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngOnInit = function () {
        this.container = document.createElement('div');
        if (this.hotId) {
            this.container.id = this.hotId;
        }
        this.el.nativeElement.appendChild(this.container);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var /** @type {?} */ options = this._hotHelper.mergeSettings(this);
        if (this.columnsComponents.length > 0) {
            var /** @type {?} */ columns_1 = [];
            this.columnsComponents.forEach(function (column) {
                columns_1.push(_this._hotHelper.mergeSettings(column));
            });
            options['columns'] = columns_1;
        }
        this._ngZone.runOutsideAngular(function () {
            _this.hotInstance = new Handsontable(_this.container, options);
        });
        if (this.hotId) {
            this._hotRegisterer.registerInstance(this.hotId, this.hotInstance);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HotTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.hotInstance === void 0) {
            return;
        }
        var /** @type {?} */ newOptions = this._hotHelper.prepareChanges(changes);
        this.updateHotTable(newOptions);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.ngOnDestroy = function () {
        this.hotInstance.destroy();
        if (this.hotId) {
            this._hotRegisterer.removeInstance(this.hotId);
        }
    };
    /**
     * @param {?} newSettings
     * @return {?}
     */
    HotTableComponent.prototype.updateHotTable = function (newSettings) {
        if (!this.hotInstance) {
            return;
        }
        this.hotInstance.updateSettings(newSettings, false);
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.onAfterColumnsChange = function () {
        var _this = this;
        if (this.columnsComponents === void 0) {
            return;
        }
        if (this.columnsComponents.length > 0) {
            var /** @type {?} */ columns_2 = [];
            this.columnsComponents.forEach(function (column) {
                columns_2.push(_this._hotHelper.mergeSettings(column));
            });
            var /** @type {?} */ newOptions = {
                columns: columns_2
            };
            this.updateHotTable(newOptions);
        }
    };
    /**
     * @return {?}
     */
    HotTableComponent.prototype.onAfterColumnsNumberChange = function () {
        var _this = this;
        var /** @type {?} */ columns = [];
        if (this.columnsComponents.length > 0) {
            this.columnsComponents.forEach(function (column) {
                columns.push(_this._hotHelper.mergeSettings(column));
            });
        }
        this.updateHotTable({ columns: columns });
    };
    /**
     * @param {?} column
     * @return {?}
     */
    HotTableComponent.prototype.addColumn = function (column) {
        this.columnsComponents.push(column);
        this.onAfterColumnsNumberChange();
    };
    /**
     * @param {?} column
     * @return {?}
     */
    HotTableComponent.prototype.removeColumn = function (column) {
        var /** @type {?} */ index = this.columnsComponents.indexOf(column);
        this.columnsComponents.splice(index, 1);
        this.onAfterColumnsNumberChange();
    };
    HotTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hot-table',
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                    providers: [HotRegisterer, HotHelper],
                },] },
    ];
    /**
     * @nocollapse
     */
    HotTableComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: HotRegisterer, },
        { type: HotHelper, },
    ]; };
    HotTableComponent.propDecorators = {
        'settings': [{ type: Input },],
        'hotId': [{ type: Input },],
        'allowEmpty': [{ type: Input },],
        'allowHtml': [{ type: Input },],
        'allowInsertColumn': [{ type: Input },],
        'allowInsertRow': [{ type: Input },],
        'allowInvalid': [{ type: Input },],
        'allowRemoveColumn': [{ type: Input },],
        'allowRemoveRow': [{ type: Input },],
        'autoColumnSize': [{ type: Input },],
        'autoComplete': [{ type: Input },],
        'autoRowSize': [{ type: Input },],
        'autoWrapCol': [{ type: Input },],
        'autoWrapRow': [{ type: Input },],
        'bindRowsWithHeaders': [{ type: Input },],
        'cell': [{ type: Input },],
        'cells': [{ type: Input },],
        'checkedTemplate': [{ type: Input },],
        'className': [{ type: Input },],
        'colHeaders': [{ type: Input },],
        'collapsibleColumns': [{ type: Input },],
        'columnHeaderHeight': [{ type: Input },],
        'columns': [{ type: Input },],
        'columnSorting': [{ type: Input },],
        'columnSummary': [{ type: Input },],
        'colWidths': [{ type: Input },],
        'commentedCellClassName': [{ type: Input },],
        'comments': [{ type: Input },],
        'contextMenu': [{ type: Input },],
        'copyable': [{ type: Input },],
        'copyColsLimit': [{ type: Input },],
        'copyPaste': [{ type: Input },],
        'copyRowsLimit': [{ type: Input },],
        'correctFormat': [{ type: Input },],
        'currentColClassName': [{ type: Input },],
        'currentHeaderClassName': [{ type: Input },],
        'currentRowClassName': [{ type: Input },],
        'customBorders': [{ type: Input },],
        'data': [{ type: Input },],
        'dataSchema': [{ type: Input },],
        'dateFormat': [{ type: Input },],
        'debug': [{ type: Input },],
        'defaultDate': [{ type: Input },],
        'disableVisualSelection': [{ type: Input },],
        'dropdownMenu': [{ type: Input },],
        'editor': [{ type: Input },],
        'enterBeginsEditing': [{ type: Input },],
        'enterMoves': [{ type: Input },],
        'fillHandle': [{ type: Input },],
        'filter': [{ type: Input },],
        'filteringCaseSensitive': [{ type: Input },],
        'filters': [{ type: Input },],
        'fixedColumnsLeft': [{ type: Input },],
        'fixedRowsBottom': [{ type: Input },],
        'fixedRowsTop': [{ type: Input },],
        'format': [{ type: Input },],
        'formulas': [{ type: Input },],
        'fragmentSelection': [{ type: Input },],
        'ganttChart': [{ type: Input },],
        'headerTooltips': [{ type: Input },],
        'height': [{ type: Input },],
        'hiddenColumns': [{ type: Input },],
        'hiddenRows': [{ type: Input },],
        'invalidCellClassName': [{ type: Input },],
        'label': [{ type: Input },],
        'language': [{ type: Input },],
        'manualColumnFreeze': [{ type: Input },],
        'manualColumnMove': [{ type: Input },],
        'manualColumnResize': [{ type: Input },],
        'manualRowMove': [{ type: Input },],
        'manualRowResize': [{ type: Input },],
        'maxCols': [{ type: Input },],
        'maxRows': [{ type: Input },],
        'mergeCells': [{ type: Input },],
        'minCols': [{ type: Input },],
        'minRows': [{ type: Input },],
        'minSpareCols': [{ type: Input },],
        'minSpareRows': [{ type: Input },],
        'multiSelect': [{ type: Input },],
        'nestedHeaders': [{ type: Input },],
        'noWordWrapClassName': [{ type: Input },],
        'observeChanges': [{ type: Input },],
        'observeDOMVisibility': [{ type: Input },],
        'outsideClickDeselects': [{ type: Input },],
        'pasteMode': [{ type: Input },],
        'persistentState': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'placeholderCellClassName': [{ type: Input },],
        'preventOverflow': [{ type: Input },],
        'readOnly': [{ type: Input },],
        'readOnlyCellClassName': [{ type: Input },],
        'renderAllRows': [{ type: Input },],
        'renderer': [{ type: Input },],
        'rowHeaders': [{ type: Input },],
        'rowHeaderWidth': [{ type: Input },],
        'rowHeights': [{ type: Input },],
        'search': [{ type: Input },],
        'selectOptions': [{ type: Input },],
        'skipColumnOnPaste': [{ type: Input },],
        'sortByRelevance': [{ type: Input },],
        'sortFunction': [{ type: Input },],
        'sortIndicator': [{ type: Input },],
        'source': [{ type: Input },],
        'startCols': [{ type: Input },],
        'startRows': [{ type: Input },],
        'stretchH': [{ type: Input },],
        'strict': [{ type: Input },],
        'tableClassName': [{ type: Input },],
        'tabMoves': [{ type: Input },],
        'title': [{ type: Input },],
        'trimDropdown': [{ type: Input },],
        'trimRows': [{ type: Input },],
        'trimWhitespace': [{ type: Input },],
        'type': [{ type: Input },],
        'uncheckedTemplate': [{ type: Input },],
        'undo': [{ type: Input },],
        'validator': [{ type: Input },],
        'viewportColumnRenderingOffset': [{ type: Input },],
        'viewportRowRenderingOffset': [{ type: Input },],
        'visibleRows': [{ type: Input },],
        'width': [{ type: Input },],
        'wordWrap': [{ type: Input },],
        'afterAddChild': [{ type: Output },],
        'afterBeginEditing': [{ type: Output },],
        'afterCellMetaReset': [{ type: Output },],
        'afterChange': [{ type: Output },],
        'afterChangesObserved': [{ type: Output },],
        'afterColumnMove': [{ type: Output },],
        'afterColumnResize': [{ type: Output },],
        'afterColumnSort': [{ type: Output },],
        'afterContextMenuDefaultOptions': [{ type: Output },],
        'afterContextMenuHide': [{ type: Output },],
        'afterContextMenuShow': [{ type: Output },],
        'afterCopy': [{ type: Output },],
        'afterCopyLimit': [{ type: Output },],
        'afterCreateCol': [{ type: Output },],
        'afterCreateRow': [{ type: Output },],
        'afterCut': [{ type: Output },],
        'afterDeselect': [{ type: Output },],
        'afterDestroy': [{ type: Output },],
        'afterDetachChild': [{ type: Output },],
        'afterDocumentKeyDown': [{ type: Output },],
        'afterDropdownMenuDefaultOptions': [{ type: Output },],
        'afterDropdownMenuHide': [{ type: Output },],
        'afterDropdownMenuShow': [{ type: Output },],
        'afterFilter': [{ type: Output },],
        'afterGetCellMeta': [{ type: Output },],
        'afterGetColHeader': [{ type: Output },],
        'afterGetColumnHeaderRenderers': [{ type: Output },],
        'afterGetRowHeader': [{ type: Output },],
        'afterGetRowHeaderRenderers': [{ type: Output },],
        'afterInit': [{ type: Output },],
        'afterLoadData': [{ type: Output },],
        'afterModifyTransformEnd': [{ type: Output },],
        'afterModifyTransformStart': [{ type: Output },],
        'afterMomentumScroll': [{ type: Output },],
        'afterOnCellCornerDblClick': [{ type: Output },],
        'afterOnCellCornerMouseDown': [{ type: Output },],
        'afterOnCellMouseDown': [{ type: Output },],
        'afterOnCellMouseOver': [{ type: Output },],
        'afterOnCellMouseOut': [{ type: Output },],
        'afterPluginsInitialized': [{ type: Output },],
        'afterRedo': [{ type: Output },],
        'afterRemoveCol': [{ type: Output },],
        'afterRemoveRow': [{ type: Output },],
        'afterRender': [{ type: Output },],
        'afterRenderer': [{ type: Output },],
        'afterRowMove': [{ type: Output },],
        'afterRowResize': [{ type: Output },],
        'afterScrollHorizontally': [{ type: Output },],
        'afterScrollVertically': [{ type: Output },],
        'afterSelection': [{ type: Output },],
        'afterSelectionByProp': [{ type: Output },],
        'afterSelectionEnd': [{ type: Output },],
        'afterSelectionEndByProp': [{ type: Output },],
        'afterSetCellMeta': [{ type: Output },],
        'afterSetDataAtCell': [{ type: Output },],
        'afterSetDataAtRowProp': [{ type: Output },],
        'afterTrimRow': [{ type: Output },],
        'afterUndo': [{ type: Output },],
        'afterUntrimRow': [{ type: Output },],
        'afterUpdateSettings': [{ type: Output },],
        'afterValidate': [{ type: Output },],
        'afterViewportColumnCalculatorOverride': [{ type: Output },],
        'afterViewportRowCalculatorOverride': [{ type: Output },],
        'beforeAddChild': [{ type: Output },],
        'beforeAutofill': [{ type: Output },],
        'beforeAutofillInsidePopulate': [{ type: Output },],
        'beforeCellAlignment': [{ type: Output },],
        'beforeChange': [{ type: Output },],
        'beforeChangeRender': [{ type: Output },],
        'beforeColumnMove': [{ type: Output },],
        'beforeColumnResize': [{ type: Output },],
        'beforeColumnSort': [{ type: Output },],
        'beforeContextMenuSetItems': [{ type: Output },],
        'beforeCopy': [{ type: Output },],
        'beforeCreateCol': [{ type: Output },],
        'beforeCreateRow': [{ type: Output },],
        'beforeCut': [{ type: Output },],
        'beforeDetachChild': [{ type: Output },],
        'beforeDrawBorders': [{ type: Output },],
        'beforeDropdownMenuSetItems': [{ type: Output },],
        'beforeFilter': [{ type: Output },],
        'beforeGetCellMeta': [{ type: Output },],
        'beforeInit': [{ type: Output },],
        'beforeInitWalkontable': [{ type: Output },],
        'beforeKeyDown': [{ type: Output },],
        'beforeOnCellMouseDown': [{ type: Output },],
        'beforeOnCellMouseOut': [{ type: Output },],
        'beforeOnCellMouseOver': [{ type: Output },],
        'beforePaste': [{ type: Output },],
        'beforeRedo': [{ type: Output },],
        'beforeRemoveCol': [{ type: Output },],
        'beforeRemoveRow': [{ type: Output },],
        'beforeRender': [{ type: Output },],
        'beforeRenderer': [{ type: Output },],
        'beforeRowMove': [{ type: Output },],
        'beforeRowResize': [{ type: Output },],
        'beforeSetRangeEnd': [{ type: Output },],
        'beforeSetRangeStart': [{ type: Output },],
        'beforeStretchingColumnWidth': [{ type: Output },],
        'beforeTouchScroll': [{ type: Output },],
        'beforeUndo': [{ type: Output },],
        'beforeValidate': [{ type: Output },],
        'beforeValueRender': [{ type: Output },],
        'construct': [{ type: Output },],
        'hiddenColumn': [{ type: Output },],
        'hiddenRow': [{ type: Output },],
        'init': [{ type: Output },],
        'manualRowHeights': [{ type: Output },],
        'modifyAutofillRange': [{ type: Output },],
        'modifyCol': [{ type: Output },],
        'modifyColHeader': [{ type: Output },],
        'modifyColumnHeaderHeight': [{ type: Output },],
        'modifyColWidth': [{ type: Output },],
        'modifyCopyableRange': [{ type: Output },],
        'modifyData': [{ type: Output },],
        'modifyRow': [{ type: Output },],
        'modifyRowHeader': [{ type: Output },],
        'modifyRowHeaderWidth': [{ type: Output },],
        'modifyRowHeight': [{ type: Output },],
        'modifyRowData': [{ type: Output },],
        'modifyTransformEnd': [{ type: Output },],
        'modifyTransformStart': [{ type: Output },],
        'persistentStateLoad': [{ type: Output },],
        'persistentStateReset': [{ type: Output },],
        'persistentStateSave': [{ type: Output },],
        'skipLengthCache': [{ type: Output },],
        'unmodifyCol': [{ type: Output },],
        'unmodifyRow': [{ type: Output },],
    };
    return HotTableComponent;
}());
export { HotTableComponent };
function HotTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HotTableComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HotTableComponent.ctorParameters;
    /** @type {?} */
    HotTableComponent.propDecorators;
    /** @type {?} */
    HotTableComponent.prototype.hotInstance;
    /** @type {?} */
    HotTableComponent.prototype.container;
    /** @type {?} */
    HotTableComponent.prototype.columnsComponents;
    /** @type {?} */
    HotTableComponent.prototype.settings;
    /** @type {?} */
    HotTableComponent.prototype.hotId;
    /** @type {?} */
    HotTableComponent.prototype.allowEmpty;
    /** @type {?} */
    HotTableComponent.prototype.allowHtml;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowInsertRow;
    /** @type {?} */
    HotTableComponent.prototype.allowInvalid;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveColumn;
    /** @type {?} */
    HotTableComponent.prototype.allowRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.autoColumnSize;
    /** @type {?} */
    HotTableComponent.prototype.autoComplete;
    /** @type {?} */
    HotTableComponent.prototype.autoRowSize;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapCol;
    /** @type {?} */
    HotTableComponent.prototype.autoWrapRow;
    /** @type {?} */
    HotTableComponent.prototype.bindRowsWithHeaders;
    /** @type {?} */
    HotTableComponent.prototype.cell;
    /** @type {?} */
    HotTableComponent.prototype.cells;
    /** @type {?} */
    HotTableComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.className;
    /** @type {?} */
    HotTableComponent.prototype.colHeaders;
    /** @type {?} */
    HotTableComponent.prototype.collapsibleColumns;
    /** @type {?} */
    HotTableComponent.prototype.columnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.columns;
    /** @type {?} */
    HotTableComponent.prototype.columnSorting;
    /** @type {?} */
    HotTableComponent.prototype.columnSummary;
    /** @type {?} */
    HotTableComponent.prototype.colWidths;
    /** @type {?} */
    HotTableComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.comments;
    /** @type {?} */
    HotTableComponent.prototype.contextMenu;
    /** @type {?} */
    HotTableComponent.prototype.copyable;
    /** @type {?} */
    HotTableComponent.prototype.copyColsLimit;
    /** @type {?} */
    HotTableComponent.prototype.copyPaste;
    /** @type {?} */
    HotTableComponent.prototype.copyRowsLimit;
    /** @type {?} */
    HotTableComponent.prototype.correctFormat;
    /** @type {?} */
    HotTableComponent.prototype.currentColClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentHeaderClassName;
    /** @type {?} */
    HotTableComponent.prototype.currentRowClassName;
    /** @type {?} */
    HotTableComponent.prototype.customBorders;
    /** @type {?} */
    HotTableComponent.prototype.data;
    /** @type {?} */
    HotTableComponent.prototype.dataSchema;
    /** @type {?} */
    HotTableComponent.prototype.dateFormat;
    /** @type {?} */
    HotTableComponent.prototype.debug;
    /** @type {?} */
    HotTableComponent.prototype.defaultDate;
    /** @type {?} */
    HotTableComponent.prototype.disableVisualSelection;
    /** @type {?} */
    HotTableComponent.prototype.dropdownMenu;
    /** @type {?} */
    HotTableComponent.prototype.editor;
    /** @type {?} */
    HotTableComponent.prototype.enterBeginsEditing;
    /** @type {?} */
    HotTableComponent.prototype.enterMoves;
    /** @type {?} */
    HotTableComponent.prototype.fillHandle;
    /** @type {?} */
    HotTableComponent.prototype.filter;
    /** @type {?} */
    HotTableComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotTableComponent.prototype.filters;
    /** @type {?} */
    HotTableComponent.prototype.fixedColumnsLeft;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsBottom;
    /** @type {?} */
    HotTableComponent.prototype.fixedRowsTop;
    /** @type {?} */
    HotTableComponent.prototype.format;
    /** @type {?} */
    HotTableComponent.prototype.formulas;
    /** @type {?} */
    HotTableComponent.prototype.fragmentSelection;
    /** @type {?} */
    HotTableComponent.prototype.ganttChart;
    /** @type {?} */
    HotTableComponent.prototype.headerTooltips;
    /** @type {?} */
    HotTableComponent.prototype.height;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumns;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRows;
    /** @type {?} */
    HotTableComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.label;
    /** @type {?} */
    HotTableComponent.prototype.language;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnFreeze;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.manualColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.manualRowMove;
    /** @type {?} */
    HotTableComponent.prototype.manualRowResize;
    /** @type {?} */
    HotTableComponent.prototype.maxCols;
    /** @type {?} */
    HotTableComponent.prototype.maxRows;
    /** @type {?} */
    HotTableComponent.prototype.mergeCells;
    /** @type {?} */
    HotTableComponent.prototype.minCols;
    /** @type {?} */
    HotTableComponent.prototype.minRows;
    /** @type {?} */
    HotTableComponent.prototype.minSpareCols;
    /** @type {?} */
    HotTableComponent.prototype.minSpareRows;
    /** @type {?} */
    HotTableComponent.prototype.multiSelect;
    /** @type {?} */
    HotTableComponent.prototype.nestedHeaders;
    /** @type {?} */
    HotTableComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotTableComponent.prototype.observeChanges;
    /** @type {?} */
    HotTableComponent.prototype.observeDOMVisibility;
    /** @type {?} */
    HotTableComponent.prototype.outsideClickDeselects;
    /** @type {?} */
    HotTableComponent.prototype.pasteMode;
    /** @type {?} */
    HotTableComponent.prototype.persistentState;
    /** @type {?} */
    HotTableComponent.prototype.placeholder;
    /** @type {?} */
    HotTableComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.preventOverflow;
    /** @type {?} */
    HotTableComponent.prototype.readOnly;
    /** @type {?} */
    HotTableComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotTableComponent.prototype.renderAllRows;
    /** @type {?} */
    HotTableComponent.prototype.renderer;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaders;
    /** @type {?} */
    HotTableComponent.prototype.rowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.rowHeights;
    /** @type {?} */
    HotTableComponent.prototype.search;
    /** @type {?} */
    HotTableComponent.prototype.selectOptions;
    /** @type {?} */
    HotTableComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotTableComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotTableComponent.prototype.sortFunction;
    /** @type {?} */
    HotTableComponent.prototype.sortIndicator;
    /** @type {?} */
    HotTableComponent.prototype.source;
    /** @type {?} */
    HotTableComponent.prototype.startCols;
    /** @type {?} */
    HotTableComponent.prototype.startRows;
    /** @type {?} */
    HotTableComponent.prototype.stretchH;
    /** @type {?} */
    HotTableComponent.prototype.strict;
    /** @type {?} */
    HotTableComponent.prototype.tableClassName;
    /** @type {?} */
    HotTableComponent.prototype.tabMoves;
    /** @type {?} */
    HotTableComponent.prototype.title;
    /** @type {?} */
    HotTableComponent.prototype.trimDropdown;
    /** @type {?} */
    HotTableComponent.prototype.trimRows;
    /** @type {?} */
    HotTableComponent.prototype.trimWhitespace;
    /** @type {?} */
    HotTableComponent.prototype.type;
    /** @type {?} */
    HotTableComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotTableComponent.prototype.undo;
    /** @type {?} */
    HotTableComponent.prototype.validator;
    /** @type {?} */
    HotTableComponent.prototype.viewportColumnRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.viewportRowRenderingOffset;
    /** @type {?} */
    HotTableComponent.prototype.visibleRows;
    /** @type {?} */
    HotTableComponent.prototype.width;
    /** @type {?} */
    HotTableComponent.prototype.wordWrap;
    /** @type {?} */
    HotTableComponent.prototype.afterAddChild;
    /** @type {?} */
    HotTableComponent.prototype.afterBeginEditing;
    /** @type {?} */
    HotTableComponent.prototype.afterCellMetaReset;
    /** @type {?} */
    HotTableComponent.prototype.afterChange;
    /** @type {?} */
    HotTableComponent.prototype.afterChangesObserved;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.afterColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterContextMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterCopy;
    /** @type {?} */
    HotTableComponent.prototype.afterCopyLimit;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.afterCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.afterCut;
    /** @type {?} */
    HotTableComponent.prototype.afterDeselect;
    /** @type {?} */
    HotTableComponent.prototype.afterDestroy;
    /** @type {?} */
    HotTableComponent.prototype.afterDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.afterDocumentKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuDefaultOptions;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuHide;
    /** @type {?} */
    HotTableComponent.prototype.afterDropdownMenuShow;
    /** @type {?} */
    HotTableComponent.prototype.afterFilter;
    /** @type {?} */
    HotTableComponent.prototype.afterGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetColumnHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.afterGetRowHeaderRenderers;
    /** @type {?} */
    HotTableComponent.prototype.afterInit;
    /** @type {?} */
    HotTableComponent.prototype.afterLoadData;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterModifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.afterMomentumScroll;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerDblClick;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellCornerMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.afterOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.afterPluginsInitialized;
    /** @type {?} */
    HotTableComponent.prototype.afterRedo;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.afterRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.afterRender;
    /** @type {?} */
    HotTableComponent.prototype.afterRenderer;
    /** @type {?} */
    HotTableComponent.prototype.afterRowMove;
    /** @type {?} */
    HotTableComponent.prototype.afterRowResize;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollHorizontally;
    /** @type {?} */
    HotTableComponent.prototype.afterScrollVertically;
    /** @type {?} */
    HotTableComponent.prototype.afterSelection;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEnd;
    /** @type {?} */
    HotTableComponent.prototype.afterSelectionEndByProp;
    /** @type {?} */
    HotTableComponent.prototype.afterSetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtCell;
    /** @type {?} */
    HotTableComponent.prototype.afterSetDataAtRowProp;
    /** @type {?} */
    HotTableComponent.prototype.afterTrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUndo;
    /** @type {?} */
    HotTableComponent.prototype.afterUntrimRow;
    /** @type {?} */
    HotTableComponent.prototype.afterUpdateSettings;
    /** @type {?} */
    HotTableComponent.prototype.afterValidate;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportColumnCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.afterViewportRowCalculatorOverride;
    /** @type {?} */
    HotTableComponent.prototype.beforeAddChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofill;
    /** @type {?} */
    HotTableComponent.prototype.beforeAutofillInsidePopulate;
    /** @type {?} */
    HotTableComponent.prototype.beforeCellAlignment;
    /** @type {?} */
    HotTableComponent.prototype.beforeChange;
    /** @type {?} */
    HotTableComponent.prototype.beforeChangeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeColumnSort;
    /** @type {?} */
    HotTableComponent.prototype.beforeContextMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeCopy;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeCreateRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeCut;
    /** @type {?} */
    HotTableComponent.prototype.beforeDetachChild;
    /** @type {?} */
    HotTableComponent.prototype.beforeDrawBorders;
    /** @type {?} */
    HotTableComponent.prototype.beforeDropdownMenuSetItems;
    /** @type {?} */
    HotTableComponent.prototype.beforeFilter;
    /** @type {?} */
    HotTableComponent.prototype.beforeGetCellMeta;
    /** @type {?} */
    HotTableComponent.prototype.beforeInit;
    /** @type {?} */
    HotTableComponent.prototype.beforeInitWalkontable;
    /** @type {?} */
    HotTableComponent.prototype.beforeKeyDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseDown;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOut;
    /** @type {?} */
    HotTableComponent.prototype.beforeOnCellMouseOver;
    /** @type {?} */
    HotTableComponent.prototype.beforePaste;
    /** @type {?} */
    HotTableComponent.prototype.beforeRedo;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveCol;
    /** @type {?} */
    HotTableComponent.prototype.beforeRemoveRow;
    /** @type {?} */
    HotTableComponent.prototype.beforeRender;
    /** @type {?} */
    HotTableComponent.prototype.beforeRenderer;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowMove;
    /** @type {?} */
    HotTableComponent.prototype.beforeRowResize;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeEnd;
    /** @type {?} */
    HotTableComponent.prototype.beforeSetRangeStart;
    /** @type {?} */
    HotTableComponent.prototype.beforeStretchingColumnWidth;
    /** @type {?} */
    HotTableComponent.prototype.beforeTouchScroll;
    /** @type {?} */
    HotTableComponent.prototype.beforeUndo;
    /** @type {?} */
    HotTableComponent.prototype.beforeValidate;
    /** @type {?} */
    HotTableComponent.prototype.beforeValueRender;
    /** @type {?} */
    HotTableComponent.prototype.construct;
    /** @type {?} */
    HotTableComponent.prototype.hiddenColumn;
    /** @type {?} */
    HotTableComponent.prototype.hiddenRow;
    /** @type {?} */
    HotTableComponent.prototype.init;
    /** @type {?} */
    HotTableComponent.prototype.manualRowHeights;
    /** @type {?} */
    HotTableComponent.prototype.modifyAutofillRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyCol;
    /** @type {?} */
    HotTableComponent.prototype.modifyColHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyColumnHeaderHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyColWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyCopyableRange;
    /** @type {?} */
    HotTableComponent.prototype.modifyData;
    /** @type {?} */
    HotTableComponent.prototype.modifyRow;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeader;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeaderWidth;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowHeight;
    /** @type {?} */
    HotTableComponent.prototype.modifyRowData;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformEnd;
    /** @type {?} */
    HotTableComponent.prototype.modifyTransformStart;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateLoad;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateReset;
    /** @type {?} */
    HotTableComponent.prototype.persistentStateSave;
    /** @type {?} */
    HotTableComponent.prototype.skipLengthCache;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyCol;
    /** @type {?} */
    HotTableComponent.prototype.unmodifyRow;
    /** @type {?} */
    HotTableComponent.prototype.el;
    /** @type {?} */
    HotTableComponent.prototype._ngZone;
    /** @type {?} */
    HotTableComponent.prototype._hotRegisterer;
    /** @type {?} */
    HotTableComponent.prototype._hotHelper;
}
