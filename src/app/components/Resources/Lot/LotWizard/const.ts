import { createDictionary } from '@app/dictionary';

import { LotWizardStep } from './types';

export type StepDescriptorKey =
  | 'INVEST_DOC_START'
  | 'COMMON_PROJECT'
  | 'INVEST_DOC_ROUND'
  | 'INVEST_DOC_PRICE'
  | 'INVEST_DOC_REVIEW';

export const StepDescriptorsDictionary = createDictionary<StepDescriptorKey, LotWizardStep<StepDescriptorKey>>()
  .setFromRecord({
    INVEST_DOC_START: {
      title: 'Start',
      description: '',
      stepTitle: 'Start',
      backSteps: [],
      skippable: false,
    },
    COMMON_PROJECT: {
      title: 'Project info',
      description: '',
      stepTitle: 'Project info',
      backSteps: ['INVEST_DOC_START'],
      skippable: false,
    },
    INVEST_DOC_ROUND: {
      title: 'Round info',
      description:
        'Provide information about the round on which you purchased the tokens. This information is necessary to calculate your supply.',
      stepTitle: 'Round info',
      backSteps: ['INVEST_DOC_START', 'COMMON_PROJECT'],
      skippable: false,
    },
    INVEST_DOC_PRICE: {
      title: 'Lot info',
      description:
        'Provide information about the round on which you purchased the tokens. This information is necessary to calculate your supply.',
      stepTitle: 'Lot info',
      backSteps: ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_ROUND'],
      skippable: false,
    },
    INVEST_DOC_REVIEW: {
      title: 'Review',
      description: '',
      stepTitle: 'Review',
      backSteps: ['INVEST_DOC_START', 'COMMON_PROJECT', 'INVEST_DOC_ROUND', 'INVEST_DOC_PRICE'],
      skippable: false,
    },
  })
  .asReadonly();
