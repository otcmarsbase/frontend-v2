import { Resource } from '../../Resource';

export namespace LotSendOnModeration {
  export type Payload = {
    id: number;
  };
  export type Result = Resource.Lot.Lot;
}
