import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuickStartComponent }  from './pages/quick-start.component';
import { InstallationComponent }  from './pages/installation.component';
import { BasicUsageComponent }  from './pages/basic-usage.component';
import { ExamplesComponent }  from './pages/examples.component';
import { LicenseComponent }  from './pages/license.component';
import { ContactComponent }  from './pages/contact.component';

import { PageNotFoundComponent }    from './pages/not-found.component';

const appRoutes: Routes = [
  { path: 'quickstart', component: QuickStartComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'basic-usage', component: BasicUsageComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'contact', component: ContactComponent },

  { path: '',   redirectTo: '/quickstart', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        QuickStartComponent,
        InstallationComponent,
        BasicUsageComponent,
        ExamplesComponent,
        LicenseComponent,
        ContactComponent,
        PageNotFoundComponent
    ],
    imports: [
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