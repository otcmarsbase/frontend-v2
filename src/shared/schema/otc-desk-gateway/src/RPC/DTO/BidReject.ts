import { Resource } from '../../Resource';

export namespace BidReject {
  export type Payload = {
    id: Resource.Bid.Bid['id'];
    reason: string;
  };
  export type Result = Resource.Bid.Bid;
}
