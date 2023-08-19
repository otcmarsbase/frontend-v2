import { RpcError } from '@packages/rpc-client';

export class IncorrectParameterError extends RpcError {
  constructor(paramName: string) {
    super(
      'IncorrectParameterError',
      `Параметр '${paramName}' передан с неправильными типом`,
      { paramName },
    );
  }

  get paramName() {
    return this.get<string>('paramName');
  }
}
