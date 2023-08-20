import { RuntimeError } from '@ddd/errors';
import '@shared/errors';
import { RpcClient, RpcError } from '@packages/berish-rpc-client';

import { getErrorHandler } from './getErrorHandler';
import { BackendApiService } from './service';

export function createRpcClient(service: BackendApiService) {
  const {
    params: { getMeta },
  } = service;

  const client = new RpcClient({
    adapter: service.rpcAxiosAdapter,
  });

  client.requestInterceptor.use(async (request) => {
    const meta = await getMeta();
    Object.assign(request.meta, meta);
    return request;
  });

  client.responseInterceptor.use(async (response) => {
    console.log({ response });
    if (RpcError.isExtends(response)) {
      const runtimeError = RuntimeError.resolveError(
        response.name,
        response.data,
      );

      console.log(runtimeError);

      const error = runtimeError || response;

      const handler = getErrorHandler(service, error);
      if (handler) await handler(service, error);

      throw error;
    }
    return response;
  });
  return client;
}
