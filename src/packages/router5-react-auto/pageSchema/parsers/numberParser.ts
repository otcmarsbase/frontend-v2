import { PageSchemaParser } from '../types';

export const numberParser: PageSchemaParser<number> = (value) => {
  if (value === '0') return 0;
  if (!value) return undefined;

  if (value.toString().toLowerCase() === 'infinity') return Infinity;
  if (value.toString().toLowerCase() === 'nan') return NaN;
  return Number.parseFloat(value.toString());
};
