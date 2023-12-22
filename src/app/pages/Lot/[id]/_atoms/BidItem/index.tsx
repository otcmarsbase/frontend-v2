import { useCallback } from 'react';

import { AccountAvatar, UILogic, useAuth } from '@app/components';
import {
  LocationDictionary,
  LotMultiplicatorDictionary,
  LotUnitAddonDictionary,
  ParticipantTypeDictionary,
} from '@app/dictionary';
import { MBPages } from '@app/pages';
import { HStack, VStack, Text, SimpleGrid, Box, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { DateText, UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { BidListFieldType, BidListFieldTypeTitleMap } from '../const';

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
  lot: Resource.Lot.Lot;
  deal: Resource.Deal.Deal;
  asset: Resource.Asset.Asset;
  isOfferMaker: boolean;
  refreshBids: () => Promise<any>;
}

export const BidItem: React.FC<BidItemProps> = ({ bid, lot, deal, asset, isOfferMaker, refreshBids }) => {
  const router = useRouter();
  const { account } = useAuth();

  const isBase = useBreakpointValue({ base: true, md: false });

  const handleClick = useCallback(() => {
    if (!(bid.dealKey && (bid.bidMaker.nickname === account?.nickname || isOfferMaker))) return;

    router.navigateComponent(MBPages.Deal.__id__, { id: bid.dealKey.id }, {});
  }, [bid, router, account, isOfferMaker]);

  const multiplicator = LotMultiplicatorDictionary.get(lot.type).multiplicator;

  if (isBase)
    return (
      <UILogic.BidCard
        bid={bid}
        lot={lot}
        asset={asset}
        onClick={handleClick}
        offerMakerActions={{ isOfferMaker, refetch: refreshBids }}
      />
    );

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
      onClick={handleClick}
    >
      <VStack alignItems="start">
        <Text color="dark.200" fontSize="sm">
          #{bid.id}
        </Text>
        <AccountAvatar nickname={bid.bidMaker.nickname} />
      </VStack>
      <SimpleGrid w="75%" columns={6} gridColumnGap="1.5rem">
        <BidItemColumn type="AMOUNT">
          <UIKit.MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.summary.value}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        </BidItemColumn>
        <BidItemColumn type="BID_SIZE">
          <UIKit.PercentText
            fontSize="sm"
            fontWeight="500"
            color="white"
            value={new Decimal(bid.units.value).div(multiplicator).toString()}
            percent={LotUnitAddonDictionary.get(lot.type)}
            percentTextProps={{
              color: 'dark.50',
            }}
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
          <Text fontSize="sm">{LocationDictionary.get(bid.location).name}</Text>
        </BidItemColumn>
        <BidItemColumn type="DEADLINE">
          {bid.deadline ? <DateText fontSize="sm" value={bid.deadline} /> : <>-</>}
        </BidItemColumn>
        <BidItemColumn type="STATUS">
          {deal ? <UILogic.DealStatus value={deal.status} /> : <UILogic.BidStatus value={bid.status} />}
        </BidItemColumn>
      </SimpleGrid>
      <UILogic.BidOfferMakerActions bid={bid} isOfferMaker={isOfferMaker} refreshBids={refreshBids} />
    </HStack>
  );
};
