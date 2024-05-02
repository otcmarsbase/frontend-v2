import { useCallback } from 'react';

import { AccountAvatar, UILogic, useAuth } from '@app/components';
import { LocationDictionary, ParticipantTypeDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { HStack, VStack, Text, SimpleGrid, Box, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

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
  bid: DeskGatewaySchema.Bid;
  lot: DeskGatewaySchema.Lot;
  deal: DeskGatewaySchema.Deal;
  asset: DeskGatewaySchema.Asset;
  offerMaker: DeskGatewaySchema.User;
  bidMaker: DeskGatewaySchema.User;
  isOfferMaker: boolean;
  refreshBids: () => Promise<any>;
}

export const BidItem: React.FC<BidItemProps> = ({
  bid,
  lot,
  deal,
  asset,
  offerMaker,
  bidMaker,
  isOfferMaker,
  refreshBids,
}) => {
  const router = useRouter();
  const { account } = useAuth();

  const isBase = useBreakpointValue({ base: true, lg: false });

  const handleClick = useCallback(() => {
    if (!(deal && (bidMaker.nickname === account?.nickname || isOfferMaker))) return;

    router.navigateComponent(MBPages.Deal.__id__, { id: deal.id }, {});
  }, [router, account, bidMaker, deal, isOfferMaker]);

  if (isBase)
    return (
      <UILogic.BidCard
        bid={bid}
        lot={lot}
        asset={asset}
        offerMaker={offerMaker}
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
        <AccountAvatar shortNickname nickname={bidMaker.nickname} />
      </VStack>
      <SimpleGrid w="75%" columns={6} gridColumnGap="1.5rem">
        <BidItemColumn type="AMOUNT">
          <UIKit.MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            abbreviated
            value={bid.summary}
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        </BidItemColumn>
        <BidItemColumn type="BID_FDV">
          <UIKit.MoneyText
            fontSize="sm"
            fontWeight="500"
            color="white"
            value={bid.fdv}
            abbreviated
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        </BidItemColumn>
        <BidItemColumn type="BIDDER_TYPE">
          <Text fontSize="sm" whiteSpace="nowrap">
            {ParticipantTypeDictionary.get(bid.bidMakerType).title}
          </Text>
        </BidItemColumn>
        <BidItemColumn type="LOCATION">
          <Text fontSize="sm">{LocationDictionary.get(bid.location).name}</Text>
        </BidItemColumn>
        <BidItemColumn type="STATUS">
          {deal ? <UILogic.DealStatus value={deal.status} /> : <UILogic.BidStatus value={bid.status} />}
        </BidItemColumn>
      </SimpleGrid>
      <UILogic.BidOfferMakerActions bid={bid} isOfferMaker={isOfferMaker} refreshBids={refreshBids} />
    </HStack>
  );
};
