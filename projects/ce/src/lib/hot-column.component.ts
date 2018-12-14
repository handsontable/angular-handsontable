import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
} from '@angular/core';
import { HotTableComponent } from './hot-table.component';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'hot-column',
  template: '',
})
export class HotColumnComponent implements OnInit, OnChanges, OnDestroy {
  private firstRun = true;
  // handsontable column options
  @Input() allowEmpty: Handsontable.GridSettings['allowEmpty'];
  @Input() allowHtml: Handsontable.GridSettings['allowHtml'];
  @Input() allowInvalid: Handsontable.GridSettings['allowInvalid'];
  @Input() checkedTemplate: Handsontable.GridSettings['checkedTemplate'];
  @Input() className: Handsontable.GridSettings['className'];
  @Input() columnSorting: Handsontable.GridSettings['columnSorting'];
  @Input() colWidths: Handsontable.GridSettings['colWidths'];
  @Input() commentedCellClassName: Handsontable.GridSettings['commentedCellClassName'];
  @Input() copyable: Handsontable.GridSettings['copyable'];
  @Input() correctFormat: Handsontable.GridSettings['correctFormat'];
  @Input() data: Handsontable.GridSettings['data'];
  @Input() dateFormat: Handsontable.GridSettings['dateFormat'];
  @Input() defaultDate: Handsontable.GridSettings['defaultDate'];
  @Input() editor: Handsontable.GridSettings['editor'];
  @Input() filteringCaseSensitive: Handsontable.GridSettings['filteringCaseSensitive'];
  @Input() invalidCellClassName: Handsontable.GridSettings['invalidCellClassName'];
  @Input() label: Handsontable.GridSettings['label'];
  @Input() noWordWrapClassName: Handsontable.GridSettings['noWordWrapClassName'];
  @Input() numericFormat: Handsontable.GridSettings['numericFormat'];
  @Input() placeholder: Handsontable.GridSettings['placeholder'];
  @Input() placeholderCellClassName: Handsontable.GridSettings['placeholderCellClassName'];
  @Input() readOnly: Handsontable.GridSettings['readOnly'];
  @Input() readOnlyCellClassName: Handsontable.GridSettings['readOnlyCellClassName'];
  @Input() renderer: Handsontable.GridSettings['renderer'];
  @Input() selectOptions: Handsontable.GridSettings['selectOptions'];
  @Input() skipColumnOnPaste: Handsontable.GridSettings['skipColumnOnPaste'];
  @Input() sortByRelevance: Handsontable.GridSettings['sortByRelevance'];
  @Input() source: Handsontable.GridSettings['source'];
  @Input() strict: Handsontable.GridSettings['strict'];
  @Input() title: Handsontable.GridSettings['title'];
  @Input() trimDropdown: Handsontable.GridSettings['trimDropdown'];
  @Input() type: Handsontable.GridSettings['type'];
  @Input() uncheckedTemplate: Handsontable.GridSettings['uncheckedTemplate'];
  @Input() validator: Handsontable.GridSettings['validator'];
  @Input() visibleRows: Handsontable.GridSettings['visibleRows'];
  @Input() width: Handsontable.GridSettings['width'];
  @Input() wordWrap: Handsontable.GridSettings['wordWrap'];

  constructor(private parentComponent: HotTableComponent) {}

  ngOnInit(): void {
    this.firstRun = false;
    this.parentComponent.addColumn(this);
  }

  ngOnChanges(): void {
    if (this.firstRun) {
      return;
    }

    this.parentComponent.onAfterColumnsChange();
  }

  ngOnDestroy(): void {
    this.parentComponent.removeColumn(this);
  }
}
