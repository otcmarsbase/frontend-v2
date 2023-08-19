import { RpcClient } from 'src/packages/rpc-client';
import { BackendApiService } from './service';

export function createRawApiRPC(service: BackendApiService) {
  const client = new RpcClient({ send: (data) => service.axios.request({ data, method: 'POST' }).then(({ data }) => data) });
  return client;
}
