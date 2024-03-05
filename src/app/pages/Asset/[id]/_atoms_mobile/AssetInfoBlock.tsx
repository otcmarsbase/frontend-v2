import { HStack, Text, VStack } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIKit } from '@shared/ui-kit';

import { Collapser } from './Collapser';

export interface AssetInfoBlock {
  stats: DeskGatewaySchema.AssetLotStatsAggregation;
}

export const AssetInfoBlock = ({ stats }: AssetInfoBlock) => {
  const fields: { label: string; value: React.ReactNode }[] = [
    {
      label: 'Average lots FDV',
      value: (
        <UIKit.MoneyText value={stats.averageFdv} abbreviated fontSize="sm" currencyTextProps={{ color: 'dark.50' }} />
      ),
    },
    {
      label: 'Lot value on buy',
      value: (
        <UIKit.MoneyText value={stats.lotBuyCvSum} abbreviated fontSize="sm" currencyTextProps={{ color: 'dark.50' }} />
      ),
    },
    {
      label: 'Lot value on sell',
      value: (
        <UIKit.MoneyText
          value={stats.lotSellCvSum}
          abbreviated
          fontSize="sm"
          currencyTextProps={{ color: 'dark.50' }}
        />
      ),
    },
  ];

  return (
    <Collapser label="Asset info" defaultOpened>
      <VStack w="full" gap="0.75rem">
        {fields.map((field, index) => (
          <HStack w="full" key={index} justifyContent="space-between" fontSize="sm">
            <Text color="dark.50">{field.label}</Text>
            {field.value}
          </HStack>
        ))}
      </VStack>
    </Collapser>
  );
};
