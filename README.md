# angular-handsontable  [![Build Status](https://travis-ci.org/handsontable/angular-handsontable.png?branch=master)](https://travis-ci.org/handsontable/angular-handsontable)
Official Angular module for Handsontable [Handsontable](https://github.com/handsontable/handsontable).

## Table of contents
1. [Installation](#installation)
2. [Basic usage](#basic-usage)
3. [Documentation](https://handsontable.github.io/angular-handsontable/)
4. [License](#license)
5. [Contact](#contact)
6. [Other wrappers](#other-wrappers)

## Installation
To install a wrapper for Handsontable CE:

```
npm install @handsontable/angular handsontable
```

To install a wrapper for Handsontable PRO:
```
npm install @handsontable-pro/angular handsontable-pro
```

## Basic usage

styles.css
```scss
@import '~handsontable/dist/handsontable.full.css';
```

app/app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app/app.component.html
```html
<hot-table></hot-table>
```
## Examples
- [Simple implementation for Handsontable CE](https://stackblitz.com/edit/angular-handsontable-ce)

## License
@handsontable/angular is released under the [MIT license](https://github.com/handsontable/angular-handsontable/blob/master/LICENSE).
@handsontable-pro/angular is released under the [MIT license](https://github.com/handsontable/angular-handsontable/blob/master/LICENSE).
Copyrights belong to Handsoncode sp. z o.o.

## Contact
Feel free to give us feedback on this wrapper using this [contact form](https://handsontable.com/contact.html) or write directly at hello@handsontable.com.

## Other Wrappers
Handsontable comes with more wrappers and directives for popular frameworks:

- [hot-table](https://github.com/handsontable/hot-table) (Polymer - WebComponents)
- [ngHandsontable](https://github.com/handsontable/ngHandsontable) (Angular 1)
- [vue-handsontable-official](https://github.com/handsontable/vue-handsontable-official) (Vue.js)
- [react-handsotable](https://github.com/handsontable/react-handsontable) (React)
