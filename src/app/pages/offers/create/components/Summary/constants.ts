import { TokenInfoFields } from '../TokenInfo/constants';

export enum StepTypes {
  'FIRST_STEP' = 'firstStep',
  'SECOND_STEP' = 'secondStep',
  'THIRD_STEP' = 'thirdStep',
  'SECOND_STEP_BUY' = 'secondStepBuy',
}

export const StepsText: Record<StepTypes, Record<string, {}>> = {
  [StepTypes.FIRST_STEP]: {
    projectName: 'Name',
    typeOfDeal: 'Direction',
    lotType: 'Type',
    deadlineDate: 'Deadline',
  },
  [StepTypes.SECOND_STEP]: {
    SAFT: {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      totalEquityBought: 'Total equity bought',
    },
    SAFE: {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      totalEquityBought: 'Total equity bought',
    },
    'Token warrant': {
      investmentRound: 'Investment round',
      roundFDV: 'Round FDV',
      contractValue: 'Contract value',
      tokensShareBought: TokenInfoFields.TOKENS_SHARE_BOUGHT,
      pricePerEquity: TokenInfoFields.PRICE_PER_EQUITY,
    },
  },
  [StepTypes.SECOND_STEP_BUY]: {
    SAFE: {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      'In Equity': {
        equityToOffer: 'Equity to offer',
        minEquityBid: 'Minimum equity bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
    SAFT: {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
      'In Token': {
        tokensToOffer: 'Tokens to offer',
        minTokenBid: 'Minimum token bid',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
    },
    'Token warrant': {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      'In Token Shares': {
        tokenShareToOffer: 'Token share to offer',
        minTokenShareBid: 'Minimum token share bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
  },
  [StepTypes.THIRD_STEP]: {
    SAFE: {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      'In Equity': {
        equityToOffer: 'Equity to offer',
        minEquityBid: 'Minimum equity bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
    SAFT: {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
      'In Token': {
        tokensToOffer: 'Tokens to offer',
        minTokenBid: 'Minimum token bid',
        targetFDV: 'Target FDV',
        targetTokenPrice: 'Target token price',
      },
    },
    'Token warrant': {
      'In Stablecoin': {
        contractSizeToOffer: 'Contract size to offer',
        minDealSize: 'Minimum deal size',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
      'In Token Shares': {
        tokenShareToOffer: 'Token share to offer',
        minTokenShareBid: 'Minimum token share bid',
        targetFDV: 'Target FDV',
        pricePerEquity: 'Price per 0,01% equity',
      },
    },
  },
};

export const StepLabels: Record<StepTypes, { label: string; index: number }> = {
  [StepTypes.FIRST_STEP]: { label: 'Project info', index: 1 },
  [StepTypes.SECOND_STEP]: { label: 'Details about the token', index: 2 },
  [StepTypes.THIRD_STEP]: { label: 'Pricing details', index: 3 },
  [StepTypes.SECOND_STEP_BUY]: { label: 'Lot info', index: 2 },
};
