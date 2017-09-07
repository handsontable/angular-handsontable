import { NgModule } from '@angular/core';
import { HotTableComponent } from './src/hot-table.component';
import { HotColumnComponent } from './src/hot-column.component';
import { HotRegisterer } from './src/hot-registerer.service';
var HotTableModule = /** @class */ (function () {
    function HotTableModule() {
    }
    /**
     * @return {?}
     */
    HotTableModule.forRoot = function () {
        return {
            ngModule: HotTableModule,
            providers: [HotRegisterer]
        };
    };
    HotTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HotTableComponent,
                        HotColumnComponent,
                    ],
                    exports: [HotTableComponent, HotColumnComponent],
                    providers: [HotRegisterer],
                },] },
    ];
    /**
     * @nocollapse
     */
    HotTableModule.ctorParameters = function () { return []; };
    return HotTableModule;
}());
export { HotTableModule };
function HotTableModule_tsickle_Closure_declarations() {
    /** @type {?} */
    HotTableModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HotTableModule.ctorParameters;
}
