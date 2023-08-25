import { FC } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Box, Text, HStack, Tooltip, VStack, Divider } from '@chakra-ui/react';
import { CopyIcon, Countdown, InfoIcon, LotTypeChip } from '@shared/ui-kit';

import { ILotInfo } from '../types';

interface InfoElementProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

const InfoElement: React.FC<InfoElementProps> = ({
  label,
  children,
  tooltip = 'Hi!',
}) => {
  return (
    <VStack gap="0.25rem" color="dark.50" flex="2" alignItems="flex-start">
      <HStack gap="0.25rem">
        <Text fontSize="sm">{label}</Text>
        <Tooltip label={tooltip} aria-label="A tooltip">
          <InfoIcon w="1rem" h="1rem" />
        </Tooltip>
      </HStack>
      {children}
    </VStack>
  );
};

const InfoDivider = (
  <Divider h="3.25rem" orientation="vertical" color="dark.600" />
);

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
      borderRadius="0.75rem"
      gap="1.5rem"
      padding="1.25rem"
      justifyContent="space-between"
    >
      <InfoElement label="ID">
        <HStack gap="0.25rem">
          <Text fontSize="sm" fontWeight="500">
            {id}
          </Text>
          <Box onClick={() => copyToClipboard(id.toString())}>
            <Tooltip
              hasArrow
              isOpen={!!copyState.value}
              closeOnPointerDown
              placement="bottom-start"
              offset={[-10, 10]}
              label={<Text fontSize="sm">ID Copied</Text>}
            >
              <CopyIcon color="white" />
            </Tooltip>
          </Box>
        </HStack>
      </InfoElement>
      {InfoDivider}
      <InfoElement label="Lot">
        <Text fontWeight="500" color="white" fontSize="sm">
          {direction}
        </Text>
      </InfoElement>
      {InfoDivider}
      <InfoElement label="Type">
        <LotTypeChip lotType={typeOfLot} />
      </InfoElement>
      {InfoDivider}
      <InfoElement label="Account">
        <HStack gap="0.25rem">
          <Box>{userAvatar}</Box>
          <Text fontWeight="500" color="white" fontSize="sm">
            {userName}
          </Text>
        </HStack>
      </InfoElement>
      {InfoDivider}
      <InfoElement label="Seller">
        <Text fontWeight="500" whiteSpace="nowrap" color="white" fontSize="sm">
          {nameOfSeller}
        </Text>
      </InfoElement>
      <VStack
        gap="0.25rem"
        padding="0 0 0 1.5rem "
        flex="2"
        alignItems="flex-end"
      >
        <Text fontSize="sm" color="dark.50">
          Auction ends in:
        </Text>

        <Countdown endDate={auctionEndDate} />
      </VStack>
    </HStack>
  );
};
