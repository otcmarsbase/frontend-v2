import { RPC } from '@schema/desk-gateway';

import { BackendApiService } from './service';

export function createRpcSchemaClient(service: BackendApiService) {
  const { getMeta, setMeta, globalErrorTriggers } = service.params;

  return new RPC.Client(service.rpcClient, {
    getMeta,
    setMeta,
    globalErrorTriggers,
  });
}
