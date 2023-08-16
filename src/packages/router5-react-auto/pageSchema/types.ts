export type PageParserSimple<Income, Outcome> = (value: Income) => Outcome;
export type PageParserArrayify<Income, Outcome> = PageParserSimple<
  Income[],
  Outcome[]
>;

export type PageParser<Income, Outcome> =
  | PageParserSimple<Income, Outcome>
  | PageParserArrayify<Income, Outcome>;

export type PageParserString<Outcome> = PageParser<string, Outcome>;

export type PageSchemaParser<T> = (value: string) => T;
export type PageSchemaArrayParser<T> = (value: string[]) => T[];
