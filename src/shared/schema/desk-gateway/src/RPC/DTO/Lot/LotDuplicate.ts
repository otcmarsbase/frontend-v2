import { Lot, LotKey } from '../../../Resource';

export namespace LotDuplicate {
  export type Payload = {
    id: LotKey['id'];
  };

  export type Result = Lot;
}
