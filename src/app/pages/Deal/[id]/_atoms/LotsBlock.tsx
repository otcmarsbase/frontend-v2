import { useCallback } from 'react';

import { VStack } from '@chakra-ui/react';
import { UIKit } from '@components/ui-kit';
import { UILogic } from '@components/ui-logic';
import { Resource } from '@schema/api-gateway';

const TradeDirectionTitleMap = new Map<Resource.Common.TradeDirection, React.ReactNode>([
  ['BUY', `Lot's to buy`],
  ['SELL', `Lot's to sell`],
]);

export interface LotsBlockProps {
  direction: Resource.Common.TradeDirection;
  onChange: (direction: Resource.Common.TradeDirection) => any;
  onSelect: (lot: Resource.Lot.Lot) => any;
}

export function LotsBlock({ direction, onChange, onSelect }: LotsBlockProps) {
  const renderTab = useCallback(
    (direction: Resource.Common.TradeDirection) => TradeDirectionTitleMap.get(direction),
    [],
  );

  return (
    <UIKit.Tabs<Resource.Common.TradeDirection>
      items={['BUY', 'SELL']}
      renderKey={(direction) => direction}
      renderTab={renderTab}
      value={direction}
      onChange={onChange}
    >
      {(direction) => (
        <VStack width="full">
          <UILogic.LotFilterControls />
          <UILogic.LotGrid columns={[]} lots={[]} assets={[]} onSelect={onSelect} />
        </VStack>
      )}
    </UIKit.Tabs>
  );
}
