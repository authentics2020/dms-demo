import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';

const routes: Routes = [
  { path: 'forgotpassword', component: ChangepasswordComponent },
  { path: 'resetpassword/:token', component: ConfirmpasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
