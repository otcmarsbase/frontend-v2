import { Resource } from '@schema/common';

export namespace Asset {
  export type Id = string;

  export interface Asset extends Resource<'asset'> {
    id: Id;
    name: string;
    logo: string;
  }
}
