import { Component, Input, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-code',
  template: '<pre #pre><code #code><ng-content></ng-content></code></pre>',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements AfterViewInit, OnInit {
  @ViewChild('code') code:ElementRef;
  @ViewChild('pre') pre:ElementRef;
  @Input() input: string;
  @Input() start: number;
  @Input() lang: string = 'javascript';

  constructor() { }
  
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
