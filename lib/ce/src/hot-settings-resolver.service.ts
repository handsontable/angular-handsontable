import { Injectable, SimpleChanges } from '@angular/core';

import { BaseSettingsResolver } from './base/base-settings-resolver.service';
import { AVAILABLE_HOOKS, AVAILABLE_OPTIONS } from './base/base-settings.helper';

@Injectable()
export class HotSettingsResolver extends BaseSettingsResolver {
  constructor() {
    super(AVAILABLE_HOOKS, AVAILABLE_OPTIONS);
  }
}
