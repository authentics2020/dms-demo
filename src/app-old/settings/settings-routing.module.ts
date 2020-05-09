import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { SettingsComponent } from './settings.component';
import { AdduserComponent } from './adduser/adduser.component';

import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/settings', pathMatch: 'full' },
    {
      path: 'adduser',
      component: AdduserComponent,
      data: { title: extract('Add User') },
    },

    {
      path: 'settings',
      component: SettingsComponent,
      data: { title: extract('settings') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SettingsRoutingModule {}
