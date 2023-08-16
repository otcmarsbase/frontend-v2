import { Router } from 'router5';
import { CancelFn, DoneFn, NavigationOptions } from 'router5/dist/types/base';
import { serializeQueryParameters } from '../query';
import { PageComponent } from '../types';
import { findRouteByComponentWrapper } from './findRouteByComponent';

export type NavigateComponentFunction<Props> = (
  component: PageComponent<Props>,
  props: Props,
  options: NavigationOptions,
  done?: DoneFn,
) => CancelFn;

export function navigateComponentWrapper<Props>(
  router: Router,
): NavigateComponentFunction<Props> {
  const findRouteByComponent = findRouteByComponentWrapper(router);

  return (component, props, options, done) => {
    const route = findRouteByComponent(component);
    if (route) {
      const queryParams = props && serializeQueryParameters(props);
      return router.navigate(route.name, queryParams, options, done);
    }
    console.warn('Route for this controller not found');
    return () => {};
  };
}
