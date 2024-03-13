import { DeskGatewaySchema } from '@schema/desk-gateway';

import { BackendApiService } from './service';

export function createRpcSchemaClient(service: BackendApiService) {
  const { getMeta, setMeta, globalErrorTriggers } = service.params;

  return new DeskGatewaySchema.RPC.Client(service.rpcClient, {
    getMeta,
    setMeta,
    globalErrorTriggers,
  });
}
