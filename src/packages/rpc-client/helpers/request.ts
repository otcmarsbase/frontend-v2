import { RpcRequest } from '../schema';

export function request<Result>(
  method: string,
  params: Record<string, any>,
  meta?: Record<string, any>,
): RpcRequest<any, Result> {
  return {
    method,
    params,
    meta,
    push: false,
  };
}
