import { Injectable, SimpleChanges } from '@angular/core';

import { AVAILABLE_HOOKS, AVAILABLE_OPTIONS } from './base/base-settings.helper';

@Injectable()
export class HotHelper {
  public mergeSettings(component): object {
    let mergedSettings: object = {};

    if (component['settings'] !== void 0) {
      Object.keys(component['settings']).forEach((key) => {
        if (AVAILABLE_HOOKS.indexOf(key) > -1) {
          mergedSettings[key] = (p1, p2, p3, p4, p5, p6) => {
            return component._ngZone.run(() => {
              return component['settings'][key](p1, p2, p3, p4, p5, p6);
            })
          };

        } else {
          mergedSettings[key] = component['settings'][key];
        }
      });
    }

    AVAILABLE_OPTIONS.forEach((key) => {
      let option = component[key];

      if (option !== void 0) {
        mergedSettings[key] = option;
      }
    });

    AVAILABLE_HOOKS.forEach((key) => {
      let hook = component[key];

      if (hook && hook.observers.length > 0) {
        mergedSettings[key] = (p1,  p2,  p3,  p4,  p5,  p6) => {
          component._ngZone.run(() => {
            component[key].emit([p1,  p2,  p3,  p4,  p5,  p6]);
          });
        };
      }
    });

    return mergedSettings;
  }

  prepareChanges(changes: SimpleChanges): object {
    let result: object = {};
    const parameters: string[] = Object.keys(changes);

    parameters.forEach((param) => {
      if (changes.hasOwnProperty(param)) {
        result[param] = changes[param].currentValue;
      }
    });

    return result;
  }
}
