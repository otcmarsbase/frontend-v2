import { Router } from 'router5';
import { PageComponent } from '../types';
import { findRouteByComponentWrapper } from './findRouteByComponent';

export type IsActiveRouteByComponentFunction = (
  component: PageComponent<any>,
) => boolean;

/**
 * Check by component route is active or not
 * @param router
 * @param component
 * @returns
 */
export function isActiveRouteByComponentWrapper(
  router: Router,
): IsActiveRouteByComponentFunction {
  const findRouteByComponent = findRouteByComponentWrapper(router);

  return (component) => {
    const route = findRouteByComponent(component);
    return route ? router.isActive(route.name) : false;
  };
}
