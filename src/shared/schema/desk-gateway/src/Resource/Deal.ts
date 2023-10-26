import * as SchemaCommon from '@schema/common';

import { Asset } from './Asset';
import { Bid } from './Bid';
import { Common } from './Common';
import { Lot } from './Lot';
import { User } from './User';

export namespace Deal {
  export namespace Enums {
    export const DealStatus = ['PREPARE', 'NEGOTIATION', 'COMPLETED', 'REJECTED'] as const;
    export type DealStatus = (typeof DealStatus)[number];

    export const KeyResultStatus = ['NEW', 'PROCESS', 'COMPLETED', 'FAILED'] as const;
    export type KeyResultStatus = (typeof KeyResultStatus)[number];

    export const KeyResultType = [
      'TELEGRAM_CHAT',
      'OFFER_MAKER_VALIDATION',
      'BID_MAKER_VALIDATION',
      'AGENT_VALIDATION',
      'KYC_VALIDATION',
      'AML_VALIDATION',
      'KYB_VALIDATION',
      'DOCUMENT_OWNERSHIP',
      'DOCUMENT_RESIGNED',
      'TRANSACTION_PAYMENT',
      'MARSBASE_COMMISSION',
      'AGENT_COMMISSION',
    ] as const;
    export type KeyResultType = (typeof KeyResultType)[number];
  }

  export namespace KeyResults {
    export interface AbstractKeyResult<T extends Enums.KeyResultType> {
      status: Enums.KeyResultStatus;
      type: T;
    }

    export interface AgentCommissionKR extends AbstractKeyResult<'AGENT_COMMISSION'> {}
    export interface AgentValidationKR extends AbstractKeyResult<'AGENT_VALIDATION'> {}
    export interface AMLValidationKR extends AbstractKeyResult<'AML_VALIDATION'> {}
    export interface BidMakerValidationKR extends AbstractKeyResult<'BID_MAKER_VALIDATION'> {}
    export interface DocumentOwnershipKR extends AbstractKeyResult<'DOCUMENT_OWNERSHIP'> {}
    export interface DocumentResignedKR extends AbstractKeyResult<'DOCUMENT_RESIGNED'> {}
    export interface KYBValidationKR extends AbstractKeyResult<'KYB_VALIDATION'> {}
    export interface KYCValidationKR extends AbstractKeyResult<'KYC_VALIDATION'> {}
    export interface MarsbaseCommissionKR extends AbstractKeyResult<'MARSBASE_COMMISSION'> {
      percent: Common.Finances.Percent;
    }
    export interface OfferMakerValidationKR extends AbstractKeyResult<'OFFER_MAKER_VALIDATION'> {}
    export interface TelegramChatKR extends AbstractKeyResult<'TELEGRAM_CHAT'> {
      url?: string;
    }
    export interface TransactionPaymentKR extends AbstractKeyResult<'TRANSACTION_PAYMENT'> {}
  }

  export namespace ValueObjects {
    export interface DealKeyResults {
      agentCommissionKR: KeyResults.AgentCommissionKR;
      agentValidationKR: KeyResults.AgentValidationKR;
      amlValidationKR: KeyResults.AMLValidationKR;
      bidMakerValidationKR: KeyResults.BidMakerValidationKR;
      documentOwnershipKR: KeyResults.DocumentOwnershipKR;
      documentResignedKR: KeyResults.DocumentResignedKR;
      kybValidationKR: KeyResults.KYBValidationKR;
      kycValidationKR: KeyResults.KYCValidationKR;
      marsbaseCommissionKR: KeyResults.MarsbaseCommissionKR;
      offerMakerValidationKR: KeyResults.OfferMakerValidationKR;
      telegramChatKR: KeyResults.TelegramChatKR;
      transactionPaymentKR: KeyResults.TransactionPaymentKR;
    }
  }

  export interface DealKey extends SchemaCommon.ResourceKey<'deal'> {
    id: number;
  }

  export interface Deal extends SchemaCommon.Resource<'deal'>, SchemaCommon.ResourceOmit<DealKey> {
    createdAt: number;
    status: Enums.DealStatus;
    keyResults: ValueObjects.DealKeyResults;
    summary: Common.Finances.StablecoinQuantity;
    units: Common.Finances.StablecoinQuantity;
    price: Common.Finances.Price;
    fdv?: Common.Finances.StablecoinQuantity;

    // References
    assetKey: Asset.AssetKey;
    lotKey: Lot.LotKey;
    bidKey: Bid.BidKey;
    offerMakers: User.User[];
    bidMakers: User.User[];
    moderators: User.User[];
  }
}
