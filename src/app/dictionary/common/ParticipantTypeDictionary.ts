import { DeskGatewaySchema } from '@schema/desk-gateway';

import { createDictionary } from '../utils';

export interface ParticipantTypeDictionaryInfo {
  title: string;
}

export const ParticipantTypeDictionary = createDictionary<
  DeskGatewaySchema.InvestorType,
  ParticipantTypeDictionaryInfo
>()
  .setFromRecord({
    PRIVATE_INVESTOR: {
      title: 'Private Investor',
    },
    VENTURE_FUND: {
      title: 'Venture Fund',
    },
    COMMUNITY_FUND: {
      title: 'Community Fund',
    },
    PROJECT_TEAM: {
      title: 'Project Team',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
