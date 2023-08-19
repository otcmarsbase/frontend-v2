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
import { Assets, Common, LotFlow } from '@shared/types';
import { AssetName, DealType, HotChip } from '@shared/ui-kit';

export interface LotItemProps {
  onClick: () => void;
  id: LotFlow.LotId;
  lotType: LotFlow.LotType;
  isHot: boolean;
  direction: Common.Direction;
  asset: Assets.Asset;
  fdv: number;
  minBidSize: number;
  totalBidsPlaced: number;
  deadline: string;
  totalSum: number;
  availableSum: number;
}

const lotTypeText: Record<LotFlow.LotType, string> = {
  SAFE: 'SAFE',
  SAFT: 'SAFT',
  TOKEN_WARRANT: 'Token warrant',
};

export const LotItem: React.FC<LotItemProps> = ({
  id,
  lotType,
  isHot,
  direction: dealType,
  asset,
  fdv,
  minBidSize,
  totalBidsPlaced,
  deadline,
  totalSum,
  availableSum,
  onClick,
}) => {
  type FieldType = {
    name: string;
    value: any;
    formatter?: (val: FieldType['value']) => React.ReactNode;
  };

  const formatDollars = (val: number) => (
    <Text>
      {val.toLocaleString('en')}&nbsp;
      <Text as="span" color="dark.50">
        $
      </Text>
    </Text>
  );

  const fields: FieldType[] = [
    {
      name: 'FDV',
      value: fdv,
      formatter: formatDollars,
    },
    {
      name: 'Minimal Bid Size',
      value: minBidSize,
      formatter: formatDollars,
    },
    {
      name: 'Total Bids Placed',
      value: totalBidsPlaced,
    },
    {
      name: 'Lot Deadline',
      value: deadline,
    },
    {
      name: 'Vertical',
      value: 'TODO',
    },
  ];

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
      <DealType invert value={dealType} position="absolute" top="0" right="0" />
      <HStack gap="0.6rem" mt="0.1rem">
        <Text color="dark.200" fontSize="sm">
          #{id}
        </Text>
        <Text
          p="0.12rem 0.5rem"
          fontWeight={600}
          bg="rgba(93, 95, 239, 0.40)"
          borderRadius="micro"
          fontSize="2xs"
        >
          {lotTypeText[lotType]}
        </Text>
        {isHot && <HotChip />}
      </HStack>
      <AssetName name={asset.name} iconName={asset.iconName} />
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
            {[availableSum, totalSum]
              .map((val) => `${val.toLocaleString('en')}$`)
              .join(' / ')}
          </Text>
        </HStack>
        <Progress value={(availableSum / totalSum) * 100} colorScheme="green" />
      </VStack>
      <Button w="full" variant="darkOutline" size="sm" mt="1.25rem">
        Place bid
      </Button>
    </Box>
  );
};
