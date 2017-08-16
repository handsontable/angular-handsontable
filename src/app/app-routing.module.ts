import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CodeModule } from './docs-code/code.module';
import { DocsMaterialModule } from './docs-material.module';

import { QuickStartComponent }  from './pages/quick-start.component';
import { InstallationComponent }  from './pages/installation.component';
import { KnownLimitationsComponent }  from './pages/known-limitations.component';
import { ExamplesComponent }  from './pages/examples.component';
import { LicenseComponent }  from './pages/license.component';
import { ContactComponent }  from './pages/contact.component';
import { OtherWrappersComponent }  from './pages/other-wrappers.component';

import { PageNotFoundComponent }    from './pages/not-found.component';

const appRoutes: Routes = [
  { path: 'quickstart', component: QuickStartComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'limitations', component: KnownLimitationsComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'other-wrappers', component: OtherWrappersComponent },

  { path: '',   redirectTo: '/quickstart', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    QuickStartComponent,
    InstallationComponent,
    KnownLimitationsComponent,
    ExamplesComponent,
    LicenseComponent,
    ContactComponent,
    OtherWrappersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocsMaterialModule,
    CodeModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule { }