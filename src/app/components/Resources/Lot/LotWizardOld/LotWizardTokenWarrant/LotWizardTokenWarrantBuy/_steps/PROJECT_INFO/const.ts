import { createDictionary } from '@app/dictionary';

import { LotWizardStepField } from '../../../../types';

export const ProjectInfoFieldName = [
  'BIDDER_TYPE',
  'IS_DIRECT',
  'IS_READY_TO_SPV',
  'TELEGRAM',
  'OFFER_MAKER_TYPE',
  'IS_NO_LIMIT',
  'DEADLINE',
  'IS_PERMANENT',
] as const;
export type ProjectInfoFieldName = (typeof ProjectInfoFieldName)[number];

export const ProjectInfoFieldsDictionary = createDictionary<ProjectInfoFieldName, LotWizardStepField>()
  .setFromRecord({
    DEADLINE: {
      title: 'Deadline',
      placeholder: 'Choose finish day',
      tooltip: 'Expiration Date for this Lot',
    },
    BIDDER_TYPE: {
      title: 'Type of seller',
      placeholder: 'Choose type',
      tooltip: 'Choose Seller Type',
    },
    IS_DIRECT: {
      title: 'I’m the direct buyer',
      placeholder: '',
    },
    IS_READY_TO_SPV: {
      title: 'Ready to SPV',
      placeholder: '',
    },
    IS_NO_LIMIT: {
      title: 'No limitations',
      placeholder: '',
    },
    IS_PERMANENT: {
      title: 'Permanent',
      placeholder: '',
    },
    TELEGRAM: {
      title: 'Telegram',
      placeholder: '@nickname',
      tooltip: 'Please provide your Telegram account',
    },
    OFFER_MAKER_TYPE: {
      title: 'Type of buyer',
      placeholder: 'Choose type',
      tooltip: 'Choose Buyer Type',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
    placeholder: '',
  }))
  .asReadonly();
