import { ReadonlyDictionary, Dictionary } from './types';

export function isDictionary<Key, Value>(value: unknown): value is ReadonlyDictionary<Key, Value> {
  return typeof value === 'object' && value && value['$$typeof'] === Dictionary.$$typeof;
}
