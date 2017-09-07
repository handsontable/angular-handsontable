import { Injectable } from '@angular/core';
var /** @type {?} */ AVAILABLE_OPTIONS = ['data', 'dataSchema', 'width', 'height', 'startRows', 'startCols',
    'rowHeaders', 'colHeaders', 'colWidths', 'rowHeights', 'columns', 'cells', 'cell', 'comments',
    'customBorders', 'minRows', 'minCols', 'maxRows', 'maxCols', 'minSpareRows', 'minSpareCols',
    'allowInsertRow', 'allowInsertColumn', 'allowRemoveRow', 'allowRemoveColumn', 'multiSelect',
    'fillHandle', 'fixedRowsTop', 'fixedRowsBottom', 'fixedColumnsLeft', 'outsideClickDeselects',
    'enterBeginsEditing', 'enterMoves', 'tabMoves', 'autoWrapRow', 'autoWrapCol', 'copyRowsLimit',
    'copyColsLimit', 'pasteMode', 'persistentState', 'currentRowClassName', 'currentColClassName',
    'currentHeaderClassName', 'className', 'tableClassName', 'stretchH', 'isEmptyRow', 'isEmptyCol',
    'observeDOMVisibility', 'allowInvalid', 'allowEmpty', 'invalidCellClassName', 'placeholder',
    'placeholderCellClassName', 'readOnlyCellClassName', 'renderer', 'commentedCellClassName',
    'fragmentSelection', 'readOnly', 'skipColumnOnPaste', 'search', 'type', 'copyable', 'editor',
    'autoComplete', 'visibleRows', 'trimDropdown', 'debug', 'wordWrap', 'noWordWrapClassName',
    'contextMenu', 'contextMenuCopyPaste', 'copyPaste', 'undo', 'columnSorting', 'manualColumnMove',
    'manualColumnResize', 'manualRowMove', 'manualRowResize', 'mergeCells',
    'viewportRowRenderingOffset', 'viewportColumnRenderingOffset', 'validator',
    'disableVisualSelection', 'sortIndicator', 'manualColumnFreeze', 'trimWhitespace',
    'source', 'title', 'checkedTemplate', 'uncheckedTemplate', 'label', 'format', 'language',
    'selectOptions', 'autoColumnSize', 'autoRowSize', 'dateFormat', 'correctFormat', 'defaultDate',
    'strict', 'allowHtml', 'renderAllRows', 'preventOverflow', 'bindRowsWithHeaders',
    'collapsibleColumns', 'columnSummary', 'dropdownMenu', 'filters', 'formulas', 'ganttChart',
    'headerTooltips', 'hiddenColumns', 'hiddenRows', 'nestedHeaders', 'trimRows', 'rowHeaderWidth',
    'columnHeaderHeight', 'observeChanges', 'sortFunction', 'sortByRelevance', 'filter',
    'filteringCaseSensitive'];
var /** @type {?} */ AVAILABLE_HOOKS = ['afterCellMetaReset', 'afterChange', 'afterChangesObserved',
    'afterContextMenuDefaultOptions', 'beforeContextMenuSetItems', 'afterDropdownMenuDefaultOptions',
    'beforeDropdownMenuSetItems', 'afterContextMenuHide', 'afterContextMenuShow', 'afterCopyLimit',
    'beforeCreateCol', 'afterCreateCol', 'beforeCreateRow', 'afterCreateRow', 'afterDeselect',
    'afterDestroy', 'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader',
    'afterGetRowHeader', 'afterInit', 'afterLoadData', 'afterMomentumScroll',
    'afterOnCellCornerMouseDown', 'afterOnCellCornerDblClick', 'afterOnCellMouseDown',
    'afterOnCellMouseOver', 'afterOnCellMouseOut', 'afterRemoveCol', 'afterRemoveRow', 'afterRender',
    'beforeRenderer', 'afterRenderer', 'afterScrollHorizontally', 'afterScrollVertically',
    'afterSelection', 'afterSelectionByProp', 'afterSelectionEnd', 'afterSelectionEndByProp',
    'afterSetCellMeta', 'afterSetDataAtCell', 'afterSetDataAtRowProp', 'afterUpdateSettings',
    'afterValidate', 'beforeAutofill', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender',
    'beforeDrawBorders', 'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown',
    'beforeOnCellMouseDown', 'beforeOnCellMouseOver', 'beforeOnCellMouseOut', 'beforeRemoveCol',
    'beforeRemoveRow', 'beforeRender', 'beforeSetRangeStart', 'beforeSetRangeEnd', 'beforeTouchScroll',
    'beforeValidate', 'beforeValueRender', 'construct', 'init', 'modifyCol', 'unmodifyCol',
    'unmodifyRow', 'modifyColHeader', 'modifyColWidth', 'modifyRow', 'modifyRowHeader',
    'modifyRowHeight', 'modifyData', 'modifyRowData', 'persistentStateLoad', 'persistentStateReset',
    'persistentStateSave', 'beforeColumnSort', 'afterColumnSort', 'modifyAutofillRange',
    'modifyCopyableRange', 'beforeCut', 'afterCut', 'beforeCopy', 'afterCopy', 'beforePaste',
    'afterPaste', 'beforeColumnMove', 'afterColumnMove', 'beforeRowMove', 'afterRowMove',
    'beforeColumnResize', 'afterColumnResize', 'beforeRowResize', 'afterRowResize',
    'afterGetColumnHeaderRenderers', 'afterGetRowHeaderRenderers', 'beforeStretchingColumnWidth',
    'beforeFilter', 'afterFilter', 'modifyColumnHeaderHeight', 'beforeUndo', 'afterUndo', 'beforeRedo',
    'afterRedo', 'modifyRowHeaderWidth', 'beforeAutofillInsidePopulate', 'modifyTransformStart',
    'modifyTransformEnd', 'afterModifyTransformStart', 'afterModifyTransformEnd',
    'afterViewportRowCalculatorOverride', 'afterViewportColumnCalculatorOverride',
    'afterPluginsInitialized', 'manualRowHeights', 'skipLengthCache', 'afterTrimRow', 'afterUntrimRow',
    'afterDropdownMenuShow', 'afterDropdownMenuHide', 'hiddenRow', 'hiddenColumn', 'beforeAddChild',
    'afterAddChild', 'beforeDetachChild', 'afterDetachChild', 'afterBeginEditing',
    'afterIsMultipleSelection'];
var HotHelper = /** @class */ (function () {
    function HotHelper() {
    }
    /**
     * @param {?} component
     * @return {?}
     */
    HotHelper.prototype.mergeSettings = function (component) {
        var /** @type {?} */ mergedSettings = {};
        if (component['settings'] !== void 0) {
            Object.keys(component['settings']).forEach(function (key) {
                if (AVAILABLE_HOOKS.indexOf(key) > -1) {
                    mergedSettings[key] = function (p1, p2, p3, p4, p5, p6) {
                        return component._ngZone.run(function () {
                            return component['settings'][key](p1, p2, p3, p4, p5, p6);
                        });
                    };
                }
                else {
                    mergedSettings[key] = component['settings'][key];
                }
            });
        }
        AVAILABLE_OPTIONS.forEach(function (key) {
            var /** @type {?} */ option = component[key];
            if (option !== void 0) {
                mergedSettings[key] = option;
            }
        });
        AVAILABLE_HOOKS.forEach(function (key) {
            var /** @type {?} */ hook = component[key];
            if (hook && hook.observers.length > 0) {
                mergedSettings[key] = function (p1, p2, p3, p4, p5, p6) {
                    component._ngZone.run(function () {
                        component[key].emit([p1, p2, p3, p4, p5, p6]);
                    });
                };
            }
        });
        return mergedSettings;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HotHelper.prototype.prepareChanges = function (changes) {
        var /** @type {?} */ result = {};
        var /** @type {?} */ parameters = Object.keys(changes);
        parameters.forEach(function (param) {
            if (changes.hasOwnProperty(param)) {
                result[param] = changes[param].currentValue;
            }
        });
        return result;
    };
    HotHelper.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    HotHelper.ctorParameters = function () { return []; };
    return HotHelper;
}());
export { HotHelper };
function HotHelper_tsickle_Closure_declarations() {
    /** @type {?} */
    HotHelper.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HotHelper.ctorParameters;
}
