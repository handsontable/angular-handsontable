import { NgModule, ModuleWithProviders } from '@angular/core';

import { HotTableComponent } from './src/hot-table.component';
import { HotColumnComponent } from './src/hot-column.component';

import { HotRegisterer } from './src/hot-registerer.service';

@NgModule({
  declarations: [
    HotTableComponent,
    HotColumnComponent,
  ],
  exports: [ HotTableComponent, HotColumnComponent ],
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
