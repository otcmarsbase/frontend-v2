import { useCallback, useEffect, useState } from 'react';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { MBPages } from '@app/pages';
import { VStack, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/otc-desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';

const TradeDirectionTitleMap = new Map<Resource.Common.Enums.TradeDirection, React.ReactNode>([
  ['BUY', `Lot's to buy`],
  ['SELL', `Lot's to sell`],
]);

export interface LotsBlockProps {
  assetId: Resource.Asset.AssetKey['id'];
}

export function LotsBlock({ assetId }: LotsBlockProps) {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [direction, setDirection] = useState<Resource.Common.Enums.TradeDirection>('BUY');
  const [lots, setLots] = useState<{
    items: Resource.Lot.Lot[];
    total: number;
  }>({
    items: [],
    total: 0,
  });

  const loadingCallback = useLoadingCallback(
    useCallback(
      async (direction: Resource.Common.Enums.TradeDirection) => {
        const lots = await rpcSchema.send('lot.listActive', { assets: [assetId], direction });
        setLots(lots);
      },
      [assetId, rpcSchema],
    ),
  );

  useEffect(() => {
    loadingCallback(direction);
  }, [loadingCallback, direction]);

  const renderTab = useCallback(
    (direction: Resource.Common.Enums.TradeDirection) => (
      <Text fontFamily="promo" textTransform="uppercase">
        {TradeDirectionTitleMap.get(direction)}
      </Text>
    ),
    [],
  );

  const onChangeDirection = useCallback(
    (direction: Resource.Common.Enums.TradeDirection) => {
      setDirection(direction);
      loadingCallback(direction);
    },
    [loadingCallback],
  );

  return (
    <UIKit.Tabs<Resource.Common.Enums.TradeDirection>
      items={['BUY', 'SELL']}
      renderKey={(direction) => direction}
      renderTab={renderTab}
      value={direction}
      onChange={onChangeDirection}
      variant="promo"
    >
      {(direction) => (
        <VStack width="full" alignItems="start" gap="1.5rem">
          <UILogic.LotFilterControls />
          <UILogic.LotGrid
            columns={4}
            lots={lots.items}
            assets={[]}
            onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
          />
        </VStack>
      )}
    </UIKit.Tabs>
  );
}
