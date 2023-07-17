import { Route, Router } from 'router5';
import { RouterComponent } from '../types';

export function getRouteByComponent(router: Router, component: RouterComponent<any>): Route {
  return router.routes.find((m) => m.component === component);
}
