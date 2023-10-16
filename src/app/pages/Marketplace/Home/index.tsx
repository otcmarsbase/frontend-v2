import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { observer } from 'mobx-react-lite';

import { LotAssetFilter, LotCard, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { HStack, Heading, SimpleGrid, VStack, Button } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Pagination, PaginationPayload } from '@schema/common';
import { RPC, Resource } from '@schema/otc-desk-gateway';
import { Empty } from '@shared/ui-kit';
import { motion } from 'framer-motion';

const CHANGE_FILTERS_DEBOUNCE_DURATION_MS = 300;

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();

  const rpcSchema = useRpcSchemaClient();

  const [filters, setFilters] = useState<UILogic.LotFilterSidebarModel>({});
  const [columnsCount, setColumnsCount] = useState(3);
  const [originalLots, setOriginalLots] = useState<RPC.DTO.LotListActive.Result>({
    items: [],
    total: 0,
  });
  const [lots, setLots] = useState<RPC.DTO.LotListActive.Result>(originalLots);
  const [_assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const isEmpty = useMemo(() => !lots.total, [lots]);

  const assets = useMemo(() => {
    return _assets.items.slice(0, 20);
  }, [_assets.items]);

  const isFiltersOpened = columnsCount === 3;

  const [paginationPayload] = useState<PaginationPayload>({
    skip: 1,
    limit: 25,
  });

  const [pagination] = useState<Pagination<Resource.Lot.Lot>>({
    items: [],
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  const toggleFilters = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

  const loadLots = useCallback(async () => {
    try {
      setIsLoading(true);
      const assets = await rpcSchema.send('asset.list', { withLots: true }, {});
      const lots = await rpcSchema.send('lot.listActive', {}, {});

      setAssets(assets);
      setOriginalLots(lots);
      setLots(lots);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema]);

  useEffect(() => {
    loadLots();
  }, [loadLots]);

  const onSubmitFilters = async () => {
    const minContractValue = filters.bidSize ? filters.bidSize[0] : undefined;
    const maxContractValue = filters.bidSize ? filters.bidSize[1] : undefined;
    const assetIds = filters.assets?.map((asset) => asset.id);
    try {
      setIsLoading(true);
      const lots = await rpcSchema.send(
        'lot.listActive',
        prepareFiltersParams({
          assets: assetIds,
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
      setOriginalLots(lots);
      setLots(lots);
    } finally {
      setIsLoading(false);
    }
  };

  useDebounce(onSubmitFilters, CHANGE_FILTERS_DEBOUNCE_DURATION_MS, [filters]);

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
            {isLoading ? (
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
  );
});

OtcDesk.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default OtcDesk;
