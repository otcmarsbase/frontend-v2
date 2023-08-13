import { arrayParser, enumParser, stringParser, numberParser } from './parsers';
import { PageSchemaParser } from './types';

export type PageSchema<Props extends Record<string, any>> = {
  [Key in keyof Props]-?: Props[Key] extends Record<string, any>
    ? PageSchema<Props[Key]> | PageSchemaParser<Props[Key]>
    : PageSchemaParser<Props[Key]>;
};

export const PageSchema = {
  arrayParser,
  enumParser,
  stringParser,
  numberParser,
};
