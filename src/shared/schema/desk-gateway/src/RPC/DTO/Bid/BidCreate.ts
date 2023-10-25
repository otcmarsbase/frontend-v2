import { Resource } from '../../../Resource';

export namespace BidCreate {
  export type Payload = {
    lotId: number;
    bidMakerType: Resource.Common.Enums.InvestorType;
    location: Resource.Common.Enums.Location;
    readyForVerification: boolean;
    telegram: string;
    isDirect: boolean;
    deadline?: number;

    summary: string;
    units: number;
    price: string;
    fdv?: string;
  };
  export type Result = Resource.Bid.Bid;
}
