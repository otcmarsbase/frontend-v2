import { Router } from 'router5';
import { CancelFn, DoneFn, NavigationOptions } from 'router5/dist/types/base';
import { RouterComponent } from '../types';
import { buildQueryParameters } from '../utils';

export function navigateComponent<Props>(
  router: Router,
  component: RouterComponent<Props>,
  props: Props,
  options: NavigationOptions,
  done?: DoneFn,
): CancelFn {
  const route = router.routes.find((m) => m.component === component);
  if (route) {
    const queryParams = props && buildQueryParameters(props);
    return router.navigate(route.name, queryParams, options, done);
  }
  console.warn('Route for this controller not found');
  return () => {};
}
