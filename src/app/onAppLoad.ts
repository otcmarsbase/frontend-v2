import { createAppManager } from './logic';
import { authLocalStore, instanceStore } from './store';

export async function onAppLoad() {
  const appManager = createAppManager();
  await appManager.start();

  const {
    serviceManager: { backendApiService },
  } = appManager;

  if (authLocalStore.authToken) {
    try {
      // TODO: implement checking of authToken and getting current user
      // await backendApiService.rpcClient.send(
      //   backendApiService.siteApi.auth.checkToken({}),
      // );
      // instanceStore.user = await backendApiService.rpcClient.send(
      //   backendApiService.siteApi.auth.account.current({}),
      // );
    } catch (err) {
      authLocalStore.authToken = null;
    }
  }
}
