import { Resource, ResourceKey, ResourceOmit } from '@schema/common';

import { Bid } from './Bid';
import { Common } from './Common';
import { Lot } from './Lot';
import { User } from './User';

export namespace Deal {
  export const DealStatus = ['NEGOTIATION', 'COMPLETED', 'REJECTED'] as const;
  export type DealStatus = (typeof DealStatus)[number];

  export const DealParticipantType = [] as const;
  export type DealParticipantType = (typeof DealParticipantType)[number];

  export interface DealKey extends ResourceKey<'deal'> {
    id: string;
  }

  export interface Deal extends Resource<'deal'>, ResourceOmit<DealKey> {
    created_at: number;
    status: DealStatus;

    lot: Lot.LotKey;
    bid: Bid.BidKey;

    commission: number;
    valuation_info: Common.ValuationInfo;
    communication: DealCommunication;
    participants: DealParticipant[];
  }

  export interface DealCommunication {
    char_url?: string;
  }

  export interface DealParticipant {
    type: DealParticipantType;
    user: User.UserKey;
    address: string;
  }

  // TODO доделать модель после согласования
  // Key results
  export type DealKeyResult = DealTelegramChatKR | DealOfferMakerKycKR | DealOfferMakerKybKR;

  export const DealKeyResultType = ['TELEGRAM_CHAT', 'OFFER_MAKER_KYC', 'OFFER_MAKER_KYB'] as const;
  export type DealKeyResultType = (typeof DealKeyResultType)[number];

  export const DealKeyResultGroupType = ['COMMUNICATION', 'OFFER_MAKER', 'BIDDER', 'TRANSACTION'] as const;
  export type DealKeyResultGroupType = (typeof DealKeyResultGroupType)[number];

  interface DealKRBase<Group extends DealKeyResultGroupType, Type extends DealKeyResultType> {
    group: Group;
    type: Type;
  }

  export interface DealTelegramChatKR extends DealKRBase<'COMMUNICATION', 'TELEGRAM_CHAT'> {
    url: string;
  }

  export interface DealOfferMakerKycKR extends DealKRBase<'OFFER_MAKER', 'OFFER_MAKER_KYC'> {}
  export interface DealOfferMakerKybKR extends DealKRBase<'OFFER_MAKER', 'OFFER_MAKER_KYB'> {}
}
