 
export interface RpcRequest<
  Params extends Record<string, any> = Record<string, any>,
  Result = any,
> {
  method?: string;
  meta?: Record<string, any>;
  params?: Params;
  push?: boolean;
}

// export interface RpcRequestSendClaim<Result> {
//   type: 'send_claim';
//   meta: Record<string, any>;
//   method: string;
//   params: any;
// }

// export interface RpcRequestPushClaim {
//   type: 'push_claim';
//   meta: Record<string, any>;
//   method: string;
//   params: any;
// }

export interface RpcResponse<Result> {
  result?: Result;
  error?: RpcResponseError;
}

export interface RpcResponseError {
  name: string;
  message: string;
  data?: Record<string, any>;
}
