import {
  Component,
  Injector,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Input,
} from '@angular/core';

import { BaseColumnComponent } from './base/base-column.component'

import { HotTableComponent } from './hot-table.component';

@Component({
  selector: 'hot-column',
  template: ``,
})

export class HotColumnComponent extends BaseColumnComponent implements OnInit, OnChanges, OnDestroy {
  private parentComponent: HotTableComponent;
  private firstRun = true;

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
