import { RpcRequest } from 'src/packages/rpc-client';

export function getCorrectRpcRequest<Params, Result>(
    // @ts-ignore
  value: RpcRequest<Params, Result>,
    // @ts-ignore
): RpcRequest<Params, Result> {
  if (typeof value !== 'object') return null;

  if (
    !(typeof value.method === 'undefined' || value.method === null) &&
    typeof value.method !== 'string'
  )
    return null;
  if (
    !(typeof value.meta === 'undefined' || value.meta === null) &&
    (typeof value.meta !== 'object' || Array.isArray(value.meta))
  )
    return null;
  if (
    !(typeof value.params === 'undefined' || value.params === null) &&
    (typeof value.params !== 'object' || Array.isArray(value.params))
  )
    return null;
  if (
    !(typeof value.push === 'undefined' || value.push === null) &&
    typeof value.push !== 'boolean'
  )
    return null;

  return {
    method: value.method,
    meta: value.meta || {},
    params: value.params || ({} as any),
    push: !!value.push,
  };
}
