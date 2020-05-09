import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { ShellComponent } from './shell.component';
import { ServiceGuard } from '../services/service.guard';
import { from } from 'rxjs';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [ServiceGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
