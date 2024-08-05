import { useCallback, useMemo, useState } from 'react';

import { useObserver } from 'mobx-react-lite';

import { LotCard, LotRow, useRpcSchemaQuery } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { useStore } from '@app/store';
import { HStack, Heading, Text, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Empty, List, Pagination, VStack, usePagination, VIEW_TYPE, ViewSwitcher } from '@shared/ui-kit';

import { ListLoader } from '../../Dashboard/Lots/_atoms';

export const Home = () => {
  const router = useRouter();
  const isShowViewSwitcher = useBreakpointValue({ base: false, lg: true });
  const { favoriteLotStore } = useStore();

  const { skip, limit, ...paginationProps } = usePagination(10);

  const { favorites, isFetching: favoritesIsFetching } = useObserver(() => ({
    favorites: favoriteLotStore.favoriteLots,
    isFetching: favoriteLotStore.isFetching,
  }));

  const { data: lots, isFetching: lotsIsFetching } = useRpcSchemaQuery(
    'lot.list',
    {
      page: { skip, limit },
      filter: {
        id: favorites.map((favorite) => favorite.lotKey.id),
      },
      include: { asset: true, lotTransactionStatsAggregation: true, lotViewCountAggregation: true },
    },
    { enabled: !favoritesIsFetching },
  );

  const [viewType, setViewType] = useState<VIEW_TYPE>('LIST');

  const isFetching = useMemo(() => favoritesIsFetching || lotsIsFetching, [favoritesIsFetching, lotsIsFetching]);

  const findAsset = useCallback(
    (assetId: DeskGatewaySchema.AssetKey['id']) =>
      !isFetching &&
      (lots.links.find((link) => link.resource === 'asset' && link.id === assetId) as DeskGatewaySchema.Asset),
    [lots, isFetching],
  );

  const findStat = useCallback(
    (lotId: DeskGatewaySchema.LotKey['id']) =>
      !isFetching &&
      (lots.links.find(
        (link) => link.resource === 'lot_transaction_stats_aggregation' && link.id === lotId,
      ) as DeskGatewaySchema.LotTransactionStatsAggregation),
    [lots, isFetching],
  );

  const findViewCount = useCallback(
    (lotId: DeskGatewaySchema.LotKey['id']) =>
      !isFetching &&
      (lots.links.find(
        (link) => link.resource === 'lot_view_count_aggregation' && link.id === lotId,
      ) as DeskGatewaySchema.LotViewCountAggregation),
    [lots, isFetching],
  );

  const FavoritePagination = (
    <Pagination {...paginationProps} total={lots?.total} showCaption showPageSize pageSizeOptions={[10, 15, 20]} />
  );

  const FavoriteList = (
    <List
      width="full"
      items={lots?.items}
      itemKey={(item) => item.id}
      isLoading={isFetching}
      loader={ListLoader}
      emptyText={<Empty />}
      itemRender={(item) => (
        <LotRow
          lot={item}
          asset={findAsset(item.attributes.INVEST_DOC_ASSET_PK)}
          stat={findStat(item.id)}
          withFavoriteControl
          onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
        />
      )}
      footer={lots?.total > 0 && FavoritePagination}
    />
  );

  const FavoriteGrid = (
    <>
      <SimpleGrid w="full" columns={{ base: 1, lg: 4 }} spacing="2rem">
        {lots?.items.map((item) => (
          <LotCard
            lot={item}
            key={item.id}
            asset={findAsset(item.attributes.INVEST_DOC_ASSET_PK)}
            stat={findStat(item.id)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
            viewCount={findViewCount(item.id)}
          />
        ))}
      </SimpleGrid>
      {lots?.total > 0 && FavoritePagination}
    </>
  );

  const Favoreties = useMemo(
    () => (viewType === 'LIST' ? FavoriteList : FavoriteGrid),
    [FavoriteGrid, FavoriteList, viewType],
  );

  return (
    <VStack width="full" alignItems="flex-start">
      <HStack width="full" mb="6">
        <HStack alignItems="flex-end" lineHeight={1}>
          <Heading fontFamily="promo" fontSize="2rem" lineHeight={1}>
            My favorite
          </Heading>
          <Text color="dark.200" mb={1}>
            ({favorites.length} lots)
          </Text>
        </HStack>
        {isShowViewSwitcher && (
          <ViewSwitcher
            stackProps={{
              marginLeft: 'auto',
            }}
            initialValue={viewType}
            onChange={setViewType}
          />
        )}
      </HStack>

      {Favoreties}
    </VStack>
  );
};

Home.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
