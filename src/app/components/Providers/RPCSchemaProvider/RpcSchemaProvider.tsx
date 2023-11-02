import { PropsWithChildren } from 'react';

import { RPC } from '@schema/desk-gateway';

import { RpcSchemaContext } from './RpcSchemaContext';

export interface RpcSchemaProviderProps {
  client: RPC.Client;
}

export function RpcSchemaProvider({ client, children }: PropsWithChildren<RpcSchemaProviderProps>) {
  return <RpcSchemaContext.Provider value={client}>{children}</RpcSchemaContext.Provider>;
}
