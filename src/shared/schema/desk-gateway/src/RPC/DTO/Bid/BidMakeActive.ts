import { Resource } from '../../../Resource';

export namespace BidMakeActive {
  export type Payload = {
    id: Resource.Bid.Bid['id'];
    userId: string;
  };
  export type Result = Resource.Bid.Bid;
}
