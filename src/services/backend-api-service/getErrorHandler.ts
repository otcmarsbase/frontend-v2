import { RuntimeError } from '@ddd/errors';
import { RpcError } from '@packages/berish-rpc-client';

import { BackendApiService } from './service';

export function getErrorHandler(
  service: BackendApiService,
  error: RpcError | RuntimeError,
) {
  const {
    params: { errorHandlers },
  } = service;

  const handler = (errorHandlers || []).find((m) =>
    (m.errors || []).find((k) => error instanceof k),
  );
  return handler && handler.handler;
}
