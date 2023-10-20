import { Resource } from '@schema/otc-desk-gateway';

import { createDictionary } from '../utils';

export interface ParticipantTypeDictionaryInfo {
  title: string;
}

export const ParticipantTypeDictionary = createDictionary<
  Resource.Common.Enums.InvestorType,
  ParticipantTypeDictionaryInfo
>()
  .setFromRecord({
    INDIVIDUAL: {
      title: 'Individual',
    },
    VC: {
      title: 'VC',
    },
    HEDGE_FUND: {
      title: 'Hedge fund',
    },
    FAMILY_OFFICE: {
      title: 'Family Office',
    },
    DAO: {
      title: 'DAO',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
