import { useCallback, useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { LotCard, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { prepareFiltersParams } from '@app/utils';
import { HStack, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Pagination, PaginationPayload } from '@schema/common';
import { RPC, Resource } from '@schema/otc-desk-gateway';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';

import { FiltersBlock, MarketplaceFilters } from './_atoms';

const CHANGE_FILTERS_THROTTLE_DURATION_MS = 500;

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();
  
  const rpcSchema = useRpcSchemaClient();

  const [filters, setFilters] = useState<UILogic.LotFiltersBlockModel>({});
  const [columnsCount, setColumnsCount] = useState(4);
  const [originalLots, setOriginalLots] = useState<RPC.DTO.LotListActive.Result>({
    items: [],
    total: 0,
  });
  const [lots, setLots] = useState<RPC.DTO.LotListActive.Result>(originalLots);
  const [_assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });

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
    const assets = await rpcSchema.send('asset.list', {}, {});
    const lots = await rpcSchema.send('lot.listActive', {}, {});

    setAssets(assets);
    setOriginalLots(lots);
    setLots(lots);
  }, [rpcSchema]);

  useEffect(() => {
    loadLots();
  }, [loadLots]);

  const onFilterByAsset = async (filters: MarketplaceFilters) => {
    const lots = await rpcSchema.send('lot.listActive', { assets: filters.assetId ? [filters.assetId] : undefined }, {});
    setLots(lots);
  };

  const onSubmitFilters = throttle(async (filters: UILogic.LotFiltersBlockModel) => {
    const minContractValue = filters.bidSize ? filters.bidSize[0] : undefined;
    const maxContractValue = filters.bidSize ? filters.bidSize[1] : undefined;
    const lots = await rpcSchema.send('lot.listActive', prepareFiltersParams({
      direction: filters.direction,
      minContractValue,
      maxContractValue,
      verticals: filters.assetVerticals,
      type: filters.lotTypes,
      search: filters.search,
    }), {});
    setOriginalLots(lots);
    setLots(lots);
  }, CHANGE_FILTERS_THROTTLE_DURATION_MS);

  const onChangeFilters = useCallback((nextFilters: UILogic.LotFiltersBlockModel) => {
    const newFilters = {
      ...filters,
      ...nextFilters
    };
    setFilters(newFilters);
    onSubmitFilters(newFilters);
  }, [onSubmitFilters]);

  return (
    <VStack alignItems="start">
      <Heading variant="pageHeader">OTC Desk</Heading>
      <FiltersBlock assets={assets} applyFilters={onFilterByAsset} />
      <HStack alignItems="start" w="full" gap="2rem">
        {isFiltersOpened && <UILogic.LotFilterBlock filters={filters} onChange={onChangeFilters} />}

        <VStack w="full" alignItems="start" gap="1.5rem">
          <motion.div initial={{}} layout animate={isFiltersOpened}>
            <UILogic.LotFilterControls
              toggleButton={{
                isSelected: isFiltersOpened,
                onSelect: toggleFilters,
              }}
              search={filters.search}
              onChangeSearch={search => onChangeFilters({ search })}
            />
          </motion.div>
          <SimpleGrid w="full" columns={columnsCount} spacing="2rem">
            {lots.items.map((lot) => (
              <motion.div key={lot.id} layout animate={isFiltersOpened}>
                <LotCard
                  lot={lot}
                  asset={_assets.items.find((asset) => asset.id === (lot.assetPK as Resource.Asset.AssetKey).id)}
                  onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: lot.id }, {})}
                />
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </HStack>
    </VStack>
  );
});

OtcDesk.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default OtcDesk;
