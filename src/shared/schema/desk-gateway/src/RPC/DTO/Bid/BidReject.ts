import { Bid, BidKey } from '../../../Resource';

export namespace BidReject {
  export type Payload = {
    id: BidKey['id'];
    reason: string;
  };
  export type Result = Bid;
}
