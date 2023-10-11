import { createDictionary } from '@app/dictionary';

import { StepFieldInfo } from '../../../../../../types';

export const StartInfoFieldName = ['PROJECT_NAME', 'DIRECTION', 'LOT_TYPE', 'IS_REASSIGNED', 'WEBSITE'] as const;
export type StartInfoFieldName = (typeof StartInfoFieldName)[number];

export const StartInfoFieldsDictionary = createDictionary<StartInfoFieldName, StepFieldInfo>()
  .setFromRecord({
    PROJECT_NAME: {
      title: 'Project info',
      placeholder: 'Project info',
    },
    DIRECTION: {
      title: 'Trade direction',
    },
    LOT_TYPE: {
      title: 'Type of lot',
    },
    IS_REASSIGNED: {
      title: 'Re-assign',
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
