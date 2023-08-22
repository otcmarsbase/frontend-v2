import pages from '@app/pages';
import { instanceStore, authLocalStore } from '@app/store';
import { createService, ServiceManager } from '@packages/service-manager';
import { BackendApiService } from '@services/backend-api-service';
import { AppConfig } from '@shared/config';

import { appManager, ServiceMap } from '../createAppManager';
import { router } from '../router';

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
    // onLogout: async () => {
    //   authLocalStore.authToken = null;

    //   instanceStore.user = null;

    //   router.navigateComponent(pages.home, {});
    // },
    // errorHandlers: [
    //   {
    //     errors: [NotAuthorizedError],
    //     handler: (service, err) => {
    //       return service.siteApi.auth.logOut();
    //     },
    //   },
    // ],
    errorHandlers: [],
  });
}

export { BackendApiService };
