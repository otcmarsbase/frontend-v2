export type Subscriber = (store: PortalStoreAdapter) => void;
export type Unsubscribe = () => void;

export interface PortalStoreAdapter {
  current(): React.ReactNode[];
  listen(subscriber: Subscriber): Unsubscribe;

  push(...nodes: React.ReactNode[]): void;
  destroy(...nodes: React.ReactNode[]): void;
}
