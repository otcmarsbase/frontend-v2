import { useCallback, useEffect, useState } from 'react';

import { UILogic } from '@app/components';
import { useStore } from '@app/store';
import { VStack, Text } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';

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
  const { mockStore } = useStore();
  const [lots, setLots] = useState<{
    items: Resource.Lot.Lot[];
    total: number;
  }>({
    items: [],
    total: 0,
  });

  const loadingCallback = useLoadingCallback(
    useCallback(async () => {
      // TODO Delete
      const assets = mockStore.assetList({});
      setLots(mockStore.lotListActive(assets.items));
    }, [mockStore]),
  );

  useEffect(() => {
    loadingCallback();
  }, [loadingCallback]);

  const renderTab = useCallback(
    (direction: Resource.Common.TradeDirection) => (
      <Text fontFamily="promo" textTransform="uppercase">
        {TradeDirectionTitleMap.get(direction)}
      </Text>
    ),
    [],
  );

  console.log({ lots });

  return (
    <UIKit.Tabs<Resource.Common.TradeDirection>
      items={['BUY', 'SELL']}
      renderKey={(direction) => direction}
      renderTab={renderTab}
      value={direction}
      onChange={onChange}
      variant="promo"
    >
      {(direction) => (
        <VStack width="full" alignItems="start" gap="1.5rem">
          <UILogic.LotFilterControls />
          <UILogic.LotGrid columns={4} lots={lots.items} assets={[]} onSelect={onSelect} />
        </VStack>
      )}
    </UIKit.Tabs>
  );
}
