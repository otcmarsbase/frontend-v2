import { CoreSchema } from '@schema/core';

import { Deal, DealKey, DealStatus, User, UserKey } from '../../../Resource';
import { BidList } from '../Bid';

export namespace DealList {
  export type Filter = CoreSchema.CompositeFilter<{
    id?: DealKey['id'][];

    status?: DealStatus[];
    offerMaker?: UserKey['id'][];
    bidMaker?: UserKey['id'][];

    bid?: BidList.Filter;
  }>;

  export type Include = CoreSchema.Include<
    Deal,
    {
      bid: BidList.Include;
      bidMaker: User;
      offerMaker: User;
    }
  >;

  export type Sortable = {
    id?: CoreSchema.SortableValue;
  };

  export type Payload = CoreSchema.WithFilter<Filter> & CoreSchema.WithInclude<Include> & CoreSchema.WithSortable<Sortable> & CoreSchema.WithPagination;
  export type Result = CoreSchema.WithPaginationResult<Deal> & CoreSchema.WithIncludeLinks<Include>;
}
