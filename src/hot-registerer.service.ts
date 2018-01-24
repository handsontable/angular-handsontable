import { Injectable } from '@angular/core';
import * as Handsontable from 'handsontable';

const instances = new Map<string, Handsontable>();

@Injectable()
export class HotRegisterer {
  public getInstance(id: string): Handsontable {
    return instances.get(id);
  }

  public registerInstance(id: string, instance: Handsontable): void {
    instances.set(id, instance);
  }

  public removeInstance(id: string): void {
    instances.delete(id);
  }
}
