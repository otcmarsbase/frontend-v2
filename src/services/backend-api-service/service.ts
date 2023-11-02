import { RpcClient } from '@packages/berish-rpc-client';
import { Service } from '@packages/service-manager';
import { RpcClientErrorTrigger } from '@schema/common';
import { RPC } from '@schema/desk-gateway';

import { createRpcAxiosAdapter } from './createRpcAxiosAdapter';
import { createRpcClient } from './createRpcClient';
import { createRpcSchemaClient } from './createRpcSchemaClient';

export interface BackendApiServiceParams {
  baseURL: string;
  getMeta: () => RPC.ClientMeta | Promise<RPC.ClientMeta>;
  setMeta: (meta: RPC.ServerMeta) => void | Promise<void>;

  globalErrorTriggers: RpcClientErrorTrigger[];
}

export class BackendApiService extends Service<BackendApiServiceParams> {
  rpcAxiosAdapter = createRpcAxiosAdapter(this);

  rpcClient: RpcClient = createRpcClient(this);

  schema = createRpcSchemaClient(this);
}
