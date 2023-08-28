import { SYMBOL_SERVICE_DEBUG, SYMBOL_SERVICE_NAME } from './const';
import { Service } from './service';

export type ServiceParamsType<T extends Service<any>> = T extends Service<infer Params> ? Params : T;

export interface BaseParams {
  /**
   * Service name
   */
  serviceName: string;
  /**
   * Debug mode
   * @default false
   */
  debug?: boolean;

  /**
   * Emitting when error
   */
  onError?: (reason: Error, service: Service<any>) => any;
}

export function createService<TService extends Service<any>>(
  service: new (...args: any[]) => TService,
  params: BaseParams & ServiceParamsType<TService>,
): TService {
  const { serviceName, debug } = params as BaseParams;
  const instance = new service(params);

  instance[SYMBOL_SERVICE_NAME] = serviceName;
  instance[SYMBOL_SERVICE_DEBUG] = debug;

  return instance;
}
