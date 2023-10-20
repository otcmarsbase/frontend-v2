export interface ReadonlyDictionary<Key, Value> {
  $$typeof: symbol;

  defaults(key?: Key): Value | undefined;
  get(key: Key): Value | undefined;
  getStrict(key: Key): Value | undefined;
  has(key: Key): boolean;
  keys(): Key[];
  values(): Value[];
  entries(): [Key, Value][];
  map<NewValue>(
    callback: (value: Value, key: Key, dictionary: ReadonlyDictionary<Key, Value>) => NewValue,
  ): ReadonlyDictionary<Key, NewValue>;
  readonly length: number;
}

export interface Dictionary<Key, Value> extends ReadonlyDictionary<Key, Value> {
  clear(): void;
  delete(key: Key): boolean;

  set(key: Key, value: Value): this;
  setFromRecord(record: Partial<Record<Key & string, Value>>): this;
  setFromEntries(entries: [Key, Value][]): this;
  setFromDictionary(dictionary: Dictionary<Key, Value> | ReadonlyDictionary<Key, Value>): this;
  setDefault(value: Value): this;
  setDefaultFactory(factoryCallback: (key: Key) => Value): this;

  asReadonly(): ReadonlyDictionary<Key, Value>;
  map<NewValue>(
    callback: (value: Value, key: Key, dictionary: Dictionary<Key, Value>) => NewValue,
  ): Dictionary<Key, NewValue>;
}

export const Dictionary = {
  $$typeof: Symbol('Dictionary$$typeof'),
};
