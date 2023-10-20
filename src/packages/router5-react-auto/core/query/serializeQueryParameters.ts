export function serializeQueryParameters(params: { [key: string]: any }) {
  const keyBuild = (key: string, value: any): { [key: string]: string } => {
    if (typeof value === 'undefined' || value === null) return { [key]: '' };
    if (typeof value === 'string') return { [key]: value };
    if (typeof value === 'number') return { [key]: String(value) };
    if (typeof value === 'boolean') return { [key]: value ? '1' : '0' };
    if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean')
      return { [key]: value.toString() };
    if (Array.isArray(value)) {
      if (value.length === 0) return { [key]: '[]' };
      return value
        .map((m, i) => keyBuild(`${key}.${i}`, m))
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

// console.log(
//   serializeQueryParameters({
//     name: 'Ravil',
//     childs: ['Azat', 'Ravil', { name: 'Test' }],
//     filters: {
//       search: '123',
//       directions: ['BUY', 'SELL'],
//       test: [
//         { type: 'SHORT', count: 1, good: { name: 'L0' } },
//         { type: 'LONG', count: 5, good: { name: 'Bitoin' } },
//       ],
//     },
//   }),
// );
