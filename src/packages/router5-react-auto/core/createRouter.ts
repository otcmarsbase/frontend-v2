import createRouter5, { PluginFactory, Route } from 'router5';

import {
  buildPathByComponentWrapper,
  findRouteByComponentWrapper,
  isActiveRouteByComponentWrapper,
  navigateComponentWrapper,
} from './methods';

export function createRouter(routes: Route[], plugins: PluginFactory[]) {
  const router = createRouter5(routes, {
    allowNotFound: true,
    queryParamsMode: 'loose',
    queryParams: {
      nullFormat: 'hidden',
      booleanFormat: 'string',
    },
  });
  router.routes = routes;

  router.navigateComponent = navigateComponentWrapper(router);
  router.buildPathByComponent = buildPathByComponentWrapper(router);
  router.isActiveRouteByComponent = isActiveRouteByComponentWrapper(router);
  router.findRouteByComponent = findRouteByComponentWrapper(router);

  for (const plugin of plugins) {
    router.usePlugin(plugin);
  }

  router.start();
  return router;
}
