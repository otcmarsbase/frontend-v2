import { RpcApiMethodName, RpcApiPayload, RpcApiResult } from '@packages/berish-rpc-client-schema';
import { RPC } from '@schema/desk-gateway';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { useRpcSchemaClient } from './useRpcSchemaClient';

export interface UseRpcSchemaQueryParams<Method extends RpcApiMethodName<RPC.Schema>> {
  method: Method;
  params: RpcApiPayload<RPC.Schema, Method>;
}

export function useRpcSchemaQuery<Method extends RpcApiMethodName<RPC.Schema>>(
  method: Method,
  payload: RpcApiPayload<RPC.Schema, Method>,
  options: Omit<UseQueryOptions<RpcApiResult<RPC.Schema, Method>>, 'queryKey' | 'queryFn'> = {},
) {
  const rpcSchema = useRpcSchemaClient();
  const query = useQuery({ queryKey: [method, payload], queryFn: () => rpcSchema.send(method, payload), ...options });
  return query;
}
