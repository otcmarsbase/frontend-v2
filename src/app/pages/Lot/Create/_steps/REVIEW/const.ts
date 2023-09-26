import { createDictionary } from '@app/dictionary';

import { LotStepReview } from '../LOT_INFO';
import { ProjectStepReview } from '../PROJECT_INFO';
import { RoundStepReview } from '../ROUND_INFO';
import { StartStepReview } from '../START_INFO';

export const ReviewStepName = ['START_INFO', 'PROJECT_INFO', 'ROUND_INFO', 'LOT_INFO'] as const;
export type ReviewStepName = (typeof ReviewStepName)[number];
export type ReviewComponent =
  | typeof StartStepReview
  | typeof RoundStepReview
  | typeof ProjectStepReview
  | typeof LotStepReview;
export type ReviewStepNameInfo = {
  title: string;
  component?: ReviewComponent;
};

export const ReviewStepNameDictionary = createDictionary<ReviewStepName, ReviewStepNameInfo>()
  .setFromRecord({
    START_INFO: {
      title: 'Start',
      component: StartStepReview,
    },
    PROJECT_INFO: {
      title: 'Project info',
      component: ProjectStepReview,
    },
    ROUND_INFO: {
      title: 'Round info',
      component: RoundStepReview,
    },
    LOT_INFO: {
      title: 'Lot info',
      component: LotStepReview,
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    component: () => React.createElement(React.Fragment),
  }))
  .asReadonly();

export const LotInfoFieldName = ['PRICING_MODEL', 'FDV', 'PRICE', 'IS_BEST_BID'] as const;
export type LotInfoFieldName = (typeof LotInfoFieldName)[number];
export type LotInfoFieldsDictionaryInfo = {
  title: string;
  placeholder?: string;
};

export const LotInfoFieldsDictionary = createDictionary<LotInfoFieldName, LotInfoFieldsDictionaryInfo>()
  .setFromRecord({
    PRICING_MODEL: {
      title: 'Pricing model',
    },
    FDV: {
      title: 'Target FDV',
    },
    PRICE: {
      title: 'Price per 0,01% equity',
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
export type PricingModelTypeInfo = {
  title: string;
};

export const PricingModelTypeDictionary = createDictionary<PricingModelType, PricingModelTypeInfo>()
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
export type PricingModelFieldTypeInfo = Record<
  PricingModelFieldType,
  {
    title: string;
    placeholder?: string;
  }
>;

export const PricingModelFieldTypeDictionary = createDictionary<PricingModelType, PricingModelFieldTypeInfo>()
  .setFromRecord({
    IN_STABLECOIN: {
      QUANTITY: {
        title: 'Contract size to offer',
        placeholder: 'Amount',
      },
      MIN_SIZE: {
        title: 'Minimum deal size',
        placeholder: 'Amount',
      },
    },
    IN_EQUITY: {
      QUANTITY: {
        title: 'Equity to offer',
        placeholder: 'Amount',
      },
      MIN_SIZE: {
        title: 'Minimum equity bid',
        placeholder: 'Amount',
      },
    },
    IN_TOKEN_SHARES: {
      QUANTITY: {
        title: 'Token share to offer',
        placeholder: 'Amount',
      },
      MIN_SIZE: {
        title: 'Minimum token share bid',
        placeholder: 'Amount',
      },
    },
    IN_TOKENS: {
      QUANTITY: {
        title: 'Tokens to offer',
        placeholder: 'Amount',
      },
      MIN_SIZE: {
        title: 'Minimum token bid',
        placeholder: 'Amount',
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