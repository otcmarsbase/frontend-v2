import React from 'react';

import { v4 } from 'uuid';

import {
  PortalController,
  PortalControllerResolver,
  PortalProps,
  PortalResolver,
  PortalStoreAdapter,
} from '../types';

export function createPortalController(
  store: PortalStoreAdapter,
): PortalController {
  const add: PortalController['add'] = (node) => {
    store.push(node);
  };

  const destroy: PortalController['destroy'] = (node) => {
    store.destroy(node);
  };

  const create: PortalController['create'] = <Resolve>(
    component,
    props: PortalProps<Resolve>,
  ): PortalControllerResolver<Resolve> => {
    const nodeId = v4();

    const portal: PortalResolver<Resolve> = { resolve: null, reject: null };
    const node = React.createElement(
      component,
      Object.assign({}, { key: nodeId, portal }, props),
    );

    const promise = new Promise<Resolve>((resolve, reject) => {
      portal.resolve = (data) => {
        destroy(node);
        resolve(data);
      };
      portal.reject = (reason) => {
        destroy(node);
        reject(reason);
      };

      store.push(node);
    }) as PortalControllerResolver<Resolve>;

    promise.id = nodeId;
    promise.node = node;
    promise.destroy = () => destroy(node);

    return promise;
  };

  return { create, add, destroy };
}
