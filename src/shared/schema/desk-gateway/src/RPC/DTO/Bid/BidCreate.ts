import { CommonSchema } from '@schema/common';

import { Bid, InvestorType, LotKey } from '../../../Resource';

export namespace BidCreate {
  export type Payload = {
    lotId: LotKey['id'];
    bidMakerType: InvestorType;
    location: CommonSchema.Country;
    readyForVerification: boolean;
    telegram: string;
    isDirect: boolean;
    deadline?: number;

    summary: string;
    units: string;
    price: string;
    fdv?: string;
  };
  export type Result = Bid;
}
