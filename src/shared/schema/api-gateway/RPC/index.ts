import { RpcApiMethod, RpcApiMethodName, RpcApiPayload, RpcApiResult, RpcSchemaClient } from '@packages/berish-rpc-client-schema';

import * as _DTO from './DTO';
import { Schema as _Schema } from './schema';

export namespace RPC {
  export import DTO = _DTO;

  export type Schema = _Schema;

  export type MethodName = RpcApiMethodName<Schema>;
  export type Method<TPath extends MethodName> = RpcApiMethod<Schema, TPath>;
  export type Payload<TPath extends MethodName> = RpcApiPayload<Schema, TPath>;
  export type Result<TPath extends MethodName> = RpcApiResult<Schema, TPath>;

  export function MethodName<TPath extends MethodName>(path: TPath): TPath {
    return path;
  }

  export interface ClientMeta {
    token?: string;
  }

  export interface ServerMeta {
    authToken?: string;
  }

  export class Client extends RpcSchemaClient<Schema, ClientMeta> {}
}
