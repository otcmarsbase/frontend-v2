import { createDictionary } from '@app/dictionary';

export type LotFilterSortByField = 'BY_ALPHABETIC' | 'BY_LAST' | 'BY_POPULARITY';

export const LotFilterSortByFieldDictionary = createDictionary<LotFilterSortByField, { title: string }>().setFromRecord(
  {
    BY_ALPHABETIC: {
      title: 'From A to Z',
    },
    BY_LAST: {
      title: 'Last added',
    },
    BY_POPULARITY: {
      title: 'Popularity',
    },
  },
);
