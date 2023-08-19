import {
  createServiceManager,
  ServiceManager,
} from 'src/packages/service-manager';
import {
  getErrorRegistrator,
  Registrator,
} from 'src/services/backend-api-service';

import { BackendApiService, backendApiService } from './services';

export interface ServiceMap {
  backendApiService: BackendApiService;
}

export interface AppManager {
  serviceManager: ServiceManager<ServiceMap>;
  errorRegistrator: Registrator;

  start?: () => Promise<void>;
  stop?: () => Promise<void>;
}

export let appManager: AppManager = null;

export function createAppManager(): AppManager {
  console.log(`[APP]: Create AppManager.`);

  const errorRegistrator = getErrorRegistrator();

  appManager = {
    errorRegistrator,
    serviceManager: null,
  };

  appManager.serviceManager = createServiceManager<ServiceMap>({
    backendApiService,
  });

  appManager.start = async () => {
    try {
      await appManager.serviceManager.start();
      console.log(`[APP]: START: success.`);
    } catch (err) {
      console.log(`[APP]: START: fail.`, err);
    }
  };

  appManager.stop = async () => {
    try {
      await appManager.serviceManager.stop();
      console.log(`[APP]: STOP: success.`);
    } catch (err) {
      console.log(`[APP]: STOP: fail.`, err);
    }
  };

  return appManager;
}
