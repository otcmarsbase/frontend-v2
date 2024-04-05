import { useCallback, useEffect, useMemo } from 'react';

import { LotRow, useAuth, useRpcSchemaQuery } from '@app/components';
import { UILayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { HStack, Heading, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Empty, List, Pagination, VStack, usePagination } from '@shared/ui-kit';

import { ListLoader } from '../../Dashboard/Lots/_atoms';

export const Home = () => {
  const router = useRouter();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    if (!isAuthorized) router.navigateComponent(MBPages.Marketplace.Home, {}, {});
  }, [isAuthorized, router]);

  const { skip, limit, ...paginationProps } = usePagination();

  const { data: favorites, isFetching: favoritesIsFetching } = useRpcSchemaQuery('favoriteLot.list', {});

  const { data: lots, isFetching: lotsIsFetching } = useRpcSchemaQuery(
    'lot.list',
    {
      page: { skip, limit },
      filter: {
        id: favorites?.items?.map((favorite) => favorite.lotKey.id),
      },
      include: { asset: true, lotTransactionStatsAggregation: true },
    },
    { enabled: !favoritesIsFetching },
  );

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

  const findFavorite = useCallback(
    (lotId: DeskGatewaySchema.LotKey['id']) =>
      !isFetching && favorites?.items?.find((favorite) => favorite.lotKey.id === lotId),
    [favorites, isFetching],
  );

  return (
    <VStack width="full" alignItems="flex-start">
      <HStack mb="6">
        <HStack alignItems="flex-end" lineHeight={1}>
          <Heading fontFamily="promo" fontSize="2rem" lineHeight={1}>
            My favorite
          </Heading>
          {favorites?.items && (
            <Text color="dark.200" mb={1}>
              ({favorites?.items.length} lots)
            </Text>
          )}
        </HStack>
      </HStack>

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
            favorite={findFavorite(item.id)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
          />
        )}
        footer={lots?.total > 0 && <Pagination {...paginationProps} />}
      />
    </VStack>
  );
};

Home.getLayout = ({ children }) => {
  return <UILayout.AppLayout>{children}</UILayout.AppLayout>;
};
