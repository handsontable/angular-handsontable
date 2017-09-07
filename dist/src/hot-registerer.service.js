import { Injectable } from '@angular/core';
var /** @type {?} */ instances = new Map();
var HotRegisterer = /** @class */ (function () {
    function HotRegisterer() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    HotRegisterer.prototype.getInstance = function (id) {
        return instances.get(id);
    };
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    HotRegisterer.prototype.registerInstance = function (id, instance) {
        instances.set(id, instance);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    HotRegisterer.prototype.removeInstance = function (id) {
        instances.delete(id);
    };
    HotRegisterer.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    HotRegisterer.ctorParameters = function () { return []; };
    return HotRegisterer;
}());
export { HotRegisterer };
function HotRegisterer_tsickle_Closure_declarations() {
    /** @type {?} */
    HotRegisterer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HotRegisterer.ctorParameters;
}
