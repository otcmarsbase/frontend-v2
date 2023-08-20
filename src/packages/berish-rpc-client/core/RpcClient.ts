import {
  RpcClientAdapterIsInvalid,
  RpcClientOptionsIsInvalid,
} from '../exceptions';
import { RpcRequest, RpcResponse } from '../external.types';
import { createInterceptor, Interceptor, push, request } from '../helpers';
import { isNil, requestResolve, responseResolve } from '../utils';

import { IRpcClientAdapter } from './IRpcClientAdapter';
import { RpcError } from './RpcError';

export interface RpcClientOptions {
  adapter: IRpcClientAdapter;
}

export class RpcClient {
  private readonly adapter: IRpcClientAdapter;
  private _requestInterceptor: Interceptor<RpcRequest<any, any>> = null;
  private _responseInterceptor: Interceptor<any> = null;

  constructor(options: RpcClientOptions) {
    if (isNil(options) || typeof options !== 'object')
      throw new TypeError(RpcClientOptionsIsInvalid());

    if (isNil(options.adapter) || typeof options.adapter !== 'object')
      throw new TypeError(RpcClientAdapterIsInvalid());
    this.adapter = options.adapter;
  }

  public get requestInterceptor() {
    if (!this._requestInterceptor)
      this._requestInterceptor = createInterceptor();
    return this._requestInterceptor;
  }

  public get responseInterceptor() {
    if (!this._responseInterceptor)
      this._responseInterceptor = createInterceptor();
    return this._responseInterceptor;
  }

  public request<Result>(
    method: string,
    params: Record<string, any>,
    meta?: Record<string, any>,
  ) {
    return this.send(request<Result>(method, params, meta));
  }

  public push(
    method: string,
    params: Record<string, any>,
    meta?: Record<string, any>,
  ) {
    return this.send(push(method, params, meta));
  }

  public async send<Result>(request: RpcRequest<any, Result>): Promise<Result> {
    const rawResponse = await this.rawSendIntercept(request);
    if (!rawResponse) throw RpcError.ParseError();

    const response = responseResolve<Result>(rawResponse);
    if (response instanceof RpcError) throw response;

    return response;
  }

  public async rawSendIntercept<Params, Result>(
    request: RpcRequest<Params, Result>,
  ): Promise<RpcResponse<Result> | void> {
    request = requestResolve(request);
    if (!request) throw RpcError.InvalidRequest();

    const requestIntercepted = await this.interceptRequest(request);

    const rpcResponse = await this.rawSendWithoutIntercept(requestIntercepted);
    if (requestIntercepted.push && !rpcResponse) return void 0;

    if (!rpcResponse) throw RpcError.ParseError();
    const rpcResponseIntercepted = await this.interceptResponse(rpcResponse);

    return rpcResponseIntercepted;
  }

  public async rawSendWithoutIntercept<Params, Result>(
    request: RpcRequest<Params, Result>,
  ): Promise<RpcResponse<Result> | void> {
    request = requestResolve(request);
    if (!request) throw RpcError.InvalidRequest();

    if (request.push) return this._requestPush(request);
    return this._requestSend(request);
  }

  public async interceptRequest<Params, Result>(
    request: RpcRequest<Params, Result>,
  ) {
    if (this._requestInterceptor) {
      request = await this._requestInterceptor.call(request);
    }
    return request;
  }

  public async interceptResponse<Result>(response: RpcResponse<Result>) {
    if (this._responseInterceptor) {
      response = await this._responseInterceptor.call(response);
    }
    return response;
  }

  // Raw adapter PUSH request
  private async _requestPush<Params, Result>(
    request: RpcRequest<Params, Result>,
  ): Promise<void> {
    try {
      if (!isNil(this.adapter.push)) {
        await this.adapter.push(request);
      } else {
        await this._requestSend(request);
      }

      return void 0;
    } catch (err) {
      if (RpcError.isExtends(err)) throw err;
      throw RpcError.ConnectionError();
    }
  }

  // Raw adapter SEND request
  private async _requestSend<Params, Result>(
    request: RpcRequest<Params, Result>,
  ): Promise<RpcResponse<any>> {
    try {
      const response = await this.adapter.send(request);
      return response;
    } catch (err) {
      if (RpcError.isExtends(err)) throw err;
      throw RpcError.ConnectionError();
    }
  }
}
