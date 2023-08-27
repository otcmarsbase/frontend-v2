import { commaSeparatedNumber } from './commaSeparatedNumber';

export function formatNumber(amount: number): string {
  const isNegative = amount < 0;
  const absolute = Math.abs(amount);
  const commaSeparated = commaSeparatedNumber(absolute, 2);

  return isNegative ? `-${commaSeparated}` : `${commaSeparated}`;
}
