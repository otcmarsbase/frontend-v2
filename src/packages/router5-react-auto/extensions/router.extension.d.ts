/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="router5/dist/types/router.d.ts" />
import { NavigationOptions } from 'router5';
import type {
  BuildPathByComponentFunction,
  FindRouteByComponentFunction,
  IsActiveRouteByComponentFunction,
  NavigateComponentFunction,
} from '../core/methods';
import { PageComponent } from '../types';

declare module 'router5/dist/types/router' {
  export interface Router {
    routes: Route[];

    isActiveRouteByComponent: IsActiveRouteByComponentFunction;
    findRouteByComponent: FindRouteByComponentFunction;
    navigateComponent: NavigateComponentFunction;
    buildPathByComponent: BuildPathByComponentFunction;
  }

  export interface Route<
    Dependencies extends DefaultDependencies = DefaultDependencies,
  > {
    name: string;
    path: string[];
    component: PageComponent<any>;
  }
}
