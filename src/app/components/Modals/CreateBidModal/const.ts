import { createDictionary } from '@app/dictionary';

export const CreateBidField = [
  'SELL_COUNT',
  'FUNDS_COUNT',
  'DEADLINE',
  'BIDDER_TYPE',
  'DIRECT',
  'LOCATION',
  'READY_FOR_KYC',
  'TELEGRAM',
] as const;
export type CreateBidField = (typeof CreateBidField)[number];

export const CreateBidFieldDictionary = createDictionary<CreateBidField, { title: string; placeholder?: string }>()
  .setFromRecord({
    SELL_COUNT: {
      title: 'I Want to Sell',
      placeholder: 'Enter amount',
    },
    FUNDS_COUNT: {
      title: 'I Take funds',
      placeholder: 'Enter amount',
    },
    DEADLINE: {
      title: 'Deadline',
      placeholder: 'Choose finish day',
    },
    BIDDER_TYPE: {
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
    READY_FOR_KYC: {
      title: 'Ready for KYC&KYB',
    },
    TELEGRAM: {
      title: 'Telegram',
      placeholder: '@nickname',
    },
  })
  .asReadonly();
