import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { LotCard, UILogic, useRpcSchemaClient } from '@app/components';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { VStack, Text, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/otc-desk-gateway';
import { UIKit, useLoadingCallback } from '@shared/ui-kit';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

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
  const [filters, setFilters] = useState<UILogic.LotFiltersBlockModel>({});
  const [columnsCount, setColumnsCount] = useState(3);
  const [direction, setDirection] = useState<Resource.Common.Enums.TradeDirection>('BUY');
  const [isLoading, setIsLoading] = useState(true);
  const [lots, setLots] = useState<{
    items: Resource.Lot.Lot[];
    total: number;
  }>({
    items: [],
    total: 0,
  });
  const [_assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });

  const isFiltersOpened = columnsCount === 3;

  const isEmpty = useMemo(() => !lots.total, [lots]);

  const loadingCallback = useLoadingCallback(
    useCallback(
      async (direction: Resource.Common.Enums.TradeDirection) => {
        try {
          setIsLoading(true);
          const lots = await rpcSchema.send('lot.listActive', { assets: [assetId], direction });
          const assets = await rpcSchema.send('asset.list', { withLots: true }, {});

          setLots(lots);
          setAssets(assets);
        } finally {
          setIsLoading(false);
        }
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

  const toggleFilters = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

  const onChangeFilters = (nextFilters: UILogic.LotFiltersBlockModel) => {
    setFilters((filters) => ({
      ...filters,
      ...nextFilters,
    }));
  };

  const handleResetFilters = () => setFilters({});

  const onSubmitFilters = async () => {
    const minContractValue = filters.bidSize ? filters.bidSize[0] : undefined;
    const maxContractValue = filters.bidSize ? filters.bidSize[1] : undefined;
    try {
      setIsLoading(true);
      const lots = await rpcSchema.send(
        'lot.listActive',
        prepareFiltersParams({
          assets: [assetId],
          direction: filters.direction,
          minContractValue,
          maxContractValue,
          withReassign: filters.withReassing,
          verticals: filters.assetVerticals,
          type: filters.lotTypes,
          search: filters.search,
        }),
        {},
      );
      setLots(lots);
    } finally {
      setIsLoading(false);
    }
  };

  useDebounce(onSubmitFilters, CHANGE_FILTERS_DEBOUNCE_DURATION_MS, [filters]);

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
          <HStack alignItems="start" w="full" gap="2rem">
            {isFiltersOpened && <UILogic.LotFilterBlock filters={filters} onChange={onChangeFilters} />}
            <VStack w="full" alignItems="start" gap="1.5rem">
              <UILogic.LotFilterControls
                toggleButton={{
                  isSelected: isFiltersOpened,
                  onSelect: toggleFilters,
                }}
                search={filters.search}
                onChangeSearch={(search) => onChangeFilters({ search })}
              />
              <VStack alignItems="start" spacing="1rem" width="full">
                <UILogic.LotActiveFilters filters={filters} onReset={handleResetFilters} />
                {isLoading ? (
                  <UILogic.LotGridSkeleton columns={columnsCount} withAnimation={isFiltersOpened} />
                ) : (
                  <>
                    {isEmpty ? (
                      <UIKit.Empty
                        createButton={
                          <UILogic.AuthAction>
                            <Button onClick={() => router.navigateComponent(MBPages.Lot.Create.Home, undefined, {})}>
                              Create offer
                            </Button>
                          </UILogic.AuthAction>
                        }
                      />
                    ) : (
                      <UILogic.LotGrid
                        columns={columnsCount}
                        lots={lots.items}
                        assets={_assets.items}
                        onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                      />
                    )}
                  </>
                )}
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      )}
    </UIKit.Tabs>
  );
}
