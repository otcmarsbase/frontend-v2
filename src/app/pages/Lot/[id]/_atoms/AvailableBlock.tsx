import { useState } from 'react';

import { Text, Box } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { HStack, MoneyText, UIKit, VStack } from '@shared/ui-kit';
import Decimal from 'decimal.js';

interface AvailableBlockProps {
  lot: Resource.Lot.Lot;
}

export const AvailableBlock: React.FC<AvailableBlockProps> = ({ lot }) => {
  const [chartData] = useState<UIKit.ChartPieData[]>([
    {
      id: 'reserved',
      label: 'Reserved',
      value: new Decimal(lot.reserved?.stablecoinQuantity.value).toNumber(),
      color: '#F9C409',
    },
    {
      id: 'available',
      label: 'Available',
      value: new Decimal(lot.available?.stablecoinQuantity.value).toNumber(),
      color: 'dark.700',
    },
    {
      id: 'executed',
      label: 'Executed',
      value: new Decimal(lot.executed?.stablecoinQuantity.value).toNumber(),
      color: 'orange.300',
    },
  ]);

  return (
    <VStack bg="dark.900" p="1.25rem" borderRadius="sm">
      <HStack w="full" justifyContent="space-between">
        <Text fontFamily="promo" fontSize="md" textTransform="uppercase">
          Available
        </Text>
        <HStack>
          <MoneyText
            fontSize="sm"
            value={lot.available.unitQuantity.value}
            abbreviated
            addon={<Text color="dark.50">$</Text>}
          />
          <Text fontSize="sm">/</Text>
          <MoneyText
            fontSize="sm"
            value={lot.executed.unitQuantity.value}
            abbreviated
            addon={<Text color="dark.50">$</Text>}
          />
        </HStack>
      </HStack>
      <Box w="full" h="11rem">
        <UIKit.ChartPie
          data={chartData}
          size="sm"
          formatValue={(point) => (
            <MoneyText
              fontSize="sm"
              value={point.datum.formattedValue}
              abbreviated
              addon={
                <Text fontSize="sm" fontWeight={700} color="dark.50">
                  $
                </Text>
              }
            />
          )}
        />
      </Box>
    </VStack>
  );
};
