import { useCallback, useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { DashboardFilters } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { Empty, List, Pagination, usePagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

const MyBids: React.FC = () => {
  const router = useRouter();
  const { skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<RPC.DTO.BidList.Payload>(() => {
    const status = filters.status.length
      ? (filters.status.flatMap((value) => {
          switch (value) {
            case 'active':
              return ['ACTIVE'];
            case 'moderated':
              return ['ON_MODERATION'];
            case 'ended':
              return ['REJECTED', 'DEAL'];
            default:
              return [];
          }
        }) as Resource.Bid.Enums.BidStatus[])
      : undefined;

    return { page: { skip, limit }, filter: { status, onlyMy: true } };
  }, [skip, limit, filters]);

  const { data: bids, isLoading: bidsIsLoading } = useRpcSchemaQuery('bid.list', fetchPayload);
  const { data: assets, isFetching: assetsIsLoading } = useRpcSchemaQuery(
    'asset.list',
    { filter: { bid: { id: bids?.items?.map(({ id }) => id) } } },
    { enabled: !!bids?.total },
  );
  const { data: lots, isFetching: lotsIsLoading } = useRpcSchemaQuery(
    'lot.list',
    { filter: { status: ['ACTIVE'], bid: { id: bids?.items?.map(({ id }) => id) } } },
    { enabled: !!bids?.total },
  );
  const { data: deals, isFetching: dealsIsLoading } = useRpcSchemaQuery(
    'deal.list',
    {
      filter: {
        bid: { id: bids?.items?.map(({ id }) => id) },
      },
    },
    {
      enabled: !!bids?.total,
    },
  );

  const findAsset = useCallback(
    (assetId: Resource.Asset.AssetKey['id']) => assets?.items?.find((asset) => asset.id === assetId),
    [assets],
  );

  const findLot = useCallback(
    (lotId: Resource.Lot.LotKey['id']) => lots?.items?.find((lot) => lot.id === lotId),
    [lots],
  );

  const findDeal = useCallback(
    (dealId: Resource.Deal.DealKey['id']) => deals?.items?.find((deal) => deal.id === dealId),
    [deals],
  );

  return (
    <VStack width="full">
      <List
        width="full"
        items={bids?.items}
        itemKey={(item) => item.id}
        isLoading={bidsIsLoading || assetsIsLoading || lotsIsLoading || dealsIsLoading}
        loader={ListLoader}
        emptyText={
          <Empty
            description="Unfortunately, you don't have any bids yet. You can go to the marketplace and view the lots of interest"
            createButton={
              <UILogic.AuthAction>
                <Button onClick={() => router.navigateComponent(MBPages.Marketplace.Home, {}, {})}>
                  Go to marketplace
                </Button>
              </UILogic.AuthAction>
            }
          />
        }
        footer={bids?.total > 0 && <Pagination {...paginationProps} total={bids.total} />}
        itemRender={(item) => (
          <UILogic.BidRow
            bid={item}
            lot={findLot(item.lotKey.id)}
            asset={findAsset(item.assetKey.id)}
            deal={findDeal(item.dealKey?.id)}
            onClick={() => {
              if (item.dealKey) {
                router.navigateComponent(MBPages.Deal.__id__, { id: item.dealKey.id }, {});
              } else {
                router.navigateComponent(MBPages.Lot.__id__, { id: item.lotKey.id }, {});
              }
            }}
          />
        )}
      />
    </VStack>
  );
};

MyBids.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_BIDS">{children}</Layouts.DashboardLayout>;

export default MyBids;
