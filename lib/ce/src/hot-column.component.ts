import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
} from '@angular/core';

import { HotTableComponent } from './hot-table.component';

@Component({
  // tslint:disable-next-line
  selector: 'hot-column',
  template: '',
})

export class HotColumnComponent implements OnInit, OnChanges, OnDestroy {
  private firstRun = true;

  @Input() allowEmpty: boolean;
  @Input() allowHtml: boolean;
  @Input() allowInvalid: boolean;
  @Input() checkedTemplate: boolean | string;
  @Input() className: string | string[];
  @Input() columnSorting: boolean | object;
  @Input() colWidths: number | number[] | string | ((column: number) => number);
  @Input() commentedCellClassName: string;
  @Input() copyable: boolean;
  @Input() correctFormat: boolean;
  @Input() data: string | (() => void);
  @Input() dateFormat: string;
  @Input() defaultDate: string;
  @Input() editor: boolean | string | (() => void);
  @Input() filteringCaseSensitive: boolean;
  @Input() invalidCellClassName: string;
  @Input() label: object;
  @Input() noWordWrapClassName: string;
  @Input() numericFormat: any;
  @Input() placeholder: any;
  @Input() placeholderCellClassName: string;
  @Input() readOnly: boolean;
  @Input() readOnlyCellClassName: string;
  @Input() renderer: string | (() => void);
  @Input() selectOptions: string[] | number[];
  @Input() skipColumnOnPaste: boolean;
  @Input() sortByRelevance: boolean;
  @Input() sortFunction: (sortOrder: boolean) => void;
  @Input() sortIndicator: boolean;
  @Input() source: any[] | (() => void);
  @Input() strict: boolean;
  @Input() title: string;
  @Input() trimDropdown: boolean;
  @Input() type: string;
  @Input() uncheckedTemplate: boolean | string;
  @Input() validator: string | RegExp | (() => void);
  @Input() visibleRows: number;
  @Input() width: number| (() => number);
  @Input() wordWrap: boolean;

  constructor(private parentComponent: HotTableComponent) {}

  ngOnInit() {
    this.firstRun = false;
    this.parentComponent.addColumn(this);
  }

  ngOnChanges() {
    if (this.firstRun) {
      return;
    }

    this.parentComponent.onAfterColumnsChange();
  }

  ngOnDestroy() {
    this.parentComponent.removeColumn(this);
  }
}
