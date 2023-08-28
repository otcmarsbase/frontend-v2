import { useCallback } from 'react';

import { VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Tabs, LotFilterControls } from 'src/app/my-components';
import { LotGrid } from 'src/app/my-components/LotGrid';

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
    <Tabs<Resource.Common.TradeDirection>
      items={['BUY', 'SELL']}
      renderKey={(direction) => direction}
      renderTab={renderTab}
      value={direction}
      onChange={onChange}
    >
      {(direction) => (
        <VStack width="full">
          <LotFilterControls />
          <LotGrid columns={[]} lots={[]} assets={[]} onSelect={onSelect} />
        </VStack>
      )}
    </Tabs>
  );
}
