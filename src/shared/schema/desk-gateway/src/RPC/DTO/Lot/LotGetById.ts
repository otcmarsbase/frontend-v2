import { Lot, LotKey } from '../../../Resource';

export namespace LotGetById {
  export type Payload = {
    id: LotKey['id'];
  };
  export type Result = Lot;
}
