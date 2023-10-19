import { LotCreateSchema } from '../../schema';

export const schema = LotCreateSchema.pick([
  'COMMON_OFFER_MAKER_TYPES_INPUT',
  'COMMON_BID_MAKER_TYPES_INPUT',
  'COMMON_DEADLINE_INPUT',
  'COMMON_TELEGRAM_INPUT',
  'COMMON_MEDIATOR_INPUT',
]);
