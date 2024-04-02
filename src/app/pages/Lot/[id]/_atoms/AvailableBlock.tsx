import { useMemo } from 'react';

import { Text, Box } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { HStack, UIKit, VStack } from '@shared/ui-kit';
import { formatToMoney } from '@shared/utils';
import Decimal from 'decimal.js';

interface AvailableBlockProps {
  lot: DeskGatewaySchema.Lot;
  stat: DeskGatewaySchema.LotTransactionStatsAggregation;
}

export const AvailableBlock: React.FC<AvailableBlockProps> = ({ lot, stat }) => {
  const available = useMemo(() => new Decimal(stat.available || '0'), [stat]);
  const executed = useMemo(() => new Decimal(stat.executed || '0'), [stat]);
  const total = new Decimal(lot.attributes.COMMON_SUMMARY || '0');

  const chartData = useMemo<UIKit.ChartPieData[]>(() => {
    const availableNumber = available.toNumber();
    const executedNumber = executed.toNumber();

    return [
      {
        id: 'available',
        label: `Available: ${formatToMoney(availableNumber)}`,
        value: availableNumber,
        color: 'dark.700',
      },
      {
        id: 'executed',
        label: `Executed: ${formatToMoney(executedNumber)}`,
        value: executedNumber,
        color: 'orange.300',
      },
    ];
  }, [available, executed]);

  const availableSum = available.toDecimalPlaces(2).toNumber();
  const totalSum = total.toDecimalPlaces(2).toNumber();

  return (
    <VStack bg="dark.900" p="1.25rem" pb="0" borderRadius="sm" w="full">
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
      <Box width="100%" h="11rem">
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
