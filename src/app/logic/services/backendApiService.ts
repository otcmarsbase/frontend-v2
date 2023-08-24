import { authLocalStore } from '@app/store';
import { createService, ServiceManager } from '@packages/service-manager';
import { BackendApiService } from '@services/backend-api-service';
import { AppConfig } from '@shared/config';

import { ServiceMap } from '../createAppManager';

export function backendApiService(serviceManager: ServiceManager<ServiceMap>) {
  const {
    debug,
    backend: { apiGatewayUrl },
  } = AppConfig;

  return createService(BackendApiService, {
    serviceName: 'backend-api-service',
    debug,
    onError: (reason) => console.log(reason),

    baseURL: apiGatewayUrl,
    getMeta: async () => ({
      token: authLocalStore.authToken,
    }),
    setMeta: async (meta) => {
      if (meta.authToken) {
        authLocalStore.authToken = meta.authToken;
      }
    },
    globalErrorTriggers: [],
  });
}

export { BackendApiService };
