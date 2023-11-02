import { Resource } from '../../../Resource';

export namespace LotArchive {
  export type Payload = {
    id: number;
  };

  export type Result = Resource.Lot.Lot;
}
