import { rootStore } from '../store/rootStore';

import { appManager } from './AppManager';

export async function onAppLoad() {
  await appManager.start();
  await rootStore.start();
}
