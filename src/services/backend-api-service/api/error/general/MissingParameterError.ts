import { RpcError } from '@packages/rpc-client';

export class MissingParameterError extends RpcError {
  static isMissing(value: any) {
    return typeof value === 'undefined' || value === null;
  }

  constructor(paramName: string) {
    super(
      'MissingParameterError',
      `Обязательный параметр '${paramName}' не отправлен, пустой, либо неправильный.`,
      { paramName },
    );
  }

  get paramName() {
    return this.get<string>('paramName');
  }
}
