import createRouter5, { PluginFactory, Route } from 'router5';
import { buildPathComponent, navigateComponent } from '../methods';

export function createRouter(routes: Route[], plugins: PluginFactory[]) {
  const router = createRouter5(routes, {
    allowNotFound: true,
    queryParamsMode: 'loose',
  });
  router.routes = routes;
  router.navigateComponent = (...args) => navigateComponent(router, ...args);
  router.buildPathComponent = (...args) => buildPathComponent(router, ...args);

  for (const plugin of plugins) {
    router.usePlugin(plugin);
  }

  router.start();
  return router;
}
