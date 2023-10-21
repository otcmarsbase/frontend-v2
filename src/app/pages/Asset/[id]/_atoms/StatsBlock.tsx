import { HStack, Text } from '@chakra-ui/react';
import { UIKit } from '@shared/ui-kit';

export interface StatsBlockProps {
  averageLotsFdv: string;
  lotSellCount: number;
  lotBuyCount: number;
  lotValueOnBuy: string;
  lotValueOnSell: string;
}

export function StatsBlock({
  averageLotsFdv,
  lotSellCount,
  lotBuyCount,
  lotValueOnBuy,
  lotValueOnSell,
}: StatsBlockProps) {
  return (
    <HStack w="100%" gap="2.75rem">
      <UIKit.StatsInvert
        title="Average lots FDV"
        value={
          <UIKit.MoneyText
            value={averageLotsFdv}
            abbreviated
            fontSize="sm"
            addon={
              <Text fontSize="sm" color="dark.50">
                $
              </Text>
            }
          />
        }
      />
      {/* <UIKit.StatsInvert title="Lots on SELL" value={<Text fontSize="sm">{lotSellCount}</Text>} /> */}
      {/* <UIKit.StatsInvert title="Lots on BUY" value={<Text fontSize="sm">{lotBuyCount}</Text>} /> */}
      <UIKit.StatsInvert
        title="Lot value on buy"
        value={
          <UIKit.MoneyText
            value={lotValueOnBuy}
            abbreviated
            fontSize="sm"
            addon={
              <Text fontSize="sm" color="dark.50">
                $
              </Text>
            }
          />
        }
      />
      <UIKit.StatsInvert
        title="Lot value on buy"
        value={
          <UIKit.MoneyText
            value={lotValueOnSell}
            abbreviated
            fontSize="sm"
            addon={
              <Text fontSize="sm" color="dark.50">
                $
              </Text>
            }
          />
        }
      />
    </HStack>
  );
}
