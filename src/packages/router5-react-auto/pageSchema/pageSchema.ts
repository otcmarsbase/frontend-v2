import { arrayParser, enumParser, stringParser, numberParser, objectParser } from './parsers';
import { schemaResolver } from './resolver';
import { PageSchemaParser } from './types';

// export type PageSchema<Props> = {
//   [Key in keyof Props]-?: Props[Key] extends (infer Item)[]
//     ? [
//         Item extends Record<string, any>
//           ? PageSchema<Item> | PageSchemaParser<Item>
//           : PageSchemaParser<Item>,
//       ]
//     : Props[Key] extends Record<string, any>
//     ? PageSchema<Props[Key]> | PageSchemaParser<Props[Key]>
//     : PageSchemaParser<Props[Key]>;
// };

export type PageSchema<Props> = {
  [Key in keyof Props]-?: Props[Key] extends (infer Item)[]
    ? PageSchema<Item>[] | PageSchemaParser<Item>[]
    : Props[Key] extends Record<string, any>
      ? PageSchema<Props[Key]> | PageSchemaParser<Props[Key]>
      : PageSchemaParser<Props[Key]>;
};

export type PageSchemaStringify<Props extends Record<string, any>> = {
  [Key in keyof Props]-?: Props[Key] extends Record<string, any> ? PageSchemaStringify<Props[Key]> : string;
};

export const PageSchema = {
  arrayParser,
  objectParser,
  enumParser,
  stringParser,
  numberParser,
  resolve: schemaResolver,
};
