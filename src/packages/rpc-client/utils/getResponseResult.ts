import { RpcError } from '../rpcError';
import { RpcResponse } from '../schema';

export function getResponseResult<Result>(
  data: RpcResponse<Result> | RpcError,
): Result | RpcError {
  if (RpcError.isRpcError(data)) return data;

  try {
    if (data.error) return RpcError.fromJSON(data.error);
    return data.result;
  } catch (err) {
    if (err instanceof RpcError) return err;
    return RpcError.ParseError();
  }
}
