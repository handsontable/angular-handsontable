import { NgModule, ModuleWithProviders } from '@angular/core';
import { HotTableComponent } from './hot-table.component';
import { HotColumnComponent } from './hot-column.component';
import { HotTableRegisterer } from './hot-table-registerer.service';
import { version } from 'moment';

@NgModule({
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
  public static version: string = '0.0.0-VERSION';

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HotTableModule,
      providers: [ HotTableRegisterer ],
    };
  }
}
