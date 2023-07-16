import LINQ from '@berish/linq';
import { Route } from 'router5';
import { RouteMap, RouterComponent, RouterPath } from '../../types';
import { serber, SYMBOL_SERBER_HOME_PAGE_ITEM, SYMBOL_SERBER_PARAM_PAGE_ITEM, SYMBOL_SERBER_ROUTER5_AUTO_MAP } from './serber';

export interface GenerateRoutesOptions {
  pages: any;
  ignorePages?: any;
  homePageItem?: string;
  paramsPageItem?: string;

  convertRouterPathToName: (items: RouterPath, homePageItem?: string | number) => string;
  convertRouterPathToPath: (items: RouterPath) => string;
}

export function generateRoutes({
  pages,
  ignorePages,
  homePageItem,
  paramsPageItem,
  convertRouterPathToName,
  convertRouterPathToPath,
}: GenerateRoutesOptions): Route[] {
  let routePathMap: RouteMap<RouterPath, RouterComponent> = [];
  serber.serialize(pages, {
    [SYMBOL_SERBER_ROUTER5_AUTO_MAP]: routePathMap,
    [SYMBOL_SERBER_HOME_PAGE_ITEM]: homePageItem,
    [SYMBOL_SERBER_PARAM_PAGE_ITEM]: paramsPageItem,
  });

  if (ignorePages) {
    let mapIgnore: RouteMap<RouterPath, RouterComponent> = [];
    serber.serialize(ignorePages, {
      [SYMBOL_SERBER_ROUTER5_AUTO_MAP]: mapIgnore,
      [SYMBOL_SERBER_HOME_PAGE_ITEM]: homePageItem,
      [SYMBOL_SERBER_PARAM_PAGE_ITEM]: paramsPageItem,
    });
    routePathMap = LINQ.from(routePathMap).except(mapIgnore, (m) => m[1]);
  }

  return routePathMap.map(([pathItems, component]) => ({
    name: convertRouterPathToName(pathItems, homePageItem),
    path: convertRouterPathToPath(pathItems),
    component,
  }));
}
