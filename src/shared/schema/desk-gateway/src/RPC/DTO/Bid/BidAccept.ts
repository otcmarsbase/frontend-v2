import { Resource } from '../../../Resource';

export namespace BidAccept {
  export type Payload = {
    id: Resource.Bid.Bid['id'];
    userId: Resource.User.UserKey['id'];
  };
  export type Result = Resource.Bid.Bid;
}
