import { Injectable, SimpleChanges } from '@angular/core';

const AVAILABLE_OPTIONS: string[] = ['allowEmpty', 'allowHtml', 'allowInsertColumn', 'allowInsertRow',
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
'beforeSetRangeEnd', 'beforeStretchingColumnWidth', 'beforeTouchScroll', 'beforeUndo', 'beforeValidate',
'beforeValueRender', 'construct', 'init', 'manualRowHeights', 'modifyAutofillRange', 'modifyCol',
'modifyColHeader', 'modifyColumnHeaderHeight', 'modifyColWidth', 'modifyCopyableRange', 'modifyData',
'modifyRow', 'modifyRowData', 'modifyRowHeader', 'modifyRowHeaderWidth', 'modifyRowHeight', 'modifyTransformEnd',
'modifyTransformStart', 'persistentStateLoad', 'persistentStateReset', 'persistentStateSave',
'skipLengthCache', 'unmodifyCol', 'unmodifyRow'];

@Injectable()
export class HotSettingsResolver {
  private hooks = AVAILABLE_HOOKS;
  private options = AVAILABLE_OPTIONS;

  mergeSettings(component): object {
    const mergedSettings: object = {};

    if (component['settings'] !== void 0) {
      Object.keys(component['settings']).forEach((key) => {
        if (this.hooks.indexOf(key) > -1) {
          mergedSettings[key] = (p1, p2, p3, p4, p5, p6) => {
            return component._ngZone.run(() => {
              return component['settings'][key].call(component.hotInstance, p1, p2, p3, p4, p5, p6);
            })
          };

        } else {
          mergedSettings[key] = component['settings'][key];
        }
      });
    }

    this.options.forEach((key) => {
      const option = component[key];

      if (option !== void 0) {
        mergedSettings[key] = option;
      }
    });

    this.hooks.forEach((key) => {
      const hook = component[key];

      if (hook && hook.observers.length > 0) {
        mergedSettings[key] = (p1, p2, p3, p4, p5, p6) => {
          component._ngZone.run(() => {
            component[key].emit({ hotInstance: component.hotInstance, params: [p1, p2, p3, p4, p5, p6] });
          });
        };
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
