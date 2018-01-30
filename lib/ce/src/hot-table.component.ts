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
} from '@angular/core';

import * as Handsontable from 'handsontable';

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

  constructor(
    private el: ElementRef,
    private _ngZone: NgZone,
    private _hotTableRegisterer: HotTableRegisterer,
    private _hotSettingsResolver: HotSettingsResolver
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
    let options = this._hotSettingsResolver.mergeSettings(this);

    if (this.columnsComponents.length > 0) {
      let columns = [];

      this.columnsComponents.forEach((column) => {
        columns.push(this._hotSettingsResolver.mergeSettings(column));
      });

      options['columns'] = columns;
    }

    this._ngZone.runOutsideAngular(() => {
      this.hotInstance = new Handsontable(this.container, options);
    });

    if (this.hotId) {
      this._hotTableRegisterer.registerInstance(this.hotId, this.hotInstance);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hotInstance === void 0) {
      return;
    }

    let newOptions = this._hotSettingsResolver.prepareChanges(changes);

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
        columns.push(this._hotSettingsResolver.mergeSettings(column));
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
        columns.push(this._hotSettingsResolver.mergeSettings(column));
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