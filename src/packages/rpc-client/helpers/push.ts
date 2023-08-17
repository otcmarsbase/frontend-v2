import { RpcRequest } from '../schema';

export function push(
  method: string,
  params: Record<string, any>,
  meta?: Record<string, any>,
  // @ts-ignore
): RpcRequest<any, void> {
  return {
    method,
    params,
    meta,
    push: true,
  };
}
