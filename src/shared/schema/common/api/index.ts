import * as Utils from '../utils';

export type APIAtomicType<Payload extends Record<string, any> = any, Result = any> = (payload: Payload) => Result;

export type ApiSchema = Utils.Schema<APIAtomicType<any, any>>;
export type ApiMethodName<TSchema extends ApiSchema> = Utils.Path<TSchema, APIAtomicType<any, any>>;
export type ApiMethod<TSchema extends ApiSchema, TPath extends ApiMethodName<TSchema>> = Utils.PathValue<TSchema, APIAtomicType, TPath>;

export type ApiPayload<TSchema extends ApiSchema, TPath extends ApiMethodName<TSchema>> = ApiMethod<TSchema, TPath> extends APIAtomicType<
  infer Payload,
  any
>
  ? Payload
  : never;

export type ApiResult<TSchema extends ApiSchema, TPath extends ApiMethodName<TSchema>> = ApiMethod<TSchema, TPath> extends APIAtomicType<
  any,
  infer Result
>
  ? Result
  : never;
