import { LotFlow } from '../../../../../../shared/types';
import { TokenInfoFields } from '../TokenInfo/constants';

export enum EStepTypes {
  FIRST_STEP = 'firstStep',
  SECOND_STEP = 'secondStep',
  THIRD_STEP = 'thirdStep',
  SECOND_STEP_BUY = 'secondStepBuy',
}

export const StepsText: Record<
  EStepTypes,
  | Record<string, {}>
  | Record<LotFlow.LotType, {}>
  | Record<LotFlow.LotType, Record<LotFlow.PricingModel, {}>>
> = {
  [EStepTypes.FIRST_STEP]: {
    projectName: 'Name',
    direction: 'Direction',
    lotType: 'Type',
    deadlineDate: 'Deadline',
  },
  [EStepTypes.SECOND_STEP]: {
    SAFE: {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      totalEquityBought: 'Total equity bought',
    },
    SAFT: {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      totalEquityBought: 'Total equity bought',
    },
    TOKEN_WARRANT: {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      tokensShareBought: TokenInfoFields.TOKENS_SHARE_BOUGHT,
      pricePerEquity: TokenInfoFields.PRICE_PER_EQUITY,
    },
  },
  [EStepTypes.SECOND_STEP_BUY]: {
    SAFE: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      IN_EQUITY: {
        equityToOffer: 'Equity to offer',
        minEquityBid: 'Minimum equity bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
    SAFT: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
      IN_TOKEN: {
        tokensToOffer: 'Tokens to offer',
        minTokenBid: 'Minimum token bid',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
    },
    TOKEN_WARRANT: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      IN_TOKEN_SHARES: {
        tokenShareToOffer: 'Token share to offer',
        minTokenShareBid: 'Minimum token share bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
  },
  [EStepTypes.THIRD_STEP]: {
    SAFE: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      IN_EQUITY: {
        equityToOffer: 'Equity to offer',
        minEquityBid: 'Minimum equity bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
    SAFT: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
      IN_TOKEN: {
        tokensToOffer: 'Tokens to offer',
        minTokenBid: 'Minimum token bid',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
    },
    TOKEN_WARRANT: {
      IN_STABLECOIN: {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      IN_TOKEN_SHARES: {
        tokenShareToOffer: 'Token share to offer',
        minTokenShareBid: 'Minimum token share bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
  },
};

export const StepLabels: Record<EStepTypes, { label: string; index: number }> =
  {
    [EStepTypes.FIRST_STEP]: { label: 'Project info', index: 1 },
    [EStepTypes.SECOND_STEP]: { label: 'Details about the token', index: 2 },
    [EStepTypes.THIRD_STEP]: { label: 'Pricing details', index: 3 },
    [EStepTypes.SECOND_STEP_BUY]: { label: 'Lot info', index: 2 },
  };
