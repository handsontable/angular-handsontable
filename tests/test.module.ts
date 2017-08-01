import { NgModule } from '@angular/core';

import { HotTableComponent } from '../src/hot-table.component';
import { HotColumnComponent } from '../src/hot-column.component';

@NgModule({
  declarations: [ HotTableComponent, HotColumnComponent ],
  exports: [ HotTableComponent, HotColumnComponent ],
})

export class TestModule { }