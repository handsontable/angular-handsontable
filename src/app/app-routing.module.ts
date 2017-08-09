import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsMaterialModule } from './docs-material.module'

import { QuickStartComponent }  from './pages/quick-start.component';
import { InstallationComponent }  from './pages/installation.component';
import { BasicUsageComponent }  from './pages/basic-usage.component';
import { KnownLimitationsComponent }  from './pages/known-limitations.component';
import { ExamplesComponent }  from './pages/examples.component';
import { LicenseComponent }  from './pages/license.component';
import { ContactComponent }  from './pages/contact.component';
import { OtherWrappersComponent }  from './pages/other-wrappers.component';

import { PageNotFoundComponent }    from './pages/not-found.component';

const appRoutes: Routes = [
  { path: 'quickstart', component: QuickStartComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'basic-usage', component: BasicUsageComponent },
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
        BasicUsageComponent,
        KnownLimitationsComponent,
        ExamplesComponent,
        LicenseComponent,
        ContactComponent,
        OtherWrappersComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        DocsMaterialModule,
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