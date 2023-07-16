import { Router } from 'router5';

import { buildQueryParameters } from '../utils';
import { RouterComponent } from '../types';
import { getRouteByComponent } from './getRouteByComponent';

export function buildPathComponent<Props>(router: Router, component: RouterComponent<Props>, props?: Props) {
  try {
    const route = getRouteByComponent(router, component);
    if (route) {
      const queryParams = props && buildQueryParameters(props);
      return router.buildPath(route.name, queryParams);
    }
  } catch (err) {
    return null;
  }
  return null;
}
