/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="@types/react/index.d.ts" />
/// <reference path="router5/dist/types/router.d.ts" />
import { NavigationOptions } from 'router5';
import { RouterComponent } from './types';

declare namespace React {
  export interface FunctionComponent<P = {}> {
    routeName?: string;
    routeTemplatePath?: string;
    routeTemplateFullPath?: string;
  }

  export interface ComponentClass<P = {}, S = ComponentState>
    extends StaticLifecycle<P, S> {
    routeName?: string;
    routeTemplatePath?: string;
    routeTemplateFullPath?: string;
  }
}

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
