import { NgModule, ModuleWithProviders } from '@angular/core';

import { HotTableComponent } from './hot-table.component';
import { HotColumnComponent } from './hot-column.component';
import { HotRegisterer } from './hot-registerer.service';

export * from './hot-table.component';
export * from './hot-column.component';
export * from './hot-registerer.service';

@NgModule({
  declarations: [
    HotTableComponent,
    HotColumnComponent,
  ],
  exports: [
    HotTableComponent,
    HotColumnComponent,
  ],
  providers: [ HotRegisterer ],
})

export class HotTableModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: HotTableModule,
        providers: [ HotRegisterer ]
    };
  }
}