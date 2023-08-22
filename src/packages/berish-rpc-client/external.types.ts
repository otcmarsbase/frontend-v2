// eslint-disable-next-line @typescript-eslint/no-unused-vars

export type RpcResponseStatus = 'success' | 'error';

export interface RpcRequest<Params extends Record<string, any> = Record<string, any>, Result = any> {
  method?: string;
  meta?: Record<string, any>;
  params?: Params;
  push?: boolean;
}

export interface RpcResponse<Result> {
  status: RpcResponseStatus;

  result?: Result;
  error?: RpcResponseError;

  warnings?: string[];
  meta?: Record<string, any>;
}

export interface RpcResponseError {
  name: string;
  message: string;
  data?: Record<string, any>;
}
