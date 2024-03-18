import { FC, useCallback, useMemo } from 'react';

import { LotBidSkeleton, UILogic, UIModals, useRpcSchemaQuery } from '@app/components';
import { ModalController } from '@app/logic';
import { Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Empty, List, Pagination, SkeletonLoader, usePagination } from '@shared/ui-kit';
import { range } from 'lodash';

import { BidItem } from './BidItem';

interface BidsProps {
  isOfferMaker: boolean;
  lot: DeskGatewaySchema.Lot;
  offerMaker: DeskGatewaySchema.User;
  asset: DeskGatewaySchema.Asset | DeskGatewaySchema.LotAssetRequest;
}

export const Bids: FC<BidsProps> = ({ isOfferMaker, offerMaker, lot, asset }) => {
  const { skip, limit, ...paginationProps } = usePagination(25);

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.BidList.Payload>(() => {
    return {
      page: {
        skip,
        limit,
      },
      filter: {
        lot: { id: [lot.id] },
      },
      include: {
        bidMaker: true,
      },
    };
  }, [skip, limit, lot.id]);

  const { data: bids, isLoading, refetch } = useRpcSchemaQuery('bid.list', fetchPayload);

  const { data: deals, isLoading: dealsIsLoading } = useRpcSchemaQuery(
    'deal.list',
    {
      filter: { bid: { id: bids?.items?.map(({ id }) => id) } },
    },
    { enabled: !!bids?.total },
  );

  const onCreateBidClick = () => ModalController.create(UIModals.CreateBidModal, { lot });

  const findDeal = useCallback(
    (bidId: DeskGatewaySchema.BidKey['id']) => deals?.items?.find((deal) => deal.bidKey.id === bidId),
    [deals],
  );

  const findBidMaker = useCallback(
    (bid: DeskGatewaySchema.Bid) =>
      bids.links.find((link) => link.resource === 'user' && link.id === bid.bidMakerKey.id) as DeskGatewaySchema.User,
    [bids],
  );

  return (
    <VStack h="100%" w="100%" gap="1rem">
      <HStack
        justifyContent={'space-between'}
        alignItems="center"
        fontWeight={'700'}
        lineHeight={'1.5rem'}
        textTransform={'uppercase'}
        w={'100%'}
        display={{ base: 'none', md: 'flex' }}
      >
        <HStack alignItems="center">
          <Text textTransform="uppercase" fontFamily="promo">
            Active Bids
          </Text>
          <Circle padding="0 0.25rem" size="1.25rem" bg="orange.500" borderRadius="50%">
            <Text fontSize="xs">{bids && bids.total}</Text>
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
        items={bids?.items}
        itemKey={(bid) => bid.id}
        isLoading={isLoading || dealsIsLoading}
        itemRender={(bid) => (
          <BidItem
            isOfferMaker={isOfferMaker}
            bid={bid}
            lot={lot}
            asset={asset as DeskGatewaySchema.Asset}
            deal={findDeal(bid.id)}
            bidMaker={findBidMaker(bid)}
            refreshBids={refetch}
            offerMaker={offerMaker}
          />
        )}
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
        footer={!!bids?.total && <Pagination {...paginationProps} showCaption showPageSize total={bids.total} />}
      />
    </VStack>
  );
};
