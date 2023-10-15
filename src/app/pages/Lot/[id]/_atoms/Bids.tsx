import { FC, useCallback, useEffect, useState } from 'react';

import { UILogic, UIModals, useRpcSchemaClient } from '@app/components';
import { ModalController } from '@app/logic';
import { Box, Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';

import { BidsList } from './BidsList';
import { SortBidsByType, SortBidsByTypeDictionary } from './const';

interface BidsProps {
  isOfferMaker: boolean;
  lot: Resource.Lot.Lot;
}

export const Bids: FC<BidsProps> = ({ isOfferMaker, lot }) => {
  const rpcSchema = useRpcSchemaClient();
  const [bids, setBids] = useState<Resource.Bid.Bid[]>([]);

  const loadBinds = useCallback(async () => {
    const { items } = await rpcSchema.send('bid.listByLot', { lots: [lot.id] });
    setBids(items);
  }, [rpcSchema, lot]);

  const preload = useLoadingCallback(loadBinds);

  useEffect(() => {
    preload();
  }, [preload]);

  const onCreateBidClick = useCallback(async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, {});
  }, []);

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
            Bids
          </Text>
          <Circle padding="0 0.25rem" size="1.25rem" bg="orange.500" borderRadius="50%">
            <Text fontSize="xs">{bids && bids.length}</Text>
          </Circle>
        </HStack>
        <HStack flex="auto" justifyContent="flex-end">
          <Box w="11rem">
            <UIKit.SelectSync<SortBidsByType>
              placeholder="Sort by"
              items={SortBidsByTypeDictionary.keys()}
              renderItem={(item) => SortBidsByTypeDictionary.get(item).title}
            />
          </Box>

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
      <BidsList isOfferMaker={isOfferMaker} bids={bids} isLoading={preload.isLoading} refreshBids={loadBinds} />
    </VStack>
  );
};
