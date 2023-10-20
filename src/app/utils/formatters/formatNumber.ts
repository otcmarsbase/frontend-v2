import Decimal from 'decimal.js';

import { commaSeparatedNumber } from './commaSeparatedNumber';

export function formatNumber(amount: string | number | Decimal, decimals: number = 2): string {
  amount = new Decimal(amount);

  const isNegative = amount.lessThan(0);
  const absolute = amount.abs();
  const commaSeparated = commaSeparatedNumber(absolute, decimals);

  return isNegative ? `-${commaSeparated}` : `${commaSeparated}`;
}
