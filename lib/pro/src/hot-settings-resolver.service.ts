import { Injectable } from '@angular/core';

import { BaseSettingsResolver } from './base/base-settings-resolver.service';
import { AVAILABLE_HOOKS, AVAILABLE_OPTIONS } from './base/base-settings.helper';

@Injectable()
export class HotSettingsResolver extends BaseSettingsResolver {
  constructor() {
    super(
      AVAILABLE_HOOKS.concat([
        'afterAddChild',
        'afterDetachChild',
        'afterDropdownMenuDefaultOptions',
        'afterDropdownMenuHide',
        'afterDropdownMenuShow',
        'afterFilter',
        'afterTrimRow',
        'afterUntrimRow',
        'beforeAddChild',
        'beforeDetachChild',
        'beforeDropdownMenuSetItems',
        'beforeFilter',
        'hiddenColumn',
        'hiddenRow',
      ]),
      AVAILABLE_OPTIONS.concat([
        'bindRowsWithHeaders',
        'collapsibleColumns',
        'columnSummary',
        'dropdownMenu',
        'filters',
        'fixedRowsBottom',
        'formulas',
        'ganttChart',
        'headerTooltips',
        'hiddenColumns',
        'hiddenRows',
        'licenseKey',
        'trimRows',
      ]),
    );
  }
}