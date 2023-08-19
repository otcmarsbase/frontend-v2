import { RpcError } from 'src/packages/rpc-client';
import { BackendApiService } from './service';

export function getErrorHandler(service: BackendApiService, error: RpcError) {
  const {
    params: { errorHandlers },
  } = service;

  const handler = (errorHandlers || []).find((m) => (m.errors || []).find((k) => error instanceof k));
  return handler && handler.handler;
}
