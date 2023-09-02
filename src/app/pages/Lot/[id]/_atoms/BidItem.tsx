import { useRef } from 'react';

import { AccountAvatar } from '@app/components';
import { HStack, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { Resource } from '@schema/api-gateway';
import { DateText, MoneyText } from '@shared/ui-kit';

import { BidListFieldType, BidListFieldTypeTitleMap, LocationTypeTitleMap, ParticipantTypeTitleMap } from './const';

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
  const avatar = useRef(faker.image.avatarGitHub());

  return (
    <HStack w="full" justifyContent="space-between" bg="dark.900" borderRadius="sm" p="0.75rem 1.5rem">
      <VStack alignItems="start">
        <Text color="dark.200" fontSize="sm">
          #{bid.id}
        </Text>
        <AccountAvatar nickname={bid.owner.nickname} avatarUrl={avatar.current} />
      </VStack>
      <SimpleGrid w="75%" columns={6} gridColumnGap="1.9rem">
        <BidItemColumn type="AMOUNT">
          <MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.valuation_info.quantity.quote}
            addon={<Text color="dark.50">$</Text>}
          />
        </BidItemColumn>
        <BidItemColumn type="BID_SIZE">
          <MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.valuation_info.price}
            addon={<Text color="dark.50">%</Text>}
          />
        </BidItemColumn>
        <BidItemColumn type="BIDDER_TYPE">
          {Array.isArray(bid.ownerType) ? (
            bid.ownerType.map((type) => (
              <Text fontSize="sm" whiteSpace="nowrap">
                {ParticipantTypeTitleMap.get(type)}
              </Text>
            ))
          ) : (
            <Text fontSize="sm" whiteSpace="nowrap">
              {ParticipantTypeTitleMap.get(bid.ownerType)}
            </Text>
          )}
        </BidItemColumn>
        <BidItemColumn type="LOCATION">
          <Text fontSize="sm">{LocationTypeTitleMap.get(bid.location)}</Text>
        </BidItemColumn>
        <BidItemColumn type="DEADLINE">
          <DateText fontSize="sm" value={bid.deadline} />
        </BidItemColumn>
        <BidItemColumn type="STATUS">
          <Text>Todo</Text>
        </BidItemColumn>
      </SimpleGrid>
    </HStack>
  );
};
