import { appManager } from '@app/logic';

export class SystemStore {
  static _instance: SystemStore;

  static getStore() {
    if (!this._instance) this._instance = new SystemStore();
    return this._instance;
  }

  private _apiVersion: string;
  private _maintenance: boolean;

  get apiVersion() {
    return this._apiVersion;
  }

  get maintenance() {
    return this._maintenance;
  }

  async start() {
    const { schema } = appManager.serviceManager.backendApiService;

    this._apiVersion = await schema.send('system.getVersion', {});

    // TODO: get value from backend or variable
    this._maintenance = false;
  }
}
