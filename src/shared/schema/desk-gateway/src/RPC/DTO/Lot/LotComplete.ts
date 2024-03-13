import { Lot, LotKey } from '../../../Resource';

export namespace LotComplete {
  export type Payload = {
    id: LotKey['id'];
  };

  export type Result = Lot;
}
