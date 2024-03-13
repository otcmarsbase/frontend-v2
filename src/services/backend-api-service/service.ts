import { RpcClient } from '@packages/berish-rpc-client';
import { Service } from '@packages/service-manager';
import { RpcClientErrorTrigger } from '@schema/core';
import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createRpcAxiosAdapter } from './createRpcAxiosAdapter';
import { createRpcClient } from './createRpcClient';
import { createRpcSchemaClient } from './createRpcSchemaClient';

export interface BackendApiServiceParams {
  baseURL: string;
  getMeta: () => DeskGatewaySchema.RPC.ClientMeta | Promise<DeskGatewaySchema.RPC.ClientMeta>;
  setMeta: (meta: DeskGatewaySchema.RPC.ServerMeta) => void | Promise<void>;

  globalErrorTriggers: RpcClientErrorTrigger[];
}

export class BackendApiService extends Service<BackendApiServiceParams> {
  rpcAxiosAdapter = createRpcAxiosAdapter(this);

  rpcClient: RpcClient = createRpcClient(this);

  schema = createRpcSchemaClient(this);
}
