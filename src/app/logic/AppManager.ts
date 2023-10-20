import pages from '@app/pages';
import { autoGenerateRoutes, createRouter } from '@packages/router5-react-auto';
import { ServiceManager, createServiceManager } from '@packages/service-manager';
import { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';

import { BackendApiService, backendApiService } from './services';

const homePageItem = 'home';
const paramsPageItem = '__';

export interface ServiceMap {
  backendApiService: BackendApiService;
}

class AppManager {
  private _router: Router;
  private _serviceManager: ServiceManager<ServiceMap>;

  constructor() {
    const routes = autoGenerateRoutes({
      pages,
      ignorePages: pages.Errors,
      homePageItem,
      paramsPageItem,
    });

    this._router = createRouter(routes, [loggerPlugin, browserPlugin()]);
    this._serviceManager = createServiceManager<ServiceMap>({
      backendApiService,
    });
  }

  get router() {
    return this._router;
  }

  get serviceManager() {
    return this._serviceManager;
  }

  async start() {
    await this._serviceManager.start();
  }

  async stop() {
    await this._serviceManager.stop();
  }
}

export const appManager = new AppManager();
