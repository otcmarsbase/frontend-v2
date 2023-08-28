import { PageSchemaParser } from '../types';

import { stringParser } from './stringParser';

export function arrayParser(): PageSchemaParser<string[]>;
export function arrayParser(separator: string | RegExp): PageSchemaParser<string[]>;
export function arrayParser<T>(parser: PageSchemaParser<T>): PageSchemaParser<T[]>;
export function arrayParser<T>(parser: PageSchemaParser<T>, separator: string): PageSchemaParser<T[]>;
export function arrayParser<T>(
  arg1?: PageSchemaParser<T> | string | RegExp,
  separator?: string | RegExp,
): PageSchemaParser<(string | T)[]> {
  return (value: string) => {
    if (typeof value === 'undefined' || value === null) return undefined;

    const parser: PageSchemaParser<string | T> = typeof arg1 === 'function' ? arg1 : stringParser;
    separator = (typeof arg1 !== 'function' ? arg1 : separator) || ',';

    if (value === '') return [];

    value = value.substring(1, value.length - 1);
    const splitted = value.split(separator).map((m) => m.trim());
    return splitted.map(parser);
  };
}
