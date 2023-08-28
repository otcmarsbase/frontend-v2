import { Registrator } from '@berish/class';

import { IEquatable } from './IEquatable';
import { NullableObject } from './NullableObject';
import { ConstructorType } from './This';

export abstract class RuntimeError<Params extends Record<string, any> = {}>
  implements IEquatable<RuntimeError<Params>>
{
  private static registrator: Registrator = new Registrator();

  static RegisterError(name: string): ClassDecorator {
    return (a: any) => {
      RuntimeError.registrator.register(name, a);
    };
  }

  static resolveError(name: string, params: Record<string, any>): RuntimeError {
    if (RuntimeError.registrator.isRegisteredName(name)) {
      const cls = RuntimeError.registrator.getClassesByClassName(name)[0];
      if (cls) {
        return RuntimeError.registrator.getInstanceByClass({ name, params }, cls);
      }
    }
    return null;
  }

  static isExtends<T extends RuntimeError<any>>(
    this: ConstructorType<T, typeof RuntimeError>,
    instance: any,
  ): instance is T {
    const self = this as any as typeof RuntimeError;

    return !!instance && instance instanceof self;
  }

  static isEquals<T extends RuntimeError<any>>(this: ConstructorType<T, typeof RuntimeError>, first: T, second: T) {
    if (NullableObject.isEmpty(first) && NullableObject.isEmpty(second)) return true;
    if (NullableObject.isEmpty(first) || NullableObject.isEmpty(second)) return false;

    if (!this.isExtends(first) || !this.isExtends(second)) return false;
    if (!this.isEqualsTypes(first, second)) return false;

    // Одна и та же ссылка
    if (first === second) return true;
    return first.name === second.name;
  }

  static isEqualsTypes<T extends RuntimeError<any>>(
    this: ConstructorType<T, typeof RuntimeError>,
    first: T,
    second: T,
  ): boolean {
    if (NullableObject.isEmpty(first) && NullableObject.isEmpty(second)) return true;
    if (NullableObject.isEmpty(first) || NullableObject.isEmpty(second)) return false;
    if (!this.isExtends(first) || !this.isExtends(second)) return false;

    const firstStaticClass = first.constructor as typeof RuntimeError;
    const secondStaticClass = second.constructor as typeof RuntimeError;

    return firstStaticClass === secondStaticClass;
  }

  private readonly _name: string;
  private readonly _params: Params;

  abstract get message(): string;

  constructor(name: string, params: Params) {
    this._name = name;
    this._params = params || ({} as Params);
  }

  get name() {
    return this._name;
  }

  get params() {
    return this._params;
  }

  toString(): string {
    return String(this.name);
  }

  isEquals(other: this): boolean {
    const staticClass = this.constructor as typeof RuntimeError;
    return staticClass.isEquals(this, other);
  }
}
