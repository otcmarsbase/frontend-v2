import { RuntimeError } from '@ddd/errors';
import { RpcClient, RpcError } from '@packages/berish-rpc-client';
import { RPC } from '@shared/schema/api-gateway';
import { Service } from 'src/packages/service-manager';

import { createRpcAxiosAdapter } from './createRpcAxiosAdapter';
import { createRpcClient } from './createRpcClient';
import { createRpcSchemaClient } from './createRpcSchemaClient';

export interface BackendApiServiceParams {
  baseURL: string;
  getMeta: () => RPC.ClientMeta | Promise<RPC.ClientMeta>;
  setMeta: (meta: RPC.ServerMeta) => void | Promise<void>;

  errorHandlers: {
    errors: (typeof RpcError | typeof RuntimeError)[];
    handler: (
      service: BackendApiService,
      error: RpcError | RuntimeError,
    ) => void | Promise<void>;
  }[];
}

export class BackendApiService extends Service<BackendApiServiceParams> {
  rpcAxiosAdapter = createRpcAxiosAdapter(this);

  rpcClient: RpcClient = createRpcClient(this);

  schema = createRpcSchemaClient(this);
}
