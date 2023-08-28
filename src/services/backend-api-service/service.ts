import { RpcClient } from '@packages/berish-rpc-client';
import { Service } from '@packages/service-manager';
import { RPC } from '@schema/api-gateway';
import { RpcClientErrorTrigger } from '@schema/common';

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
