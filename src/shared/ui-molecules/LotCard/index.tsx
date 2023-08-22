import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRPCSchema } from '@app/hooks';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Progress,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { AssetName, DealType, HotChip, LotTypeChip } from '@shared/ui-kit';
import Decimal from 'decimal.js';

type FieldType = {
  name: string;
  value: any;
  formatter?: (val: FieldType['value']) => React.ReactNode;
};

export interface LotCardProps {
  onClick: () => void;
  lot: Resource.Lot.Lot;
}

const lotTypeText: Record<Resource.Lot.LotType, string> = {
  SAFE: 'SAFE',
  SAFT: 'SAFT',
  TOKEN_WARRANT: 'Token warrant',
};

export const LotCard: React.FC<LotCardProps> = ({ lot, onClick }) => {
  const schema = useRPCSchema();

  const [asset, setAsset] = useState<Resource.Asset.Asset>();

  const formatDollars = (val: number) => (
    <Text>
      {val.toLocaleString('en')}&nbsp;
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

    return [
      {
        name: 'FDV',
        value: new Decimal(lot.valuation_info.fdv_quantity.quote || 0)
          .toDecimalPlaces(2)
          .toString(),
        formatter: formatDollars,
      },
      {
        name: 'Minimal Bid Size',
        value: minSizeDea,
        formatter: formatDollars,
      },
      {
        name: 'Total Bids Placed',
        value: new Decimal(lot.execution_quantity_info.total.quote || 0)
          .toDecimalPlaces(2)
          .toString(),
        formatter: formatDollars,
      },
      {
        name: 'Lot Deadline',
        value: '',
      },
      {
        name: 'Vertical',
        value: 'TODO',
      },
    ];
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
    <Box
      onClick={onClick}
      cursor="pointer"
      p="1.5rem 1.25rem"
      position="relative"
      borderRadius="sm"
      bg="dark.900"
      transition="all 0.3s"
      _hover={{
        bg: 'dark.800',
      }}
    >
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
      <AssetName name={asset.id} logo={asset.info.logo_url} />
      <Divider my="1.25rem" variant="dashed" color="dark.600" />
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
              {field.formatter ? (
                field.formatter(field.value)
              ) : (
                <Text>{field.value}</Text>
              )}
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <Divider variant="dashed" my="1.25rem" color="dark.600" />
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
    </Box>
  );
};
