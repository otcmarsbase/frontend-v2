import { RpcError } from '../rpcError';

export function responseStringParser(body: any) {
  try {
    return JSON.parse(body);
  } catch (err) {
    if (err instanceof RpcError) return err;
    return RpcError.ParseError();
  }
}
