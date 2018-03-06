import { Component,
  Input,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  OnInit } from '@angular/core';

import * as octicons from 'octicons';

@Component({
encapsulation: ViewEncapsulation.None,
selector: 'app-octicon',
template: ``,
styleUrls: ['./octicons.component.scss'],
})
export class OcticonsComponent implements OnInit {

  @Input() icon: string;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
    this._el.nativeElement.innerHTML = octicons[this.icon].toSVG();
  }
}
