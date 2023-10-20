import { isDictionary } from './isDictionary';
import { Dictionary as IDictionary, ReadonlyDictionary } from './types';

class Dictionary<Key, Value> implements IDictionary<Key, Value> {
  private readonly _map: Map<Key, Value>;
  private _defaultValueFactory: (key: Key) => Value;

  constructor(entries: readonly (readonly [Key, Value])[], defaultValueFactory?: (key?: Key) => Value) {
    this._map = new Map(entries.slice());
    this._defaultValueFactory = defaultValueFactory ?? (() => void 0);
  }

  get $$typeof(): symbol {
    return IDictionary.$$typeof;
  }

  get length(): number {
    return this._map.size;
  }

  setFromRecord(record: Record<Key & string, Value>): this {
    return this.setFromEntries(Object.entries(record) as any);
  }

  setFromEntries(entries: readonly (readonly [Key, Value])[]): this {
    for (const [key, value] of entries) {
      this.set(key, value);
    }
    return this;
  }

  setFromDictionary(dictionary: IDictionary<Key, Value> | ReadonlyDictionary<Key, Value>): this {
    if (dictionary.$$typeof !== IDictionary.$$typeof)
      throw new TypeError(
        `Dictionary: setFromDictionary get wrong argument 'dictionary'. Required Dictionary or ReadonlyDictionary. `,
      );

    return this.setFromEntries(dictionary.entries());
  }

  clear(): void {
    return this._map.clear();
  }

  delete(key: Key): boolean {
    return this._map.delete(key);
  }

  set(key: Key, value: Value): this {
    this._map.set(key, value);
    return this;
  }

  setDefault(value: Value): this {
    return this.setDefaultFactory(() => value);
  }

  setDefaultFactory(factoryCallback: (key: Key) => Value): this {
    this._defaultValueFactory = factoryCallback;
    return this;
  }

  asReadonly(): ReadonlyDictionary<Key, Value> {
    return this;
  }

  map<NewValue>(
    callback: (value: Value, key: Key, dictionary: IDictionary<Key, Value>) => NewValue,
  ): IDictionary<Key, NewValue> {
    const newEntries = this.entries().map<[Key, NewValue]>(([key, value]) => [key, callback(value, key, this)]);
    const newDefaultValueFactory = (key?: Key) => callback(this.defaults(key), key, this);

    return new Dictionary(newEntries, newDefaultValueFactory);
  }

  defaults(key?: Key): Value {
    return this._defaultValueFactory?.(key);
  }

  get(key: Key): Value {
    return this.has(key) ? this.getStrict(key) : this.defaults(key);
  }

  getStrict(key: Key): Value {
    return this._map.get(key);
  }

  has(key: Key): boolean {
    return this._map.has(key);
  }

  keys(): Key[] {
    return [...this._map.keys()];
  }

  values(): Value[] {
    return [...this._map.values()];
  }

  entries(): [Key, Value][] {
    return [...this._map.entries()];
  }
}

export function createDictionary<Key, Value>(): Dictionary<Key, Value>;
export function createDictionary<Key extends string | number, Value>(
  record: Record<Key, Value>,
): Dictionary<Key, Value>;
export function createDictionary<Key, Value>(entries: readonly (readonly [Key, Value])[]): Dictionary<Key, Value>;
export function createDictionary<Key, Value>(dictionary: ReadonlyDictionary<Key, Value>): Dictionary<Key, Value>;
export function createDictionary<Key, Value>(
  value?: ReadonlyDictionary<Key, Value> | [Key, Value][] | Record<Key & string, Value>,
): Dictionary<Key, Value> {
  if (!value) return new Dictionary([]);
  if (Array.isArray(value)) return new Dictionary(value);
  if (isDictionary(value)) return new Dictionary<Key, Value>([]).setFromDictionary(value);
  if (typeof value === 'object') return new Dictionary<Key, Value>([]).setFromRecord(value);

  throw new TypeError(
    `Dictionary: createDictionary get wrong argument. Required Dictionary, Record, Entries or be empty.`,
  );
}
