import { FC, useState } from 'react';

import { Box, Button, HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { Select } from '@shared/ui-kit';

import { createBids } from '../mock';

import { BidsList } from './BidsList';
import { SortBidsByType, SortBidsByTypeTitleMap } from './const';

interface BidsProps {}

export const Bids: FC<BidsProps> = ({}) => {
  const [bids, setBids] = useState(createBids(10));

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
          {/* <Select
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
          </Select> */}
          <Box w="11rem">
            <Select
              isClearable
              placeholder="Sort by"
              options={SortBidsByType.map((type) => ({
                value: type,
                label: SortBidsByTypeTitleMap.get(type),
              }))}
            />
          </Box>

          <Button variant="brand" size="xs" borderRadius="0.375rem" padding="0.5rem 0.75rem" onClick={() => {}}>
            <HStack>
              <UIIcons.Common.AddIcon />
              <Text>Create Bid</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>
      <BidsList bids={bids} />
    </VStack>
  );
};
