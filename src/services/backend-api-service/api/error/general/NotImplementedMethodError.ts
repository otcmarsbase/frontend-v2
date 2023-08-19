import { RpcError } from '@packages/rpc-client';

export class NotImplementedMethodError extends RpcError {
  constructor() {
    super('NotImplementedMethodError', 'Метод не реализован');
  }
}
