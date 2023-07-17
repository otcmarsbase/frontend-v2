import LINQ from '@berish/linq';

const regExpForDigits = /^([\d]+)/gm;

/**
 * Переводит объект с параметрами в объект с автопарсингом примитов (числа, булева)
 * @param params
 * @returns
 */
export function parseQueryParameters(
  params: Record<string, string>,
): Record<string, any> {
  const parseValue = (value: string): any => {
    if (typeof value !== 'string') return value;
    if (!value) return null;
    if (value === '[]') return [];
    if (value.toLowerCase() === 'false') return false;
    if (value.toLowerCase() === 'true') return true;
    if (!isNaN(Number(value))) return Number(value);
    return value;
  };

  const parseCurrentPath = (params: { [key: string]: string }) => {
    const allKeys = LINQ.from(Object.keys(params));
    const currentKeys = allKeys.where((m) => m.indexOf('.') === -1);
    const out: { [key: string]: any } = allKeys.every(
      (m) => m.search(regExpForDigits) !== -1,
    )
      ? []
      : {};

    for (const currentKey of currentKeys) {
      out[currentKey] = parseValue(params[currentKey]);
    }

    const allSubKeys = allKeys.except(currentKeys);
    const subKeys = allSubKeys.select((m) => m.split('.')[0]).distinct();

    for (const subKey of subKeys) {
      const currentSubKeys = allSubKeys
        .where((m) => m.startsWith(subKey + '.'))
        .select((m) => m.substring(subKey.length + 1));
      const newParams: { [key: string]: any } = {};

      for (const currentSubKey of currentSubKeys) {
        newParams[currentSubKey] = params[subKey + '.' + currentSubKey];
      }

      out[subKey] = parseCurrentPath(newParams);
    }
    return out;
  };
  return parseCurrentPath(params);
}
