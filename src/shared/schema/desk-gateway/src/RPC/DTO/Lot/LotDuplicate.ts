import { Resource } from '../../../Resource';

export namespace LotDuplicate {
  export type Payload = {
    id: number;
  };

  export type Result = Resource.Lot.Lot;
}
