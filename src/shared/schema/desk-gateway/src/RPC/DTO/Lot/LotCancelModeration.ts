import { Resource } from '../../../Resource';

export namespace LotCancelModeration {
  export type Payload = {
    id: number;
  };
  export type Result = Resource.Lot.Lot;
}
