import React from 'react';
import LINQ from '@berish/linq';
import {
  Serber,
  plugins,
  ISerberPlugin,
  SERBER_PATH_SYMBOL,
} from '@berish/serber';
import { isReactComponentTypeComposite } from '@packages/react-utils';

import { RouteMap, RouterPath, RouterComponent } from '../../types';

export const SYMBOL_SERBER_ROUTER5_AUTO_MAP = Symbol('serberRouter5AutoMap');
export const SYMBOL_SERBER_HOME_PAGE_ITEM = Symbol('serberHomePageItem');
export const SYMBOL_SERBER_PARAM_PAGE_ITEM = Symbol('serberParamPageItem');

interface ISerberParams {
  [SYMBOL_SERBER_ROUTER5_AUTO_MAP]: RouteMap<RouterPath, RouterComponent>;
  [SYMBOL_SERBER_HOME_PAGE_ITEM]: string | number;
  [SYMBOL_SERBER_PARAM_PAGE_ITEM]: string;
}

const routePlugin: ISerberPlugin<
  React.ComponentType,
  React.ComponentType,
  ISerberParams
> = {
  isForSerialize(obj) {
    return isReactComponentTypeComposite(obj);
    // return typeof obj === 'function' || isExtends(obj, React.Component);
  },
  beforeSerialize(obj, params) {
    params[SYMBOL_SERBER_ROUTER5_AUTO_MAP] =
      params[SYMBOL_SERBER_ROUTER5_AUTO_MAP] || [];
  },
  serialize(obj, params) {
    let paths = LINQ.from(params[SERBER_PATH_SYMBOL]).ofType([
      'string',
      'number',
    ]) as LINQ<string | number>;

    if (params[SYMBOL_SERBER_HOME_PAGE_ITEM]) {
      const homePageItem =
        params[SYMBOL_SERBER_HOME_PAGE_ITEM].toString().toLocaleLowerCase();

      paths = paths.filter(
        (m) => m.toString().toLocaleLowerCase() !== homePageItem,
      );
    }

    if (params[SYMBOL_SERBER_PARAM_PAGE_ITEM]) {
      paths = paths.map((key) =>
        paramPageItemConvert(key, params[SYMBOL_SERBER_PARAM_PAGE_ITEM]),
      );
    }

    params[SYMBOL_SERBER_ROUTER5_AUTO_MAP].push([
      paths.map((m) => m.toString()).toArray(),
      obj,
    ]);

    return obj;
  },
};

export const serber = new Serber()
  .addPlugin(plugins.undefinedPlugin)
  .addPlugin(plugins.nullPlugin)
  .addPlugin(plugins.numberPlugin)
  .addPlugin(plugins.boolPlugin)
  .addPlugin(plugins.stringPlugin)
  .addPlugin(plugins.datePlugin)
  .addPlugin(plugins.regExpPlugin)
  .addPlugin(routePlugin)
  .addPlugin(plugins.arrayPlugin)
  .addPlugin(plugins.loopObjectPlugin);

export function paramPageItemConvert(
  key: string | number,
  paramPageItem: string,
) {
  if (paramPageItem && key && typeof key === 'string') {
    if (key.startsWith(paramPageItem) && key.endsWith(paramPageItem)) {
      const pageSplittedItems = key.split(paramPageItem);
      const paramName = pageSplittedItems
        .slice(1, pageSplittedItems.length - 1)
        .join(paramPageItem);
      if (paramName) return `:${paramName}`;
    }
  }

  return key;
}
