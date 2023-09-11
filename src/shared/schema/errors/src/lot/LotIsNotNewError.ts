import { RuntimeError } from '@ddd/errors';

export interface LotIsNotNewErrorParams {}

@RuntimeError.RegisterError('LotIsNotNewError')
export class LotIsNotNewError extends RuntimeError<LotIsNotNewErrorParams> {
  constructor() {
    super('LotIsNotNewError', {});
  }

  get message(): string {
    return `Lot is not new.`;
  }
}
