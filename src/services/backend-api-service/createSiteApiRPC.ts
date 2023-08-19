import { RpcClient, RpcError } from 'src/packages/rpc-client';
import { BackendApiService } from './service';
import { getErrorHandler } from './getErrorHandler';

export function createSiteApiRPC(service: BackendApiService) {
  const {
    params: { getMeta, errorRegistrator },
  } = service;
  const client = new RpcClient({ send: (data) => service.axios.request({ data, method: 'POST' }).then(({ data }) => data) });

  client.requestInterceptor.use(async (request) => {
    const meta = await getMeta();
    Object.assign(request.meta, meta);
    return request;
  });

  client.responseInterceptor.use(async (response) => {
    if (RpcError.isRpcError(response)) {
      if (errorRegistrator && errorRegistrator.isRegisteredName(response.name)) {
        const errorCls = errorRegistrator.getClassesByClassName(response.name)[0];
        if (errorCls) {
          response = errorRegistrator.getInstanceByClass({ name: response.name, message: response.message, data: response.data }, errorCls);
        }
      }
      const handler = getErrorHandler(service, response);
      if (handler) await handler(service, response);

      throw response;
    }
    return response;
  });
  return client;
}
