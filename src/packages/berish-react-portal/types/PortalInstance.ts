export interface PortalInstance<Response> {
  resolve(value: Response | PromiseLike<Response>): void;
  reject(reason?: any): void;
}

export interface PortalProps<Response> {
  portal?: PortalInstance<Response>;
}
