import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const StartInfoFieldName = ['PROJECT_NAME', 'DIRECTION', 'LOT_TYPE', 'IS_REASSIGNED', 'WEBSITE'] as const;
export type StartInfoFieldName = (typeof StartInfoFieldName)[number];

export const StartInfoFieldsDictionary = createDictionary<StartInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PROJECT_NAME: {
      title: 'Project info',
      placeholder: 'Project info',
      tooltip: 'Please provide the project name.',
    },
    DIRECTION: {
      title: 'Trade direction',
      tooltip: 'Choose Lot Type: BUY or SELL',
    },
    LOT_TYPE: {
      title: 'Type of lot',
      tooltip: 'Simple Agreement for Future Equity',
    },
    IS_REASSIGNED: {
      title: 'Re-assign',
      tooltip: '"Re-assign" means that the offer-maker allows the resale or transfer of their lot.',
    },
    WEBSITE: {
      title: 'Website',
      placeholder: 'Enter URL',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();

export const StartInfoReviewField = ['STEP_TITLE', 'STEP_INDEX_TITLE'] as const;
export type StartInfoReviewField = (typeof StartInfoReviewField)[number];