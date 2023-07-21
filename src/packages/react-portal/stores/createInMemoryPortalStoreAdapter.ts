import { PortalStoreAdapter, Subscriber } from '../types';

export function createInMemoryPortalStoreAdapter(): PortalStoreAdapter {
  let nodes: React.ReactNode[] = [];

  const _subscribers: Subscriber[] = [];

  const pushUpdates = () => {
    for (const subscriber of _subscribers) {
      setTimeout(() => subscriber(store), 0);
    }
  };

  const current: PortalStoreAdapter['current'] = () => nodes;
  const listen: PortalStoreAdapter['listen'] = (subscriber) => {
    _subscribers.push(subscriber);

    return () => {
      _subscribers.splice(_subscribers.indexOf(subscriber), 1);
    };
  };

  const push: PortalStoreAdapter['push'] = (...newNodes: React.ReactNode[]) => {
    const notExists = newNodes.filter((node) => nodes.indexOf(node) === -1);
    nodes.push(...notExists);

    pushUpdates();
  };

  const destroy: PortalStoreAdapter['destroy'] = (
    ...prevNodes: React.ReactNode[]
  ) => {
    nodes = nodes.filter((m) => prevNodes.indexOf(m) === -1);
    pushUpdates();
  };

  const store: PortalStoreAdapter = { current, listen, push, destroy };

  return store;
}
