import { Bid, BidKey, UserKey } from '../../../Resource';

export namespace BidAccept {
  export type Payload = {
    id: BidKey['id'];
    userId: UserKey['id'];
  };
  export type Result = Bid;
}
