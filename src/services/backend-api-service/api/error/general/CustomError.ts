import { RpcError } from '@packages/rpc-client';

export class CustomError extends RpcError {
  constructor(message: string) {
    super('CustomError', message);
  }
}
