webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_code_code_module__ = __webpack_require__("../../../../../src/app/docs-code/code.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__docs_material_module__ = __webpack_require__("../../../../../src/app/docs-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_handsontable__ = __webpack_require__("../../../../angular-handsontable/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quick_start_component__ = __webpack_require__("../../../../../src/app/pages/quick-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_introduction_component__ = __webpack_require__("../../../../../src/app/pages/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_use_with_pro_component__ = __webpack_require__("../../../../../src/app/pages/use-with-pro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_license_component__ = __webpack_require__("../../../../../src/app/pages/license.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_support_component__ = __webpack_require__("../../../../../src/app/pages/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_more_wrappers_component__ = __webpack_require__("../../../../../src/app/pages/more-wrappers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_examples_settings_object_component__ = __webpack_require__("../../../../../src/app/pages/examples/settings-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_examples_declarative_way_component__ = __webpack_require__("../../../../../src/app/pages/examples/declarative-way.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_examples_static_columns_component__ = __webpack_require__("../../../../../src/app/pages/examples/static-columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_examples_dynamic_columns_component__ = __webpack_require__("../../../../../src/app/pages/examples/dynamic-columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_examples_access_to_handsontable_component__ = __webpack_require__("../../../../../src/app/pages/examples/access-to-handsontable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_examples_hooks_component__ = __webpack_require__("../../../../../src/app/pages/examples/hooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_examples_remote_data_component__ = __webpack_require__("../../../../../src/app/pages/examples/remote-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_9__pages_introduction_component__["a" /* IntroductionComponent */], data: { title: ' - Introduction' } },
    { path: 'quick-start', component: __WEBPACK_IMPORTED_MODULE_8__pages_quick_start_component__["a" /* QuickStartComponent */], data: { title: ' - Quick start' } },
    { path: 'use-with-pro', component: __WEBPACK_IMPORTED_MODULE_10__pages_use_with_pro_component__["a" /* UseWithProComponent */], data: { title: ' - Use the wrapper with Handsontable Pro' } },
    { path: 'examples', redirectTo: '/examples/settings-object', pathMatch: 'full' },
    { path: 'examples/settings-object', component: __WEBPACK_IMPORTED_MODULE_14__pages_examples_settings_object_component__["a" /* ExSettingsObjectComponent */], data: { title: ' - Examples - Settings object' } },
    { path: 'examples/declarative-way', component: __WEBPACK_IMPORTED_MODULE_15__pages_examples_declarative_way_component__["a" /* ExDeclarativeWayComponent */], data: { title: ' - Examples - Declarative way' } },
    { path: 'examples/static-columns', component: __WEBPACK_IMPORTED_MODULE_16__pages_examples_static_columns_component__["a" /* ExStaticColumnsComponent */], data: { title: ' - Examples - Static columns' } },
    { path: 'examples/dynamic-columns', component: __WEBPACK_IMPORTED_MODULE_17__pages_examples_dynamic_columns_component__["a" /* ExDynamicColumnsComponent */], data: { title: ' - Examples - Dynamic columns' } },
    { path: 'examples/access-to-handsontable', component: __WEBPACK_IMPORTED_MODULE_18__pages_examples_access_to_handsontable_component__["a" /* ExAccessToHandsontableComponent */], data: { title: ' - Examples - Access to Handsontable' } },
    { path: 'examples/hooks', component: __WEBPACK_IMPORTED_MODULE_19__pages_examples_hooks_component__["a" /* ExHooksComponent */], data: { title: ' - Examples - Hooks' } },
    { path: 'examples/remote-data', component: __WEBPACK_IMPORTED_MODULE_20__pages_examples_remote_data_component__["a" /* ExRemoteDataComponent */], data: { title: ' - Examples - Remote data' } },
    { path: 'license', component: __WEBPACK_IMPORTED_MODULE_11__pages_license_component__["a" /* LicenseComponent */], data: { title: ' - License' } },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_component__["a" /* SupportComponent */], data: { title: ' - Support' } },
    { path: 'more-wrappers', component: __WEBPACK_IMPORTED_MODULE_13__pages_more_wrappers_component__["a" /* MoreWrappersComponent */], data: { title: ' - More wrappers' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_21__pages_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__pages_quick_start_component__["a" /* QuickStartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_introduction_component__["a" /* IntroductionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_use_with_pro_component__["a" /* UseWithProComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_license_component__["a" /* LicenseComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_more_wrappers_component__["a" /* MoreWrappersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_examples_settings_object_component__["a" /* ExSettingsObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_examples_declarative_way_component__["a" /* ExDeclarativeWayComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_examples_static_columns_component__["a" /* ExStaticColumnsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_examples_dynamic_columns_component__["a" /* ExDynamicColumnsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_examples_access_to_handsontable_component__["a" /* ExAccessToHandsontableComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_examples_hooks_component__["a" /* ExHooksComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_examples_remote_data_component__["a" /* ExRemoteDataComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_not_found_component__["a" /* PageNotFoundComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__docs_material_module__["a" /* DocsMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_handsontable__["a" /* HotTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__docs_code_code_module__["a" /* CodeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {})
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_octicons__ = __webpack_require__("../../../../octicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_octicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_octicons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(http, router, activatedRoute, titleService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.isUrlInitialized = false;
        this.hash = location.hash;
        this.menuExamples = false;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* NavigationStart */]; })
            .subscribe(function (event) {
            // if (!this.isUrlInitialized) {
            _this.menuExamples = event.url.includes('examples');
            // this.isUrlInitialized = true;
            // }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle("Handsontable for Angular" + (event['title'] || ''));
            if (_this.hash.length < 1) {
                _this.content.nativeElement.parentElement.scrollTop = 0;
            }
        });
    };
    AppComponent.prototype.getYear = function () {
        var date = new Date();
        return date.getFullYear();
    };
    AppComponent.prototype.toggleMenuExample = function () {
        this.menuExamples = !this.menuExamples;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* ViewChild */])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "content", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["p" /* ViewEncapsulation */].None,
        template: "\n    <nav class=\"docs-topbar mat-elevation-z6\">\n      <a md-button routerLink=\"/\" routerLinkActive=\"\" title=\"Handsontable for Angular\"><img class=\"logo\" src=\"/assets/Handsontable_logo_200x40.svg\" alt=\"\"/> for Angular</a>\n      <div class=\"flex-spacer\"></div>\n      <a md-button href=\"https://github.com/handsontable/angular-handsontable\" title=\"Find us on GitHub\">\n      " + __WEBPACK_IMPORTED_MODULE_7_octicons__["mark-github"].toSVG({ width: 21, height: 21, style: 'vertical-align: -6px; margin-right: 5px;' }) + " <span>Github</span></a>\n    </nav>\n    <md-sidenav-container>\n      <md-sidenav mode=\"side\" opened=\"true\">\n        <nav class=\"docs-nav\">\n          <ul>\n            <li><a md-button [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/\" routerLinkActive=\"active\">Introduction</a></li>\n            <li><a md-button routerLink=\"/quick-start\" routerLinkActive=\"active\">Quick start</a></li>\n            <li><a md-button routerLink=\"/use-with-pro\" routerLinkActive=\"active\">Use with Pro version</a></li>\n            <li>\n              <button md-button class=\"btn-block\" [ngClass]=\"{'open': menuExamples}\" (click)=toggleMenuExample()>\n              Examples <span class=\"label label-inverted\">" + __WEBPACK_IMPORTED_MODULE_7_octicons__["kebab-vertical"].toSVG() + "</span></button>\n              <ul class=\"docs-nav--sub\">\n                <li><a md-button routerLink=\"/examples/settings-object\" routerLinkActive=\"active\">By settings object</a></li>\n                <li><a md-button routerLink=\"/examples/declarative-way\" routerLinkActive=\"active\">By using bindings</a></li>\n                <li><a md-button routerLink=\"/examples/static-columns\" routerLinkActive=\"active\">Column custom tag</a></li>\n                <li><a md-button routerLink=\"/examples/dynamic-columns\" routerLinkActive=\"active\">Dynamic columns</a></li>\n                <li><a md-button routerLink=\"/examples/access-to-handsontable\" routerLinkActive=\"active\">Access to Handsontable</a></li>\n                <li><a md-button routerLink=\"/examples/hooks\" routerLinkActive=\"active\">Hook support</a></li>\n                <li><a md-button routerLink=\"/examples/remote-data\" routerLinkActive=\"active\">Remote data</a></li>\n              </ul>\n            </li>\n            <li><a md-button href=\"https://docs.handsontable.com/pro/latest/Core.html\" target=\"_blank\">\n              API Reference <span class=\"label label-inverted\">" + __WEBPACK_IMPORTED_MODULE_7_octicons__["link-external"].toSVG() + "</span></a></li>\n            <li><a md-button routerLink=\"/license\" routerLinkActive=\"active\">License</a></li>\n            <li><a md-button routerLink=\"/support\" routerLinkActive=\"active\">Support</a></li>\n            <li><a md-button routerLink=\"/more-wrappers\" routerLinkActive=\"active\">More wrappers</a></li>\n          </ul>\n        </nav>\n      </md-sidenav>\n      <div #content id=\"content\">\n        <router-outlet></router-outlet>\n        <footer class=\"docs-footer\">\n          <div class=\"flex-spacer\"></div>\n          <div class=\"docs-footer-copyright\">\n            <p>Handsoncode &copy; {{getYear()}}. Code licensed under an <a routerLink=\"/license\">MIT-style License</a>.\n            Documentation licensed under <a href=\"http://creativecommons.org/licenses/by/4.0/\" rel=\"nofollow\" target=\"_blank\">CC BY 4.0</a>.</p>\n          </div>\n        </footer>\n      </div>\n    </md-sidenav-container>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_material_module__ = __webpack_require__("../../../../../src/app/docs-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__docs_material_module__["a" /* DocsMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/docs-code/code.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../prismjs/themes/prism.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../prismjs/plugins/line-numbers/prism-line-numbers.css"), "");

// module
exports.push([module.i, "docs-code {\n  position: relative;\n  display: block;\n  margin-bottom: 2rem; }\n  docs-code .title {\n    color: #fff;\n    background: #1976d2;\n    padding: 0.5rem 1rem;\n    line-height: 2rem;\n    border-radius: 3px 3px 0 0; }\n  docs-code code[class*=\"language-\"], docs-code pre[class*=\"language-\"] {\n    font-family: 'Roboto Mono', monospace; }\n  docs-code pre, docs-code pre[class*=\"language-\"] {\n    margin: 0; }\n  docs-code .title ~ pre {\n    border-radius: 0 0 3px 3px; }\n  docs-code :not(pre) > code[class*=\"language-\"], docs-code pre[class*=\"language-\"] {\n    background: #eee; }\n  docs-code[lang=\"bash\"] {\n    color: #fff; }\n    docs-code[lang=\"bash\"] pre {\n      background: #212121; }\n    docs-code[lang=\"bash\"] code {\n      color: #64DD17;\n      text-shadow: none; }\n  docs-code textarea {\n    position: absolute;\n    top: 0;\n    z-index: -10;\n    width: 1px;\n    height: 1px; }\n  docs-code .title + .btn-copy {\n    color: #fff; }\n  docs-code .btn-copy {\n    position: absolute;\n    top: 1.5rem;\n    right: 0.5rem;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    width: 2rem;\n    height: 2rem;\n    line-height: 2rem;\n    background: none;\n    border: 0 none;\n    cursor: pointer;\n    z-index: 10;\n    min-width: 45px; }\n    docs-code .btn-copy:focus, docs-code .btn-copy:active {\n      outline: 0 none;\n      box-shadow: none; }\n    docs-code .btn-copy .octicon {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      transition: 0.3s opacity; }\n    docs-code .btn-copy .octicon-check {\n      opacity: 0; }\n    docs-code .btn-copy.success .octicon-clippy {\n      opacity: 0; }\n    docs-code .btn-copy.success .octicon-check {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs-code/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_octicons__ = __webpack_require__("../../../../octicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_octicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_octicons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_plugins_line_numbers_prism_line_numbers_js__ = __webpack_require__("../../../../prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_plugins_line_numbers_prism_line_numbers_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_plugins_line_numbers_prism_line_numbers_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript_js__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CodeComponent = (function () {
    function CodeComponent(_el, snackBar) {
        this._el = _el;
        this.snackBar = snackBar;
        this.lang = 'javascript';
    }
    CodeComponent.prototype.copyInput = function () {
        var _this = this;
        var textarea = document.createElement('textarea');
        textarea.value = this.input;
        this._el.nativeElement.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            return document.execCommand('copy');
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            this._el.nativeElement.removeChild(textarea);
            this.button._elementRef.nativeElement.className += ' success';
            this.snackBar.open('Code copied', '', {
                duration: 3000
            });
            setTimeout(function () {
                var className = _this.button._elementRef.nativeElement.className;
                if ((/success/).test(className)) {
                    _this.button._elementRef.nativeElement.className = className.replace(/\ssuccess/, '');
                }
            }, 1000);
        }
    };
    CodeComponent.prototype.ngOnInit = function () {
        this.pre.nativeElement.className = "language-" + this.lang;
        if (this.start !== void 0) {
            this.pre.nativeElement.className += ' line-numbers';
            this.pre.nativeElement.setAttribute('data-start', this.start);
        }
    };
    CodeComponent.prototype.ngAfterViewInit = function () {
        var value = this.input;
        if (this.lang === 'html') {
            value = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        this.code.nativeElement.innerHTML = value;
        __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.highlightElement(this.code.nativeElement);
    };
    return CodeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('code'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], CodeComponent.prototype, "code", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('pre'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], CodeComponent.prototype, "pre", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('button'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButton */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButton */]) === "function" && _c || Object)
], CodeComponent.prototype, "button", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CodeComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CodeComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CodeComponent.prototype, "start", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CodeComponent.prototype, "lang", void 0);
CodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None,
        selector: 'docs-code',
        template: "\n    <div *ngIf=\"title\" class=\"title\">{{title}}</div>\n    <button md-button #button (click)='copyInput()' class=\"btn-copy\">" + __WEBPACK_IMPORTED_MODULE_3_octicons__["clippy"].toSVG() + __WEBPACK_IMPORTED_MODULE_3_octicons__["check"].toSVG() + "</button>\n    <pre #pre><code #code><ng-content></ng-content></code></pre>\n  ",
        styles: [__webpack_require__("../../../../../src/app/docs-code/code.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _e || Object])
], CodeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=code.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs-code/code.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_component__ = __webpack_require__("../../../../../src/app/docs-code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__docs_material_module__ = __webpack_require__("../../../../../src/app/docs-material.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CodeModule = (function () {
    function CodeModule() {
    }
    return CodeModule;
}());
CodeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__code_component__["a" /* CodeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__docs_material_module__["a" /* DocsMaterialModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__code_component__["a" /* CodeComponent */],
        ],
    })
], CodeModule);

//# sourceMappingURL=code.module.js.map

/***/ }),

/***/ "../../../../../src/app/docs-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocsMaterialModule = (function () {
    function DocsMaterialModule() {
    }
    return DocsMaterialModule;
}());
DocsMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk__["_0" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdTooltipModule */],
        ]
    })
], DocsMaterialModule);

//# sourceMappingURL=docs-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/access-to-handsontable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_handsontable__ = __webpack_require__("../../../../angular-handsontable/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExAccessToHandsontableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExAccessToHandsontableComponent = (function () {
    function ExAccessToHandsontableComponent(_hotRegisterer) {
        this._hotRegisterer = _hotRegisterer;
        this.instance = "hotInstance";
        this.examples = [
            [
                "import { BrowserModule } from '@angular/platform-browser';",
                "import { NgModule } from '@angular/core';",
                "import { FormsModule } from '@angular/forms';",
                "import { AppComponent } from './app.component';",
                "import { HotTableModule } from 'angular-handsontable';",
                "",
                "@NgModule({",
                "  declarations: [",
                "    AppComponent",
                "  ],",
                "  imports: [",
                "    BrowserModule,",
                "    FormsModule,",
                "    HotTableModule",
                "  ],",
                "  providers: [],",
                "  bootstrap: [AppComponent]",
                "})",
                "export class AppModule { }",
            ].join('\n'),
            [
                "import { Component } from '@angular/core';",
                "import { HotRegisterer } from 'angular-handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  instance: string = \"hotInstance\";",
                "  coordX: string;",
                "  coordY: string;",
                "  newValue: string;",
                "",
                "  constructor(private _hotRegisterer: HotRegisterer) {}",
                "",
                "  selectCell($event) {",
                "    const x = parseInt(this.coordX, 10);",
                "    const y = parseInt(this.coordY, 10);",
                "    const hot = this._hotRegisterer.getInstance(this.instance);",
                "",
                "    if (isNaN(x) || isNaN(y)) {",
                "      hot.deselectCell();",
                "      return false;",
                "    }",
                "",
                "    if (hot.selectCell(y, x)) {",
                "      $event.target.focus();",
                "",
                "    } else {",
                "      hot.deselectCell();",
                "    }",
                "  ",
                "    hot.unlisten();",
                "  }",
                "",
                "  changeValue($event) {",
                "    const x = parseInt(this.coordX, 10);",
                "    const y = parseInt(this.coordY, 10);",
                "",
                "    if (isNaN(x) || isNaN(y)) {",
                "      return false;",
                "    }",
                "",
                "    const hot = this._hotRegisterer.getInstance(this.instance);",
                "",
                "    hot.setDataAtCell(y, x, $event.target.value);",
                "  }",
                "}",
            ].join('\n'),
            [
                "<input placeholder=\"Column\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordX\">",
                "<input placeholder=\"Row\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordY\">",
                "<input placeholder=\"Set new value\" (input)=\"changeValue($event)\" [(ngModel)]=\"newValue\">",
                "",
                "<hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\" [outsideClickDeselects]=\"false\" hotId=\"hotInstance\"></hot-table>",
            ].join('\n'),
        ];
    }
    ExAccessToHandsontableComponent.prototype.selectCell = function ($event) {
        var x = parseInt(this.coordX, 10);
        var y = parseInt(this.coordY, 10);
        var hot = this._hotRegisterer.getInstance(this.instance);
        if (isNaN(x) || isNaN(y)) {
            hot.deselectCell();
            return false;
        }
        if (hot.selectCell(y, x)) {
            $event.target.focus();
        }
        else {
            hot.deselectCell();
        }
        hot.unlisten();
    };
    ExAccessToHandsontableComponent.prototype.changeValue = function ($event) {
        var x = parseInt(this.coordX, 10);
        var y = parseInt(this.coordY, 10);
        if (isNaN(x) || isNaN(y)) {
            return false;
        }
        var hot = this._hotRegisterer.getInstance(this.instance);
        hot.setDataAtCell(y, x, $event.target.value);
    };
    return ExAccessToHandsontableComponent;
}());
ExAccessToHandsontableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Access the Handsontable instance</h1>\n\n      <h2>Setup a module</h2>\n      <p>If you would like to use <code>ngModel</code> directive, you have to define\n      <code>FormModule</code> first. It's necessary to import <code>FormModule</code> after\n      <code>BrowserModule</code>.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.module.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n      \n      <h2>Set up a component</h2>\n      <p>Except the code responsible for all the logic behind your app, you need to add\n      a <code>HotRegisterer</code> service to be able to register and control the Handsontable\u2019s instance.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[1]\"></docs-code>\n      \n      <h2>Set up a template</h2>\n      <p>To register an instance in a <code>HotRegisterer</code> service you need to define\n      a <code>hotId</code> value. Your Handsontable instance will be registered using that ID.</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[2]\"></docs-code>\n\n      <h2>The result</h2>\n      <p>\n        <md-input-container>\n          <input mdInput placeholder=\"Column\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordX\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput placeholder=\"Row\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordY\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput placeholder=\"Set new value\" (input)=\"changeValue($event)\" [(ngModel)]=\"newValue\">\n        </md-input-container>\n      </p>\n      <hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\" [outsideClickDeselects]=\"false\" hotId=\"hotInstance\"></hot-table>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_handsontable__["b" /* HotRegisterer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_handsontable__["b" /* HotRegisterer */]) === "function" && _a || Object])
], ExAccessToHandsontableComponent);

var _a;
//# sourceMappingURL=access-to-handsontable.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/declarative-way.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable__ = __webpack_require__("../../../../handsontable/dist/handsontable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_handsontable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octicons__ = __webpack_require__("../../../../octicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_octicons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExDeclarativeWayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExDeclarativeWayComponent = (function () {
    function ExDeclarativeWayComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_1_handsontable___default.a.helper.createSpreadsheetData(25, 50);
        this.colHeaders = true;
        this.rowHeaders = true;
        this.colWidths = 50;
        this.examples = [
            [
                "import { Component } from '@angular/core';",
                "import Handsontable from 'handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  data: any[] = Handsontable.helper.createSpreadsheetData(25, 50);",
                "  colHeaders: boolean = true;",
                "  rowHeaders: boolean = true;",
                "  colWidths: number = 50;",
                "}",
            ].join('\n'),
            [
                "<button (click)=\"colWidths=50\">Change colWidths to 50</button>",
                "<button (click)=\"colWidths=100\">Change colWidths to 100</button>",
                "<hot-table",
                "   height=\"250\"",
                "   [colHeaders]=\"colHeaders\"",
                "   [rowHeaders]=\"rowHeaders\"",
                "   [colWidths]=\"colWidths\"",
                "   [data]=\"data\"",
                "></hot-table>",
            ].join('\n'),
        ];
    }
    return ExDeclarativeWayComponent;
}());
ExDeclarativeWayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Initialize Handsontable by using bindings.</h1>\n\n      <h2>Setup a component</h2>\n      <p>DControl Handsontable by binding properties in the template in a declarative way.\n      <a href=\"https://docs.handsontable.com/Options.html\" target=\"_blank\">Explore the list of\n      available options " + __WEBPACK_IMPORTED_MODULE_2_octicons__["link-external"].toSVG() + "</a> and move forward to configuring\n      Handsontable.</p>\n      <div class=\"infobox infobox-info\">\n        <p>Please note that the changes in the bindings are being observed and automatically propagated to the spreadsheet.</p>\n      </div>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n\n      <h2>Setup a template</h2>\n      <p>To display Handsontable, you need to place each attribute separately inside a particular tag.</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>The result</h2>\n      <p>\n        <button md-raised-button (click)=\"colWidths=100\">Change colWidths to 100</button>\n        <button md-raised-button (click)=\"colWidths=undefined\">Reset colWidths to default</button>\n        </p>\n      <hot-table height=\"249\" [colWidths]=\"colWidths\" [colHeaders]=\"colHeaders\" [rowHeaders]=\"rowHeaders\" [data]=\"data\"></hot-table>\n\n    </div>\n  "
    })
], ExDeclarativeWayComponent);

//# sourceMappingURL=declarative-way.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/dynamic-columns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExDynamicColumnsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExDynamicColumnsComponent = (function () {
    function ExDynamicColumnsComponent() {
        this.columns = [{}, {}, {}, {}, {}, {}];
        this.examples = [
            [
                "import { Component } from '@angular/core';",
                "import Handsontable from 'handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  columns: object[] = [ {}, {}, {}, {}, {}, {} ];",
                "",
                "  addColumn() {",
                "    this.columns.push({});",
                "  }",
                "",
                "  removeColumn() {",
                "    this.columns.pop();",
                "  }",
                "}",
            ].join('\n'),
            [
                "<button (click)=\"addColumn()\">Add column</button>",
                "<button (click)=\"removeColumn()\">Remove column</button>",
                "<hot-table>",
                "  <hot-column *ngFor=\"let column of columns\"></hot-column>",
                "</hot-table>",
            ].join('\n'),
        ];
    }
    ExDynamicColumnsComponent.prototype.addColumn = function () {
        this.columns.push({});
    };
    ExDynamicColumnsComponent.prototype.removeColumn = function () {
        this.columns.pop();
    };
    return ExDynamicColumnsComponent;
}());
ExDynamicColumnsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Define dynamic columns using a *ngFor loop</h1>\n      \n      <h2>Setup a component</h2>\n      <p>Define an array of objects containing a configuration of particular columns.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n\n      <h2>Setup a template</h2>\n      <p>You can bind controls in an HTML template to properties of the component by using\n      a directivecalled <code>*ngFor</code>. In the example below, we use it to dynamically change\n      the number of columns displayed in a spreadsheet.</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>The result</h2>\n      <p>\n        <button md-raised-button (click)=\"addColumn()\">Add column</button>\n        <button md-raised-button (click)=\"removeColumn()\">Remove column</button>\n      </p>\n      <hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\">\n        <hot-column *ngFor=\"let column of columns\"></hot-column>\n      </hot-table>\n    </div>\n  "
    })
], ExDynamicColumnsComponent);

//# sourceMappingURL=dynamic-columns.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/hooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable__ = __webpack_require__("../../../../handsontable/dist/handsontable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_handsontable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_handsontable__ = __webpack_require__("../../../../angular-handsontable/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExHooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExHooksComponent = (function () {
    function ExHooksComponent(_ngZone, _hotRegisterer) {
        this._ngZone = _ngZone;
        this._hotRegisterer = _hotRegisterer;
        this.instance = "hotInstance";
        this.data = __WEBPACK_IMPORTED_MODULE_1_handsontable___default.a.helper.createSpreadsheetData(10, 10);
        this.examples = [
            [
                "import { BrowserModule } from '@angular/platform-browser';",
                "import { NgModule } from '@angular/core';",
                "import { FormsModule } from '@angular/forms';",
                "import { AppComponent } from './app.component';",
                "import { HotTableModule } from 'angular-handsontable';",
                "",
                "@NgModule({",
                "  declarations: [",
                "    AppComponent",
                "  ],",
                "  imports: [",
                "    BrowserModule,",
                "    FormsModule,",
                "    HotTableModule",
                "  ],",
                "  providers: [],",
                "  bootstrap: [AppComponent]",
                "})",
                "export class AppModule { }",
            ].join('\n'),
            [
                "import { Component } from '@angular/core';",
                "import { HotRegisterer } from 'angular-handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  instance: string = \"hotInstance\";",
                "  coordX: string;",
                "  coordY: string;",
                "  newValue: string;",
                "",
                "  constructor(private _hotRegisterer: HotRegisterer) {}",
                "",
                "  selectCell($event) {",
                "    const x = parseInt(this.coordX, 10);",
                "    const y = parseInt(this.coordY, 10);",
                "    const hot = this._hotRegisterer.getInstance(this.instance);",
                "",
                "    if (isNaN(x) || isNaN(y)) {",
                "      hot.deselectCell();",
                "      return false;",
                "    }",
                "",
                "    if (hot.selectCell(y, x)) {",
                "      $event.target.focus();",
                "",
                "    } else {",
                "      hot.deselectCell();",
                "    }",
                "  ",
                "    hot.unlisten();",
                "  }",
                "",
                "  changeValue($event) {",
                "    const x = parseInt(this.coordX, 10);",
                "    const y = parseInt(this.coordY, 10);",
                "",
                "    if (isNaN(x) || isNaN(y)) {",
                "      return false;",
                "    }",
                "",
                "    const hot = this._hotRegisterer.getInstance(this.instance);",
                "",
                "    hot.setDataAtCell(y, x, $event.target.value);",
                "  }",
                "",
                "  syncSelection() {",
                "    const hot = this._hotRegisterer.getInstance(this.instance);",
                "    [this.coordY, this.coordX] = hot.getSelected();",
                "    const x = parseInt(this.coordX, 10);",
                "    const y = parseInt(this.coordY, 10);",
                "",
                "    this.newValue = hot.getDataAtCell(y, x);",
                " }",
                "}",
            ].join('\n'),
            [
                "<input placeholder=\"Column\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordX\">",
                "<input placeholder=\"Row\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordY\">",
                "<input placeholder=\"Set new value\" (input)=\"changeValue($event)\" [(ngModel)]=\"newValue\">",
                "",
                "<hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\"",
                "  (afterSelectionEnd)=\"syncSelection()\"",
                "  [outsideClickDeselects]=\"false\"",
                "  hotId=\"hotInstance\"></hot-table>",
            ].join('\n'),
        ];
    }
    ExHooksComponent.prototype.selectCell = function ($event) {
        var x = parseInt(this.coordX, 10);
        var y = parseInt(this.coordY, 10);
        var hot = this._hotRegisterer.getInstance(this.instance);
        if (isNaN(x) || isNaN(y)) {
            hot.deselectCell();
            return false;
        }
        if (hot.selectCell(y, x)) {
            $event.target.focus();
        }
        else {
            hot.deselectCell();
        }
        hot.unlisten();
    };
    ExHooksComponent.prototype.changeValue = function ($event) {
        var x = parseInt(this.coordX, 10);
        var y = parseInt(this.coordY, 10);
        if (isNaN(x) || isNaN(y)) {
            return false;
        }
        var hot = this._hotRegisterer.getInstance(this.instance);
        hot.setDataAtCell(y, x, $event.target.value);
    };
    ExHooksComponent.prototype.syncSelection = function ($event) {
        var hot = this._hotRegisterer.getInstance(this.instance);
        _a = hot.getSelected(), this.coordY = _a[0], this.coordX = _a[1];
        var x = parseInt(this.coordX, 10);
        var y = parseInt(this.coordY, 10);
        this.newValue = hot.getDataAtCell(y, x);
        var _a;
    };
    return ExHooksComponent;
}());
ExHooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Use hooks to bind Handsontable to an outside component</h1>\n      \n      <h2>Set up a module</h2>\n      <p>If you would like to use <code>ngModel</code> directive, you have to define\n      <code>FormModule</code> first. It's necessary to import <code>FormModule</code> after\n      <code>BrowserModule</code>.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.module.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n      \n      <h2>Set up a component</h2>\n      <p>Except the code responsible for all the logic behind your app, you need to add\n        a <code>HotRegisterer</code> service to be able to register and control the Handsontable\u2019s\n        instance.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>Setup a template</h2>\n      <p>When you use hook callback as binding, the context of method is your component. If you\n        expect to get hook params, them all are in <code>$event</code> variable. EventEmitter could\n        return only one variable and because of this, we decided to return <code>$event</code>\n        as an array of params <code>[p1, p2, p3, p4, p5, p6]</code>.</p>\n      <div class=\"infobox infobox-info\">\n        <p>Please note that only hooks defined inside the settings object can return <code>false</code>.</p>\n      </div>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[2]\"></docs-code>\n      <h2>The result</h2>\n      <p>\n        <md-input-container>\n          <input mdInput placeholder=\"Column\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordX\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput placeholder=\"Row\" type=\"number\" min=\"0\" (input)=\"selectCell($event)\" [(ngModel)]=\"coordY\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput placeholder=\"Set new value\" (input)=\"changeValue($event)\" [(ngModel)]=\"newValue\">\n        </md-input-container>\n      </p>\n      <hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\" hotId=\"hotInstance\"\n        (afterSelectionEnd)=\"syncSelection()\"\n        [outsideClickDeselects]=\"false\" \n        [data]=\"data\"></hot-table>\n\n      <h2>Learn more:</h2>\n      <ul>\n        <li><a href=\"https://docs.handsontable.com/Hooks.html#events\" target=\"_blank\">Handsontable Hooks</a></li>\n      </ul>\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_handsontable__["b" /* HotRegisterer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_handsontable__["b" /* HotRegisterer */]) === "function" && _b || Object])
], ExHooksComponent);

var _a, _b;
//# sourceMappingURL=hooks.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/remote-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExRemoteDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExRemoteDataComponent = (function () {
    function ExRemoteDataComponent(_http) {
        var _this = this;
        this._http = _http;
        this.dataSchema = {
            "ShipName": null,
            "ShipAddress": null,
            "ShipCity": null,
            "ShipRegion": null,
            "ShipPostalCode": null,
            "ShipCountry": null,
            "CustomerID": null,
            "CustomerName": null,
            "Address": null,
            "City": null,
            "Region": null,
            "PostalCode": null,
            "Country": null,
            "Salesperson": null,
            "OrderID": null,
            "OrderDate": null,
            "RequiredDate": null,
            "ShippedDate": null,
            "ShipperName": null,
            "ProductID": null,
            "ProductName": null,
            "UnitPrice": null,
            "Quantity": null,
            "Discount": null,
            "ExtendedPrice": null,
            "Freight": null
        };
        this.colHeaders = Object.keys(this.dataSchema);
        this.settings = {
            afterLoadData: function (firstLoad) {
                if (!firstLoad) {
                    _this.isLoading = false;
                }
            },
        };
        this.isLoading = false;
        this.examples = [
            [
                "import { BrowserModule } from '@angular/platform-browser';",
                "import { NgModule } from '@angular/core';",
                "import { HttpClientModule } from '@angular/common/http';",
                "import { AppComponent } from './app.component';",
                "import { HotTableModule } from 'angular-handsontable';",
                "",
                "@NgModule({",
                "  declarations: [",
                "    AppComponent",
                "  ],",
                "  imports: [",
                "    BrowserModule,",
                "    HttpClientModule,",
                "    HotTableModule",
                "  ],",
                "  providers: [],",
                "  bootstrap: [AppComponent]",
                "})",
                "export class AppModule { }",
            ].join('\n'),
            [
                "import { Component } from '@angular/core';",
                "import { HttpClient } from '@angular/common/http';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  data: any[];",
                "  dataSchema: object = {",
                "    \"ShipName\": null,",
                "    \"ShipAddress\": null,",
                "    \"ShipCity\": null,",
                "    \"ShipRegion\": null,",
                "    \"ShipPostalCode\": null,",
                "    \"ShipCountry\": null,",
                "    \"CustomerID\": null,",
                "    \"CustomerName\": null,",
                "    \"Address\": null,",
                "    \"City\": null,",
                "    \"Region\": null,",
                "    \"PostalCode\": null,",
                "    \"Country\": null,",
                "    \"Salesperson\": null,",
                "    \"OrderID\": null,",
                "    \"OrderDate\": null,",
                "    \"RequiredDate\": null,",
                "    \"ShippedDate\": null,",
                "    \"ShipperName\": null,",
                "    \"ProductID\": null,",
                "    \"ProductName\": null,",
                "    \"UnitPrice\": null,",
                "    \"Quantity\": null,",
                "    \"Discount\": null,",
                "    \"ExtendedPrice\": null,",
                "    \"Freight\": null",
                "  };",
                "  colHeaders: string[] = Object.keys(this.dataSchema);",
                "  settings: object = {",
                "    afterLoadData: (firstLoad) => {",
                "      if(!firstLoad) {",
                "        this.isLoading = false;",
                "      }",
                "    },",
                "  };",
                "  isLoading: boolean = false;",
                "",
                "  constructor(private _http: HttpClient) {}",
                "",
                "  loadData() {",
                "    this.isLoading = true;",
                "",
                '    this._http.get(`http://services.odata.org/V3/Northwind/Northwind.svc/Invoices`)',
                "      .subscribe((res: Response) => {",
                "        this.data = res['value'];",
                "      });",
                "  }",
                "}",
            ].join('\n'),
            [
                "<button (click)=\"loadData()\">Load data</button>",
                "<p [hidden]=\"!isLoading\">Loading...</p>",
                "<hot-table",
                "  height=\"500\"",
                "  fixedColumnsLeft=\"1\"",
                "  [settings]=\"settings\"",
                "  [rowHeaders]=\"true\"",
                "  [colHeaders]=\"colHeaders\"",
                "  [dataSchema]=\"dataSchema\"",
                "  [data]=\"data\"></hot-table>",
            ].join('\n'),
        ];
    }
    ExRemoteDataComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this._http.get("http://services.odata.org/V3/Northwind/Northwind.svc/Invoices")
            .subscribe(function (res) {
            _this.data = res['value'];
        });
    };
    return ExRemoteDataComponent;
}());
ExRemoteDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Bind Handsontable to a remote data source</h1>\n      \n      <h2>Setup a module</h2>\n      <p>Add an <code>HttpClientModule</code> module to the main module to handle the asynchronous requests.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.module.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n\n      <h2>Setup a component</h2>\n      <p>Except the code responsible for all the logic behind your app, you need to import\n        an <code>HttpClient</code> class to be able to handle asynchronous requests from/to the server.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>Template</h2>\n      <p>ZDefine the options and their attributes as you like. Every change of the <code>data</code>\n        attribute will result in loading a new set of data to the Handsontable instance (exactly\n        the same as using <code>loadData()</code> manually).</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[2]\"></docs-code>\n\n      <h2>The result</h2>\n      <p>\n        <button md-raised-button (click)=\"loadData()\">Load data</button>\n      </p>\n      <p [hidden]=\"!isLoading\">\n        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n      </p>\n      <hot-table\n        height=\"300\"\n        fixedColumnsLeft=\"1\"\n        startRows=\"15\"\n        [settings]=\"settings\"\n        [rowHeaders]=\"true\"\n        [colHeaders]=\"colHeaders\"\n        [dataSchema]=\"dataSchema\"\n        [data]=\"data\"></hot-table>\n      \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ExRemoteDataComponent);

var _a;
//# sourceMappingURL=remote-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/settings-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable__ = __webpack_require__("../../../../handsontable/dist/handsontable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_handsontable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octicons__ = __webpack_require__("../../../../octicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_octicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_octicons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExSettingsObjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExSettingsObjectComponent = (function () {
    function ExSettingsObjectComponent() {
        this.settings = {
            data: __WEBPACK_IMPORTED_MODULE_1_handsontable___default.a.helper.createSpreadsheetData(25, 50),
            colHeaders: true,
            rowHeaders: true,
        };
        this.examples = [
            [
                "import { Component } from '@angular/core';",
                "import Handsontable from 'handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  settings = {",
                "    data: Handsontable.helper.createSpreadsheetData(25, 50),",
                "    colHeaders: true,",
                "    rowHeaders: true,",
                "  }",
                "}",
            ].join('\n'),
            [
                "<hot-table [settings]=\"settings\"></hot-table>",
            ].join('\n'),
        ];
    }
    return ExSettingsObjectComponent;
}());
ExSettingsObjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Initialization with a settings object</h1>\n\n      <h2>Setup a component</h2>\n      <p>You can control the spreadsheet by passing various options defining its style, behavior,\n      plugins in use etc. To do that, create an object, in which you can place all the chosen options.</p>\n      <p><a href=\"https://docs.handsontable.com/Options.html\" target=\"_blank\">See the complete list\n      of options " + __WEBPACK_IMPORTED_MODULE_2_octicons__["link-external"].toSVG() + "</a>.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n      <div class=\"infobox infobox-info\">\n        <p>Please note that the changes in the Settings Object are not automatically observed and\n        propagatedto the spreadsheet. If you use a dynamic option then you should implement this\n        component by using bindings.</p>\n      </div>\n\n      <h2>Setup a template</h2>\n      <p>To display Handsontable, you need to add a \u2018hot-table\u2019 tag in your template file. To set\n      the options for Handsontable, pass an <code>[settings]=\"settings\"</code> attribute to the\n      newly created tag.</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>The result</h2>\n      <hot-table height=\"249\" [settings]=\"settings\"></hot-table>\n\n    </div>\n  "
    })
], ExSettingsObjectComponent);

//# sourceMappingURL=settings-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/static-columns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable__ = __webpack_require__("../../../../handsontable/dist/handsontable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_handsontable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_handsontable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExStaticColumnsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExStaticColumnsComponent = (function () {
    function ExStaticColumnsComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_1_handsontable___default.a.helper.createSpreadsheetData(10, 25);
        this.readOnly = true;
        this.examples = [
            [
                "import { Component } from '@angular/core';",
                "import Handsontable from 'handsontable';",
                "",
                "@Component({",
                "  selector: 'app-root',",
                "  templateUrl: './app.component.html',",
                "  styleUrls: ['./app.component.css']",
                "})",
                "export class AppComponent {",
                "  data: any[] = Handsontable.helper.createSpreadsheetData(10, 20);",
                "}",
            ].join('\n'),
            [
                "<hot-table height=\"250\" [colWidths]=\"true\" [colHeaders]=\"true\" [data]=\"data\">",
                "  <hot-column type=\"date\"></hot-column>",
                "  <hot-column [readOnly]=\"true\"></hot-column>",
                "  <hot-column type=\"numeric\"></hot-column>",
                "  <hot-column width=\"200\"></hot-column>",
                "</hot-table>",
            ].join('\n'),
        ];
    }
    return ExStaticColumnsComponent;
}());
ExStaticColumnsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Define static columns using tags</h1>\n\n      <h2>Setup a component</h2>\n      <p>You can define column using custom element. Column initialized in this way can has defined\n      with the same bindings as the <code>hot-table</code> element.</p>\n      <docs-code lang=\"typescript\" title=\"/src/app/app.component.ts\" start='1' [input]=\"examples[0]\"></docs-code>\n\n      <h2>Setup a template</h2>\n      <p>Pass appropriate bindings to the selected tags. For instance, if you want to define a\n      column\u2019s width, you can add it inside the main <code>hot-table</code> tag.</p>\n      <docs-code lang=\"html\" title=\"/src/app/app.component.html\" start='1' [input]=\"examples[1]\"></docs-code>\n\n      <h2>The result</h2>\n      <hot-table height=\"250\" [colHeaders]=\"true\" [rowHeaders]=\"true\" [data]=\"data\">\n        <hot-column type=\"date\"></hot-column>\n        <hot-column [readOnly]=\"true\"></hot-column>\n        <hot-column type=\"numeric\"></hot-column>\n        <hot-column width=\"200\"></hot-column>\n      </hot-table>\n\n    </div>\n  "
    })
], ExStaticColumnsComponent);

//# sourceMappingURL=static-columns.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IntroductionComponent = (function () {
    function IntroductionComponent() {
    }
    return IntroductionComponent;
}());
IntroductionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <div class=\"infobox infobox-info\">\n        <h2>Latest version <strong>1.0.0-beta1</strong>, released on <strong>00.00.0000</strong></h2>\n        <p>Compatible with Handsontable Community Edition v0.34.1 and Pro v1.13.1</p>\n      </div>\n      <h2>Getting started</h2>\n      <p><a href=\"https://handsontable.com/\" title=\"JavaScript Spreadsheet Library\">Handsontable</a>\n      is a spreadsheet component for web apps. This wrapper for Angular offers the same scope of\n      features as pure version of Handsontable, so it\u2019s a perfect match for all of your Angular-based\n      apps in which a spreadsheet component is required.</p>\n      <p>Follow links below to learn more about the installation process:</p>\n      <ul>\n        <li><a routerLink=\"/quickstart\" fragment=\"prepare-project\">Setting up the environment.</a></li>\n        <li><a routerLink=\"/quickstart\" fragment=\"install-wrapper\">Installing and use.</a></li>\n      </ul>\n\n      <h2>Why should I use it?</h2>\n      <p>First and foremost, it will cut the development time of your app. By using this wrapper,\n      you don\u2019t have to worry about the compatibility issues, and if you stumble across one, you\n      can easily make a <a href=\"https://github.com/handsontable/angular-handsontable/compare\">pull\n      request</a> with a solution or <a href=\"https://github.com/handsontable/angular-handsontable/issues/new\">\n      report it on GitHub</a>. For less experienced developers, we prepared a series of examples -\n      from basic implementations, to much more advanced setups.</p>\n\n      <h2>Examples</h2>\n      <ul>\n        <li><a routerLink=\"/examples/settings-object\">Initialization with a settings object</a></li>\n        <li><a routerLink=\"/examples/declarative-way\">Initialize Handsontable by using bindings</a></li>\n        <li><a routerLink=\"/examples/static-columns\">Define static columns using tags</a></li>\n        <li><a routerLink=\"/examples/dynamic-columns\">Define dynamic columns using a *ngFor loop</a></li>\n        <li><a routerLink=\"/examples/access-to-handsontable\">Access the Handsontable instance</a></li>\n        <li><a routerLink=\"/examples/hooks\">Use hooks to bind Handsontable with the an outside component</a></li>\n        <li><a routerLink=\"/examples/remote-data\">Bind Handsontable with a remote data source</a></li>\n      </ul>\n\n      <h2>Contributing</h2>\n      <p>Everyone is welcome to contribute to this open source project. If you feel that something needs to be tweaked or fixed, let us know.</p>\n      <ul>\n        <li><a routerLink=\"/support\">Become a contributor</a></li>\n        <li><a href=\"https://github.com/handsontable/angular-handsontable/issues/new\">Report an issue</a></li>\n      </ul>\n\n      <h2>Copyright and license</h2>\n      <ul>\n        <li>Handsontable Community Edition is released under the <a routerLink=\"/license\">MIT license</a>. Copyrights belong to Handsoncode sp. z o.o.</li>\n        <li>angular-handsontable is released under the <a routerLink=\"/license\">MIT license</a>. Copyrights belong to Handsoncode sp. z o.o.</li>\n        <li>Documentation licensed under <a href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0</a>.</li>\n      </ul>\n\n      <h2>Next step</h2>\n      <p><a md-raised-button routerLink=\"/quick-start\">Install angular-handsontable</a></p>\n    </div>\n  "
    })
], IntroductionComponent);

//# sourceMappingURL=introduction.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/license.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LicenseComponent = (function () {
    function LicenseComponent() {
    }
    return LicenseComponent;
}());
LicenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>License</h1>\n      <p>(The MIT License)</p>\n\n      <p>Copyright (c) 2015 - Handsoncode sp. z o.o. &lt;hello@handsoncode.net&gt;</p>\n\n      <p>Permission is hereby granted, free of charge, to any person obtaining\n      a copy of this software and associated documentation files (the\n      'Software'), to deal in the Software without restriction, including\n      without limitation the rights to use, copy, modify, merge, publish,\n      distribute, sublicense, and/or sell copies of the Software, and to\n      permit persons to whom the Software is furnished to do so, subject to\n      the following conditions:</p>\n\n      <p>The above copyright notice and this permission notice shall be\n      included in all copies or substantial portions of the Software.</p>\n\n      <p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\n      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\n      IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\n      CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\n      TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\n      SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n    </div>\n  "
    })
], LicenseComponent);

//# sourceMappingURL=license.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/more-wrappers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreWrappersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MoreWrappersComponent = (function () {
    function MoreWrappersComponent() {
        this.wrappers = [
            { title: 'React.js', subtitle: 'react-handsontable', img: '/assets/other-wrappers/React.png', url: { download: 'https://github.com/handsontable/react-handsontable/wiki/Installation-guide', github: 'https://github.com/handsontable/react-handsontable' } },
            { title: 'Polymer', subtitle: 'hot-table', img: '/assets/other-wrappers/Polymer.png', url: { download: 'http://handsontable.github.io/hot-table/', github: 'https://github.com/handsontable/hot-table' } },
            { title: 'Angular 1.x', subtitle: 'ngHandsontable', img: '/assets/other-wrappers/Angular.png', url: { download: 'http://handsontable.github.io/ngHandsontable/', github: 'https://github.com/handsontable/ngHandsontable' } },
            { title: 'Vue.js', subtitle: 'vue-handsontable-official', img: '/assets/other-wrappers/Vue.png', url: { download: 'https://github.com/handsontable/vue-handsontable-official/wiki/Installation-guide', github: 'https://github.com/handsontable/vue-handsontable-official' } },
        ];
    }
    return MoreWrappersComponent;
}());
MoreWrappersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>More wrappers</h1>\n      <div class=\"flex-grid\">\n        <md-card class=\"docs-card\" *ngFor=\"let wrapper of wrappers; let i = index;\">\n          <md-card-header>\n            <md-card-title>{{wrapper.title}}</md-card-title>\n            <md-card-subtitle>{{wrapper.subtitle}}</md-card-subtitle>\n          </md-card-header>\n          <img md-card-image [src]=\"wrapper.img\">\n          <md-card-actions>\n            <a [href]=\"wrapper.url.download\" md-button>Download</a>\n            <a [href]=\"wrapper.url.github\" md-button>View on GitHub</a>\n          </md-card-actions>\n        </md-card>\n      </div>\n    </div>\n  "
    })
], MoreWrappersComponent);

//# sourceMappingURL=more-wrappers.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>404</h1>\n      <p>Page not found</p>\n    </div>\n  "
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quick-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_octicons__ = __webpack_require__("../../../../octicons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_octicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_octicons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QuickStartComponent = (function () {
    function QuickStartComponent() {
        this.example3 = [
            "",
            "import 'handsontable/dist/handsontable';",
            "",
            "/*********************************************************",
            "* Zone JS is required by Angular itself.",
            "*/",
            "import 'zone.js/dist/zone';  // Included with Angular CLI.",
            " ",
        ].join('\n');
        this.example4 = [
            "import { BrowserModule } from '@angular/platform-browser';",
            "import { NgModule } from '@angular/core';",
            "import { AppComponent } from './app.component';",
            "import { HotTableModule } from 'angular-handsontable';",
            "",
            "@NgModule({",
            "  declarations: [",
            "    AppComponent",
            "  ],",
            "  imports: [",
            "    BrowserModule,",
            "    HotTableModule",
            "  ],",
            "  providers: [],",
            "  bootstrap: [AppComponent]",
            "})",
            "export class AppModule { }",
        ].join('\n');
        this.example5 = ["@import '~handsontable/dist/handsontable.full.css';"].join('\n');
        this.example6 = ["<hot-table></hot-table>"].join('\n');
    }
    return QuickStartComponent;
}());
QuickStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Quick start</h1>\n      <h2 id=\"prepare-project\">Step 1. Set up the development environment</h2>\n      <p>If you are new to Angular, then the easiest way to set up your project is to read this guide,\n      which is a part of official documentation of Angular. When your app is properly configured,\n      move forward to step 2.</p>\n\n      <h2 id=\"install-wrapper\">Step 2. Add angular-handsontable to the project</h2>\n      <p>Although there are many ways to install this wrapper, we recommend using the most popular,\n      which is npm/yarn:</p>\n      <p><strong>npm</strong></p>\n      <docs-code lang='bash' input='npm install angular-handsontable'></docs-code>\n      <p><strong>yarn</strong></p>\n      <docs-code lang='bash' input='yarn add angular-handsontable'></docs-code>\n\n      <h2 id=\"zonejs-workaround\">Step 3. Import Handsontable before Zone.js</h2>\n      <div class=\"infobox infobox-warning\">\n        <p>This is quite unfortunate, but you need to import Handsontable before Zone.js.</p>\n        <p>There is a conflict between those two when accessing <code>window.Promise</code>.</p>\n      </div>\n      <docs-code start='49' [input]='example3'></docs-code>\n\n      <h2 id=\"add-wrapper-in-module\">Step 4. Import a wrapper</h2>\n      <p>Add an angular-handsontable wrapper to your application by importing it as a dependency.</p>\n      <docs-code input=\"import { HotTableModule } from 'angular-handsontable';\"></docs-code>\n      <p>Place that statement below the BrowserModule class like in the following example of file\n      <code>app.module.ts</code>:</p>\n      <docs-code start='1' [input]='example4'></docs-code>\n\n      <h2 id=\"use-wrapper-in-template\">Step 5. Add CSS styles</h2>\n      <p>You can import predefined Handsontable styles, directly from the npm package.</p>\n      <docs-code start='1' lang=\"css\" [input]=\"example5\"></docs-code>\n\n      <h2 id=\"use-wrapper-in-template\">Step 6. Add an HTML tag</h2>\n      <p>Place an HTML tag in the component file <code>src/app/app.component.html</code> to\n      initialize Handsontable.</p>\n      <docs-code start='1' lang=\"html\" [input]=\"example6\"></docs-code>\n\n      <h2 id=\"it-works\">The result</h2>\n      <hot-table [colHeaders]=\"true\" [rowHeaders]=\"true\"></hot-table>\n\n      <h2>Learn more</h2>\n      <ul>\n        <li><a href=\"https://docs.handsontable.com/Options.html\">Settings in Handsontable\n          " + __WEBPACK_IMPORTED_MODULE_1_octicons__["link-external"].toSVG() + "</a></li>\n      </ul>\n    </div>\n  "
    })
], QuickStartComponent);

//# sourceMappingURL=quick-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SupportComponent = (function () {
    function SupportComponent() {
    }
    return SupportComponent;
}());
SupportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Support</h1>\n      <h2>Help us improve</h2>\n      <h2 id=\"report-bug\">Report an issue</h2>\n      <p>The sooner we know about the potential problem, the sooner we can take care of it. If you\n        found a bug or a drawback, <a href=\"https://github.com/handsontable/angular-handsontable/issues/new\"\n        title=\"Add new issue to the angular-handsontable issue board.\">create a new issue</a>\n        in the official repository on GitHub. Evenbetter if you want to help us by fixing the\n        issue yourself. In such case take a look at the guides for contributors (further below).</p>\n\n      <h2 id=\"feature-request\">Suggest an improvement</h2>\n      <p>Any thoughts on how we can improve this wrapper are greatly appreciated.\n      <a href=\"https://github.com/handsontable/angular-handsontable/issues/new?&title=" + encodeURIComponent('Feature request:') + "&body=" + encodeURIComponent('<!-- description -->') + "\">\n        Share your ideas on GitHub</a> or contact us directly at support@hansontable.com. Thank you!.</p>\n\n      <h2 id=\"contributors\">Contribute</h2>\n      <p>Your contributions to this project are very welcome. If you want to fix a bug or propose\n        a new feature, you can open a new Pull Request, but first make sure it follows these\n        general rules:</p>\n      <ol>\n        <li>Sign this <a href=\"https://goo.gl/forms/yuutGuN0RjsikVpM2\">Contributor License Agreement</a>\n          to allow us to add your changes to the code.</li>\n        <li>Make your changes on a separate branch. This will speed up the merging process.</li>\n        <li>Always make the target of your pull request the <code>develop</code> branch, not\n          <code>master</code>.</li>\n        <li>Do not edit files in <code>dist/</code> directory.</li>\n        <li><strong>Important: For any change you make, please add at least one test case</strong>\n          in <code>tests/</code>. That will help us to better understand the issue and make sure\n          that it stays fixed forever.</li>\n        <li>Please review our <a href=\"https://github.com/airbnb/javascript\">coding style</a> for\n          instructions on how to properly style the code.</li>\n        <li>Add a thorough description of all the changes.</li>\n      </ol>\n      <p>Thank you for your commitment!</p>\n    </div>\n  "
    })
], SupportComponent);

//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/use-with-pro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseWithProComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UseWithProComponent = (function () {
    function UseWithProComponent() {
        this.example = [
            "\"paths\": {",
            "  \"handsontable\": [\"../node_modules/handsontable-pro\"]",
            "}",
        ].join('\n');
    }
    return UseWithProComponent;
}());
UseWithProComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div class=\"docs-content\">\n      <h1>Use with Pro</h1>\n      <h2>Install handsontable-pro</h2>\n      <p>Follow <a href=\"https://my.handsontable.com/install.html\" target=\"_blank\">these instructions</a>\n      to install the handsontable-pro package.</p>\n\n      <h2>Setup the CSS</h2>\n      <p>You can import the styles directly from the <code>handsontable-pro</code> package.</p>\n      <docs-code lang='css' title=\"/src/styles.css\" input=\"@import '~handsontable-pro/dist/handsontable.full.css';\"></docs-code>\n\n      <h2>Modify the <code>tsconfig.json</code> file</h2>\n      <p>Set <code>paths</code> in <code>compilerOptions</code>, as it is presented below.</p>\n      <docs-code start=\"19\" title=\"/tsconfig.json\" [input]=\"example\"></docs-code>\n    </div>\n  "
    })
], UseWithProComponent);

//# sourceMappingURL=use-with-pro.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map