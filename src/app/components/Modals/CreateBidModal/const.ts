import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

export interface FieldDescriptior {
  label: string;
  placeholder?: string;
  rightElementText?: string;
}

export const CommonField = [
  'SUMMARY',
  'FDV',
  'BID_MAKER_TYPE',
  'IS_BROKER',
  'LOCATION',
  'READY_FOR_VERIFICATION',
  'TELEGRAM',
  'FDV',
] as const;
export type CommonField = (typeof CommonField)[number];

export const CommonFieldsDictionary = createDictionary<CommonField, FieldDescriptior>()
  .setFromRecord({
    SUMMARY: {
      label: 'Contract size',
      placeholder: 'Amount',
    },
    FDV: {
      label: 'Target valuation',
      placeholder: 'Amount',
    },
    BID_MAKER_TYPE: {
      label: 'Choose type',
      placeholder: 'Choose type',
    },
    IS_BROKER: {
      label: 'I’m the broker',
    },
    LOCATION: {
      label: 'Locate',
      placeholder: 'Choose country',
    },
    READY_FOR_VERIFICATION: {
      label: 'Ready for KYC & KYB',
    },
    TELEGRAM: {
      label: 'Telegram',
      placeholder: '@nickname',
    },
  })
  .asReadonly();

export const CreateBidModalTitleDictionary = createDictionary<Resource.Common.Enums.TradeDirection, string>()
  .setFromEntries([
    ['BUY', 'For sale'],
    ['SELL', 'Buy'],
  ])
  .asReadonly();

export const PriceDescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, FieldDescriptior>().setFromRecord(
  {
    SAFE: {
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    SAFT: {
      label: 'Target token price',
      placeholder: 'Amount',
    },
    TOKEN_WARRANT: {
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    EQUITY: {
      label: 'Price per share',
      placeholder: 'Amount',
    },
    UNLOCKED_TOKENS: {
      label: 'Price per token',
      placeholder: 'Amount',
    },
  },
);

export const UnitsDictionary = createDictionary<Resource.Lot.Enums.LotType, string>()
  .setFromEntries([
    ['SAFE', '%'],
    ['SAFT', ''],
    ['TOKEN_WARRANT', '%'],
  ])
  .asReadonly();
