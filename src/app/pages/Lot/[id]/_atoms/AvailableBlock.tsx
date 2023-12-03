import { useState } from 'react';

import { Text, Box } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';
import { HStack, UIKit, VStack } from '@shared/ui-kit';
import Decimal from 'decimal.js';

interface AvailableBlockProps {
  lot: Resource.Lot.Lot;
}

export const AvailableBlock: React.FC<AvailableBlockProps> = ({ lot }) => {
  const reserved = new Decimal(lot.reserved?.value || '0');
  const available = new Decimal(lot.available?.value || '0');
  const executed = new Decimal(lot.executed?.value || '0');
  const total = new Decimal(lot.attributes.COMMON_SUMMARY || '0');

  const [chartData] = useState<UIKit.ChartPieData[]>([
    {
      id: 'reserved',
      label: 'Reserved',
      value: reserved.toNumber(),
      color: '#F9C409',
    },
    {
      id: 'available',
      label: 'Available',
      value: available.toNumber(),
      color: 'dark.700',
    },
    {
      id: 'executed',
      label: 'Executed',
      value: executed.toNumber(),
      color: 'orange.300',
    },
  ]);

  const availableSum = available.toDecimalPlaces(2).toNumber();
  const totalSum = total.toDecimalPlaces(2).toNumber();

  return (
    <VStack bg="dark.900" p="1.25rem" borderRadius="sm" w="full">
      <HStack w="full" justifyContent="space-between">
        <Text fontFamily="promo" fontSize="md" textTransform="uppercase">
          Available
        </Text>
        <HStack>
          <UIKit.MoneyText fontSize="sm" value={availableSum} abbreviated currencyTextProps={{ color: 'dark.50' }} />
          <Text fontSize="sm">/</Text>
          <UIKit.MoneyText fontSize="sm" value={totalSum} abbreviated currencyTextProps={{ color: 'dark.50' }} />
        </HStack>
      </HStack>
      <Box w="full" h="11rem">
        <UIKit.ChartPie
          data={chartData}
          size="sm"
          formatValue={(point) => (
            <UIKit.MoneyText
              fontSize="sm"
              value={point.datum.formattedValue}
              abbreviated
              currencyTextProps={{
                color: 'dark.50',
                fontWeight: 700,
              }}
            />
          )}
        />
      </Box>
    </VStack>
  );
};
