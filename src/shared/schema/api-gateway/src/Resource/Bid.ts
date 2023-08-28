import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

import { Common } from './Common';
import { Deal } from './Deal';
import { User } from './User';

export namespace Bid {
  export const BidStatus = ['NEW', 'ON_MODERATE', 'ACTIVE', 'ACCEPTED', 'REJECTED', 'DEAL', 'ARCHIVED'] as const;
  export type BidStatus = (typeof BidStatus)[number];

  export interface BidKey extends ResourceKey<'bid'> {
    id: string;
  }

  export interface Bid extends Resource<'bid'>, ResourceOmit<BidKey> {
    status: BidStatus;

    owner: User.UserKey;
    ownerType: Common.ParticipantType[] | 'NO_LIMIT';
    location: Common.Location;
    is_direct: boolean;
    deadline?: number;
    deal?: Deal.DealKey; // Only when status === 'DEAL'

    valuation_info: Common.ValuationInfo;
    contact_info: BidContactInfo;
  }

  export interface BidContactInfo {
    telegram?: string;
  }

  export interface BidVerificationInfo {
    is_validated: boolean; // Проверен на валидность данных
  }
}
