import { Injectable, SimpleChanges } from '@angular/core';
import * as Handsontable from 'handsontable';
// @ts-ignore
const AVAILABLE_OPTIONS: string[] = Object.keys(Handsontable.DefaultSettings.prototype);
// @ts-ignore
const AVAILABLE_HOOKS: string[] = Handsontable.hooks.getRegistered();

@Injectable()
export class HotSettingsResolver {
  mergeSettings(component): Handsontable.GridSettings | object {
    const isSettingsObject = typeof component['settings'] === 'object';
    const mergedSettings: Handsontable.GridSettings = isSettingsObject ? component['settings'] : {};
    const options = AVAILABLE_HOOKS.concat(AVAILABLE_OPTIONS);

    options.forEach(key => {
      const isHook = AVAILABLE_HOOKS.indexOf(key) > -1;
      let option;

      if (isSettingsObject && isHook) {
        option = component['settings'][key];
      }

      if (component[key] !== void 0) {
        option = component[key];
      }

      if (option === void 0) {
        return;

      } else if (typeof option === 'function' && isHook) {
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

  prepareChanges(changes: SimpleChanges): Handsontable.GridSettings {
    const result: Handsontable.GridSettings = {};
    const parameters: string[] = Object.keys(changes);

    parameters.forEach((param) => {
      if (changes.hasOwnProperty(param)) {
        result[param] = changes[param].currentValue;
      }
    });

    return result;
  }
}
