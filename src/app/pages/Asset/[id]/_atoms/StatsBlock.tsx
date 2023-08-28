import { HStack } from '@chakra-ui/react';
import { UIKit } from '@components/ui-kit';

export interface StatsBlockProps {
  averageLotsFdv: string;
  averageBidsFdv: string;
  lotSellCount: number;
  lotBuyCount: number;
  lotQuantitySummary: string;
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
      {averageLotsFdv && <UIKit.StatsInvert title="Average lots FDV" value={averageLotsFdv} />}
      {averageBidsFdv && <UIKit.StatsInvert title="Average bids FDV" value={averageBidsFdv} />}
      {lotSellCount && <UIKit.StatsInvert title="Lots on SELL" value={lotSellCount} />}
      {lotBuyCount && <UIKit.StatsInvert title="Lots on BUY" value={lotBuyCount} />}
      {lotQuantitySummary && <UIKit.StatsInvert title="Lot value summary" value={lotQuantitySummary} />}
    </HStack>
  );
}
