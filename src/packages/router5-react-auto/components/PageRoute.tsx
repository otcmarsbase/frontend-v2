import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { constants } from 'router5';
import { useRouter } from '../context';
import {
  PageComponent,
  PageRenderFunction,
  deserializeQueryParameters,
} from '../core';

export interface PageRouteProps {
  notFound?: PageComponent;
  render?: PageRenderFunction;
}

export const PageRoute: React.FC<PageRouteProps> = ({
  notFound,
  render = DefaultPageRenderFunction,
}) => {
  const router = useRouter();
  const [currentRouteState, setCurrentRouteState] = useState(() =>
    router.getState(),
  );

  useLayoutEffect(() => {
    const subscription = router.subscribe(({ route }) =>
      setCurrentRouteState(route),
    );

    return () => {
      if (typeof subscription === 'function') return subscription();
      if ('unsubscribe' in subscription) return subscription.unsubscribe();
    };
  }, [router]);

  const registeredRoute = useMemo(() => {
    if (
      !currentRouteState ||
      !currentRouteState.name ||
      currentRouteState.name === constants.UNKNOWN_ROUTE
    )
      return null;

    const registeredRoute = router.routes.find(
      (routerRoute) => routerRoute.name === currentRouteState.name,
    );
    if (!registeredRoute) return null;
    return registeredRoute;
  }, [router, currentRouteState]);

  useEffect(() => {
    if (currentRouteState) {
      currentRouteState.params = deserializeQueryParameters(
        currentRouteState.params,
      );
    }
  }, [currentRouteState]);

  // Default render route
  if (registeredRoute)
    return render(registeredRoute.component, currentRouteState.params);

  // Empty render Route
  if (notFound) return render(notFound, {});
  return <>Route not found: {currentRouteState?.name}</>;
};

const DefaultPageRenderFunction: PageRenderFunction = (Component, props) => (
  <Component {...props} />
);
