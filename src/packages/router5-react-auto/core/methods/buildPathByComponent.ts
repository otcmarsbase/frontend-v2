import { Router } from 'router5';

import { serializeQueryParameters } from '../query';
import { PageComponent } from '../types';

import { findRouteByComponentWrapper } from './findRouteByComponent';

export type BuildPathByComponentFunction<Props> = (component: PageComponent<Props>, props: Props) => string;

export function buildPathByComponentWrapper<P>(router: Router): BuildPathByComponentFunction<P> {
  const findRouteByComponent = findRouteByComponentWrapper(router);

  return (component, props) => {
    try {
      const route = findRouteByComponent(component);
      if (route) {
        const queryParams = props && serializeQueryParameters(props);
        return router.buildPath(route.name, queryParams);
      }
    } catch (err) {
      return null;
    }
    return null;
  };
}
