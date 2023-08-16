import { AbstractConfigurator } from '@packages/berish-configurator-core';

export type CraConfiguratorFrom = 'window' | 'process';

export interface CraConfiguratorOptions {
  prefix?: string;
  from?: CraConfiguratorFrom | CraConfiguratorFrom[];
}

export class CraConfigurator<
  Schema extends Record<string, any>,
> extends AbstractConfigurator<Schema> {
  private readonly _prefix: string;
  private readonly _from: CraConfiguratorFrom[];

  constructor(options?: CraConfiguratorOptions) {
    super();

    this._prefix = options?.prefix;
    this._from = options?.from
      ? Array.isArray(options.from)
        ? options.from
        : [options.from]
      : ['process'];
  }

  protected configResolver(key: string) {
    const rawKey = [this._prefix, key].filter(Boolean).join('');

    const values = this._from.map((from) =>
      from === 'window'
        ? window[rawKey]
        : from === 'process'
        ? process.env[rawKey]
        : void 0,
    );
    return values.find((m) => m !== null && typeof m !== 'undefined');
  }
}
