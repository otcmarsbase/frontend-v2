import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

export function isDeeplyEmpty<T>(value: T) {
  if (isEmpty(value)) return true;

  if (isObject(value)) {
    if (Object.keys(value).length === 0) return true;

    return Object.values(value).every((value) => isDeeplyEmpty(value));
  }

  if (isString(value)) {
    return !value.length;
  }

  return false;
}
