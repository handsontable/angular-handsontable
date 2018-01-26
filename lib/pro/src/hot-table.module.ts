import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotTableComponent } from './hot-table.component';
import { HotColumnComponent } from './hot-column.component';
import { HotTableRegisterer } from './hot-table-registerer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HotTableComponent,
    HotColumnComponent,
  ],
  exports: [
    HotTableComponent,
    HotColumnComponent,
  ]
})
export class HotTableModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HotTableModule,
      providers: [
        HotTableRegisterer
      ]
    };
  }
}
