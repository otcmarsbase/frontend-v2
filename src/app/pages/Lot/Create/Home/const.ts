import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../types';

export type CreateLotField = 'HEADER';
export type CreateLotFieldValue = {
  title: string;
  description: string;
};
export const CreateLotDictionary = createDictionary<CreateLotField, CreateLotFieldValue>({
  HEADER: {
    title: 'Creating an offer',
    description: 'Set suitable conditions',
  },
});

export const PricingModelType = ['IN_STABLECOIN', 'IN_EQUITY', 'IN_TOKENS', 'IN_TOKEN_SHARES'] as const;
export type PricingModelType = (typeof PricingModelType)[number];

export const PricingModelTypeDictionary = createDictionary<PricingModelType, StepFieldInfo>()
  .setFromRecord({
    IN_STABLECOIN: {
      title: 'In Stablecoin',
    },
    IN_EQUITY: {
      title: 'In Equity',
    },
    IN_TOKEN_SHARES: {
      title: 'In Token Shares',
    },
    IN_TOKENS: {
      title: 'In Tokens',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();

export const PricingModelFieldType = ['QUANTITY', 'MIN_SIZE'] as const;
export type PricingModelFieldType = (typeof PricingModelFieldType)[number];
export type PricingModelFieldTypeInfo = Record<PricingModelFieldType, StepFieldInfo>;

export const PricingModelFieldTypeDictionary = createDictionary<PricingModelType, PricingModelFieldTypeInfo>()
  .setFromRecord({
    IN_STABLECOIN: {
      QUANTITY: {
        title: 'Contract size to offer',
        placeholder: 'Amount',
        tooltip: 'The amount of sale in this lot. The seller will receive this amount.',
      },
      MIN_SIZE: {
        title: 'Minimum deal size',
        placeholder: 'Amount',
        tooltip: 'Smallest allowable size for a deal. The same as minimum bid.',
      },
    },
    IN_EQUITY: {
      QUANTITY: {
        title: 'Equity to offer',
        placeholder: 'Amount',
        tooltip: 'How much equity of the company/project is being sold in this lot?',
      },
      MIN_SIZE: {
        title: 'Minimum equity bid',
        placeholder: 'Amount',
        tooltip: 'The minimum bid size (% equity).',
      },
    },
    IN_TOKEN_SHARES: {
      QUANTITY: {
        title: 'Token share to offer',
        placeholder: 'Amount',
        tooltip: 'How much token share of total supply you want to sell',
      },
      MIN_SIZE: {
        title: 'Minimum token share bid',
        placeholder: 'Amount',
        tooltip: 'Minimum token share for 1 transaction',
      },
    },
    IN_TOKENS: {
      QUANTITY: {
        title: 'Tokens to offer',
        placeholder: 'Amount',
        tooltip: 'Total number of tokens you want to sell',
      },
      MIN_SIZE: {
        title: 'Minimum token bid',
        placeholder: 'Amount',
        tooltip: 'The minimum bid size',
      },
    },
  })
  .setDefaultFactory((key) => ({
    QUANTITY: {
      title: key,
      placeholder: 'Amount',
    },
    MIN_SIZE: {
      title: key,
      placeholder: 'Amount',
    },
  }))
  .asReadonly();
