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
      tooltip:
        'A financial instrument that grants the holder the right to purchase a specific quantity of tokens at a predetermined price within a specified timeframe.',
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
