export const TokenInfoFields = {
  INVESTMENT_ROUND: 'Investment round',
  ROUND_FDV: 'Round FDV',
  CONTRACT_VALUE: 'Contract value',
  DATES: 'Dates',
  LOOKUP_PERIOD: 'Lockup period',
  VESTING_PERIOD: 'Vesting period',
  ALREADY_OVER: 'Already over',
  PRICE_INFO: 'Price information',

  TOTAL_EQUITY_BOUGHT: 'Total equity bought',
  PRICE_PER_EQUITY: 'Price per 0,01% equity',
  TOKENS_BOUGHT: 'Tokens bought',
  PRICE_PER_TOKEN: 'Price per token',
  TOKENS_SHARE_BOUGHT: 'Tokens share bought',
  PRICE_PER_TOKENS: 'Price per 0,01% tokens',
};

export const STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE = {
  SAFE: [
    {
      id: 'totalEquityBought',
      fieldLabel: TokenInfoFields.TOTAL_EQUITY_BOUGHT,
    },
    {
      id: 'pricePerEquityPriceInfo',
      fieldLabel: TokenInfoFields.PRICE_PER_EQUITY,
    },
  ],
  SAFT: [
    {
      id: 'tokensBought',
      fieldLabel: TokenInfoFields.TOKENS_BOUGHT,
    },
    {
      id: 'pricePerTokenPriceInfo',
      fieldLabel: TokenInfoFields.PRICE_PER_TOKEN,
    },
  ],
  'Token warrant': [
    {
      id: 'tokensShareBought',
      fieldLabel: TokenInfoFields.TOKENS_SHARE_BOUGHT,
    },
    {
      id: 'PRICE_PER_TOKENS',
      fieldLabel: TokenInfoFields.PRICE_PER_TOKENS,
    },
  ],
};
