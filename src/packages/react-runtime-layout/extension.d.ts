/// <reference path="@types/react/index.d.ts" />

declare namespace React {
  export interface FunctionComponent<P = {}> {
    getLayout?: React.FC<PropsWithChildren<P>> | React.FC<PropsWithChildren<P>>[];
  }
}
