import { PageComponent, PagePath } from '../core';

import { AuthRouteMap } from './types';

export function setHomePage(
  homeComponent: PageComponent,
  pathMap: AuthRouteMap<PagePath, PageComponent>,
) {
  const tuple = pathMap.filter((m) => m[1] === homeComponent)[0];
  if (!tuple)
    throw new Error(
      'You need to add HomeController for initialize when create routeMap',
    );

  tuple[0] = [];
}
