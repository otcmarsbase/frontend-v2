import { RpcError } from '@packages/rpc-client';

export class UnknownError extends RpcError {
  constructor(reason?: string | object) {
    super('UnknownError', 'Неизвестная ошибка', {
      reason: typeof reason === 'string' ? reason : JSON.stringify(reason),
    });
  }

  public get reason() {
    return this.get<string>('reason');
  }
}
