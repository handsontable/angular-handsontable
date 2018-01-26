import { Injectable, SimpleChanges } from '@angular/core';

@Injectable()
export class BaseSettingsResolver {
  constructor(
    public hooks: string[],
    public options: string[],
  ) { }

  public mergeSettings(component): object {
    let mergedSettings: object = {};

    if (component['settings'] !== void 0) {
      Object.keys(component['settings']).forEach((key) => {
        if (this.hooks.indexOf(key) > -1) {
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

    this.options.forEach((key) => {
      let option = component[key];

      if (option !== void 0) {
        mergedSettings[key] = option;
      }
    });

    this.hooks.forEach((key) => {
      let hook = component[key];

      if (hook && hook.observers.length > 0) {
        mergedSettings[key] = (p1,  p2,  p3,  p4,  p5,  p6) => {
          component._ngZone.run(() => {
            component[key].emit({ hotInstance: component.hotInstance, params: [p1,  p2,  p3,  p4,  p5,  p6] });
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