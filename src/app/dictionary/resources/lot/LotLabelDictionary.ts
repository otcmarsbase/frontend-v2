import { createDictionary } from '../../utils';

export const LotLabelDictionary = createDictionary<'vip' | 'hot' | 'promo', string>()
  .setFromRecord({
    vip: 'VIP',
    hot: 'HOT',
    promo: 'PROMO',
  })
  .asReadonly();
