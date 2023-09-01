import { rootStore } from '@app/store';
import { createService } from '@packages/service-manager';
import { BackendApiService } from '@services/backend-api-service';
import { AppConfig } from '@shared/config';
import { AuthStore } from 'src/app/components/Resources/Auth/AuthProvider/stores';

export function backendApiService() {
  const {
    debug,
    backend: { apiGatewayUrl },
  } = AppConfig;

  // const { authLocalStore } = rootStore;

  return createService(BackendApiService, {
    serviceName: 'backend-api-service',
    debug,
    onError: (reason) => console.log(reason),

    baseURL: apiGatewayUrl,
    getMeta: async () => {
      const store = AuthStore.getStore();
      return {
        token: store.token,
      };
    },
    setMeta: async (meta) => {
      const store = AuthStore.getStore();

      if (typeof meta.authToken !== 'undefined') {
        await store.updateToken(meta.authToken);
      }
    },
    globalErrorTriggers: [],
  });
}

export { BackendApiService };
