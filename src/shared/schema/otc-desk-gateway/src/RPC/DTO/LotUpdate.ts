import { Resource } from '../../Resource';
import { Lot } from '../../Resource/Lot';

export namespace LotUpdate {
  export type Payload = {
    id: number;

    type?: Lot.Enums.LotType;
    inputs?: Lot.LotInputObject;
  };
  export type Result = Resource.Lot.Lot;
}
