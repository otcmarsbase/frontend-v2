import { Bid, BidKey } from '../../../Resource';

export namespace BidMakeActive {
  export type Payload = {
    id: BidKey['id'];
    userId: string;
  };
  export type Result = Bid;
}
