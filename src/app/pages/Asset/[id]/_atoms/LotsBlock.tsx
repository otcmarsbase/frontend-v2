import { useMemo, useState } from 'react';
import { useToggle } from 'react-use';

import { UILogic, useAuth, useRpcSchemaQuery } from '@app/components';
import { TradeDirectionDictionary, LotTypeDictionary, AssetVerticalTitleDictionary } from '@app/dictionary';
import { useDebounce } from '@app/hooks';
import { MBPages } from '@app/pages';
import { VStack, HStack, Button, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useQueryParams } from '@shared/hooks';
import { UIKit, usePagination } from '@shared/ui-kit';
import pick from 'lodash/pick';
import * as yup from 'yup';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

export const QueryParamsSchema = yup.object({
  search: yup.string(),
  direction: yup.string().oneOf(TradeDirectionDictionary.keys()),
  type: yup.array().of(yup.string().oneOf(LotTypeDictionary.keys())),
  verticals: yup.array().of(yup.string().oneOf(AssetVerticalTitleDictionary.keys())),
  bidSize: yup.array().of(yup.number()),
  withReassign: yup.bool().transform((value) => (typeof value === 'boolean' ? value : value === '1' ? true : false)),
});

export interface LotsBlockProps {
  asset: DeskGatewaySchema.Asset;
}

export function LotsBlock({ asset }: LotsBlockProps) {
  const router = useRouter();
  const { isAuthorized } = useAuth();

  const defaultIsFiltersOpened = useBreakpointValue({ base: false, lg: true }, { ssr: false });
  const [isFiltersOpened, toggleFilters] = useToggle(defaultIsFiltersOpened);
  const columnsCount = isFiltersOpened ? 3 : 4;

  const { queryParams, setQueryParams } = useQueryParams(QueryParamsSchema, { id: asset.id });
  const [filters, setFilters] = useState<UILogic.LotFilterSidebarModel>(() => {
    const initialFilters: UILogic.LotFilterSidebarModel = pick(queryParams, [
      'search',
      'direction',
      'type',
      'withReassign',
      'minContractValue',
      'maxContractValue',
      'reassignmentType',
    ]);

    return initialFilters;
  });

  const { skip, limit, ...paginationProps } = usePagination(12);

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.LotList.Payload>(() => {
    return {
      page: {
        skip,
        limit,
      },

      filter: {
        status: ['ACTIVE'],
        asset: {
          id: [asset.id],
        },
        direction: filters.direction,
        minContractValue: filters.minContractValue,
        maxContractValue: filters.maxContractValue,
        reassignmentType: filters.reassignmentType,
        type: filters.type,
        search: filters.search,
      },
      include: {
        lotTransactionStatsAggregation: true,
      },
    };
  }, [skip, limit, filters, asset.id]);

  const debouncedPayload = useDebounce(fetchPayload, CHANGE_FILTERS_DEBOUNCE_DURATION_MS);

  const { data: lots, isLoading } = useRpcSchemaQuery('lot.list', debouncedPayload, {});
  const { data: favorites, isLoading: favoritesIsLoading } = useRpcSchemaQuery(
    'favoriteLot.list',
    {},
    { enabled: isAuthorized },
  );

  const stats = useMemo(
    () =>
      !isLoading &&
      (lots.links.filter(
        (link) => link.resource === 'lot_transaction_stats_aggregation',
      ) as DeskGatewaySchema.LotTransactionStatsAggregation[]),
    [lots, isLoading],
  );

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

  return (
    <VStack width="full" alignItems="start" gap="1.5rem">
      <HStack alignItems="start" w="full" gap="2rem" flexDirection={{ base: 'column', lg: 'row' }}>
        {isFiltersOpened && (
          <UILogic.LotFilterSidebar
            visibility={{ verticals: false, assets: false, tier: false }}
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
            <UILogic.LotActiveFilters filters={{ ...filters, assets: undefined }} onReset={handleResetFilters} />
            {isLoading || favoritesIsLoading ? (
              <UILogic.LotGridSkeleton columns={{ base: 1, lg: columnsCount }} withAnimation={isFiltersOpened} />
            ) : (
              <>
                {!lots?.total ? (
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
                    columns={{ base: 1, lg: columnsCount }}
                    lots={lots.items}
                    assets={[asset]}
                    stats={stats}
                    favorites={favorites?.items ?? []}
                    onSelect={(lot) => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                  />
                )}
              </>
            )}
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
