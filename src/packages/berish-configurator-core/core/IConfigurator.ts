export interface IConfigurator<Schema extends Record<string, any>> {
  raw<Key extends keyof Schema & string>(key: Key): string;
  get<Key extends keyof Schema & string>(key: Key): Schema[Key] extends string ? Schema[Key] : string;
  get<Key extends keyof Schema & string>(key: Key, parser: (value: string) => Schema[Key]): Schema[Key];
  defaults<T>(value: T | null | undefined, defaultValueFactory: () => T): T;
  use<T, K>(value: T | null | undefined, useCallback: (value: T) => K): K;
  has<Key extends keyof Schema & string>(key: Key): boolean;
}
