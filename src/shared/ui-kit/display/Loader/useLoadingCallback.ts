import { useCallback, useMemo, useState } from 'react';

export interface LoadingCallback<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T>;

  keyLoad(key: string | number): {
    (...args: Parameters<T>): ReturnType<T>;
    isLoading: boolean;
  };
  isLoading: boolean;
  isLoadingAny: boolean;
}

export function useLoadingCallback<T extends (...args: any[]) => any>(callback: T): LoadingCallback<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMap, setLoadingMap] = useState(new Map<string | number, boolean>());

  const updateMap = useCallback(
    (key: string | number, value: boolean) => setLoadingMap((map) => new Map(map.set(key, value))),
    [],
  );
  const isLoadingAny = useMemo(
    () => isLoading || Array.from(loadingMap.values()).some((m) => m),
    [isLoading, loadingMap],
  );

  const execution: LoadingCallback<T> = useCallback(
    (...args: Parameters<T>) => {
      const result = callback(...args);

      if (result instanceof Promise) {
        setIsLoading(true);

        return result
          .then((result) => {
            setIsLoading(false);
            return result;
          })
          .catch((err) => {
            setIsLoading(false);
            return Promise.reject(err);
          });
      }
      return result;
    },
    [callback],
  ) as LoadingCallback<T>;

  const partLoading = useCallback((key: string | number) => loadingMap.get(key) || false, [loadingMap]);

  const keyLoad = useCallback(
    (key: string | number) => {
      const a = ((...args: Parameters<T>) => {
        const result = callback(...args);

        if (result instanceof Promise) {
          updateMap(key, true);

          return result
            .then((result) => {
              updateMap(key, false);
              return result;
            })
            .catch((err) => {
              updateMap(key, false);
              return Promise.reject(err);
            });
        }
        return result;
      }) as LoadingCallback<T>;

      a.isLoading = partLoading(key);
      return a;
    },
    [partLoading, callback, updateMap],
  ) as (key: string | number) => LoadingCallback<T>;

  execution.keyLoad = keyLoad;
  execution.isLoading = isLoading;
  execution.isLoadingAny = isLoadingAny;

  return execution;
}
