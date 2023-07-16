export interface PortalResolver<T = any> {
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
}

export interface PortalProps<T = any> {
  portal?: PortalResolver<T>;
}
