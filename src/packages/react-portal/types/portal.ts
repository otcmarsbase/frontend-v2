import { PortalProps } from './resolver';

export interface PortalProvider {}

export interface PortalControllerResolver<T> extends Promise<T> {
  id: string;
  node: React.ReactNode;
  destroy(): void;
}

export interface PortalController {
  create<Props, Resolve>(
    instance: React.ComponentType<Props & PortalProps<Resolve>>,
    props: Props,
  ): PortalControllerResolver<Resolve>;

  add(node: React.ReactNode): void;
  destroy(node: React.ReactNode): void;
}

export interface Portal {
  Provider: PortalProvider;
  Controller: PortalController;
}
