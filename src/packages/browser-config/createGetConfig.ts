import { getConfig } from './getConfig';

export interface CreateGetConfigParams<
  Config extends {
    [key: string]: any;
  },
> {
  prefix: string;
  withoutPrefix: (keyof Config & string)[];
  from: ('window' | 'process')[];
}

export function createGetConfig<
  Config extends {
    [key: string]: any;
  },
>(params: CreateGetConfigParams<Config>) {
  const NODE_ENV = process.env.NODE_ENV;
  if (!NODE_ENV)
    throw new Error(
      'The NODE_ENV environment variable is required but was not specified.',
    );

  return <T = string>(
    key: keyof Config & string,
    parser?: (data: string) => T,
  ) => {
    if (params.withoutPrefix.includes(key))
      return getConfig(
        { prefix: '', from: params.from || ['process'], key },
        parser,
      );

    return getConfig(
      { prefix: params.prefix, from: params.from || ['process'], key },
      parser,
    );
  };
}
