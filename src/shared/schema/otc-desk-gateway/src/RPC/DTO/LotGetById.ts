import { Resource } from '../../Resource';

export namespace LotGetById {
  export type Payload = {
    id: number;
  };
  export type Result = Resource.Lot.Lot;
}
