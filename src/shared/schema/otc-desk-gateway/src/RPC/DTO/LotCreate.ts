import { Resource } from '../../Resource';
import { Lot } from '../../Resource/Lot';

export namespace LotCreate {
  export type Payload = {
    type: Lot.Enums.LotType;
    inputs: Lot.LotInputObject;
  };
  export type Result = Resource.Lot.Lot;
}
