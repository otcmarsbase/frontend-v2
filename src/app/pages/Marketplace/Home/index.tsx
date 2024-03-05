import { useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import { useDebounce } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { HStack, Heading, VStack, Button, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useQueryParams } from '@shared/hooks';
import { Empty, Pagination, usePagination } from '@shared/ui-kit';
import { isDeeplyEmpty } from '@shared/utils';
import pick from 'lodash/pick';

import { QueryParamsSchema } from './schema';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();

  const defaultIsFiltersOpened = useBreakpointValue(
    {
      md: true,
      base: false,
    },
    { ssr: false },
  );

  const [isFiltersOpened, setIsFiltersOpened] = useState<boolean>(defaultIsFiltersOpened);

  const { data: _assets, isLoading: assetsIsLoading } = useRpcSchemaQuery('asset.list', { filter: { withLots: true } });

  const assets = useMemo(() => {
    if (!_assets) return [];

    return _assets.items.slice(0, 20);
  }, [_assets]);

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

  const { skip, limit, ...paginationProps } = usePagination(12);

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.LotList.Payload>(() => {
    const [minContractValue, maxContractValue] = filters.bidSize ?? [];

    const payload: DeskGatewaySchema.RPC.DTO.LotList.Payload = {
      page: {
        skip,
        limit,
      },
      filter: {
        status: ['ACTIVE'],
        asset: {
          id: filters.assets,
        },
        direction: filters.direction,
        minContractValue,
        maxContractValue,
        reassignmentType: filters.reassignmentType,
        verticals: filters.verticals,
        type: filters.type,
        search: filters.search,
      },
    };

    Object.keys(payload.filter).forEach((key) => {
      if (isDeeplyEmpty(payload.filter[key])) {
        delete payload.filter[key];
      }
    });

    return payload;
  }, [skip, limit, filters]);

  const debauncedPayload = useDebounce(fetchPayload, CHANGE_FILTERS_DEBOUNCE_DURATION_MS);

  const { data: lots, isLoading: lotsIsLoading } = useRpcSchemaQuery('lot.list', debauncedPayload, {});

  const isLoading = useMemo(() => lotsIsLoading || assetsIsLoading, [lotsIsLoading, assetsIsLoading]);

  const toggleFilters = () => {
    setIsFiltersOpened((opened) => !opened);
  };

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

  const columnsCount = useMemo(() => (isFiltersOpened ? 3 : 4), [isFiltersOpened]);

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
                {!lots.total ? (
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
                      lots={lots.items}
                      assets={_assets?.items || []}
                      onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                    />
                    <Pagination
                      {...paginationProps}
                      total={lots.total}
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
