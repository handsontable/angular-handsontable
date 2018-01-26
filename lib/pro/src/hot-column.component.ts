import {
  Component,
  Injector,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Input,
} from '@angular/core';

import { BaseColumnComponent } from './base/base-column.component';

import { HotTableComponent } from './hot-table.component';

@Component({
  selector: 'hot-column',
  template: ``,
})

export class HotColumnComponent extends BaseColumnComponent implements OnInit, OnChanges, OnDestroy {
  private parentComponent: HotTableComponent;
  private firstRun = true;

  @Input() bindRowsWithHeaders: boolean | string;
  @Input() collapsibleColumns: boolean | object[];
  @Input() columnSummary: object;
  @Input() dropdownMenu: boolean | object | object[];
  @Input() filters: boolean;
  @Input() fixedRowsBottom: number;
  @Input() formulas: boolean;
  @Input() ganttChart: object;
  @Input() headerTooltips: boolean | object;
  @Input() hiddenColumns: boolean | object;
  @Input() hiddenRows: boolean | object;
  @Input() licenseKey: string;
  @Input() trimRows: boolean | number[];

  constructor(private inj: Injector) {
    super();

    this.parentComponent = this.inj.get(HotTableComponent);
  }

  ngOnInit() {
    this.firstRun = false;
    this.parentComponent.addColumn(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.firstRun) {
      return;
    }

    this.parentComponent.onAfterColumnsChange();
  }

  ngOnDestroy() {
    this.parentComponent.removeColumn(this);
  }
}
