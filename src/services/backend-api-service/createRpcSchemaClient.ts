import { RPC } from '@shared/schema/api-gateway';

import { BackendApiService } from './service';

export function createRpcSchemaClient(service: BackendApiService) {
  return new RPC.Client(service.rpcClient);
}
