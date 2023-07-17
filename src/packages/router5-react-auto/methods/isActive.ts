import { Router } from 'router5';
import { RouterComponent } from '../types';
import { getRouteByComponent } from './getRouteByComponent';

export function isActiveRoute(router: Router, component: RouterComponent) {
  const route = getRouteByComponent(router, component);
  return route ? router.isActive(route.name) : false;
}
