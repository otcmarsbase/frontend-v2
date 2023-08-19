import { Service } from 'src/packages/service-manager';
import { Registrator } from '@berish/class';
import { RpcClient, RpcError } from 'src/packages/rpc-client';

import { createRawApiRPC } from './createRawApiRPC';
import { createSiteApiRPC } from './createSiteApiRPC';
import { AxiosInstance, createAxios } from './createAxios';
import { siteApi } from './api';

export interface BackendApiServiceParams {
  baseURL: string;
  getMeta: () => Record<string, string> | Promise<Record<string, string>>;
  onLogout: () => void | Promise<void>;

  errorRegistrator?: Registrator;
  errorHandlers: { errors: typeof RpcError[]; handler: (service: BackendApiService, error: RpcError) => void | Promise<void> }[];
}

export class BackendApiService extends Service<BackendApiServiceParams> {
  axios: AxiosInstance = createAxios(this);

  rpcClient: RpcClient = createSiteApiRPC(this);
  apiRpcClient: RpcClient = createRawApiRPC(this);

  public siteApi = siteApi(this);
}
