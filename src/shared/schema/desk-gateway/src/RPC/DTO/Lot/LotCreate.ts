import { Resource } from '../../../Resource';

export namespace LotCreate {
  export type Payload = {
    type: Resource.Lot.Enums.LotType;
    inputs: Resource.Lot.LotInputObject;
  };
  export type Result = Resource.Lot.Lot;
}
