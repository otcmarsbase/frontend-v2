import { useCallback } from 'react';

import { UIModals } from '@app/components';
import { ModalController } from '@app/logic';
import { Resource } from '@schema/otc-desk-gateway';
import { Button, Empty, List } from '@shared/ui-kit';

import { BidItem } from './BidItem';

export interface BidsListProps {
  bids: Resource.Bid.Bid[];
  isOfferMaker: boolean;
  isLoading: boolean;
  refreshBids: () => Promise<void>;
}

export const BidsList: React.FC<BidsListProps> = ({ bids, isOfferMaker, isLoading, refreshBids }) => {
  const onCreateBidClick = useCallback(async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, {});
  }, []);

  return (
    <List
      emptyText={<Empty createButton={isOfferMaker ? <></> : <Button onClick={onCreateBidClick}>Create bid</Button>} />}
      w="full"
      items={bids}
      itemKey={(bid) => bid.id}
      isLoading={isLoading}
      itemRender={(bid) => <BidItem isOfferMaker={isOfferMaker} bid={bid} refreshBids={refreshBids} />}
    />
  );
};
