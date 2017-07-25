import { Injectable } from '@angular/core';
import Handsontable from 'handsontable';

const instances: object = {};

@Injectable()
export class HotRegisterer {
    public getInstance(id: any): Handsontable {
        return instances[id];
    }

    public registerInstance(id: any, instance: Handsontable): void {
        instances[id] = instance;
    }

    public removeInstance(id: any): void {
        instances[id] = void 0;
    }
}
