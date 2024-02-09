import { createDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

export interface FieldDescriptior {
  label: string;
  placeholder?: string;
  rightElementText?: string;
}

export const CommonField = [
  'DEADLINE',
  'BID_MAKER_TYPE',
  'DIRECT',
  'LOCATION',
  'READY_FOR_VERIFICATION',
  'TELEGRAM',
  'FDV',
] as const;
export type CommonField = (typeof CommonField)[number];

export const CommonFieldsDictionary = createDictionary<CommonField, FieldDescriptior>()
  .setFromRecord({
    DEADLINE: {
      label: 'Deadline',
      placeholder: 'Choose finish day',
    },
    BID_MAKER_TYPE: {
      label: 'Who you are?',
      placeholder: 'Choose type',
    },
    DIRECT: {
      label: 'I’m the directly seller',
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
    FDV: {
      label: 'Target FDV',
      placeholder: 'Amount',
    },
  })
  .asReadonly();

export const CreateBidModalTitleDictionary = createDictionary<Resource.Common.Enums.TradeDirection, string>()
  .setFromEntries([
    ['BUY', 'For sale'],
    ['SELL', 'Buy'],
  ])
  .asReadonly();

export const UnitsDescriptorDictionary = createDictionary<
  Resource.Common.Enums.TradeDirection,
  FieldDescriptior
>().setFromRecord({
  BUY: {
    label: 'I Want to Sell',
    placeholder: 'Enter amount',
  },
  SELL: {
    label: 'I Want to Buy',
    placeholder: 'Enter amount',
  },
});

export const SummaryDescriptorDictionary = createDictionary<
  Resource.Common.Enums.TradeDirection,
  FieldDescriptior
>().setFromRecord({
  BUY: {
    label: 'I Want to Receive',
    placeholder: 'Enter amount',
  },
  SELL: {
    label: 'I Give Funds',
    placeholder: 'Enter amount',
  },
});

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
      label: 'Price per 0,01% equity',
      placeholder: 'Amount',
    },
    UNLOCKED_TOKENS: {
      label: 'Target token price',
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
