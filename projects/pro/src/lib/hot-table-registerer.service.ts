import { Injectable } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

const instances = new Map<string, Handsontable>();

@Injectable()
export class HotTableRegisterer {
  public getInstance(id: string): Handsontable {
    return instances.get(id);
  }

  public registerInstance(id: string, instance: Handsontable): Map<string, Handsontable> {
    return instances.set(id, instance);
  }

  public removeInstance(id: string): boolean {
    return instances.delete(id);
  }
}
