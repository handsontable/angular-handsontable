import { Component,
          Input,
          ViewChild,
          ViewEncapsulation,
          ElementRef,
          AfterViewInit,
          OnInit } from '@angular/core';
import Prism from 'prismjs';
import {MdSnackBar, MdButton} from '@angular/material';

import * as octicons from 'octicons';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/components/prism-typescript.js';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-code',
  template: `
    <div *ngIf="title" class="title">{{title}}</div>
    <button md-button #button (click)='copyInput()' class="btn-copy">${octicons['clippy'].toSVG()}${octicons['check'].toSVG()}</button>
    <pre #pre><code #code></code></pre>
  `,
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements AfterViewInit, OnInit {
  @ViewChild('code') code: ElementRef;
  @ViewChild('pre') pre: ElementRef;
  @ViewChild('button') button: MdButton;
  @Input() input: string;
  @Input() title: string;
  @Input() start: number;
  @Input() lang: string = 'javascript';

  constructor(private _el: ElementRef, public snackBar: MdSnackBar) { }

  copyInput() {
    let textarea = document.createElement('textarea');
    textarea.value = this.input;

    this._el.nativeElement.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {
      return document.execCommand('copy');

    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;

    } finally {
      this._el.nativeElement.removeChild(textarea);
      this.button._elementRef.nativeElement.className += ' success';
      this.snackBar.open('Code copied', '', {
        duration: 3000
      });

      setTimeout(() => {
        let className = this.button._elementRef.nativeElement.className;

        if ((/success/).test(className)) {
          this.button._elementRef.nativeElement.className = className.replace(/\ssuccess/, '');
        }
      }, 1000);
    }
  }

  ngOnInit() {
    this.pre.nativeElement.className = `language-${this.lang}`;

    if (this.start !== void 0) {
      this.pre.nativeElement.className += ' line-numbers';
      this.pre.nativeElement.setAttribute('data-start', this.start);
    }
  }

  ngAfterViewInit() {
    let value = this.input;

    if (this.lang === 'html') {
      value = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    this.code.nativeElement.innerHTML = value;
    Prism.highlightElement(this.code.nativeElement);
  }
}
