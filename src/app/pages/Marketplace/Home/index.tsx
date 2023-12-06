import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { HStack, Heading, VStack, Button, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/desk-gateway';
import { useQueryParams } from '@shared/hooks';
import { Empty, Pagination, useLoadingCallback, usePagination } from '@shared/ui-kit';
import pick from 'lodash/pick';

import { QueryParamsSchema } from './schema';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();

  const rpcSchema = useRpcSchemaClient();

  const defaultIsFiltersOpened = useBreakpointValue(
    {
      md: true,
      base: false,
    },
    { ssr: false },
  );

  const [isFiltersOpened, setIsFiltersOpened] = useState<boolean>(defaultIsFiltersOpened);
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);
  const [_assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });

  const assets = useMemo(() => {
    return _assets.items.slice(0, 20);
  }, [_assets.items]);

  const { queryParams, setQueryParams } = useQueryParams(QueryParamsSchema);
  const [filters, setFilters] = useState<UILogic.LotFilterSidebarModel>(() => {
    const initialFilters: UILogic.LotFilterSidebarModel = pick(queryParams, [
      'search',
      'direction',
      'type',
      'verticals',
      'withReassign',
      'assets',
    ]);

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
        assets: filters.assets,
        direction: filters.direction,
        minContractValue,
        maxContractValue,
        withReassign: filters.withReassign,
        verticals: filters.verticals,
        type: filters.type,
        search: filters.search,
      }),
    };
  }, [skip, limit, filters]);

  const toggleFilters = () => {
    setIsFiltersOpened((opened) => !opened);
  };

  const loadLots = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('lot.listActive', fetchPayload, {});

      setLots(items);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
    true,
  );

  const loadAssets = useLoadingCallback(
    useCallback(async () => {
      const assets = await rpcSchema.send('asset.list', { withLots: true }, {});
      setAssets(assets);
    }, [rpcSchema]),
    true,
  );

  const isLoading = useMemo(
    () => loadLots.isLoading || loadAssets.isLoading,
    [loadLots.isLoading, loadAssets.isLoading],
  );

  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

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
    setFilters({});
    setQueryParams({});
  };

  const columnsCount = isFiltersOpened ? 3 : 4;

  return (
    <VStack alignItems="start">
      <Heading variant="pageHeader">OTC Desk</Heading>
      <UILogic.LotAssetFilter
        assets={assets}
        value={assets.filter((asset) => filters.assets?.includes(asset.id))}
        onChange={(assets) => onChangeFilters({ assets: assets.map((asset) => asset.id) })}
      />
      <HStack alignItems="start" flexDirection={{ base: 'column', md: 'row' }} w="full" gap="2rem">
        {isFiltersOpened && <UILogic.LotFilterSidebar filters={filters} onChange={onChangeFilters} />}
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
              filters={{ ...filters, assets: assets.filter((asset) => filters.assets?.includes(asset.id)) }}
              onReset={handleResetFilters}
            />
            {isLoading ? (
              <UILogic.LotGridSkeleton columns={{ base: 1, md: columnsCount }} withAnimation={isFiltersOpened} />
            ) : (
              <>
                {isEmpty ? (
                  <Empty
                    createButton={
                      <UILogic.AuthAction>
                        <Button onClick={() => router.navigateComponent(MBPages.Lot.Create.Home, undefined, {})}>
                          Create offer
                        </Button>
                      </UILogic.AuthAction>
                    }
                  />
                ) : (
                  <>
                    <UILogic.LotGrid
                      columns={{ base: 1, md: columnsCount }}
                      lots={lots}
                      assets={_assets.items}
                      onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                    />
                    <Pagination {...paginationProps} showCaption showPageSize pageSizeOptions={[12, 24, 36]} />
                  </>
                )}
              </>
            )}
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
});

OtcDesk.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default OtcDesk;
