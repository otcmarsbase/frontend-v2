import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../types';

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE', 'IS_BEST_BID'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
      tooltip: 'You can choose the pricing model in a stablecoin or in equity.',
    },
    FDV: {
      title: 'Target FDV',
      tooltip: 'FDV = market price * maximum supply',
    },
    PRICE: {
      title: 'Price per 0,01% equity',
      tooltip: 'The price per 0,01% of equity.',
    },
    IS_BEST_BID: {
      title: 'Offer the best bid',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();

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
