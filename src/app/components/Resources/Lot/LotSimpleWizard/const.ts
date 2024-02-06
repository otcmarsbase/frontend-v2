import { createDictionary } from '@app/dictionary';
import { Common } from '@shared/ui-icons';

import { StepProps } from './_atoms/Stepper/Step';

export type StepDescriptorKey = 'INVEST_DOC_START' | 'INVEST_DOC_INFO' | 'INVEST_DOC_REVIEW';

export const StepDescriptorsDictionary = createDictionary<StepDescriptorKey, StepProps>()
  .setFromRecord({
    INVEST_DOC_START: {
      title: 'Asset',
      icon: Common.AssetIcon,
    },
    INVEST_DOC_INFO: {
      title: 'Lot info',
      icon: Common.LotInfoIcon,
    },
    INVEST_DOC_REVIEW: {
      title: 'Finish',
      icon: Common.FlagIcon,
    },
  })
  .asReadonly();
