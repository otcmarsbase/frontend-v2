import { LotTypeChip, UILogic } from '@app/components';
import { LocationDictionary, LotMultiplicatorDictionary, LotUnitAddonDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Flex, Grid, GridItem, HStack, StackProps, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { BidCard } from '../BidCard';
import { BidRowFieldNameTitleMap } from '../const';

export interface BidRowProps extends Omit<StackProps, 'direction' | 'onClick'> {
  bid: Resource.Bid.Bid;
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  deal: Resource.Deal.Deal;
  onClick: () => any;
}

export const BidRow: React.FC<BidRowProps> = ({ bid, lot, asset, deal, onClick, ...stackProps }) => {
  const router = useRouter();

  const isBase = useBreakpointValue({ base: true, md: false });

  const fields: { label: React.ReactNode; value: React.ReactNode }[] = [
    {
      label: BidRowFieldNameTitleMap.get('TYPE'),
      value: <LotTypeChip value={lot.type} />,
    },
    {
      label: BidRowFieldNameTitleMap.get('BID_AMOUNT'),
      value: <UIKit.MoneyText value={bid.summary.value} format="0,0.X" />,
    },
    {
      label: BidRowFieldNameTitleMap.get('BID_FDV'),
      value: <UIKit.MoneyText value={bid.fdv?.value} abbreviated />,
    },
    {
      label: BidRowFieldNameTitleMap.get('OFFER_MAKER'),
      value: <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />,
    },

    {
      label: BidRowFieldNameTitleMap.get('LOCATION'),
      value: <Text>{LocationDictionary.get(bid.location).name}</Text>,
    },
  ];

  if (isBase) return <BidCard lot={lot} asset={asset} bid={bid} onClick={onClick} />;

  return (
    <HStack
      bg="dark.900"
      borderRadius="0.75rem"
      width="full"
      padding="1.5rem"
      justifyContent="space-between"
      position="relative"
      transition="all 0.3s"
      cursor="pointer"
      _hover={{
        bg: 'dark.800',
      }}
      alignItems="center"
      onClick={onClick}
      {...stackProps}
    >
      <UILogic.TradeDirectionText
        position="absolute"
        top="0"
        left="0"
        value={lot.attributes.COMMON_DIRECTION}
        reverse
      />
      <Flex gap="1rem" alignItems="center" flexWrap="wrap">
        <UILogic.AssetName
          onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: bid.assetKey.id }, {})}
          size="sm"
          asset={asset}
          flexShrink="0"
        />
        {deal ? (
          <UILogic.DealStatus value={deal.status} flexShrink="0" />
        ) : (
          <UILogic.BidStatus value={bid.status} flexShrink="0" />
        )}
      </Flex>
      <HStack>
        <Grid templateColumns={'repeat(5, 1fr)'} gap="4rem">
          {fields.map((field, index) => (
            <GridItem w="100%" key={index} pb="0.75rem">
              <VStack alignItems="start" w="full" fontSize="sm" spacing="0.5rem">
                <Text whiteSpace="nowrap" fontWeight={600} color="dark.50">
                  {field.label}
                </Text>
                {typeof field.value === 'string' ? <Text fontWeight={600}>{field.value}</Text> : <>{field.value}</>}
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </HStack>
    </HStack>
  );
};
