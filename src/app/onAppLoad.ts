import { createAppManager } from './logic';

export async function onAppLoad() {
  const appManager = createAppManager();
  await appManager.start();

  const {
    serviceManager: { backendApiService },
  } = appManager;

  // Здесь первоначальная прогрузка приложения
}
