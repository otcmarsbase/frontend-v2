import { PageSchemaParser } from '../types';

export function enumParser<T extends string>(values: T[]): PageSchemaParser<T> {
  return (value) => {
    if (values.length <= 0) return void 0;
    return values.find((m) => m === value);
  };
}
