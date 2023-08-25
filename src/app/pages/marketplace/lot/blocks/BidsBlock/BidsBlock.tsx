import { VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Pagination } from '@schema/common';
import { List } from '@shared/ui-kit';
import * as UILogic from '@shared/ui-logic';

import { BidItem } from './BidItem';

export interface BidsBlockProps {
  bids: Pagination<Resource.Bid.Bid>;
}

export function BidsBlock({ bids }: BidsBlockProps) {
  return (
    <VStack>
      <List items={bids.items} itemRender={(item) => <BidItem bid={item} />} itemKey={(item) => item.id} />
      <UILogic.Pagination />
    </VStack>
  );
}
