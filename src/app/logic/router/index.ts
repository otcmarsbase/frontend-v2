import pages from '@app/pages';
import { createRouter, autoGenerateRoutes } from '@packages/router5-react-auto';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';

const homePageItem = 'home';
const paramsPageItem = '__';

export const routes = autoGenerateRoutes({
  pages,
  ignorePages: pages.Errors,
  homePageItem,
  paramsPageItem,
});
export const router = createRouter(routes, [loggerPlugin, browserPlugin()]);
