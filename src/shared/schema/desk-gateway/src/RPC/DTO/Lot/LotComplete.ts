import { Resource } from '../../../Resource';

export namespace LotComplete {
  export type Payload = {
    id: number;
  };

  export type Result = Resource.Lot.Lot;
}
