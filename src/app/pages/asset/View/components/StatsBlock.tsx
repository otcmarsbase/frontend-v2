import { HStack } from '@chakra-ui/react';
import { StatsInvert } from 'src/app/my-components';

export interface StatsBlockProps {
  averageLotsFdv?: string;
  averageBidsFdv?: string;
  lotSellCount?: number;
  lotBuyCount?: number;
  lotQuantitySummary?: string;
}

export function StatsBlock({
  averageLotsFdv,
  averageBidsFdv,
  lotSellCount,
  lotBuyCount,
  lotQuantitySummary,
}: StatsBlockProps) {
  return (
    <HStack w="100%" gap="2.75rem">
      {averageLotsFdv && <StatsInvert title="Average lots FDV" value={averageLotsFdv} />}
      {averageBidsFdv && <StatsInvert title="Average bids FDV" value={averageBidsFdv} />}
      {lotSellCount && <StatsInvert title="Lots on SELL" value={lotSellCount} />}
      {lotBuyCount && <StatsInvert title="Lots on BUY" value={lotBuyCount} />}
      {lotQuantitySummary && <StatsInvert title="Lot value summary" value={lotQuantitySummary} />}
    </HStack>
  );
}
