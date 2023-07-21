import { createInterceptor, Interceptor, push, request } from './helpers';
import { RpcError } from './rpcError';
import { RpcRequest, RpcResponse } from './schema';
import { getResponseResult } from './utils';
import { getCorrectRpcRequest } from './utils/getCorrectRpcRequest';

export interface RpcClientOptions {
  send: (request: RpcRequest) => Promise<any>;
  push?: (request: RpcRequest) => Promise<any>;
  parseRawResponse?: (body: any) => any;
}

export class RpcClient {
  private _options: RpcClientOptions = null;
  private _requestInterceptor: Interceptor<RpcRequest<any, any>> = null;
  private _responseInterceptor: Interceptor<any> = null;

  constructor(options: RpcClientOptions) {
    this._options = options;
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
    const response = getResponseResult<Result>(rawResponse);

    if (response instanceof RpcError) throw response;
    return response;
  }

  public async rawSendIntercept<Params, Result>(
    request: RpcRequest<Params, Result>,
  ) {
    request = getCorrectRpcRequest(request);
    if (!request) throw RpcError.InvalidRequest();

    request = await this.interceptRequest(request);

    let rpcResponse = await this.rawSendWithoutIntercept(request);
    rpcResponse = await this.interceptResponse(rpcResponse);

    return rpcResponse;
  }

  public async rawSendWithoutIntercept<Params, Result>(
    request: RpcRequest<Params, Result>,
  ): Promise<RpcResponse<Result>> {
    request = getCorrectRpcRequest(request);
    if (!request) throw RpcError.InvalidRequest();

    if (request.push) {
      if (this._options.push) {
        await this._options.push(request);
      } else {
        await this._options.send(request).catch(() => null);
      }

      return void 0;
    }

    const responseBody = await this._options.send(request);
    const rpcResponse = this._options.parseRawResponse
      ? this._options.parseRawResponse(responseBody)
      : responseBody;

    return rpcResponse;
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
}
