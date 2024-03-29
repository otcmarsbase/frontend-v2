import { PortalProps, PortalInstance, PortalPropsInferResult } from './PortalInstance';

export interface PortalInstanceControlMeta<Props, Result> {
  readonly id: string;
  readonly component: React.ComponentType<Props & PortalProps<Result>>;
  readonly props: Readonly<Props & PortalProps<Result>>;
  readonly element: JSX.Element;
}

export interface PortalInstanceControl<Props, Result>
  extends Promise<Result>,
    PortalInstanceControlMeta<Props, Result>,
    PortalInstance<Result> {
  readonly isResulted: boolean;
  updateProps(props: Props): void;
  forceDestroy(): void;
}

export interface PortalWrapper<Props, Result> {
  create(props: Props): PortalInstanceControl<Props, Result>;
  updateProps(instance: PortalInstanceControl<Props, Result>, props: Props): void;
  resolve(instance: PortalInstanceControl<Props, Result>, Result: Result): void;
  reject(instance: PortalInstanceControl<Props, Result>, reason?: any): void;
  forceDestroy(instance: PortalInstanceControl<Props, Result>): void;
}

export interface PortalController {
  create<Component extends React.ComponentType<any>>(
    instance: Component,
    props: React.ComponentProps<Component>,
  ): PortalInstanceControl<React.ComponentProps<Component>, PortalPropsInferResult<React.ComponentProps<Component>>>;
  wrap<Props, Resolve>(component: React.ComponentType<Props & PortalProps<Resolve>>): PortalWrapper<Props, Resolve>;

  updateProps<Props, Result>(instance: PortalInstanceControl<Props, Result>, props: Props): void;
  resolve<Props, Result>(instance: PortalInstanceControl<Props, Result>, Result: Result): void;
  reject<Props, Result>(instance: PortalInstanceControl<Props, Result>, reason?: any): void;
  forceDestroy<Props, Result>(instance: PortalInstanceControl<Props, Result>): void;
}
