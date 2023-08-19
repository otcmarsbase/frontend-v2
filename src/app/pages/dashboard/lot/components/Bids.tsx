import { FC } from 'react';

import { BidsList } from '@app/pages/dashboard/lot/components/BidsList';
import { IBidsProps } from '@app/pages/dashboard/lot/types';
import { Box, Button, HStack, Select, VStack, Text } from '@chakra-ui/react';
import {AddIcon} from "@shared/ui-kit";

export const Bids: FC<IBidsProps> = ({
  bids,
  createBid,
  viewOrderHandler,
  isBidder,
}) => {

  return (
    <VStack
      h="100%"
      w="100%"
      padding="1.5rem 1.25rem"
      bg="rgba(27, 27, 28, 0.6)"
      borderRadius="0.5rem"
      gap="2rem"
    >
      <HStack
        justifyContent={'space-between'}
        h="2rem"
        fontWeight={'700'}
        lineHeight={'1.5rem'}
        textTransform={'uppercase'}
        w={'100%'}
      >
        <HStack flex="1">
          <Text>Bids</Text>
          <Box
            padding={'0px 0.25rem'}
            bg={'orange.500'}
            borderRadius="1.6875rem"
          >
            <Box fontSize={'0.8125rem'}>{bids && bids.length}</Box>
          </Box>
        </HStack>
        <HStack flex="auto" justifyContent="flex-end">
          <Select
            bg="dark.950"
            borderColor="dark.200"
            color="dark.50"
            placeholder="Sort by"
            borderRadius="0.375rem"
            h="2rem"
            w="9.375rem"
          >
            <option value="option3">Bid FDV</option>
            <option value="bidSize">Bid size</option>
            <option value="deadline">Deadline</option>
            <option value="status">Status</option>
          </Select>
          <Button
            variant="brand"
            size="xs"
            borderRadius="0.375rem"
            padding="0.5rem 0.75rem"
            onClick={createBid}
          >
            <HStack>
              <AddIcon />
              <Text>Create Bid</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>
      <BidsList
        bids={bids}
        isBidder={isBidder}
        viewOrderHandler={viewOrderHandler}
      />
    </VStack>
  );
};
