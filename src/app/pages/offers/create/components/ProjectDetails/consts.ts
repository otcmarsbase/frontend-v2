import { EPricingModel } from '../../types';
import { ELotType } from '../ProjectInfo/types';

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
  [ELotType.SAFT]: {
    leftBtnLabel: EPricingModel.IN_STABLECOIN,
    rightBtnLabel: EPricingModel.IN_TOKEN,
  },
  [ELotType.SAFE]: {
    leftBtnLabel: EPricingModel.IN_STABLECOIN,
    rightBtnLabel: EPricingModel.IN_EQUITY,
  },
  [ELotType.TOKEN_WARRANT]: {
    leftBtnLabel: EPricingModel.IN_STABLECOIN,
    rightBtnLabel: EPricingModel.IN_TOKEN_SHARES,
  },
};

export const STEP_THREE_FIELDS_BY_LOT_TYPE = {
  [ELotType.SAFE]: [
    {
      id: 'equityToOffer',
      fieldLabel: StepThreeFields.EQUITY_TO_OFFER,
    },
    {
      id: 'minEquityBid',
      fieldLabel: StepThreeFields.MIN_EQUITY_BID,
    },
  ],
  [ELotType.SAFT]: [
    {
      id: 'tokensToOffer',
      fieldLabel: StepThreeFields.TOKENS_TO_OFFER,
    },
    {
      id: 'minTokenBid',
      fieldLabel: StepThreeFields.MIN_TOKEN_BID,
    },
  ],
  [ELotType.TOKEN_WARRANT]: [
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
  [ELotType.SAFT]: {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },

  [ELotType.SAFE]: {
    id: 'targetTokenPrice',
    fieldLabel: StepThreeFields.TARGET_TOKEN_PRICE,
  },
  [ELotType.TOKEN_WARRANT]: {
    id: 'pricePerEquity',
    fieldLabel: StepThreeFields.PRICE_PER_EQUITY,
  },
};
