import { RuntimeError } from '@ddd/errors';

export interface AssetRequestNotFoundErrorParams {
  id: string;
}

export class AssetRequestNotFoundError extends RuntimeError<AssetRequestNotFoundErrorParams> {
  constructor(id: string) {
    super('AssetRequestNotFoundError', { id });
  }

  get message(): string {
    return `Asset request not found with id: '${this.params.id}'`;
  }
}
