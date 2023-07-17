import { useLayoutEffect, useState, memo } from 'react';
import { constants, Router } from 'router5';

import { RouterComponent } from '../types';
import { parseQueryParameters } from '../utils';

export interface PageProviderProps {
  router: Router;
  notFoundComponent?: RouterComponent;
  renderComponent?: <P>(
    Component: RouterComponent<P>,
    props: P,
  ) => React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = memo(
  ({
    router,
    notFoundComponent,
    renderComponent = (Component, props) => <Component {...props} />,
  }) => {
    const [route, setRoute] = useState(() => router.getState());

    useLayoutEffect(() => {
      const unlistener = router.subscribe(({ route }) =>
        setRoute(route),
      ) as () => void;
      return unlistener;
    }, [router]);

    try {
      if (!route || !route.name || route.name === constants.UNKNOWN_ROUTE)
        throw new Error('not found');

      const _route = router.routes.find((m) => m.name === route.name);
      if (!_route) throw new Error('not found');

      route.params = parseQueryParameters(route.params);

      return <>{renderComponent(_route.component, route.params)}</>;
    } catch (error) {
      if (notFoundComponent)
        return <>{renderComponent(notFoundComponent, {})}</>;
      return <>Not found</>;
    }
  },
);
