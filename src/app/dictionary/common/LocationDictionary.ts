import { Resource } from '@schema/api-gateway';

import { createDictionary } from '../utils';

export interface LocationDictionaryInfo {
  title: string;
}

export const LocationDictionary = createDictionary<Resource.Common.Location, LocationDictionaryInfo>()
  .setFromRecord({
    OAE: {
      title: 'OAE',
    },
    RUSSIA: {
      title: 'Russia',
    },
  })
  .setDefaultFactory((key) => ({
    title: key,
  }))
  .asReadonly();
