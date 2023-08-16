import { Route, Router } from 'router5';
import { PageComponent } from '../types';

export type FindRouteByComponentFunction = (
  component: PageComponent<any>,
) => Route;

/**
 * Find route by component
 * @param router
 * @param component
 * @returns
 */
export function findRouteByComponentWrapper(
  router: Router,
): FindRouteByComponentFunction {
  return (component) => {
    return router.routes.find((m) => m.component === component);
  };
}
