import { Asset, AssetKey } from '../../../Resource';

export namespace AssetGetById {
  export type Payload = {
    id: AssetKey['id'];
  };
  export type Result = Asset;
}
