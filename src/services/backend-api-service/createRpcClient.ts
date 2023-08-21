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
    if (!meta) return request;

    return {
      ...request,
      meta: {
        ...meta,
        ...request.meta,
      },
    };
  });

  client.responseInterceptor.use(async (response, next) => {
    try {
      return await next();
    } catch (err) {
      if (RpcError.isExtends(err)) {
        const runtimeError = RuntimeError.resolveError(err.name, err.data);

        const error = runtimeError || err;

        const handler = getErrorHandler(service, error);
        if (handler) await handler(service, error);

        throw error;
      }
    }
  });
  return client;
}
