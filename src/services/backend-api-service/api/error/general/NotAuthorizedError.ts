import { RpcError } from '@packages/rpc-client';

export class NotAuthorizedError extends RpcError {
  constructor() {
    super('NotAuthorizedError', `Пользователь не авторизован`);
  }
}
