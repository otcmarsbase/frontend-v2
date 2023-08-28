import LINQ from '@berish/linq';
import { Route } from 'router5';

import { PageComponent, PagePath } from '../core';

import { ConvertRouterPathToName, defaultConvertRouterPathToName } from './convertRouterPathToName';
import { ConvertRouterPathToPath, defaultConvertRouterPathToPath } from './convertRouterPathToPath';
import {
  serber,
  SYMBOL_SERBER_HOME_PAGE_ITEM,
  SYMBOL_SERBER_PARAM_PAGE_ITEM,
  SYMBOL_SERBER_ROUTER5_AUTO_MAP,
} from './serber';
import { AuthRouteMap } from './types';

export interface AutoGenerateRoutesOptions {
  pages: any;
  ignorePages?: any;
  homePageItem?: string;
  paramsPageItem?: string;

  convertRouterPathToName?: ConvertRouterPathToName;
  convertRouterPathToPath?: ConvertRouterPathToPath;
}

export function autoGenerateRoutes({
  pages,
  ignorePages,
  homePageItem,
  paramsPageItem,
  convertRouterPathToName = defaultConvertRouterPathToName,
  convertRouterPathToPath = defaultConvertRouterPathToPath,
}: AutoGenerateRoutesOptions): Route[] {
  let routePathMap: AuthRouteMap<PagePath, PageComponent> = [];
  serber.serialize(pages, {
    [SYMBOL_SERBER_ROUTER5_AUTO_MAP]: routePathMap,
    [SYMBOL_SERBER_HOME_PAGE_ITEM]: homePageItem,
    [SYMBOL_SERBER_PARAM_PAGE_ITEM]: paramsPageItem,
  });

  if (ignorePages) {
    let mapIgnore: AuthRouteMap<PagePath, PageComponent> = [];
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
