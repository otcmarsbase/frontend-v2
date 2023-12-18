import { isDeeplyEmpty } from '@shared/utils';
import omitBy from 'lodash/omitBy';

export function prepareFiltersParams<T extends Record<string, any>>(filters: T) {
  return omitBy(filters, isDeeplyEmpty);
}
