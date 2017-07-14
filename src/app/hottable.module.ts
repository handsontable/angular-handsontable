import { NgModule } from '@angular/core';

import { HotTableComponent } from './hottable.component';
import { HotColumnComponent } from './hotcolumn.component';

@NgModule({
  declarations: [ HotTableComponent, HotColumnComponent ],
  exports: [ HotTableComponent, HotColumnComponent ],
})

export class HotTableModule { }
