import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { LotCard, UILogic } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { useStore } from '@app/store';
import { Button, HStack, Heading, SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/api-gateway';
import { Pagination, PaginationPayload } from '@schema/common';
import { AnimatePresence, motion } from 'framer-motion';

import { FiltersBlock, MarketplaceFilters } from './_atoms';

export const OtcDesk: React.FC = observer(() => {
  const router = useRouter();
  const { mockStore } = useStore();

  const [columnsCount, setColumnsCount] = useState(4);
  const [originalLots, setOriginalLots] = useState<RPC.DTO.LotListActive.Result>({
    items: [],
    total: 0,
  });
  const [lots, setLots] = useState<RPC.DTO.LotListActive.Result>(originalLots);
  const [assets, setAssets] = useState<RPC.DTO.AssetList.Result>({
    items: [],
    total: 0,
  });

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
    const assets = mockStore.assetList({});
    const lots = mockStore.lotListActive(assets.items);
    setAssets(assets);
    setOriginalLots(lots);
    setLots(lots);
  }, []);

  useEffect(() => {
    loadLots();
  }, [loadLots]);

  const onFilter = (filters: MarketplaceFilters) => {
    setLots((lots) => ({
      ...lots,
      items: filters.assetId ? lots.items.filter((lot) => lot.asset.id === filters.assetId) : originalLots.items,
    }));
  };

  return (
    <VStack alignItems="start">
      <Heading variant="pageHeader">OTC Desk</Heading>
      <FiltersBlock assets={assets.items} applyFilters={onFilter} />
      <HStack alignItems="start" w="full" gap="2rem">
        {columnsCount === 3 && <UILogic.LotFilterBlock />}

        <VStack w="full" alignItems="start" gap="1.5rem">
          <motion.div layout initial={{}}>
            <UILogic.LotFilterControls
              toggleButton={{
                isSelected: isFiltersOpened,
                onSelect: toggleFilters,
              }}
            />
          </motion.div>
          <SimpleGrid w="full" columns={columnsCount} spacing="2rem">
            {lots.items.map((lot) => (
              <motion.div key={lot.id} layout>
                <LotCard
                  lot={lot}
                  asset={assets.items.find((asset) => asset.id === lot.asset.id)}
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
