import { FavoriteLot } from '../../../Resource';

export namespace FavoriteLotCreate {
  export type Payload = {
    lot: number;
  };
  export type Result = FavoriteLot;
}
