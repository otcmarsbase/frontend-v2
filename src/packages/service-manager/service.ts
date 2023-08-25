import {
  SYMBOL_SERVICE_DEBUG,
  SYMBOL_SERVICE_IS_STARTED,
  SYMBOL_SERVICE_NAME,
} from './const';

export class Service<Params extends Record<string, any> = {}> {
  public [SYMBOL_SERVICE_NAME]: string = null;
  public [SYMBOL_SERVICE_DEBUG]: boolean = null;
  public [SYMBOL_SERVICE_IS_STARTED]: boolean = false;

  private _params: Params = {} as any;

  constructor(params: Params) {
    if (typeof params !== 'object' || !params || Array.isArray(params))
      throw new TypeError('params is not correct');

    this._params = params;
  }

  get serviceName(): string {
    return this[SYMBOL_SERVICE_NAME];
  }

  get debug(): boolean {
    return !!this[SYMBOL_SERVICE_DEBUG];
  }

  get params(): Params {
    return this._params;
  }

  get isStarted() {
    return !!this[SYMBOL_SERVICE_IS_STARTED];
  }

  async onStart(): Promise<void> {
    return Promise.resolve();
  }

  async onStop(): Promise<void> {
    return Promise.resolve();
  }
}
