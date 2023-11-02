import { Resource } from '../../../Resource';

export namespace LotUpdate {
  export type Payload = {
    id: number;

    type?: Resource.Lot.Enums.LotType;
    inputs?: Resource.Lot.LotInputObject;
  };
  export type Result = Resource.Lot.Lot;
}
