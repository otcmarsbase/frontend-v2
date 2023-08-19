import { RpcError } from '@packages/rpc-client';

export class ForbiddenError extends RpcError {
  constructor() {
    super('ForbiddenError', `Ошибка доступа`);
  }
}
