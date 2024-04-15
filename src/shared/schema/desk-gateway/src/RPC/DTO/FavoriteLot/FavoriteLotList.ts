import { CoreSchema } from '@schema/core';

import { FavoriteLot, FavoriteLotKey } from '../../../Resource';

export namespace FavoriteLotList {
  export type Filter = CoreSchema.CompositeFilter<{
    id?: FavoriteLotKey['id'][];
  }>;

  export type Include = CoreSchema.Include<FavoriteLot, {}>;

  export type Sortable = {};

  export type Payload = CoreSchema.WithFilter<Filter> & CoreSchema.WithInclude<Include> & CoreSchema.WithSortable<Sortable> & CoreSchema.WithPagination;
  export type Result = CoreSchema.WithPaginationResult<FavoriteLot> & CoreSchema.WithIncludeLinks<Include>;
}
