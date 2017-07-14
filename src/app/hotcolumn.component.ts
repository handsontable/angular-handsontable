import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'HotColumn',
  template: `<div class="column">Column</div>`,
})

export class HotColumnComponent implements OnChanges {
    private firstRun = true;
    onAfterChange: any;

    @Input() data: number | string;
    @Input() width: number | string;
    @Input() title: string;
    @Input() type: string;
    @Input() format: string;
    @Input() language: string;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
      if (this.firstRun) {
        this.firstRun = false;
        return;
      }

      this.onAfterChange();
    }

    ngOnDestroy() {
    }
}