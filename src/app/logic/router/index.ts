import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';
import { createRouter, generateRoutes, convertRouterPathToName, convertRouterPathToPath } from '@packages/router5-react-auto';

import pages from '@app/pages';

const homePageItem = 'home';
const paramsPageItem = '__';
console.log('this pages',pages)
export const routes = generateRoutes({ pages, ignorePages: pages.errors, homePageItem, paramsPageItem, convertRouterPathToName, convertRouterPathToPath });
console.log('this routes',routes)
export const router = createRouter(routes, [loggerPlugin, browserPlugin()]);
