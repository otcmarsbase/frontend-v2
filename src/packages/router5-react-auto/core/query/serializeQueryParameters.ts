// export function buildQueryParameters(params: { [key: string]: any }) {
//   const keyBuild = (key: string, value: any): { [key: string]: any } => {
//     if (!value && typeof value !== 'boolean' && typeof value !== 'number')
//       return { [key]: null };
//     if (
//       typeof value === 'number' ||
//       typeof value === 'string' ||
//       typeof value === 'boolean'
//     )
//       return { [key]: value.toString() };
//     if (Array.isArray(value)) {
//       if (value.length === 0) return { [key]: '[]' };
//       return value
//         .map((m, i) => keyBuild(key + '.' + i, m))
//         .filter((m) => !!m)
//         .reduce((out, build) => ({ ...out, ...build }), {});
//     }
//     if (
//       typeof value === 'object' &&
//       value === Object(value) &&
//       Object.prototype.toString.call(value) !== '[object Array]'
//     )
//       return Object.keys(value)
//         .map((m) => keyBuild(key ? key + '.' + m : m, value[m]))
//         .filter((m) => !!m)
//         .reduce((out, build) => ({ ...out, ...build }), {});
//     return null;
//   };
//   return keyBuild(null, params);
// }

import LINQ from '@berish/linq';

type PlainQueryParams = {
  key: string;
  value: string | string[];
};

const ROOT_PARAMS_KEY = '$%_ROOT_%$';

function plainQueryParams(rootKey: string, value: any): PlainQueryParams[] {
  if (typeof value === 'undefined' || value === null) return [];
  if (typeof value === 'string') return [{ key: rootKey, value }];
  if (typeof value === 'number')
    return [{ key: rootKey, value: String(value) }];
  if (typeof value === 'boolean')
    return [{ key: rootKey, value: value ? '1' : '0' }];

  if (Array.isArray(value)) {
    return LINQ.from(value)
      .selectMany((item) => plainQueryParams(rootKey, item))
      .toArray();
  }

  if (typeof value === 'object') {
    const json = JSON.parse(JSON.stringify(value));
    const keys = Object.keys(json);
    return LINQ.from(keys)
      .selectMany((key) =>
        plainQueryParams(
          [rootKey === ROOT_PARAMS_KEY ? null : rootKey, key]
            .filter(Boolean)
            .join('.'),
          json[key],
        ),
      )
      .toArray();
  }
  return [];
}

export function buildQueryParametersNew(params: { [key: string]: any }) {
  const plainParams = plainQueryParams(ROOT_PARAMS_KEY, params);
  return plainParams.reduce(
    (out, param) => ({ ...out, [param.key]: param.value }),
    {},
  );
}

export function serializeQueryParameters(params: { [key: string]: any }) {
  const keyBuild = (key: string, value: any): { [key: string]: string } => {
    if (typeof value === 'undefined' || value === null) return { [key]: '' };
    if (typeof value === 'string') return { [key]: value };
    if (typeof value === 'number') return { [key]: String(value) };
    if (typeof value === 'boolean') return { [key]: value ? '1' : '0' };
    if (
      typeof value === 'number' ||
      typeof value === 'string' ||
      typeof value === 'boolean'
    )
      return { [key]: value.toString() };
    if (Array.isArray(value)) {
      if (value.length === 0) return { [key]: '[]' };
      return value
        .map((m, i) => keyBuild(`${key}[${i}]`, m))
        .filter((m) => !!m)
        .reduce((out, build) => ({ ...out, ...build }), {});
    }
    if (
      typeof value === 'object' &&
      value === Object(value) &&
      Object.prototype.toString.call(value) !== '[object Array]'
    )
      return Object.keys(value)
        .map((m) => keyBuild(key ? key + '.' + m : m, value[m]))
        .filter((m) => !!m)
        .reduce((out, build) => ({ ...out, ...build }), {});
    return null;
  };
  return keyBuild(null, params);
}
