import { Injectable, SimpleChanges } from '@angular/core';

const AVAILABLE_OPTIONS: string[] = ['activeHeaderClassName', 'allowEmpty', 'allowHtml', 'allowInsertColumn', 'allowInsertRow',
'allowInvalid', 'allowRemoveColumn', 'allowRemoveRow', 'autoColumnSize', 'autoComplete', 'autoRowSize',
'autoWrapCol', 'autoWrapRow', 'cell', 'cells', 'checkedTemplate', 'className', 'colHeaders', 'columnHeaderHeight',
'columns', 'columnSorting', 'colWidths', 'commentedCellClassName', 'comments', 'contextMenu', 'copyable',
'copyPaste', 'correctFormat', 'currentColClassName', 'currentHeaderClassName', 'currentRowClassName',
'customBorders', 'data', 'dataSchema', 'dateFormat', 'debug', 'defaultDate', 'disableVisualSelection',
'dragToScroll', 'editor', 'enterBeginsEditing', 'enterMoves', 'fillHandle', 'filter', 'filteringCaseSensitive',
'fixedColumnsLeft', 'fixedRowsTop', 'fragmentSelection', 'height', 'invalidCellClassName', 'label',
'language', 'manualColumnFreeze', 'manualColumnMove', 'manualColumnResize', 'manualRowMove', 'manualRowResize',
'maxCols', 'maxRows', 'mergeCells', 'minCols', 'minRows', 'minSpareCols', 'minSpareRows', 'multiSelect',
'noWordWrapClassName', 'numericFormat', 'observeChanges', 'observeDOMVisibility', 'outsideClickDeselects',
'persistentState', 'placeholder', 'placeholderCellClassName', 'preventOverflow', 'readOnly',
'readOnlyCellClassName', 'renderAllRows', 'renderer', 'rowHeaders', 'rowHeaderWidth', 'rowHeights',
'search', 'selectionMode', 'selectOptions', 'skipColumnOnPaste', 'sortByRelevance', 'sortFunction', 'sortIndicator',
'source', 'startCols', 'startRows', 'stretchH', 'strict', 'tableClassName', 'tabMoves', 'title',
'trimDropdown', 'trimWhitespace', 'type', 'uncheckedTemplate', 'undo', 'validator',
'viewportColumnRenderingOffset', 'viewportRowRenderingOffset', 'visibleRows', 'width', 'wordWrap'];

const AVAILABLE_HOOKS: string[] = ['afterBeginEditing', 'afterCellMetaReset', 'afterChange',
'afterChangesObserved', 'afterColumnMove', 'afterColumnResize', 'afterColumnSort',
'afterContextMenuDefaultOptions', 'afterContextMenuHide', 'afterContextMenuShow', 'afterCopy',
'afterCopyLimit', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterDeselect', 'afterDestroy',
'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetColumnHeaderRenderers',
'afterGetRowHeader', 'afterGetRowHeaderRenderers', 'afterInit', 'afterLanguageChange', 'afterListen',
'afterLoadData', 'afterModifyTransformEnd', 'afterModifyTransformStart', 'afterMomentumScroll',
'afterOnCellCornerDblClick', 'afterOnCellCornerMouseDown', 'afterOnCellMouseDown',
'afterOnCellMouseOut', 'afterOnCellMouseOver', 'afterPaste', 'afterPluginsInitialized', 'afterRedo',
'afterRemoveCellMeta', 'afterRemoveCol', 'afterRemoveRow', 'afterRender', 'afterRenderer',
'afterRowMove', 'afterRowResize', 'afterScrollHorizontally', 'afterScrollVertically', 'afterSelection',
'afterSelectionByProp', 'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta',
'afterSetDataAtCell', 'afterSetDataAtRowProp', 'afterUndo', 'afterUnlisten', 'afterUpdateSettings',
'afterValidate', 'afterViewportColumnCalculatorOverride', 'afterViewportRowCalculatorOverride',
'beforeAutofill', 'beforeAutofillInsidePopulate', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender',
'beforeColumnMove', 'beforeColumnResize', 'beforeColumnSort', 'beforeContextMenuSetItems', 'beforeCopy',
'beforeCreateCol', 'beforeCreateRow', 'beforeCut', 'beforeDrawBorders', 'beforeGetCellMeta', 'beforeInit',
'beforeInitWalkontable', 'beforeKeyDown', 'beforeLanguageChange', 'beforeOnCellMouseDown', 'beforeOnCellMouseOut',
'beforeOnCellMouseOver', 'beforePaste', 'beforeRedo', 'beforeRemoveCellMeta', 'beforeRemoveCol',
'beforeRemoveRow', 'beforeRender', 'beforeRenderer', 'beforeRowMove', 'beforeRowResize', 'beforeSetRangeEnd',
'beforeSetRangeStart', 'beforeStretchingColumnWidth', 'beforeTouchScroll', 'beforeUndo', 'beforeValidate',
'beforeValueRender', 'construct', 'init', 'manualRowHeights', 'modifyAutofillRange', 'modifyCol',
'modifyColHeader', 'modifyColumnHeaderHeight', 'modifyColWidth', 'modifyCopyableRange', 'modifyData',
'modifyRow', 'modifyRowData', 'modifyRowHeader', 'modifyRowHeaderWidth', 'modifyRowHeight', 'modifyTransformEnd',
'modifyTransformStart', 'persistentStateLoad', 'persistentStateReset', 'persistentStateSave',
'skipLengthCache', 'unmodifyCol', 'unmodifyRow'];

@Injectable()
export class HotSettingsResolver {

  mergeSettings(component): object {
    const mergedSettings: object = {};
    const options = AVAILABLE_HOOKS.concat(AVAILABLE_OPTIONS);

    options.forEach((key) => {
      let option;

      if (typeof component['settings'] === 'object') {
        option = component['settings'][key];
      }

      if (component[key] !== void 0) {
        option = component[key];
      }

      if (option === void 0) {
        return;

      } else if (typeof option === 'function' && AVAILABLE_HOOKS.indexOf(key) > -1) {
        mergedSettings[key] = function(...args) {
          return component._ngZone.run(() => {
            return option(this, ...args);
          });
        };

      } else {
        mergedSettings[key] = option;
      }
    });

    return mergedSettings;
  }

  prepareChanges(changes: SimpleChanges): object {
    const result: object = {};
    const parameters: string[] = Object.keys(changes);

    parameters.forEach((param) => {
      if (changes.hasOwnProperty(param)) {
        result[param] = changes[param].currentValue;
      }
    });

    return result;
  }
}
