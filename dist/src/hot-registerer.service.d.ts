import Handsontable from 'handsontable';
export declare class HotRegisterer {
    getInstance(id: string): Handsontable;
    registerInstance(id: string, instance: Handsontable): void;
    removeInstance(id: string): void;
}
