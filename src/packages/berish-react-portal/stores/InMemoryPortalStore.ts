import { PortalInstanceControl, PortalStore, Subscriber, Unsubscribe } from '../types';

export class InMemoryPortalStore implements PortalStore {
  private readonly subscribers: Subscriber[] = [];
  private instances: PortalInstanceControl<any, any>[];

  constructor() {
    this.instances = [];
  }

  current(): PortalInstanceControl<any, any>[] {
    return this.instances.slice();
  }

  listen(subscriber: Subscriber): Unsubscribe {
    this.subscribers.push(subscriber);

    return () => {
      this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    };
  }

  upsert(instanceControl: PortalInstanceControl<any, any>): void {
    const currentInstances = this.instances.slice();
    const currentIndex = currentInstances.findIndex((current) => current.id === instanceControl.id);

    if (currentIndex === -1) {
      this.instances.push(instanceControl);
    } else {
      this.instances[currentIndex] = instanceControl;
    }

    this.emit();
  }

  destroy(instanceControl: PortalInstanceControl<any, any>): void {
    const currentInstances = this.instances.slice();
    const currentIndex = currentInstances.findIndex((current) => current.id === instanceControl.id);

    if (currentIndex !== -1) {
      this.instances.splice(currentIndex, 1);
    }

    this.emit();
  }

  private emit() {
    const subscribers = this.subscribers.slice();

    for (const subscriber of subscribers) {
      setTimeout(() => subscriber(this), 0);
    }
  }
}
