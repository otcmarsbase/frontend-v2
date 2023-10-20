import { AccountAvatar, UILogic } from '@app/components';
import { ParticipantTypeDictionary } from '@app/dictionary';
import { HStack, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { DateText, MoneyText } from '@shared/ui-kit';
import { capitalize } from 'lodash';

import { BidListFieldType, BidListFieldTypeTitleMap } from '../const';

import { OfferMakerActions } from './OfferMakerActions';

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
  isOfferMaker: boolean;
  refreshBids: () => Promise<void>;
}

export const BidItem: React.FC<BidItemProps> = ({ bid, isOfferMaker, refreshBids }) => {
  return (
    <HStack
      w="full"
      alignItems="flex-start"
      justifyContent="space-between"
      bg="dark.900"
      borderRadius="sm"
      p="0.75rem 1.5rem"
      cursor="pointer"
      transition="background 0.4s"
      position="relative"
      role="group"
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
      <SimpleGrid w="75%" columns={6} gridColumnGap="1.5rem">
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
        <BidItemColumn type="DEADLINE">
          {bid.deadline ? <DateText fontSize="sm" value={bid.deadline} /> : <>-</>}
        </BidItemColumn>
        <BidItemColumn type="STATUS">
          <UILogic.BidStatus value={bid.status} />
        </BidItemColumn>
      </SimpleGrid>
      <OfferMakerActions bid={bid} isOfferMaker={isOfferMaker} refreshBids={refreshBids} />
    </HStack>
  );
};
