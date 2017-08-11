import { Component, Input, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-code',
  template: '<pre class="line-numbers language-javascript"><code #code class="language-javascript"><ng-content></ng-content></code></pre>',
  styleUrls: ['../../node_modules/prismjs/themes/prism-okaidia.css', '../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css']
})
export class CodeComponent implements AfterViewInit {
  @ViewChild('code') code:ElementRef;
  @Input() input: string;

  constructor() { }

  ngAfterViewInit() {
    this.code.nativeElement.innerHTML = this.input;
    Prism.highlightElement(this.code.nativeElement);
  }
}
