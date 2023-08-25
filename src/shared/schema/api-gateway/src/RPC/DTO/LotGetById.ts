import { Resource } from '../../Resource';

export namespace LotGetById {
  export type Payload = {
    id: string;
  };
  export type Result = Resource.Lot.Lot;
}
