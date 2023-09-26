import { useCallback } from 'react';

import { VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Tabs, LotFilterControls } from 'src/app/my-components';
import { LotGrid } from 'src/app/my-components/LotGrid';

const TradeDirectionTitleMap = new Map<Resource.Common.Enums.TradeDirection, React.ReactNode>([
  ['BUY', `Lot's to buy`],
  ['SELL', `Lot's to sell`],
]);

export interface LotsBlockProps {
  direction: Resource.Common.Enums.TradeDirection;
  onChange: (direction: Resource.Common.Enums.TradeDirection) => any;
  onSelect: (lot: Resource.Lot.Lot) => any;
}

export function LotsBlock({ direction, onChange, onSelect }: LotsBlockProps) {
  const renderTab = useCallback(
    (direction: Resource.Common.Enums.TradeDirection) => TradeDirectionTitleMap.get(direction),
    [],
  );

  return (
    <Tabs<Resource.Common.Enums.TradeDirection>
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
