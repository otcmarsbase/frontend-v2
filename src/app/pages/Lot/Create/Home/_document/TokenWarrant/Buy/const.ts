import { createDictionary } from '@app/dictionary';

import { CreateStepValue } from '../../../../types';

export type SafeBuyStepType = 'START_INFO' | 'PROJECT_INFO' | 'LOT_INFO' | 'REVIEW';

export const CreateStepDictionary = createDictionary<SafeBuyStepType, CreateStepValue<SafeBuyStepType>>().setFromRecord(
  {
    START_INFO: {
      title: 'Start',
      description: '',
      stepTitle: 'Start',
      backSteps: [],
      skippable: false,
    },
    PROJECT_INFO: {
      title: 'Project info',
      description: '',
      stepTitle: 'Project info',
      backSteps: ['START_INFO'],
      skippable: false,
    },
    LOT_INFO: {
      title: 'Lot info',
      description:
        'Provide information about the round on which you purchased the tokens. This information is necessary to calculate your supply.',
      stepTitle: 'Lot info',
      backSteps: ['START_INFO', 'PROJECT_INFO'],
      skippable: false,
    },
    REVIEW: {
      title: 'Review',
      description: '',
      stepTitle: 'Review',
      backSteps: ['START_INFO', 'PROJECT_INFO', 'LOT_INFO'],
      skippable: false,
    },
  },
);
