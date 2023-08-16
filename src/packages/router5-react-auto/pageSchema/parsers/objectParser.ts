import { PageSchema } from '../pageSchema';
import { PageSchemaParser } from '../types';

export function objectParser<T>(schema: PageSchema<T>): PageSchemaParser<T> {
  return (value) => null as T;
}
