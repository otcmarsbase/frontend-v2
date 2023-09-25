import { useState } from 'react';

import { Text, Box } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { HStack, MoneyText, UIKit, VStack } from '@shared/ui-kit';

interface AvailableBlockProps {
  lot: Resource.Lot.Lot;
}

export const AvailableBlock: React.FC<AvailableBlockProps> = ({ lot }) => {
  const [chartData, setChartData] = useState<UIKit.ChartPieData[]>([
    {
      id: 'reserved',
      label: 'Reserved',
      value: 1233,
      color: '#F9C409',
    },
    {
      id: 'available',
      label: 'Available',
      value: 1233,
      color: 'dark.700',
    },
    {
      id: 'executed',
      label: 'Executed',
      value: 2500,
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
            value={lot.execution_quantity_info.available.quote}
            abbreviated
            addon={<Text color="dark.50">$</Text>}
          />
          <Text fontSize="sm">/</Text>
          <MoneyText
            fontSize="sm"
            value={lot.execution_quantity_info.total.quote}
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
