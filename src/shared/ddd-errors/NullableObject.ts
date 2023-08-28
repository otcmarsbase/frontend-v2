import { IEquatable } from './IEquatable';

const NULLABLE_TYPE = Symbol('NULLABLE_TYPE');

export type NullableResolve<T> = T extends NullableObject
  ? Exclude<T, NullableObject> extends never
    ? null
    : NullableResolve<Exclude<T, NullableObject>> | null
  : T extends null | undefined
  ? Exclude<T, null | undefined> extends never
    ? undefined
    : NullableResolve<Exclude<T, null | undefined>> | undefined
  : T;

export type NullableResolveDeep<T> = T extends NullableObject | null | undefined
  ? NullableResolve<T>
  : T extends object | unknown[]
  ? {
      [Key in keyof T]: T[Key] extends NullableObject
        ? Exclude<T[Key], NullableObject> extends never
          ? null
          : NullableResolveDeep<Exclude<T[Key], NullableObject>> | null
        : T[Key] extends null | undefined
        ? Exclude<T[Key], null | undefined> extends never
          ? undefined
          : NullableResolveDeep<Exclude<T[Key], null | undefined>>
        : T[Key] extends object | any[]
        ? NullableResolveDeep<T[Key]>
        : NullableResolve<T[Key]>;
    }
  : T;

export interface NullableObject extends IEquatable<NullableObject | null | undefined> {
  [NULLABLE_TYPE]: typeof NULLABLE_TYPE;

  /** If value `isEmpty`, then NullableObject or defaultValue. Otherwise used value.*/
  <T>(value?: T | NullableObject | null | undefined, defaultValue?: T): T | NullableObject;

  /** `value` === `undefined` */
  isUndefined(value: any): value is undefined;
  /** `value` === `null` || `undefined` */
  isNull(value: any): value is null | undefined;
  /** `value` === `NullableObject` */
  isExtends(value: any): value is NullableObject;
  /** `value` === `NullableObject` | `null` | `undefined` */
  isEmpty(value: any): value is NullableObject | null | undefined;
  /** Value not empty */
  hasValue<T>(value: T | NullableObject | null | undefined): value is T;

  isEmptyUseNullable<T>(value: T | null | undefined | NullableObject): T | NullableObject;

  toString(): string;
  toNull(): null;
  toUndefined(): null;

  /**
   * `null` | `undefined` => `undefined`
   *
   * `NullableObject` => `null`
   *
   * `value` => `value`
   */
  resolve<T>(value: T): NullableResolve<T>;
  resolveDeep<T>(value: T): NullableResolveDeep<T>;
}

export const NullableObject = (<T>(
  value?: T | NullableObject | null | undefined,
  defaultValue?: T,
): T | NullableObject => {
  if (NullableObject.isEmpty(value)) return NullableObject.isEmpty(defaultValue) ? NullableObject : defaultValue;
  return value;
}) as NullableObject;
NullableObject.isUndefined = (value: any): value is undefined => {
  return typeof value === 'undefined';
};
NullableObject.isNull = (value: any): value is null => {
  return NullableObject.isUndefined(value) || value === null;
};
NullableObject.isExtends = (value: any): value is NullableObject => {
  return value === NullableObject || (typeof value === 'object' && !!value && value[NULLABLE_TYPE] === NULLABLE_TYPE);
};
NullableObject.isEmpty = (value: any): value is NullableObject => {
  return NullableObject.isUndefined(value) || NullableObject.isNull(value) || NullableObject.isExtends(value);
};
NullableObject.hasValue = <T>(value: T | NullableObject | null | undefined): value is T => {
  return !NullableObject.isEmpty(value);
};
NullableObject.isEquals = (other: NullableObject | null | undefined): boolean => {
  return NullableObject.isEmpty(other);
};
NullableObject.toString = (): string => {
  return NullableObject.name;
};
NullableObject.toNull = (): null => {
  return null;
};
NullableObject.toUndefined = (): undefined => {
  return undefined;
};
NullableObject.isEmptyUseNullable = <T>(value: T | null | undefined | NullableObject) => {
  if (NullableObject.isEmpty(value)) return NullableObject;
  return value;
};
NullableObject.resolve = <T>(value: T): NullableResolve<T> => {
  if (NullableObject.isNull(value)) return undefined as NullableResolve<T>;
  if (NullableObject.isExtends(value)) return null as NullableResolve<T>;
  return value as NullableResolve<T>;
};
NullableObject.resolveDeep = (<T>(value2: T): NullableResolveDeep<T> => {
  const deeper = (_value: any) => {
    if (NullableObject.isNull(_value)) return undefined as NullableResolveDeep<T>;
    if (NullableObject.isExtends(_value)) return null as NullableResolveDeep<T>;

    if (Array.isArray(_value)) {
      return _value.map((item) => deeper(item)) as NullableResolveDeep<T>;
    }

    if (typeof _value === 'object') {
      return Object.entries(_value as object).reduce(
        (out, [key, value]) => ({
          ...out,
          [key]: deeper(value),
        }),
        {},
      ) as NullableResolveDeep<T>;
    }

    return _value as NullableResolveDeep<T>;
  };

  return deeper(value2);
}) as any;
NullableObject[NULLABLE_TYPE] = NULLABLE_TYPE;

Object.freeze(NullableObject);
