/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="router5/dist/types/router.d.ts" />
import { NavigationOptions } from 'router5';
import { RouterComponent } from './types';

declare module 'router5/dist/types/router' {
  export interface Router {
    // componentsPathMap: RouterPathMap;
    // componentsNameMap: RouterNameMap;
    routes: Route[];
    navigateComponent<Props>(
      component: RouterComponent<Props>,
      props: Props,
      options?: NavigationOptions,
      done?: DoneFn,
    ): CancelFn;
    buildPathComponent<Props>(
      component: RouterComponent<Props>,
      props?: Props,
    ): string;
  }

  export interface Route<
    Dependencies extends DefaultDependencies = DefaultDependencies,
  > {
    name: string;
    path: string[];
    component: RouterComponent<any>;
  }
}
