import {
  Component,
  ElementRef,
  NgZone,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as Handsontable from 'handsontable-pro';

import { BaseTableComponent } from './base/base-table.component';

import { HotTableRegisterer } from './hot-table-registerer.service';
import { HotSettingsResolver } from './hot-settings-resolver.service';
import { HotColumnComponent } from './hot-column.component';

@Component({
  selector: 'hot-table',
  template: '',
  encapsulation: ViewEncapsulation.None,
  providers: [ HotTableRegisterer, HotSettingsResolver ],
})

export class HotTableComponent extends BaseTableComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
  private hotInstance: Handsontable;
  private container: HTMLElement;
  private columnsComponents: HotColumnComponent[] = [];

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
  @Input() nestedHeaders: boolean | any[];
  @Input() trimRows: boolean | number[];

  @Output() afterAddChild: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDetachChild: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDropdownMenuDefaultOptions: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDropdownMenuHide: EventEmitter<any[]> = new EventEmitter();
  @Output() afterDropdownMenuShow: EventEmitter<any[]> = new EventEmitter();
  @Output() afterFilter: EventEmitter<any[]> = new EventEmitter();
  @Output() afterTrimRow: EventEmitter<any[]> = new EventEmitter();
  @Output() afterUntrimRow: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeAddChild: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeDetachChild: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeDropdownMenuSetItems: EventEmitter<any[]> = new EventEmitter();
  @Output() beforeFilter: EventEmitter<any[]> = new EventEmitter();
  @Output() hiddenColumn: EventEmitter<any[]> = new EventEmitter();
  @Output() hiddenRow: EventEmitter<any[]> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private _ngZone: NgZone,
    private _hotTableRegisterer: HotTableRegisterer,
    private _hotSettingResolver: HotSettingsResolver
  ) {
    super();
  }

  ngOnInit() {
    this.container = document.createElement('div');

    if (this.hotId) {
      this.container.id = this.hotId;
    }

    this.el.nativeElement.appendChild(this.container);
  }

  ngAfterContentInit() {
    let options = this._hotSettingResolver.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      let columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingResolver.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container, options);

      if (this.hotId) {
        this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hotInstance === void 0) {
      return;
    }

    let newOptions = this._hotSettingResolver.prepareChanges(changes);

    this.updateHotTable(newOptions);
  }

  ngOnDestroy() {
    this.hotInstance.destroy();

    if (this.hotId) {
      this._hotTableRegisterer.removeInstance(this.hotId);
    }

    this.el.nativeElement.removeChild(this.container);
    this.container = void 0;
  }

  updateHotTable(newSettings: object) {
    if (!this.hotInstance) {
      return;
    }

    this.hotInstance.updateSettings(newSettings, false);
  }

  onAfterColumnsChange() {
    if (this.columnsComponents === void 0) {
      return;
    }

    if (this.columnsComponents.length > 0) {
      let columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingResolver.mergeSettings(column));
      });

      let newOptions = {
        columns: columns
      };

      this.updateHotTable(newOptions);
    }
  }

  onAfterColumnsNumberChange() {
    let columns = [];

    if (this.columnsComponents.length > 0) {
      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingResolver.mergeSettings(column));
      });
    }

    this.updateHotTable({columns: columns});
  }

  addColumn(column: HotColumnComponent) {
    this.columnsComponents.push(column);
    this.onAfterColumnsNumberChange();
  }

  removeColumn(column: HotColumnComponent) {
    const index = this.columnsComponents.indexOf(column);

    this.columnsComponents.splice(index, 1);
    this.onAfterColumnsNumberChange();
  }
}