import { Resource } from '@schema/api-gateway';
import { List } from '@shared/ui-kit';

import { BidItem } from './BidItem';

export interface BidsListProps {
  bids: Resource.Bid.Bid[];
}

export const BidsList: React.FC<BidsListProps> = ({ bids }) => {
  return <List w="full" items={bids} itemKey={(bid) => bid.id} itemRender={(bid) => <BidItem bid={bid} />} />;
};
