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
export const STEP_THREE_BUTTON_LABELS_BY_LOT_TYPE = {
  SAFT: {
    leftBtnLabel: 'In Stablecoin',
    rightBtnLabel: 'In Token',
  },
  SAFE: {
    leftBtnLabel: 'In Stablecoin',
    rightBtnLabel: 'In Equity',
  },
  'Token warrant': {
    leftBtnLabel: 'In Stablecoin',
    rightBtnLabel: 'In Token Shares',
  },
};

export const STEP_THREE_FIELDS_BY_LOT_TYPE = {
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
  'Token warrant': [
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

export const STEP_THREE_TOTAL_FIELDS_BY_LOT_TYPE = {
  SAFE: {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },

  SAFT: {
    id: 'targetTokenPrice',
    fieldLabel: StepThreeFields.TARGET_TOKEN_PRICE,
  },
  'Token warrant': {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },
};
