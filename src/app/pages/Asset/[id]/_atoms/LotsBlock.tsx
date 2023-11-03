import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { UILogic, useRpcSchemaClient } from '@app/components';
import { TradeDirectionDictionary, LotTypeDictionary, AssetVerticalTitleDictionary } from '@app/dictionary';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { VStack, Text, HStack, Button } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/desk-gateway';
import { useQueryParams } from '@shared/hooks';
import { UIKit, useLoadingCallback, usePagination } from '@shared/ui-kit';
import pick from 'lodash/pick';
import * as yup from 'yup';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

const TradeDirectionTitleMap = new Map<Resource.Common.Enums.TradeDirection, React.ReactNode>([
  ['BUY', `Lot's to buy`],
  ['SELL', `Lot's to sell`],
]);

export const QueryParamsSchema = yup.object({
  search: yup.string(),
  direction: yup.string().oneOf(TradeDirectionDictionary.keys()),
  type: yup.array().of(yup.string().oneOf(LotTypeDictionary.keys())),
  verticals: yup.array().of(yup.string().oneOf(AssetVerticalTitleDictionary.keys())),
  bidSize: yup.array().of(yup.number()),
  withReassign: yup.bool().transform((value) => (typeof value === 'boolean' ? value : value === '1' ? true : false)),
});

export interface LotsBlockProps {
  asset: Resource.Asset.Asset;
}

export function LotsBlock({ asset }: LotsBlockProps) {
  const router = useRouter();

  const rpcSchema = useRpcSchemaClient();

  const [columnsCount, setColumnsCount] = useState(3);
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);

  const { queryParams, setQueryParams } = useQueryParams(QueryParamsSchema, { id: asset.id });
  const [filters, setFilters] = useState<UILogic.LotFilterSidebarModel>(() => {
    const initialFilters: UILogic.LotFilterSidebarModel = pick(queryParams, [
      'search',
      'direction',
      'type',
      'withReassign',
    ]);

    initialFilters.direction ??= 'BUY';

    if (queryParams.bidSize) initialFilters.bidSize = queryParams.bidSize as [number, number];

    return initialFilters;
  });

  const { setTotal, isEmpty, skip, limit, ...paginationProps } = usePagination(12);

  const fetchPayload = useMemo<RPC.DTO.LotListActive.Payload>(() => {
    const [minContractValue, maxContractValue] = filters.bidSize ?? [];

    return {
      skip,
      limit,
      ...prepareFiltersParams({
        assets: [asset.id],
        direction: filters.direction,
        minContractValue,
        maxContractValue,
        withReassign: filters.withReassign,
        type: filters.type,
        search: filters.search,
      }),
    };
  }, [skip, limit, filters, asset.id]);

  const isFiltersOpened = useMemo(() => columnsCount === 3, [columnsCount]);

  const toggleFilters = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

  const loadLots = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('lot.listActive', fetchPayload, {});

      setLots(items);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
    true,
  );

  useDebounce(loadLots, CHANGE_FILTERS_DEBOUNCE_DURATION_MS, [fetchPayload]);

  const onChangeFilters = (nextFilters: UILogic.LotFilterSidebarModel) => {
    paginationProps.onChange(1);
    setFilters((filters) => ({
      ...filters,
      ...nextFilters,
    }));
    setQueryParams((queryParams) => ({
      ...queryParams,
      ...nextFilters,
    }));
  };

  const handleResetFilters = () => {
    setFilters((filters) => ({ direction: filters.direction }));
    setQueryParams((queryParams) => ({ direction: queryParams.direction }));
  };

  const renderTab = useCallback(
    (direction: Resource.Common.Enums.TradeDirection) => (
      <Text fontFamily="promo" textTransform="uppercase">
        {TradeDirectionTitleMap.get(direction)}
      </Text>
    ),
    [],
  );

  return (
    <UIKit.Tabs<Resource.Common.Enums.TradeDirection>
      items={['BUY', 'SELL']}
      renderKey={(direction) => direction}
      renderTab={renderTab}
      value={filters.direction}
      onChange={(direction) => onChangeFilters({ direction })}
      variant="promo"
    >
      {(direction) => (
        <VStack width="full" alignItems="start" gap="1.5rem">
          <HStack alignItems="start" w="full" gap="2rem">
            {isFiltersOpened && (
              <UILogic.LotFilterSidebar
                visibility={{ direction: false, verticals: false }}
                filters={filters}
                onChange={onChangeFilters}
              />
            )}
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
                <UILogic.LotActiveFilters
                  filters={{ ...filters, assets: undefined, direction: undefined }}
                  onReset={handleResetFilters}
                />
                {loadLots.isLoading ? (
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
                        lots={lots}
                        assets={[asset]}
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
