import Decimal from 'decimal.js';

export function recountToUSD({ amount }) {
  const usdtRate = 90;
  return Number(new Decimal(amount).mul(usdtRate)).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
}
