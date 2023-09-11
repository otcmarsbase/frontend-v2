import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

import { Common } from './Common';
import { Deal } from './Deal';
import { Lot } from './Lot';
import { User } from './User';

export namespace Bid {
  export const BidStatus = ['NEW', 'ON_MODERATE', 'ACTIVE', 'COMPLETED', 'REJECTED', 'ARCHIVED'] as const;
  export type BidStatus = (typeof BidStatus)[number];

  export interface BidKey extends ResourceKey<'bid'> {
    id: string;
  }

  export interface Bid extends Resource<'bid'>, ResourceOmit<BidKey> {
    created_at: number;
    status: BidStatus;

    owner: User.UserKey;
    owner_type: Common.ParticipantType[] | Common.ParticipantTypeNoLimitFlag;
    location: Common.Location;
    is_direct: boolean;
    deadline?: number;
    valuation_info: Common.ValuationInfo;
    contact_info: BidContactInfo;

    lot: Lot.LotKey;
    deal?: Deal.DealKey; // Only when status === 'DEAL'
  }

  export interface BidContactInfo {
    telegram: string;
  }

  export interface BidVerificationInfo {
    is_validated: boolean; // Проверен на валидность данных
  }
}
