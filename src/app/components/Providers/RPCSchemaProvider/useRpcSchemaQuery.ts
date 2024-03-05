import { RpcApiMethodName, RpcApiPayload, RpcApiResult } from '@packages/berish-rpc-client-schema';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { useRpcSchemaClient } from './useRpcSchemaClient';

export interface UseRpcSchemaQueryParams<Method extends RpcApiMethodName<DeskGatewaySchema.RPC.Schema>> {
  method: Method;
  params: RpcApiPayload<DeskGatewaySchema.RPC.Schema, Method>;
}

export function useRpcSchemaQuery<Method extends RpcApiMethodName<DeskGatewaySchema.RPC.Schema>>(
  method: Method,
  payload: RpcApiPayload<DeskGatewaySchema.RPC.Schema, Method>,
  options: Omit<UseQueryOptions<RpcApiResult<DeskGatewaySchema.RPC.Schema, Method>>, 'queryKey' | 'queryFn'> = {},
) {
  const rpcSchema = useRpcSchemaClient();
  const query = useQuery({ queryKey: [method, payload], queryFn: () => rpcSchema.send(method, payload), ...options });
  return query;
}
