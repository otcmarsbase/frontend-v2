import { Fragment, useState, useEffect } from 'react';

import { PortalRenderProvider, PortalStore } from '../types';

export const createPortalRenderProvider = (store: PortalStore): PortalRenderProvider => {
  return () => {
    const [instances, setInstances] = useState(() => store.current());

    useEffect(
      () =>
        store.listen(() => {
          setInstances(store.current());
        }),
      [],
    );

    return (
      <Fragment>
        {instances.map((instance) => (
          <Fragment key={instance.id}>{instance.element}</Fragment>
        ))}
      </Fragment>
    );
  };
};
