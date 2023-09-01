export interface PortalInstance<Result> {
  resolve(value: Result | PromiseLike<Result>): void;
  reject(reason?: any): void;
}

export interface PortalProps<Result> {
  portal?: PortalInstance<Result>;
}

export type PortalPropsInferResult<T> = T extends PortalProps<infer Result> ? Result : never;
