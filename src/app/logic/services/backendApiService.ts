import { AppConfig } from '@app/config';
import { RootStore } from '@app/store';
import { createService } from '@packages/service-manager';
import { BackendApiService } from '@services/backend-api-service';

export function backendApiService() {
  const {
    debug,
    backend: { apiGatewayUrl },
  } = AppConfig;

  const { authLocalStore } = RootStore.instance;

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
