import { rootStore } from '@app/store';
import { createService } from '@packages/service-manager';
import { BackendApiService } from '@services/backend-api-service';
import { AppConfig } from '@shared/config';

export function backendApiService() {
  const {
    debug,
    backend: { apiGatewayUrl },
  } = AppConfig;

  return createService(BackendApiService, {
    serviceName: 'backend-api-service',
    debug,
    onError: (reason) => console.error(reason),

    baseURL: apiGatewayUrl,
    getMeta: async () => {
      const store = rootStore.authStore;
      return {
        token: store.token,
      };
    },
    setMeta: async (meta) => {
      const store = rootStore.authStore;

      if (typeof meta.authToken !== 'undefined') {
        await store.updateToken(meta.authToken);
      }
    },
    globalErrorTriggers: [],
  });
}

export { BackendApiService };
