import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRPCSchema } from '@app/hooks';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import {
  AssetName,
  DealType,
  HotChip,
  LotTypeChip,
  NumberText,
} from '@shared/ui-kit';
import { formatDate } from '@shared/utils';
import Decimal from 'decimal.js';
import { format } from 'numerable';

type FieldType = {
  name: string;
  value: React.ReactNode;
};

export interface LotCardProps {
  onClick: () => void;
  lot: Resource.Lot.Lot;
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
          <NumberText
            value={lot.valuation_info.fdv_quantity.quote || 0}
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
          <NumberText
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
          <NumberText
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
            value: (
              <Text>{formatDate(new Date(lot.deadline), 'dd/MM/yyyy')}</Text>
            ),
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
        <DealType
          invert
          value={lot.direction}
          position="absolute"
          top="0"
          right="0"
        />
        <HStack gap="0.6rem" mt="0.1rem">
          <Text color="dark.200" fontSize="sm">
            #{lot.id.slice(0, 5)}
          </Text>
          <LotTypeChip lotType={lot.type} />
          {lot.score >= 70 && <HotChip />}
        </HStack>
        <AssetName name={asset.info.title} logo={asset.info.logo_url} />
      </Box>
      <Divider variant="dashed" color="dark.600" />
      <Box flex="1" py="1rem">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gridColumnGap="1rem"
          gridRowGap="0.75rem"
        >
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
