import { IConfigurator } from './IConfigurator';

export abstract class AbstractConfigurator<Schema extends Record<string, any>>
  implements IConfigurator<Schema>
{
  raw<Key extends keyof Schema & string>(key: Key): string {
    return this.configResolver(key);
  }

  get<Key extends keyof Schema & string>(
    key: Key,
  ): Schema[Key] extends string ? Schema[Key] : string;
  get<Key extends keyof Schema & string>(
    key: Key,
    parser: (value: string) => Schema[Key],
  ): Schema[Key];
  get<Key extends keyof Schema & string>(
    key: Key,
    parser?: (value: string) => Schema[Key],
  ): string | Schema[Key] {
    const rawValue = this.raw(key);
    return this.use(rawValue, (data) =>
      String(data) === ''
        ? null
        : typeof parser === 'function'
        ? parser(data)
        : data,
    );
  }

  defaults<T>(value: T | null | undefined, defaultValueFactory: () => T): T {
    return typeof value === 'undefined' || value === null
      ? defaultValueFactory()
      : value;
  }

  use<T, K>(value: T | null | undefined, initCallback: (value: T) => K): K {
    return typeof value === 'undefined' || value === null
      ? <undefined>value
      : initCallback(value);
  }

  has<Key extends keyof Schema & string>(key: Key): boolean {
    const value = this.raw(key);
    return typeof value === 'undefined' || value === null || value === ''
      ? false
      : true;
  }

  protected abstract configResolver(key: string): any;
}
