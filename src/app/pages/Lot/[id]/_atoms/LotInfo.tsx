import { useMemo } from 'react';

import { SimpleGrid, VStack, Heading, Text } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { MoneyText } from '@shared/ui-kit';

import { LotTargetValuation } from '../../../../components/Resources/Lot/LotTargetValuation';

import { AvailableBlock } from './AvailableBlock';
import { LotInfoItem } from './LotInfoItem';

export interface LotInfoProps {
  lot: DeskGatewaySchema.Lot;
  stat: DeskGatewaySchema.LotTransactionStatsAggregation;
}

export const LotInfo: React.FC<LotInfoProps> = ({ lot, stat }) => {
  const isShowPrice = useMemo(() => ['UNLOCKED_TOKENS', 'EQUITY'].includes(lot.type), [lot.type]);
  return (
    <SimpleGrid gridTemplateColumns="61% 1fr" gap="1.5rem" borderRadius="0.5rem" w="full">
      <VStack bg="dark.900" p="1.25rem" borderRadius="sm" w="full" alignItems="flex-start" spacing="4">
        <Heading textTransform="uppercase" fontSize="md" color="white" fontWeight={700}>
          Lot info
        </Heading>
        <LotInfoItem fieldName="COMMON_SUMMARY">
          <MoneyText
            value={lot.attributes.COMMON_SUMMARY}
            format="0,0.X"
            fontSize="sm"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        </LotInfoItem>
        <LotInfoItem fieldName="INVEST_DOC_FDV">
          <LotTargetValuation value={lot.attributes.INVEST_DOC_FDV} fontSize="sm" />
        </LotInfoItem>
        <LotInfoItem fieldName="COMMON_MIN_FILTER_SUMMARY">
          <MoneyText
            value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
            format="0,0.X"
            fontSize="sm"
            currencyTextProps={{
              color: 'dark.50',
            }}
          />
        </LotInfoItem>
        {isShowPrice ? (
          <LotInfoItem fieldName="PRICE_PER_TOKEN">
            <MoneyText
              value={lot.attributes.COMMON_PRICE}
              format="0,0.X"
              fontSize="sm"
              currencyTextProps={{
                color: 'dark.50',
              }}
            />
          </LotInfoItem>
        ) : (
          <LotInfoItem fieldName="TOKEN_VESTING_PERIOD">
            <Text fontSize="sm" wordBreak="break-all" textAlign="right">
              {lot.attributes.TOKEN_VESTING_PERIOD}
            </Text>
          </LotInfoItem>
        )}
      </VStack>

      <AvailableBlock lot={lot} stat={stat} />
    </SimpleGrid>
  );
};
