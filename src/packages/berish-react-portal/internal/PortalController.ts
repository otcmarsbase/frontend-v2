import React from 'react';

import { v4 } from 'uuid';

import {
  PortalController as IPortalController,
  PortalInstance,
  PortalInstanceControl,
  PortalInstanceControlMeta,
  PortalProps,
  PortalStore,
  PortalWrapper,
} from '../types';

export class PortalController implements IPortalController {
  private readonly store: PortalStore;
  private readonly instanceMap: WeakMap<PortalInstanceControl<any, any>, PortalInstance<any>> = new WeakMap();

  constructor(store: PortalStore) {
    this.store = store;
  }

  create<Props, Result>(
    component: React.ComponentType<Props & PortalProps<Result>>,
    props: Props,
  ): PortalInstanceControl<Props, Result> {
    const id = v4();

    let promiseResolve: (value: Result | PromiseLike<Result>) => void = null;
    let promiseReject: (reason?: any) => void = null;
    const instanceControl = new Promise<Result>((resolve, reject) => {
      promiseResolve = resolve;
      promiseReject = reject;
    }) as PortalInstanceControl<Props, Result>;

    // Create child instance
    const portalInstance: PortalInstance<Result> = {
      resolve: (value) => {
        this.forceDestroy(instanceControl);

        if (!instanceControl.isResulted) {
          this._updateIsResulted(instanceControl);
          promiseResolve(value);
        }
      },
      reject: (reason) => {
        this.forceDestroy(instanceControl);

        if (!instanceControl.isResulted) {
          this._updateIsResulted(instanceControl);
          promiseReject(reason);
        }
      },
    };

    // Define portal instance meta
    const instanceMeta = this._createInstanceControlMeta(id, component, portalInstance, props);
    Object.defineProperties(instanceControl, Object.getOwnPropertyDescriptors(instanceMeta));

    // Define helpers
    instanceControl.forceDestroy = () => this.forceDestroy(instanceControl);
    instanceControl.reject = (reason) => this.reject(instanceControl, reason);
    instanceControl.resolve = (value) => this.resolve(instanceControl, value);
    instanceControl.updateProps = (props) => this.updateProps(instanceControl, props);

    this.instanceMap.set(instanceControl, portalInstance);
    this.store.upsert(instanceControl);

    return instanceControl;
  }

  updateProps<Props, Result>(instanceControl: PortalInstanceControl<Props, Result>, props: Props): void {
    const instance = this.instanceMap.get(instanceControl);
    if (instance) {
      const instanceMeta = this._createInstanceControlMeta(
        instanceControl.id,
        instanceControl.component,
        instance,
        props,
      );
      Object.defineProperties(instanceControl, Object.getOwnPropertyDescriptors(instanceMeta));

      this.store.upsert(instanceControl);
    }
  }

  wrap<Props, Result>(component: React.ComponentType<Props & PortalProps<Result>>): PortalWrapper<Props, Result> {
    throw new Error('Method not implemented.');
  }

  resolve<Props, Result>(instanceControl: PortalInstanceControl<Props, Result>, result: Result): void {
    const instance = this.instanceMap.get(instanceControl);
    if (instance) {
      instance.resolve(result);
    }
  }

  reject<Props, Result>(instanceControl: PortalInstanceControl<Props, Result>, reason?: any): void {
    const instance = this.instanceMap.get(instanceControl);
    if (instance) {
      instance.reject(reason);
    }
  }

  forceDestroy<Props, Result>(instanceControl: PortalInstanceControl<Props, Result>): void {
    this.instanceMap.delete(instanceControl);
    this.store.destroy(instanceControl);
  }

  private _updateIsResulted<Props, Result>(instanceControl: PortalInstanceControl<Props, Result>) {
    if (instanceControl) {
      Object.defineProperty(instanceControl, 'isResulted', { get: () => true });
    }
  }

  private _createInstanceControlMeta<Props, Result>(
    id: string,
    component: React.ComponentType<Props & PortalProps<Result>>,
    portalInstance: PortalInstance<Result>,
    originalProps: Props,
  ): PortalInstanceControlMeta<Props, Result> {
    const props = Object.assign({}, { key: id, portal: portalInstance }, originalProps);
    const element = React.createElement(component, props);

    return {
      id,
      component,
      props,
      element,
    };
  }
}
