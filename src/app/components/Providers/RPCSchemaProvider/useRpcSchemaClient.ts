import { useContext } from 'react';

import { RpcSchemaContext } from './RpcSchemaContext';

export function useRpcSchemaClient() {
  const client = useContext(RpcSchemaContext);
  if (!client) throw new TypeError('RpcSchemaContext is not provided. Use RpcSchemaProvider for initialize client.');

  return client;
}
