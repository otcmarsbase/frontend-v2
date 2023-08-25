/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="router5/dist/types/router.d.ts" />
import { NavigationOptions } from 'router5';

import { PageComponent } from '../core';
import type {
  BuildPathByComponentFunction,
  FindRouteByComponentFunction,
  IsActiveRouteByComponentFunction,
  NavigateComponentFunction,
} from '../core/methods';

declare module 'router5/dist/types/router' {
  export interface Router {
    routes: Route[];

    isActiveRouteByComponent: IsActiveRouteByComponentFunction;
    findRouteByComponent: FindRouteByComponentFunction;
    navigateComponent<Props>(
      component: PageComponent<Props>,
      props: Props,
      options: NavigationOptions,
      done?: DoneFn,
    ): CancelFn;
    buildPathByComponent<Props>(component: PageComponent<Props>, props: Props): string;
  }

  export interface Route<Dependencies extends DefaultDependencies = DefaultDependencies> {
    name: string;
    path: string[];
    component: PageComponent<any>;
  }
}
