import { Component, Input, Injector, } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
var HotColumnComponent = /** @class */ (function () {
    /**
     * @param {?} inj
     */
    function HotColumnComponent(inj) {
        this.inj = inj;
        this.firstRun = true;
        this.parentComponent = this.inj.get(HotTableComponent);
    }
    /**
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnInit = function () {
        this.firstRun = false;
        this.parentComponent.addColumn(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnChanges = function (changes) {
        if (this.firstRun) {
            return;
        }
        this.parentComponent.onAfterColumnsChange();
    };
    /**
     * @return {?}
     */
    HotColumnComponent.prototype.ngOnDestroy = function () {
        this.parentComponent.removeColumn(this);
    };
    HotColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hot-column',
                    template: "",
                },] },
    ];
    /**
     * @nocollapse
     */
    HotColumnComponent.ctorParameters = function () { return [
        { type: Injector, },
    ]; };
    HotColumnComponent.propDecorators = {
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
    };
    return HotColumnComponent;
}());
export { HotColumnComponent };
function HotColumnComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HotColumnComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HotColumnComponent.ctorParameters;
    /** @type {?} */
    HotColumnComponent.propDecorators;
    /** @type {?} */
    HotColumnComponent.prototype.firstRun;
    /** @type {?} */
    HotColumnComponent.prototype.parentComponent;
    /** @type {?} */
    HotColumnComponent.prototype.allowHtml;
    /** @type {?} */
    HotColumnComponent.prototype.allowInsertColumn;
    /** @type {?} */
    HotColumnComponent.prototype.allowInsertRow;
    /** @type {?} */
    HotColumnComponent.prototype.allowInvalid;
    /** @type {?} */
    HotColumnComponent.prototype.allowRemoveColumn;
    /** @type {?} */
    HotColumnComponent.prototype.allowRemoveRow;
    /** @type {?} */
    HotColumnComponent.prototype.autoColumnSize;
    /** @type {?} */
    HotColumnComponent.prototype.autoComplete;
    /** @type {?} */
    HotColumnComponent.prototype.autoRowSize;
    /** @type {?} */
    HotColumnComponent.prototype.autoWrapCol;
    /** @type {?} */
    HotColumnComponent.prototype.autoWrapRow;
    /** @type {?} */
    HotColumnComponent.prototype.bindRowsWithHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.cell;
    /** @type {?} */
    HotColumnComponent.prototype.cells;
    /** @type {?} */
    HotColumnComponent.prototype.checkedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.className;
    /** @type {?} */
    HotColumnComponent.prototype.colHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.collapsibleColumns;
    /** @type {?} */
    HotColumnComponent.prototype.columnHeaderHeight;
    /** @type {?} */
    HotColumnComponent.prototype.columns;
    /** @type {?} */
    HotColumnComponent.prototype.columnSorting;
    /** @type {?} */
    HotColumnComponent.prototype.columnSummary;
    /** @type {?} */
    HotColumnComponent.prototype.colWidths;
    /** @type {?} */
    HotColumnComponent.prototype.commentedCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.comments;
    /** @type {?} */
    HotColumnComponent.prototype.contextMenu;
    /** @type {?} */
    HotColumnComponent.prototype.copyable;
    /** @type {?} */
    HotColumnComponent.prototype.copyColsLimit;
    /** @type {?} */
    HotColumnComponent.prototype.copyPaste;
    /** @type {?} */
    HotColumnComponent.prototype.copyRowsLimit;
    /** @type {?} */
    HotColumnComponent.prototype.correctFormat;
    /** @type {?} */
    HotColumnComponent.prototype.currentColClassName;
    /** @type {?} */
    HotColumnComponent.prototype.currentHeaderClassName;
    /** @type {?} */
    HotColumnComponent.prototype.currentRowClassName;
    /** @type {?} */
    HotColumnComponent.prototype.customBorders;
    /** @type {?} */
    HotColumnComponent.prototype.data;
    /** @type {?} */
    HotColumnComponent.prototype.dataSchema;
    /** @type {?} */
    HotColumnComponent.prototype.dateFormat;
    /** @type {?} */
    HotColumnComponent.prototype.debug;
    /** @type {?} */
    HotColumnComponent.prototype.defaultDate;
    /** @type {?} */
    HotColumnComponent.prototype.disableVisualSelection;
    /** @type {?} */
    HotColumnComponent.prototype.dropdownMenu;
    /** @type {?} */
    HotColumnComponent.prototype.editor;
    /** @type {?} */
    HotColumnComponent.prototype.enterBeginsEditing;
    /** @type {?} */
    HotColumnComponent.prototype.enterMoves;
    /** @type {?} */
    HotColumnComponent.prototype.fillHandle;
    /** @type {?} */
    HotColumnComponent.prototype.filter;
    /** @type {?} */
    HotColumnComponent.prototype.filteringCaseSensitive;
    /** @type {?} */
    HotColumnComponent.prototype.filters;
    /** @type {?} */
    HotColumnComponent.prototype.fixedColumnsLeft;
    /** @type {?} */
    HotColumnComponent.prototype.fixedRowsBottom;
    /** @type {?} */
    HotColumnComponent.prototype.fixedRowsTop;
    /** @type {?} */
    HotColumnComponent.prototype.format;
    /** @type {?} */
    HotColumnComponent.prototype.formulas;
    /** @type {?} */
    HotColumnComponent.prototype.fragmentSelection;
    /** @type {?} */
    HotColumnComponent.prototype.ganttChart;
    /** @type {?} */
    HotColumnComponent.prototype.headerTooltips;
    /** @type {?} */
    HotColumnComponent.prototype.height;
    /** @type {?} */
    HotColumnComponent.prototype.hiddenColumns;
    /** @type {?} */
    HotColumnComponent.prototype.hiddenRows;
    /** @type {?} */
    HotColumnComponent.prototype.invalidCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.label;
    /** @type {?} */
    HotColumnComponent.prototype.language;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnFreeze;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnMove;
    /** @type {?} */
    HotColumnComponent.prototype.manualColumnResize;
    /** @type {?} */
    HotColumnComponent.prototype.manualRowMove;
    /** @type {?} */
    HotColumnComponent.prototype.manualRowResize;
    /** @type {?} */
    HotColumnComponent.prototype.maxCols;
    /** @type {?} */
    HotColumnComponent.prototype.maxRows;
    /** @type {?} */
    HotColumnComponent.prototype.mergeCells;
    /** @type {?} */
    HotColumnComponent.prototype.minCols;
    /** @type {?} */
    HotColumnComponent.prototype.minRows;
    /** @type {?} */
    HotColumnComponent.prototype.minSpareCols;
    /** @type {?} */
    HotColumnComponent.prototype.minSpareRows;
    /** @type {?} */
    HotColumnComponent.prototype.multiSelect;
    /** @type {?} */
    HotColumnComponent.prototype.nestedHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.noWordWrapClassName;
    /** @type {?} */
    HotColumnComponent.prototype.observeChanges;
    /** @type {?} */
    HotColumnComponent.prototype.observeDOMVisibility;
    /** @type {?} */
    HotColumnComponent.prototype.outsideClickDeselects;
    /** @type {?} */
    HotColumnComponent.prototype.pasteMode;
    /** @type {?} */
    HotColumnComponent.prototype.persistentState;
    /** @type {?} */
    HotColumnComponent.prototype.placeholder;
    /** @type {?} */
    HotColumnComponent.prototype.placeholderCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.preventOverflow;
    /** @type {?} */
    HotColumnComponent.prototype.readOnly;
    /** @type {?} */
    HotColumnComponent.prototype.readOnlyCellClassName;
    /** @type {?} */
    HotColumnComponent.prototype.renderAllRows;
    /** @type {?} */
    HotColumnComponent.prototype.renderer;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeaders;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeaderWidth;
    /** @type {?} */
    HotColumnComponent.prototype.rowHeights;
    /** @type {?} */
    HotColumnComponent.prototype.search;
    /** @type {?} */
    HotColumnComponent.prototype.selectOptions;
    /** @type {?} */
    HotColumnComponent.prototype.skipColumnOnPaste;
    /** @type {?} */
    HotColumnComponent.prototype.sortByRelevance;
    /** @type {?} */
    HotColumnComponent.prototype.sortFunction;
    /** @type {?} */
    HotColumnComponent.prototype.sortIndicator;
    /** @type {?} */
    HotColumnComponent.prototype.source;
    /** @type {?} */
    HotColumnComponent.prototype.startCols;
    /** @type {?} */
    HotColumnComponent.prototype.startRows;
    /** @type {?} */
    HotColumnComponent.prototype.stretchH;
    /** @type {?} */
    HotColumnComponent.prototype.strict;
    /** @type {?} */
    HotColumnComponent.prototype.tableClassName;
    /** @type {?} */
    HotColumnComponent.prototype.tabMoves;
    /** @type {?} */
    HotColumnComponent.prototype.title;
    /** @type {?} */
    HotColumnComponent.prototype.trimDropdown;
    /** @type {?} */
    HotColumnComponent.prototype.trimRows;
    /** @type {?} */
    HotColumnComponent.prototype.trimWhitespace;
    /** @type {?} */
    HotColumnComponent.prototype.type;
    /** @type {?} */
    HotColumnComponent.prototype.uncheckedTemplate;
    /** @type {?} */
    HotColumnComponent.prototype.undo;
    /** @type {?} */
    HotColumnComponent.prototype.validator;
    /** @type {?} */
    HotColumnComponent.prototype.viewportColumnRenderingOffset;
    /** @type {?} */
    HotColumnComponent.prototype.viewportRowRenderingOffset;
    /** @type {?} */
    HotColumnComponent.prototype.visibleRows;
    /** @type {?} */
    HotColumnComponent.prototype.width;
    /** @type {?} */
    HotColumnComponent.prototype.wordWrap;
    /** @type {?} */
    HotColumnComponent.prototype.inj;
}
