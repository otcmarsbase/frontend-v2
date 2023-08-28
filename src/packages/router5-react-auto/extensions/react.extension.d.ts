/// <reference path="@types/react/index.d.ts" />

declare namespace React {
  import { PageSchema } from '../schema';

  export interface FunctionComponent<P = {}> {
    pageSchema?: PageSchema<P>;
    routeName?: string;
    routeTemplatePath?: string;
    routeTemplateFullPath?: string;
  }

  export interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
    routeName?: string;
    routeTemplatePath?: string;
    routeTemplateFullPath?: string;
  }
}
