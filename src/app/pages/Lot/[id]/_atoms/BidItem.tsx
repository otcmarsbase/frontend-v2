import { AccountAvatar } from '@app/components';
import { ParticipantTypeDictionary } from '@app/dictionary';
import { HStack, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { DateText, MoneyText } from '@shared/ui-kit';
import { capitalize } from 'lodash';

import { BidListFieldType, BidListFieldTypeTitleMap, LocationTypeTitleMap } from './const';

interface BidItemColumnProps extends React.PropsWithChildren {
  type: BidListFieldType;
}

const BidItemColumn: React.FC<BidItemColumnProps> = ({ type, children }) => {
  return (
    <VStack alignItems="start">
      <Text color="dark.50" fontSize="sm" fontWeight="600">
        {BidListFieldTypeTitleMap.get(type)}
      </Text>
      <Box fontWeight="500">{children}</Box>
    </VStack>
  );
};

export interface BidItemProps {
  bid: Resource.Bid.Bid;
}

export const BidItem: React.FC<BidItemProps> = ({ bid }) => {
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      bg="dark.900"
      borderRadius="sm"
      p="0.75rem 1.5rem"
      cursor="pointer"
      transition="background 0.4s"
      _hover={{
        bg: 'dark.800',
      }}
    >
      <VStack alignItems="start">
        <Text color="dark.200" fontSize="sm">
          #{bid.id}
        </Text>
        <AccountAvatar nickname={bid.bidMaker.nickname} />
      </VStack>
      <SimpleGrid w="75%" columns={6} gridColumnGap="1.9rem">
        <BidItemColumn type="AMOUNT">
          <MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.contractSize.price.value}
            addon={<Text color="dark.50">$</Text>}
          />
        </BidItemColumn>
        <BidItemColumn type="BID_SIZE">
          <MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.contractSize.unitQuantity.value}
            addon={<Text color="dark.50">%</Text>}
          />
        </BidItemColumn>
        <BidItemColumn type="BIDDER_TYPE">
          <Text fontSize="sm" whiteSpace="nowrap">
            {ParticipantTypeDictionary.get(bid.bidMakerType).title}
          </Text>
        </BidItemColumn>
        {/* <BidItemColumn type="LOCATION">
          <Text fontSize="sm">{LocationTypeTitleMap.get(bid.location)}</Text>
        </BidItemColumn> */}
        <BidItemColumn type="LOCATION">
          <Text fontSize="sm">{capitalize(bid.location)}</Text>
        </BidItemColumn>
        {bid.deadline && (
          <BidItemColumn type="DEADLINE">
            <DateText fontSize="sm" value={bid.deadline} />
          </BidItemColumn>
        )}
        <BidItemColumn type="STATUS">
          <Text>{bid.status}</Text>
        </BidItemColumn>
      </SimpleGrid>
    </HStack>
  );
};
