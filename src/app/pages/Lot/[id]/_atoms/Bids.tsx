import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { LotBidSkeleton, UILogic, UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Empty, List, Pagination, SkeletonLoader, useLoadingCallback, usePagination } from '@shared/ui-kit';
import { range } from 'lodash';

import { BidItem } from './BidItem';

interface BidsProps {
  isOfferMaker: boolean;
  lot: Resource.Lot.Lot;
}

export const Bids: FC<BidsProps> = ({ isOfferMaker, lot }) => {
  const rpcSchema = useRpcSchemaClient();
  const [bids, setBids] = useState<Resource.Bid.Bid[]>([]);
  const router = useRouter();

  const { setTotal, isEmpty, skip, limit, ...paginationProps } = usePagination(25);

  const fetchPayload = useMemo<RPC.DTO.BidListByLot.Payload>(() => {
    return {
      skip,
      limit,
      lots: [lot.id],
    };
  }, [skip, limit, lot.id]);

  const loadBids = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('bid.listByLot', fetchPayload);
      setBids(items);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
  );

  useEffect(() => {
    loadBids();
  }, [loadBids]);

  const onCreateBidClick = async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, { lot });

    if (!bid) return;

    router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
  };

  return (
    <VStack h="100%" w="100%" gap="1rem">
      <HStack
        justifyContent={'space-between'}
        alignItems="center"
        fontWeight={'700'}
        lineHeight={'1.5rem'}
        textTransform={'uppercase'}
        w={'100%'}
      >
        <HStack alignItems="center">
          <Text textTransform="uppercase" fontFamily="promo">
            Active Bids
          </Text>
          <Circle padding="0 0.25rem" size="1.25rem" bg="orange.500" borderRadius="50%">
            <Text fontSize="xs">{bids && bids.length}</Text>
          </Circle>
        </HStack>
        <HStack flex="auto" justifyContent="flex-end">
          {!isOfferMaker && (
            <UILogic.AuthAction>
              <Button
                leftIcon={<UIIcons.Common.AddIcon />}
                variant="brand"
                size="sm"
                borderRadius="0.375rem"
                padding="0.5rem 0.75rem"
                onClick={onCreateBidClick}
              >
                Create Bid
              </Button>
            </UILogic.AuthAction>
          )}
        </HStack>
      </HStack>
      <List
        emptyText={<Empty description="Unfortunately, you don't have any bids yet. You can create your own bid" />}
        w="full"
        items={bids}
        itemKey={(bid) => bid.id}
        isLoading={loadBids.isLoading}
        itemRender={(bid) => <BidItem isOfferMaker={isOfferMaker} bid={bid} lot={lot} refreshBids={loadBids} />}
        loader={({ isLoading, children }) => (
          <SkeletonLoader
            skeleton={
              <VStack alignItems="start" w="full">
                {range(0, 3).map((key) => (
                  <LotBidSkeleton key={key} />
                ))}
              </VStack>
            }
            isLoading={isLoading}
          >
            {children}
          </SkeletonLoader>
        )}
        footer={!isEmpty && <Pagination {...paginationProps} showCaption showPageSize />}
      />
    </VStack>
  );
};
