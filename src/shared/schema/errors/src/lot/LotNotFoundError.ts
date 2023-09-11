import { RuntimeError } from '@ddd/errors';

export interface LotNotFoundErrorParams {
  id: string;
}

@RuntimeError.RegisterError('LotNotFoundError')
export class LotNotFoundError extends RuntimeError<LotNotFoundErrorParams> {
  constructor(id: string) {
    super('LotNotFoundError', { id });
  }

  get message(): string {
    return `Lot with id ${this.params.id} not found`;
  }
}
