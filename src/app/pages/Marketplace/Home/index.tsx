import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { observer } from 'mobx-react-lite';

import { LotAssetFilter, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { HStack, Heading, VStack, Button } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/otc-desk-gateway';
import { Empty, Pagination, useLoadingCallback, usePagination } from '@shared/ui-kit';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();

  const rpcSchema = useRpcSchemaClient();

  const [filters, setFilters] = useState<UILogic.LotFilterSidebarModel>({});
  const [columnsCount, setColumnsCount] = useState(3);
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);
  const [_assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });

  const assets = useMemo(() => {
    return _assets.items.slice(0, 20);
  }, [_assets.items]);

  const { setTotal, paginationOptions, isEmpty, onChangePage, onShowSizeChange } = usePagination(1, 12);

  const fetchPayload = useMemo<RPC.DTO.LotListActive.Payload>(() => {
    const skip = (paginationOptions.page - 1) * paginationOptions.pageSize;

    const [minContractValue, maxContractValue] = filters.bidSize ?? [];
    const assetIds = filters.assets?.map((asset) => asset.id);

    return {
      skip,
      limit: paginationOptions.pageSize,
      ...prepareFiltersParams({
        assets: assetIds,
        direction: filters.direction,
        minContractValue,
        maxContractValue,
        withReassign: filters.withReassing,
        verticals: filters.assetVerticals,
        type: filters.lotTypes,
        search: filters.search,
      }),
    };
  }, [paginationOptions.pageSize, paginationOptions.page, filters]);

  const isFiltersOpened = useMemo(() => columnsCount === 3, [columnsCount]);

  const toggleFilters = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

  const loadLots = useLoadingCallback(
    useCallback(async () => {
      const assets = await rpcSchema.send('asset.list', { withLots: true }, {});
      const { items, total } = await rpcSchema.send('lot.listActive', fetchPayload, {});

      setLots(items);
      setTotal(total);

      setAssets(assets);
    }, [rpcSchema, fetchPayload, setTotal]),
    true,
  );

  useDebounce(loadLots, CHANGE_FILTERS_DEBOUNCE_DURATION_MS, [fetchPayload]);

  const onChangeFilters = (nextFilters: UILogic.LotFilterSidebarModel) => {
    setFilters((filters) => ({
      ...filters,
      ...nextFilters,
    }));
  };

  const handleResetFilters = () => setFilters({});

  return (
    <VStack alignItems="start">
      <Heading variant="pageHeader">OTC Desk</Heading>
      <LotAssetFilter assets={assets} value={filters.assets ?? []} onChange={(assets) => onChangeFilters({ assets })} />
      <HStack alignItems="start" w="full" gap="2rem">
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
            <UILogic.LotActiveFilters filters={filters} onReset={handleResetFilters} />
            {loadLots.isLoading ? (
              <UILogic.LotGridSkeleton columns={columnsCount} withAnimation={isFiltersOpened} />
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
                      columns={columnsCount}
                      lots={lots}
                      assets={_assets.items}
                      onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                    />
                    <Pagination
                      {...paginationOptions}
                      onChange={onChangePage}
                      onShowSizeChange={onShowSizeChange}
                      showCaption
                      showPageSize
                      pageSizeOptions={[12, 24, 36]}
                    />
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
