import { LotFlow } from '@shared/types';

export const StepThreeFields = {
  CONTRACT_SIZE_TO_OFFER: 'Contract size to offer',
  MIN_DEAL_SIZE: 'Minimum deal size, $',
  TOKEN_SHARE_TO_OFFER: 'Token share to offer',
  MIN_TOKEN_SHARE_BID: 'Minimum token share bid',
  EQUITY_TO_OFFER: 'Equity to offer',
  MIN_EQUITY_BID: 'Minimum equity bid',
  TOKENS_TO_OFFER: 'Tokens to offer',
  MIN_TOKEN_BID: 'Minimum token bid',

  TARGET_TOKEN_PRICE: 'Target token price',
  TARGET_FDV: 'Target FDV',
  PRICE_PER_EQUITY: 'Price per 0,01% equity',
  OFFER_THE_BEST_BID: 'Offer the best bid',
};

type PricingModelButton = {
  label: string;
  value: LotFlow.PricingModel;
};

export const STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE: Record<
  LotFlow.LotType,
  { leftButton: PricingModelButton; rightButton: PricingModelButton }
> = {
  SAFT: {
    leftButton: {
      label: 'In Stablecoin',
      value: 'IN_STABLECOIN',
    },
    rightButton: {
      label: 'In Token',
      value: 'IN_TOKEN',
    },
  },
  SAFE: {
    leftButton: {
      label: 'In Stablecoin',
      value: 'IN_STABLECOIN',
    },
    rightButton: {
      label: 'In Equity',
      value: 'IN_EQUITY',
    },
  },
  TOKEN_WARRANT: {
    leftButton: {
      label: 'In Stablecoin',
      value: 'IN_STABLECOIN',
    },
    rightButton: {
      label: 'In Token Shares',
      value: 'IN_TOKEN_SHARES',
    },
  },
};

export const STEP_THREE_FIELDS_BY_LOT_TYPE: Record<
  LotFlow.LotType,
  { id: string; fieldLabel: string }[]
> = {
  SAFE: [
    {
      id: 'equityToOffer',
      fieldLabel: StepThreeFields.EQUITY_TO_OFFER,
    },
    {
      id: 'minEquityBid',
      fieldLabel: StepThreeFields.MIN_EQUITY_BID,
    },
  ],
  SAFT: [
    {
      id: 'tokensToOffer',
      fieldLabel: StepThreeFields.TOKENS_TO_OFFER,
    },
    {
      id: 'minTokenBid',
      fieldLabel: StepThreeFields.MIN_TOKEN_BID,
    },
  ],
  TOKEN_WARRANT: [
    {
      id: 'tokenShareToOffer',
      fieldLabel: StepThreeFields.TOKEN_SHARE_TO_OFFER,
    },
    {
      id: 'minTokenShareBid',
      fieldLabel: StepThreeFields.MIN_TOKEN_SHARE_BID,
    },
  ],
};

export const STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE: Record<
  LotFlow.LotType,
  { id: string; fieldLabel: string }
> = {
  SAFT: {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },
  SAFE: {
    id: 'targetTokenPrice',
    fieldLabel: StepThreeFields.TARGET_TOKEN_PRICE,
  },
  TOKEN_WARRANT: {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },
};
