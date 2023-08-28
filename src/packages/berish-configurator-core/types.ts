export type ConfigParser<T> = (value: string) => T;
export type ConfigParserResult<T> = T extends ConfigParser<infer Result> ? Result : T;
