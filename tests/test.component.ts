import { Component, DebugElement, NgModule } from '@angular/core';

import { HotRegisterer } from '../src/hot-registerer.service';
import { HotTableComponent } from '../src/hot-table.component';
import { HotColumnComponent } from '../src/hot-column.component';

@NgModule({
  declarations: [ HotTableComponent, HotColumnComponent ],
  exports: [ HotTableComponent, HotColumnComponent ],
})
export class TestModule { }

@Component({
  selector: 'test-component',
  template: `<hot-table></hot-table>`,
})
export class TestComponent { }
