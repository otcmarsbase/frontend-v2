import { RpcRequest } from '../external.types';

export function request<Result>(
  method: string,
  params?: Record<string, any>,
  meta?: Record<string, any>,
): RpcRequest<any, Result> {
  console.log('request ' + method, meta);
  return {
    method,
    params,
    meta,
    push: false,
  };
}
