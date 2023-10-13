import { Resource } from '../../Resource';

export namespace BidCreate {
  export type Payload = {
    lot: number;
    bidMakerType: Resource.Common.Enums.InvestorType;
    location: Resource.Common.Enums.Location;
    readyForVerification: boolean;
    telegram: string;
    isDirect: boolean;
    contractValue: number;
    deadline?: number;
  };
  export type Result = Resource.Bid.Bid;
}
