<img src="https://raw.githubusercontent.com/handsontable/static-files/master/Images/Logo/Handsontable/handsontable-angular.png" alt="Handsontable for Angular" />

<br/>

**Handsontable for Angular** is the official wrapper for [**Handsontable**](//github.com/handsontable/handsontable), a JavaScript data grid component with a spreadsheet look & feel. It easily integrates with any data source and comes with lots of useful features like data binding, validation, sorting or powerful context menu.

[![Build status](https://travis-ci.org/handsontable/angular-handsontable.png?branch=master)](//travis-ci.org/handsontable/angular-handsontable)

<br/>

## Table of contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Documentation](#documentation)
4. [What to use it for?](#what-to-use-it-for)
5. [Features](#features)
6. [Screenshot](#screenshot)
7. [Resources](#resources)
8. [Support](#support)
9. [Contributing](#contributing)
10. [Licensing](#licensing)

<br/>

## Installation
Use npm to download the project.
```bash
npm install handsontable @handsontable/angular
```
A package scope for Handsontable Pro users:
```bash
npm install handsontable-pro @handsontable-pro/angular
```

<br/>

## Getting Started
Assuming that you have installed the wrapper with npm, now you just need to include Handsontable styles into your build system and use `<hot-table>` just like any other Angular component.

### Handsontable Community Edition:

**Styles**
```js
@import '~handsontable/dist/handsontable.full.css';
```

**Component**
```js
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
    HotTableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Template**
```html
<hot-table></hot-table>
```

### Handsontable Pro:

**Styles**
```js
@import '~handsontable-pro/dist/handsontable.full.css';
```

**Angular Component**
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable-pro/angular';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Template**
```html
<hot-table></hot-table>
```

<br/>

## Documentation
Visit [handsontable.com/docs](https://handsontable.com/docs/angular) to get more Handsontable for Angular examples and guides.

<br/>

## What to use it for?
The list below gives a rough idea on what you can do with Handsontable, but it shouldn't limit you in any way:

- Database editing
- Configuration controlling
- Data merging
- Team scheduling
- Sales reporting
- Financial analysis

<br/>

## Features

Some of the most popular features include:

- Sorting data
- Data validation
- Conditional formatting
- Freezing rows/columns
- Merging cells
- Defining custom cell types
- Moving rows/columns
- Resizing rows/columns
- Context menu
- Adding comments to cells
- Dragging fill handle to populate data
- Internationalization
- Non-contiguous selection

<br/>

## Screenshot
<div align="center">
<a href="//handsontable.com/examples">
<img src="https://raw.githubusercontent.com/handsontable/static-files/master/Images/Screenshots/handsontable-ce-showcase.png" align="center" alt="Handsontable for Angular" />
</a>
</div>

<br/>

## Resources
- [Guides](//handsontable.com/docs/angular)
- [API Reference](//handsontable.com/docs/Core.html)
- [Release notes](//github.com/handsontable/angular-handsontable/releases)
- [Roadmap](//trello.com/b/PztR4hpj)
- [Twitter](//twitter.com/handsontable)

<br/>

## Support
You can report your issues here on [GitHub](//github.com/handsontable/angular-handsontable/issues).

An open source version of Handsontable doesn't include technical support. You need to purchase the [Handsontable Pro](//handsontable.com/pricing) license or [contact us](//handsontable.com/contact) directly in order to obtain a technical support from the Handsontable team.

<br/>

## Contributing
If you would like to help us to develop this wrapper for Angular, please read the [guide for contributors](//github.com/handsontable/angular-handsontable/blob/master/CONTRIBUTING.md) first.

<br/>

## Licensing
This wrapper is released under [the MIT license](//github.com/handsontable/angular-handsontable/blob/master/LICENSE).

<br/>

Copyrights belong to Handsoncode sp. z o.o.
