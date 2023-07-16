import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { PortalStoreAdapter } from '../types';

export function createPortalProvider(store: PortalStoreAdapter): React.FC<{}> {
  return function () {
    const [id, setId] = useState('');
    const [nodes, setNodes] = useState(() => store.current());

    useEffect(
      () =>
        store.listen(() => {
          setNodes(store.current());
          setId(v4());
        }),
      [],
    );

    return <React.Fragment key={id}>{nodes}</React.Fragment>;
  };
}
