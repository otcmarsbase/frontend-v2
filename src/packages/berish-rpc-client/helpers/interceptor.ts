import { v4 } from 'uuid';

export type InterceptorCallback<T> = (data: T) => T | Promise<T>;

export interface Interceptor<T> {
  use: (callback: InterceptorCallback<T>) => string;
  eject: (id: string) => void;
  all: () => InterceptorCallback<T>[];
  call: (data: T) => Promise<T>;
}

export function createInterceptor<T>(): Interceptor<T> {
  let map: { id: string; callback: InterceptorCallback<T> }[] = [];

  const use: Interceptor<T>['use'] = (callback) => {
    const id = v4();
    map.push({ id, callback });
    return id;
  };

  const eject: Interceptor<T>['eject'] = (id) => {
    map = map.filter((m) => m.id !== id);
  };

  const all: Interceptor<T>['all'] = () => map.map((m) => m.callback);

  const call: Interceptor<T>['call'] = (data) =>
    all().reduce(
      (dataPromise, interceptorCallback) =>
        dataPromise.then((data: T) => interceptorCallback(data)),
      Promise.resolve(data) as Promise<T>,
    );

  return {
    use,
    eject,
    all,
    call,
  };
}
