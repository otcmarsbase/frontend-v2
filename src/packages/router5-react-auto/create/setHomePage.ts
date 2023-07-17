import { RouteMap, RouterComponent, RouterPath } from '../types';

export function setHomePage(
  homeComponent: RouterComponent,
  pathMap: RouteMap<RouterPath, RouterComponent>,
) {
  const tuple = pathMap.filter((m) => m[1] === homeComponent)[0];
  if (!tuple)
    throw new Error(
      'You need to add HomeController for initialize when create routeMap',
    );

  tuple[0] = [];
}
