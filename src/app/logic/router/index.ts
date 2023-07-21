import pages from '@app/pages';
import {
  createRouter,
  generateRoutes,
  convertRouterPathToName,
  convertRouterPathToPath,
} from '@packages/router5-react-auto';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';

const homePageItem = 'home';
const paramsPageItem = '__';

export const routes = generateRoutes({
  pages,
  ignorePages: pages.errors,
  homePageItem,
  paramsPageItem,
  convertRouterPathToName,
  convertRouterPathToPath,
});
export const router = createRouter(routes, [loggerPlugin, browserPlugin()]);
