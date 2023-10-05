import { isEmpty } from 'lodash';

export function prepareFiltersParams<T = any>(filters: T) {
  console.log({ filters });
  return Object.entries(filters).reduce((acc, entry) => {
    const [key, value] = entry;
    return {
      ...acc,
      [key]: typeof value === 'object' ? (isEmpty(value) ? undefined : value) : value ? value : undefined,
    };
  }, {} as T);
}
