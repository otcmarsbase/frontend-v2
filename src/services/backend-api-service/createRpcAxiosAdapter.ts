import { RpcClientAxiosAdapter } from '@packages/berish-rpc-axios';
import axios, { AxiosInstance } from 'axios';

import { BackendApiService } from './service';

export function createRpcAxiosAdapter(service: BackendApiService) {
  const {
    params: { baseURL },
  } = service;
  return RpcClientAxiosAdapter(
    axios.create({
      baseURL,
    }),
  );
}

export type { AxiosInstance };
