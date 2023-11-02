import { formatNumber } from '@app/utils';

export function formatNumberProps() {
  return {
    formatter: (value: string) => formatNumber(value, 8),
    pattern: '[0-9,]*(.[0-9]+)?',
  };
}
