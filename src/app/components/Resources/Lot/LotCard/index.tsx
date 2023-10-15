import { useMemo } from 'react';

import { AssetVerticalIcon, UILogic, useRpcSchemaClient } from '@app/components';
import { MBPages } from '@app/pages';
import { formatDate } from '@app/utils';
import { Box, Divider, Grid, GridItem, HStack, Text, Button, VStack, Progress } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';
import { UIKit } from '@shared/ui-kit';
import Decimal from 'decimal.js';

type FieldType = {
  name: string;
  value: React.ReactNode;
  colSpan?: number;
};

export interface LotCardProps {
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  onClick: () => void;
  minimalView?: boolean;
}

export const LotCard: React.FC<LotCardProps> = ({ lot, asset, minimalView = false, onClick }) => {
  const router = useRouter();

  const availableSum = new Decimal(lot.available.stablecoinQuantity.value).toDecimalPlaces(2).toNumber();
  const totalSum = new Decimal(lot.reserved.stablecoinQuantity.value)
    .add(lot.executed.stablecoinQuantity.value)
    .add(availableSum)
    .toDecimalPlaces(2)
    .toNumber();

  const fields: FieldType[] = useMemo(() => {
    // const unitSizeFilter = lot.filters.find(
    //   (lotFilter) => lotFilter.type === 'UNIT_SIZE_FILTER',
    // ) as Resource.Lot.LotUnitSizeFilter;

    // const minSizeDea = new Decimal(unitSizeFilter?.min_size || 0)
    //   .mul(lot.valuation_info.price)
    //   .toDecimalPlaces(2)
    //   .toString();

    if (lot.status !== 'ACTIVE') return [];

    return [
      {
        name: 'FDV',
        value: (
          <UIKit.MoneyText
            value={lot.contractSize.contractShare.fdv.value || 0}
            abbreviated
            addon={
              <Text as="span" color="dark.50">
                $
              </Text>
            }
          />
        ),
      },
      {
        name: 'Minimal Bid Size',
        value: (
          <UIKit.MoneyText
            value={lot.minimumDealSize.stablecoinQuantity.value}
            abbreviated
            addon={
              <Text as="span" color="dark.50">
                $
              </Text>
            }
          />
        ),
      },
      {
        name: 'Total Bids Placed',
        value: (
          <UIKit.MoneyText
            // TODO тут другое поле будет
            value={0}
            abbreviated
            addon={
              <Text as="span" color="dark.50">
                $
              </Text>
            }
          />
        ),
      },
      lot.deadline
        ? {
            name: 'Lot Deadline',
            value: <Text>{formatDate(lot.deadline, 'ONLY_DATE')}</Text>,
          }
        : null,
      {
        name: 'Vertical',
        colSpan: 2,
        value: (
          <HStack flexWrap="wrap">
            {asset?.info.verticals.map((vertical, index) => (
              <AssetVerticalIcon value={vertical} key={index} />
            ))}
          </HStack>
        ),
      },
    ].filter(Boolean);
  }, [lot, asset]);

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
        <UILogic.TradeDirectionText invert value={lot.direction} position="absolute" top="0" right="0" />
        <HStack gap="0.6rem" mt="0.1rem" mb="0.75rem">
          <Text color="dark.200" fontSize="sm">
            #{lot.id}
          </Text>
          <UILogic.LotTypeChip value={lot.type} withTokenWarrant={lot.withTokenWarrant} />
        </HStack>
        {asset && (
          <UILogic.AssetName
            asset={asset}
            onClick={(e) => {
              // e.stopPropagation();
              // e.preventDefault();
              // router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {});
            }}
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
          <Divider variant="dashed" mb="1rem" color="dark.600" />
        </>
      )}
      <VStack width="full" alignItems="start">
        <HStack width="full" justifyContent="space-between">
          <Text fontWeight={600} fontSize="sm" color="dark.50">
            Available
          </Text>
          <HStack fontWeight={600} color="white" fontSize="xs">
            <UIKit.MoneyText value={availableSum} abbreviated addon="$" />
            <Text>/</Text>
            <UIKit.MoneyText value={totalSum} abbreviated addon="$" />
          </HStack>
        </HStack>
        <Progress value={(availableSum / totalSum) * 100} colorScheme="green" />
      </VStack>
      {!minimalView && (
        <UILogic.AuthAction>
          <Button w="full" variant="darkOutline" size="sm" mt="1.25rem">
            Place bid
          </Button>
        </UILogic.AuthAction>
      )}
    </VStack>
  );
};
