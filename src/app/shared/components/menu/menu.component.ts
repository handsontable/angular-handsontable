import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() examples: boolean;
  @Output() examplesChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {
  }

  toggleMenuExample() {
    this.examplesChange.emit(!this.examples);
  }

}
