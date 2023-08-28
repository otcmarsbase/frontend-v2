import { RootStore } from '../store/rootStore';

import { appManager } from './AppManager';

export async function onAppLoad() {
  await appManager.start();

  await RootStore.instance.start();

  // const {
  //   serviceManager: { backendApiService },
  // } = appManager;

  if (RootStore.instance.authLocalStore.authToken) {
    try {
      // TODO: implement checking of authToken and getting current user
      // await backendApiService.rpcClient.send(
      //   backendApiService.siteApi.auth.checkToken({}),
      // );
      // instanceStore.user = await backendApiService.rpcClient.send(
      //   backendApiService.siteApi.auth.account.current({}),
      // );
    } catch (err) {
      RootStore.instance.authLocalStore.authToken = null;
    }
  }
}
