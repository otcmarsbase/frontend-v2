import '@schema/errors';
import { RpcClient } from '@packages/berish-rpc-client';

import { BackendApiService } from './service';

export function createRpcClient(service: BackendApiService) {
  const client = new RpcClient({
    adapter: service.rpcAxiosAdapter,
  });

  return client;
}
