import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';

export const CreateBidField = [
  'CONTRACT_VALUE',
  'FUNDS_COUNT',
  'DEADLINE',
  'BID_MAKER_TYPE',
  'DIRECT',
  'LOCATION',
  'READY_FOR_VERIFICATION',
  'TELEGRAM',
  'PRICE',
] as const;
export type CreateBidField = (typeof CreateBidField)[number];

export const CreateBidSellFieldDictionary = createDictionary<CreateBidField, { title: string; placeholder?: string }>()
  .setFromRecord({
    CONTRACT_VALUE: {
      title: 'I Want to Sell',
      placeholder: 'Enter amount',
    },
    FUNDS_COUNT: {
      title: 'I Want to Recive',
      placeholder: 'Enter amount',
    },
    DEADLINE: {
      title: 'Deadline',
      placeholder: 'Choose finish day',
    },
    BID_MAKER_TYPE: {
      title: 'Who you are?',
      placeholder: 'Choose type',
    },
    DIRECT: {
      title: 'I’m the directly seller',
    },
    LOCATION: {
      title: 'Locate',
      placeholder: 'Choose country',
    },
    READY_FOR_VERIFICATION: {
      title: 'Ready for KYC & KYB',
    },
    TELEGRAM: {
      title: 'Telegram',
      placeholder: '@nickname',
    },
    PRICE: {
      title: 'Price per 0.01% equity',
      placeholder: 'Amount',
    },
  })
  .asReadonly();

export const CreateBidBuyFieldDictionary = createDictionary<CreateBidField, { title: string; placeholder?: string }>()
  .setFromRecord({
    CONTRACT_VALUE: {
      title: 'I Want to Buy',
      placeholder: 'Enter amount',
    },
    FUNDS_COUNT: {
      title: 'I Give funds',
      placeholder: 'Enter amount',
    },
    DEADLINE: {
      title: 'Deadline',
      placeholder: 'Choose finish day',
    },
    BID_MAKER_TYPE: {
      title: 'Who you are?',
      placeholder: 'Choose type',
    },
    DIRECT: {
      title: 'I’m the directly buyer',
    },
    LOCATION: {
      title: 'Locate',
      placeholder: 'Choose country',
    },
    READY_FOR_VERIFICATION: {
      title: 'Ready for KYC & KYB',
    },
    TELEGRAM: {
      title: 'Telegram',
      placeholder: '@nickname',
    },
    PRICE: {
      title: 'Price per 0.01% equity',
      placeholder: 'Amount',
    },
  })
  .asReadonly();

export const ContractValueUnitDictionary = createDictionary<Resource.Lot.Enums.LotType, string>()
  .setFromEntries([
    ['SAFE', '%'],
    ['SAFT', ''],
    ['TOKEN_WARRANT', '%'],
  ])
  .asReadonly();

export const CreateBidModalTitleDictionary = createDictionary<Resource.Common.Enums.TradeDirection, string>()
  .setFromEntries([
    ['BUY', 'For sale'],
    ['SELL', 'Buy'],
  ])
  .asReadonly();
