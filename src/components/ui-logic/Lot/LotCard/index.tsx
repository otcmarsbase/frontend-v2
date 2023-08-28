import { useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Divider, Grid, GridItem, HStack, Text, Button, VStack } from '@chakra-ui/react';
import { useRPCSchema } from '@components/hooks';
import { UIKit } from '@components/ui-kit';
import { UILogic } from '@components/ui-logic';
import { formatDate } from '@components/utils';
import { Resource } from '@schema/api-gateway';
import Decimal from 'decimal.js';
import { format } from 'numerable';

type FieldType = {
  name: string;
  value: React.ReactNode;
};

export interface LotCardProps {
  lot: Resource.Lot.Lot;
  asset: Resource.Asset.Asset;
  onClick: () => void;
}

export const LotCard: React.FC<LotCardProps> = ({ lot, onClick }) => {
  const schema = useRPCSchema();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();

  const formatDollars = (val: number) => (
    <Text>
      {format(val, '0.00a')}&nbsp;
      <Text as="span" color="dark.50">
        $
      </Text>
    </Text>
  );

  const fields: FieldType[] = useMemo(() => {
    const unitSizeFilter = lot.filters.find(
      (lotFilter) => lotFilter.type === 'UNIT_SIZE_FILTER',
    ) as Resource.Lot.LotUnitSizeFilter;

    const minSizeDea = new Decimal(unitSizeFilter?.min_size || 0)
      .mul(lot.valuation_info.price)
      .toDecimalPlaces(2)
      .toString();

    console.log({ lot });

    return [
      {
        name: 'FDV',
        value: (
          <UIKit.MoneyText
            value={lot.valuation_info.fdv.quote || 0}
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
            value={minSizeDea || 0}
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
            value={lot.execution_quantity_info.total.quote || 0}
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
        value: 'TODO',
      },
    ].filter(Boolean);
  }, [lot]);

  const loadAsset = useCallback(async () => {
    const asset = await schema.send('asset.getById', { id: lot.asset.id });
    setAsset(asset);
  }, [lot.asset.id]);

  useEffect(() => {
    loadAsset();
  }, [loadAsset]);

  if (!asset) return;

  return (
    <VStack
      onClick={onClick}
      cursor="pointer"
      p="1.5rem 1.25rem"
      position="relative"
      borderRadius="sm"
      bg="dark.900"
      gap={0}
      alignItems="start"
      h="full"
      transition="all 0.3s"
      _hover={{
        bg: 'dark.800',
      }}
    >
      <Box flexShrink="0">
        <UILogic.TradeDirectionText value={lot.direction} position="absolute" top="0" right="0" />
        <HStack gap="0.6rem" mt="0.1rem">
          <Text color="dark.200" fontSize="sm">
            #{lot.id.slice(0, 5)}
          </Text>
          <UILogic.LotTypeChip value={lot.type} />
        </HStack>
        <UILogic.AssetName asset={asset} />
      </Box>
      <Divider variant="dashed" color="dark.600" />
      <Box flex="1" py="1rem">
        <Grid templateColumns="repeat(2, 1fr)" gridColumnGap="1rem" gridRowGap="0.75rem">
          {fields.map((field, index) => (
            <GridItem key={index}>
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
      <VStack width="full" alignItems="start">
        <HStack width="full" justifyContent="space-between">
          <Text fontWeight={600} fontSize="sm" color="dark.50">
            Available
          </Text>
          <Text fontWeight={600} color="white" fontSize="xs">
            {/* {[availableSum, totalSum]
              .map((val) => `${val.toLocaleString('en')}$`)
              .join(' / ')} */}
          </Text>
        </HStack>
        {/* <Progress value={(availableSum / totalSum) * 100} colorScheme="green" /> */}
      </VStack>
      <Button w="full" variant="darkOutline" size="sm" mt="1.25rem">
        Place bid
      </Button>
    </VStack>
  );
};