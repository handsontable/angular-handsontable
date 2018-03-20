import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CodeModule } from './docs-code/code.module';
import { OcticonsModule } from './octicons/octicons.module';
import { DocsMaterialModule } from './docs-material.module';
import { HotTableModule } from '@handsontable-pro/angular';

import { AppComponent } from './app.component';

import { QuickStartComponent } from './pages/quick-start.component';
import { IntroductionComponent } from './pages/introduction.component';
import { UseWithProComponent } from './pages/use-with-pro.component';
import { LicenseComponent } from './pages/license.component';
import { SupportComponent } from './pages/support.component';
import { MoreWrappersComponent } from './pages/more-wrappers.component';

import { ExSettingsObjectComponent } from './pages/examples/settings-object.component';
import { ExDeclarativeWayComponent } from './pages/examples/declarative-way.component';
import { ExColumnsComponent } from './pages/examples/columns.component';
import { ExAccessToHandsontableComponent } from './pages/examples/access-to-handsontable.component';
import { ExHooksComponent } from './pages/examples/hooks.component';
import { ExRemoteDataComponent } from './pages/examples/remote-data.component';
import { ExObserveChangesComponent } from './pages/examples/observe-changes.component';
import { ExCustomEditorComponent } from './pages/examples/custom-editor.component';
import { ExCustomRendererComponent } from './pages/examples/custom-renderer.component';
import { ExContextMenuComponent } from './pages/examples/context-menu.component';

import { PageNotFoundComponent } from './pages/not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: IntroductionComponent, data: {title: ' - Introduction'} },
  { path: 'quick-start', component: QuickStartComponent, data: {title: ' - Quick start'} },
  { path: 'use-with-pro', component: UseWithProComponent, data: {title: ' - Use the wrapper with Handsontable Pro'} },

  { path: 'examples',   redirectTo: '/examples/settings-object', pathMatch: 'full' },
  { path: 'examples/settings-object', component: ExSettingsObjectComponent, data: {title: ' - Examples - Settings object'} },
  { path: 'examples/declarative-way', component: ExDeclarativeWayComponent, data: {title: ' - Examples - Declarative way'} },
  { path: 'examples/column-component', component: ExColumnsComponent, data: {title: ' - Examples - Column component'} },
  {
    path: 'examples/access-to-handsontable',
    component: ExAccessToHandsontableComponent,
    data: {title: ' - Examples - Access to Handsontable'},
  },
  { path: 'examples/hooks', component: ExHooksComponent, data: {title: ' - Examples - Hooks'} },
  { path: 'examples/remote-data', component: ExRemoteDataComponent, data: {title: ' - Examples - Remote data'} },
  { path: 'examples/observe-data-changes', component: ExObserveChangesComponent, data: {title: ' Observe Data Changes'} },
  { path: 'examples/custom-editor', component: ExCustomEditorComponent, data: {title: ' Custom Editor'} },
  { path: 'examples/custom-renderer', component: ExCustomRendererComponent, data: {title: 'Custom Renderer'} },
  { path: 'examples/context-menu', component: ExContextMenuComponent, data: {title: ' Context menu'} },

  { path: 'license', component: LicenseComponent, data: {title: ' - License'} },
  { path: 'support', component: SupportComponent, data: {title: ' - Support'} },
  { path: 'more-wrappers', component: MoreWrappersComponent, data: {title: ' - More wrappers'} },

  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuickStartComponent,
    IntroductionComponent,
    UseWithProComponent,
    LicenseComponent,
    SupportComponent,
    MoreWrappersComponent,

    ExSettingsObjectComponent,
    ExDeclarativeWayComponent,
    ExColumnsComponent,
    ExAccessToHandsontableComponent,
    ExHooksComponent,
    ExRemoteDataComponent,
    ExObserveChangesComponent,
    ExCustomEditorComponent,
    ExCustomRendererComponent,
    ExContextMenuComponent,

    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DocsMaterialModule,
    HotTableModule.forRoot(),
    CodeModule,
    OcticonsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
