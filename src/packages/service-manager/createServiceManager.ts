import { SYMBOL_SERVICE_IS_STARTED } from './const';
import { Service } from './service';

export type ServiceConnector<Service> = (manager: ServiceManager<any>) => Service;
export type ServiceConnectMap<ServiceMap extends { [key: string]: Service<any> }> = {
  [P in keyof ServiceMap]: ServiceMap[P] | ServiceConnector<ServiceMap[P]>;
};

export interface ServiceBaseManager {
  start: () => Promise<void>;
  stop: () => Promise<void>;
}

export type ServiceManager<Map extends { [key: string]: any }> = Map & ServiceBaseManager;

export function createServiceManager<Map extends { [key: string]: any }>(map: ServiceConnectMap<Map>): ServiceManager<Map> {
  const manager: ServiceManager<Map> = { ...map } as any;
  const entries: [keyof ServiceManager<Map>, any][] = Object.entries(map).filter(([key, value]) => !!value);

  const getServices = (): Service[] => {
    return Object.values(manager).filter((m) => m instanceof Service);
  };
  manager.start = async () => {
    const results = await Promise.all(
      getServices().map(async (service) => {
        try {
          if (!service.isStarted) {
            if (service.onStart) await service.onStart();
            service[SYMBOL_SERVICE_IS_STARTED] = true;
          }
          return { serviceName: service.serviceName, started: service[SYMBOL_SERVICE_IS_STARTED] };
        } catch (err) {
          return { serviceName: service.serviceName, started: service[SYMBOL_SERVICE_IS_STARTED], error: (err && err['message']) || err };
        }
      }),
    );
    console.log('[SERVICES] Start status');
    console.table(results);
  };

  manager.stop = async () => {
    const results = await Promise.all(
      getServices().map(async (service) => {
        try {
          if (service.isStarted) {
            if (service.onStop) await service.onStop();
            service[SYMBOL_SERVICE_IS_STARTED] = false;
          }
          return { serviceName: service.serviceName, stopped: !service[SYMBOL_SERVICE_IS_STARTED] };
        } catch (err) {
          return { serviceName: service.serviceName, stopped: !service[SYMBOL_SERVICE_IS_STARTED], error: (err && err['message']) || err };
        }
      }),
    );
    console.log('[SERVICES] Stop status');
    console.table(results);
  };

  for (const [key, value] of entries) {
    manager[key] = value instanceof Service ? value : value(manager);
  }

  return manager;
}
