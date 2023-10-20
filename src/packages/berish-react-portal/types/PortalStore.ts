import { PortalInstanceControl } from './PortalController';

export type Subscriber = (store: PortalStore) => void;
export type Unsubscribe = () => void;

export interface PortalStore {
  current(): PortalInstanceControl<any, any>[];
  listen(subscriber: Subscriber): Unsubscribe;

  upsert(instanceControl: PortalInstanceControl<any, any>): void;
  destroy(instanceControl: PortalInstanceControl<any, any>): void;
}
