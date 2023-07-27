export enum StepTypes {
  'FIRST_STEP' = 'firstStep',
  'SECOND_STEP' = 'secondStep',
  'THIRD_STEP' = 'thirdStep',
}

export const StepsText: Record<StepTypes, Record<string, string>> = {
  [StepTypes.FIRST_STEP]: {
    projectName: 'Name',
    lotType: 'Type',
  },
  [StepTypes.SECOND_STEP]: {
    fdv: 'Round FDV',
    contractValue: 'Contract value',
    tokensBought: 'Tokens bought',
    pricePerToken: 'Price per token',
    pricePerEquity: 'Price per 0,01% equity',
  },
  [StepTypes.THIRD_STEP]: {
    contractSize: 'Contract size to offer',
    minDealSize: 'Minimum deal size',
    discountFrom: 'Discount from ',
  },
};

export const StepLabels: Record<StepTypes, { label: string; index: number }> = {
  [StepTypes.FIRST_STEP]: { label: 'Project info', index: 1 },
  [StepTypes.SECOND_STEP]: { label: 'Details about the token', index: 2 },
  [StepTypes.THIRD_STEP]: { label: 'Pricing details', index: 3 },
};
