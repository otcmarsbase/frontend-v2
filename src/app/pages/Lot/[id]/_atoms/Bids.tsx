import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { UILogic, UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { MBPages } from '@app/pages';
import { Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/otc-desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Empty, List, Pagination, useLoadingCallback, usePagination } from '@shared/ui-kit';

import { BidItem } from './BidItem';

interface BidsProps {
  isOfferMaker: boolean;
  lot: Resource.Lot.Lot;
}

export const Bids: FC<BidsProps> = ({ isOfferMaker, lot }) => {
  const rpcSchema = useRpcSchemaClient();
  const [bids, setBids] = useState<Resource.Bid.Bid[]>([]);
  const router = useRouter();

  const { setTotal, paginationOptions, isEmpty, onChangePage, onShowSizeChange } = usePagination(1, 25);

  const fetchPayload = useMemo<RPC.DTO.BidListByLot.Payload>(() => {
    const skip = (paginationOptions.page - 1) * paginationOptions.pageSize;
    return {
      skip,
      limit: paginationOptions.pageSize,
      lots: [lot.id],
    };
  }, [paginationOptions.pageSize, paginationOptions.page, lot.id]);

  const loadBinds = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('bid.listByLot', fetchPayload);
      setBids(items);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
  );

  const preload = useLoadingCallback(loadBinds);

  useEffect(() => {
    preload();
  }, [preload]);

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
        isLoading={loadBinds.isLoading}
        itemRender={(bid) => <BidItem isOfferMaker={isOfferMaker} bid={bid} refreshBids={loadBinds} />}
        footer={
          !isEmpty && (
            <Pagination
              {...paginationOptions}
              onChange={onChangePage}
              onShowSizeChange={onShowSizeChange}
              showCaption
              showPageSize
            />
          )
        }
      />
    </VStack>
  );
};
