import { RPC } from '@shared/schema/api-gateway';

import { BackendApiService } from './service';

export function createRpcSchemaClient(service: BackendApiService) {
  const { getMeta, setMeta, globalErrorTriggers } = service.params;

  return new RPC.Client(service.rpcClient, {
    getMeta,
    setMeta,
    globalErrorTriggers,
  });
}
