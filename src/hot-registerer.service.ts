import { Injectable } from '@angular/core';
import Handsontable from 'handsontable';

const instances = new Map<string, Handsontable>();

@Injectable()
export class HotRegisterer {
    public getInstance(id: string): Handsontable {
        return instances[id];
    }

    public registerInstance(id: string, instance: Handsontable): void {
        instances[id] = instance;
    }

    public removeInstance(id: string): void {
        instances[id] = void 0;
    }
}
