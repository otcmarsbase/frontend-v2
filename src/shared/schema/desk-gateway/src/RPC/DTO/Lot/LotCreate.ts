import { Lot, LotInputObject, LotType } from '../../../Resource';

export namespace LotCreate {
  export type Payload = {
    type: LotType;
    inputs: LotInputObject;
  };
  export type Result = Lot;
}
