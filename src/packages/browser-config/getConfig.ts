export interface GetConfigParams<Config> {
  prefix?: string;
  key: keyof Config & string;
  from: ('window' | 'process')[];
}

export function getConfig<
  Config extends {
    [key: string]: any;
  },
>(params: GetConfigParams<Config>): string;

export function getConfig<
  Config extends {
    [key: string]: any;
  },
  T,
>(params: GetConfigParams<Config>, parser: (data: string) => T): T;

export function getConfig<
  Config extends {
    [key: string]: any;
  },
  Output,
>(params: GetConfigParams<Config>, parser?: (data: string) => Output) {
  const rawKey = [params.prefix, params.key].filter(Boolean).join('');
  const rawValue = params.from
    .map((envObject) =>
      envObject === 'window'
        ? window[rawKey]
        : envObject === 'process'
        ? process.env[rawKey]
        : void 0,
    )
    .filter(Boolean)[0];

  if (typeof rawValue === 'undefined' || rawValue === null) return null;
  return parser ? parser(rawValue) : rawValue;
}
