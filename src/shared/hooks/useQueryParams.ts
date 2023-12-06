import { useCallback, useMemo, useState, useLayoutEffect } from 'react';

import { useRouter, serializeQueryParameters, deserializeQueryParameters } from '@packages/router5-react-auto';
import { isDeeplyEmpty } from '@shared/utils';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import { Schema, InferType, ValidationError } from 'yup';

export function useQueryParams<T extends Schema<Record<string, any>>>(schema: T, routeParams = {}) {
  const router = useRouter();
  const [currentRouteState, setCurrentRouteState] = useState(() => router.getState());

  useLayoutEffect(() => {
    const subscription = router.subscribe(({ route }) => setCurrentRouteState(route));

    return () => {
      if (typeof subscription === 'function') return subscription();
      if ('unsubscribe' in subscription) return subscription.unsubscribe();
    };
  }, [router]);

  const queryParams = useMemo(() => {
    const query = deserializeQueryParameters(currentRouteState.params);
    const schemaValue = schema.cast({ ...schema.getDefault(), ...query }, { assert: false });
    try {
      schema.validateSync(schemaValue, { abortEarly: false });
    } catch (e) {
      if (e instanceof ValidationError) {
        omit(
          schemaValue,
          e.inner.map(({ path }) => path),
        );
      }
    } finally {
      return omitBy<InferType<T>>(schemaValue, isDeeplyEmpty);
    }
  }, [currentRouteState, schema]);

  const setQueryParams = useCallback(
    (params: InferType<T> | ((prevParams: InferType<T>) => InferType<T>)) => {
      if (typeof params === 'function') {
        params = params(queryParams);
      }

      params = serializeQueryParameters(params);
      params = omitBy(params, isDeeplyEmpty);

      router.navigate(currentRouteState.name, { ...params, ...routeParams }, { replace: true });
    },
    [currentRouteState, queryParams, router, routeParams],
  );

  return { queryParams, setQueryParams };
}
