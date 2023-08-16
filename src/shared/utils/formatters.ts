export function formatAddress(
  address: `0x${string}` | undefined,
  begin: number = 6,
  end: number = 4,
): string {
  if (!address) return '';
  return `${address.substr(0, begin)}...${address.substr(
    address.length - end,
    end,
  )}`;
}

export function formatNumber(amount: number): string {
  const isNegative = amount < 0;
  const absolute = Math.abs(amount);
  const commaSeparated = commaSeparatedNumber(absolute, 2);

  return isNegative ? `-${commaSeparated}` : `${commaSeparated}`;
}

export function commaSeparatedNumber(
  number: number | string,
  decimalPartLength: number,
) {
  if (!number) return 0;

  if (typeof number === 'string') {
    while (number.includes(',')) {
      number = number.replace(',', '');
    }
  }

  const result = Number(number).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPartLength,
  });

  if (result.split('.')[0].length < 6) {
    return result.replace(',', '');
  }

  return result;
}
