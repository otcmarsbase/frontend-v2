import { useMemo } from 'react';

import { LotHotChip, UILogic } from '@app/components';
import { LocationDictionary, LotMultiplicatorDictionary, LotUnitAddonDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { Box, Divider, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

import { BidRowFieldNameTitleMap } from '../const';

type FieldType = {
  name: string;
  value: React.ReactNode;
  colSpan?: number;
};

export interface BidCardProps {
  bid: Resource.Bid.Bid;
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  onClick: () => void;
  minimalView?: boolean;
  offerMakerActions?: {
    refetch: () => Promise<void>;
    isOfferMaker: boolean;
  };
}

export const BidCard: React.FC<BidCardProps> = ({
  bid,
  lot,
  asset,
  minimalView = false,
  offerMakerActions,
  onClick,
}) => {
  const router = useRouter();

  const multiplicator = LotMultiplicatorDictionary.get(lot.type).multiplicator;

  const fields: FieldType[] = useMemo(() => {
    if (lot.status !== 'ACTIVE') return [];

    return [
      {
        name: BidRowFieldNameTitleMap.get('PUBLISH_DATE'),
        value: <UIKit.DateText value={bid.createdAt} format="ONLY_DATE" />,
      },
      {
        name: BidRowFieldNameTitleMap.get('BID_FDV'),
        value: <UIKit.MoneyText value={bid.fdv?.value} abbreviated />,
      },
      {
        name: BidRowFieldNameTitleMap.get('BID_AMOUNT'),
        value: <UIKit.MoneyText value={bid.summary.value} format="0,0.X" />,
      },
      {
        name: BidRowFieldNameTitleMap.get('OFFER_MAKER'),
        value: <UILogic.AccountAvatar nickname={lot.offerMaker.nickname} />,
      },
      {
        name: BidRowFieldNameTitleMap.get('DIRECT_SELLER'),
        value: <Text>{bid.mediatorType === 'DIRECT' ? 'Yes' : 'No'}</Text>,
      },
      {
        name: BidRowFieldNameTitleMap.get('LOCATION'),
        value: <Text>{LocationDictionary.get(bid.location).name}</Text>,
      },
    ].filter(Boolean);
  }, [lot, bid]);

  return (
    <VStack
      onClick={onClick}
      cursor="pointer"
      p="1.5rem 1.25rem"
      position="relative"
      borderRadius="sm"
      bg={minimalView ? 'dark.800' : 'dark.900'}
      gap={0}
      alignItems="start"
      h="full"
      transition="all 0.3s"
      _hover={{
        bg: minimalView ? 'dark.700' : 'dark.800',
      }}
    >
      <Box flexShrink="0" mb="0.75rem">
        <UILogic.TradeDirectionText
          invert
          value={lot.attributes.COMMON_DIRECTION}
          position="absolute"
          top="0"
          right="0"
        />
        <HStack gap="0.6rem" mt="0.1rem" mb="0.75rem">
          <Text color="dark.200" fontSize="sm">
            #{lot.id}
          </Text>
          <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} />
          {lot.isHot && <LotHotChip />}
        </HStack>
        {asset && (
          <UILogic.AssetName
            asset={asset}
            onClick={() => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})}
          />
        )}
      </Box>
      {!minimalView && (
        <>
          <Divider variant="dashed" color="dark.600" />
          <Box flex="1" py="1rem">
            <Grid templateColumns="repeat(2, 1fr)" gridColumnGap="2.5rem" gridRowGap="0.75rem">
              {fields.map((field, index) => (
                <GridItem key={index} colSpan={field.colSpan}>
                  <VStack gap="0.25rem" alignItems="start">
                    <Text fontWeight={600} fontSize="sm" color="dark.50">
                      {field.name}
                    </Text>
                    {field.value}
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
          {offerMakerActions && (
            <>
              <Divider variant="dashed" mb="1rem" color="dark.600" />

              <UILogic.BidOfferMakerActions
                bid={bid}
                isOfferMaker={offerMakerActions.isOfferMaker}
                refreshBids={offerMakerActions.refetch}
              />
            </>
          )}
        </>
      )}
    </VStack>
  );
};
