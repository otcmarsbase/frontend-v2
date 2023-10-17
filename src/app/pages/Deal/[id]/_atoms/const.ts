import { createDictionary } from '@app/dictionary';
import { IconProps } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { UIIcons } from '@shared/ui-icons';

export const TradeProgressStatusField = [
  'CHAT_CREATING',
  'OFFER_MAKER_VALIDATION',
  'BID_MAKER_VALIDATION',
  'OTC_AGENT_VALIDATION',
  'KYC_VALIDATION',
  'AML_VALIDATION',
  'KYB_VALIDATION',
  'DOCUMENT_OWNERSHIP',
  'DOCUMENTS_RESIGNED',
  'TRANSACTION_PAYMENT',
  'MARSBASE_COMMISSION',
  'OTC_AGENT_COMMISSION',
] as const;
export type TradeProgressStatusField = (typeof TradeProgressStatusField)[number];

export const TradeProgressStatusDictionary = createDictionary<TradeProgressStatusField, string>()
  .setFromRecord({
    CHAT_CREATING: 'Chat creating',
    OFFER_MAKER_VALIDATION: 'Offer Maker Validation',
    BID_MAKER_VALIDATION: 'Bid Maker Validation',
    OTC_AGENT_VALIDATION: 'OTC Agent Validation',
    KYC_VALIDATION: 'KYC Validation',
    AML_VALIDATION: 'AML Validation',
    KYB_VALIDATION: 'KYB Validation',
    DOCUMENT_OWNERSHIP: 'Document Ownership',
    DOCUMENTS_RESIGNED: 'Documents re-signed',
    TRANSACTION_PAYMENT: 'Transaction payment',
    MARSBASE_COMMISSION: 'Marsbase commission',
    OTC_AGENT_COMMISSION: 'OTC agent commission',
  })
  .asReadonly();

export const DealBlockType = ['DEAL_INFO', 'DEAL_PARTICIPANTS', 'TRADE_PROGRESS'] as const;
export type DealBlockType = (typeof DealBlockType)[number];

export const DealBlockTypeDictionary = createDictionary<DealBlockType, { title: string }>()
  .setFromRecord({
    DEAL_INFO: {
      title: 'Deal information',
    },
    DEAL_PARTICIPANTS: {
      title: 'Deal participants',
    },
    TRADE_PROGRESS: {
      title: 'Trade progress statuses',
    },
  })
  .asReadonly();

export const TradeValidationStatusDictionary = createDictionary<
  Resource.Deal.Enums.KeyResultStatus,
  { title: string; color: string; icon: React.FC<IconProps> }
>()
  .setFromRecord({
    COMPLETED: {
      title: 'Completed',
      color: '#34A853',
      icon: UIIcons.Common.CheckmarkIcon,
    },
    FAILED: {
      title: 'Failed',
      color: '#E82A36',
      icon: UIIcons.Common.InfoIcon,
    },
    PROCESS: {
      title: 'Pending',
      color: '#2C2C2E',
      icon: UIIcons.Common.CloseModalIcon,
    },
    NEW: {
      title: 'Validated',
      color: '#FF5B37',
      icon: UIIcons.Common.ProcessingIcon,
    },
  })
  .asReadonly();

export const DealInfoFieldType = ['PRICE', 'FDV', 'SIZE', 'COMMISSION'] as const;
export type DealInfoFieldType = (typeof DealInfoFieldType)[number];

export const DealInfoFieldDictionary = createDictionary<DealInfoFieldType, string>()
  .setFromRecord({
    PRICE: 'Price',
    FDV: 'Deal FDV',
    SIZE: 'Deal size',
    COMMISSION: 'Marsbase commission',
  })
  .asReadonly();

export const DealParticipantType = ['MODERATOR', 'OFFER_MAKER', 'BID_MAKER', 'OTC_AGENT'] as const;
export type DealParticipantType = (typeof DealParticipantType)[number];

export const DealParticipantDictionary = createDictionary<DealParticipantType, { title: string; walletTitle: string }>()
  .setFromRecord({
    MODERATOR: {
      title: 'Moderator',
      walletTitle: 'Moderator wallet',
    },
    OFFER_MAKER: {
      title: 'Offer-maker',
      walletTitle: 'Offer-maker wallet',
    },
    BID_MAKER: {
      title: 'Bid-maker',
      walletTitle: 'Bid-maker wallet',
    },
    OTC_AGENT: {
      title: 'OTC Agent',
      walletTitle: 'OTC Agent wallet',
    },
  })
  .asReadonly();
