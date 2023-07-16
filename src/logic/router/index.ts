import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';
import { createRouter, generateRoutes, convertRouterPathToName, convertRouterPathToPath } from '@packages/router5-react-auto';

import pages from 'src/pages';

const homePageItem = 'home';
const paramsPageItem = '__';

export const routes = generateRoutes({ pages, ignorePages: pages.errors, homePageItem, paramsPageItem, convertRouterPathToName, convertRouterPathToPath });
export const router = createRouter(routes, [loggerPlugin, browserPlugin()]);
