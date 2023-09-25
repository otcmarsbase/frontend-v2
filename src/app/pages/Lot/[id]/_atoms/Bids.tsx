import { FC, useCallback, useState } from 'react';

import { UIModals } from '@app/components';
import { ModalController } from '@app/logic';
import { useStore } from '@app/store';
import { Box, Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { BidsList } from './BidsList';
import { SortBidsByType, SortBidsByTypeDictionary } from './const';

interface BidsProps {}

export const Bids: FC<BidsProps> = () => {
  const { mockStore } = useStore();
  const [bids] = useState(mockStore.bidListLot({}).items);

  const onCreateBidClick = useCallback(async () => {
    const bid = await ModalController.create(UIModals.CreateBidModal, {});
  }, []);

  return (
    <VStack h="100%" w="100%" gap="1rem">
      <HStack
        justifyContent={'space-between'}
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

          <Button
            leftIcon={<UIIcons.Common.AddIcon />}
            variant="brand"
            size="md"
            borderRadius="0.375rem"
            padding="0.5rem 0.75rem"
            onClick={onCreateBidClick}
          >
            Create Bid
          </Button>
        </HStack>
      </HStack>
      <BidsList bids={bids} />
    </VStack>
  );
};
