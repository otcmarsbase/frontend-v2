import Decimal from 'decimal.js';

export function commaSeparatedNumber(number: number | string | Decimal, decimalPartLength: number): string {
  number = number ? new Decimal(number) : new Decimal(0);
  number = number.toDecimalPlaces(decimalPartLength);

  const result = number.toNumber().toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPartLength,
  });

  if (result.split('.')[0].length < 6) {
    return result.replace(',', '');
  }

  return result;
}
