import { AuthStore } from '../components/Resources/Auth/AuthProvider/stores';
import { rootStore } from '../store/rootStore';

import { appManager } from './AppManager';

export async function onAppLoad() {
  await appManager.start();

  await rootStore.start();

  const authStore = AuthStore.getStore();
  await authStore.start();

  // if (rootStore.authLocalStore.authToken) {
  //   try {
  //     // TODO: implement checking of authToken and getting current user
  //     // await backendApiService.rpcClient.send(
  //     //   backendApiService.siteApi.auth.checkToken({}),
  //     // );
  //     // instanceStore.user = await backendApiService.rpcClient.send(
  //     //   backendApiService.siteApi.auth.account.current({}),
  //     // );
  //   } catch (err) {
  //     rootStore.authLocalStore.authToken = null;
  //   }
  // }
}
