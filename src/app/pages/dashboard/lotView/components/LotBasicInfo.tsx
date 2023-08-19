import { FC } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Box, Heading, Text, HStack, Tooltip, VStack } from '@chakra-ui/react';
import { CopyIcon, Countdown, InfoIcon } from '@shared/ui-kit';

import { ILotInfo } from '../types';

export const LotBasicInfo: FC<{ lotInfoBasicData: ILotInfo }> = ({
  lotInfoBasicData,
}) => {
  const {
    id,
    direction,
    typeOfLot,
    userAvatar,
    userName,
    nameOfSeller,
    auctionEndDate,
  } = lotInfoBasicData;

  const [copyState, copyToClipboard] = useCopyToClipboard();

  return (
    <HStack
      bg="dark.900"
      w="100%"
      padding="1rem 1.25rem"
      borderRadius="0.75rem"
      gap="0.75rem"
      justifyContent="space-between"
    >
      <VStack
        gap="0.25rem"
        padding="0 1.5rem 0 0"
        flex="1"
        fontWeight="500"
        alignItems="flex-start"
      >
        <HStack gap="0.25rem">
          <Text fontWeight="500" color="dark.50">
            ID
          </Text>
          <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
            <InfoIcon color="dark.50" w="1rem" h="1rem" />
          </Tooltip>
        </HStack>
        <HStack fontWeight="500" gap="0.25rem" fontSize="sm">
          <Box>{id}</Box>
          <Box onClick={() => copyToClipboard(id.toString())}>
            <Tooltip
              hasArrow
              isOpen={!!copyState.value}
              closeOnPointerDown
              placement="bottom-start"
              offset={[-10, 10]}
              label={<Text fontSize="sm">ID Copied</Text>}
            >
              <CopyIcon />
            </Tooltip>
          </Box>
        </HStack>
      </VStack>
      <VStack gap="0.25rem" padding="0 1.5rem" flex="1" alignItems="flex-start">
        <HStack gap="0.25rem">
          <Heading variant="h5" color="dark.50">
            Lot
          </Heading>
        </HStack>
        <Heading
          variant="h5"
          fontWeight="500"
          color={direction === 'SELL' ? 'red.400' : 'green.400'}
          textTransform="uppercase"
        >
          {direction}
        </Heading>
      </VStack>
      <VStack gap="0.25rem" padding="0 1.5rem" flex="2" alignItems="flex-start">
        <HStack gap="0.25rem">
          <Heading variant="h5" color="dark.50">
            Type
          </Heading>
          <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
            <InfoIcon color="dark.50" w="1rem" h="1rem" />
          </Tooltip>
        </HStack>
        <Box fontWeight="500" fontSize="sm">
          {typeOfLot}
        </Box>
      </VStack>
      <VStack gap="0.25rem" padding="0 1.5rem" flex="2" alignItems="flex-start">
        <HStack gap="0.25rem">
          <Heading variant="h5" color="dark.50">
            Account
          </Heading>
          <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
            <InfoIcon color="dark.50" w="1rem" h="1rem" />
          </Tooltip>
        </HStack>
        <HStack gap="0.25rem">
          <Box>{userAvatar}</Box>
          <Box fontWeight="500" fontSize="sm">
            {userName}
          </Box>
        </HStack>
      </VStack>
      <VStack gap="0.25rem" padding="0 1.5rem" flex="2" alignItems="flex-start">
        <HStack gap="0.25rem" color="dark.50">
          <Heading variant="h5">Seller</Heading>
          <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
            <InfoIcon color="dark.50" w="1rem" h="1rem" />
          </Tooltip>
        </HStack>
        <Box fontWeight="500" fontSize="sm">
          {nameOfSeller}
        </Box>
      </VStack>
      <VStack
        gap="0.25rem"
        padding="0 0 0 1.5rem "
        flex="2"
        alignItems="flex-end"
      >
        <Heading variant="h5" color="dark.50">
          Auction ends in:
        </Heading>

        <Box fontWeight="500" fontSize="sm">
          <Countdown endDate={auctionEndDate} />
        </Box>
      </VStack>
    </HStack>
  );
};
