import { useCallback, useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { DashboardFilters } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Empty, List, Pagination, usePagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

const MyBids: React.FC = () => {
  const router = useRouter();
  const { skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.BidList.Payload>(() => {
    const filter: DeskGatewaySchema.RPC.DTO.BidList.Filter = {
      onlyMy: true,
      OR: [],
    };

    for (const status of filters.status) {
      if (status === 'active') {
        filter.OR.push({
          status: ['ACTIVE'],
        });
        filter.OR.push({
          lot: {
            deal: {
              status: ['NEGOTIATION'],
            },
          },
        });
      } else if (status === 'moderated') {
        filter.OR.push({
          status: ['ON_MODERATION'],
        });
      } else if (status === 'ended') {
        filter.OR.push({
          status: ['ARCHIVED', 'REJECTED'],
        });
        filter.OR.push({
          lot: {
            deal: {
              status: ['COMPLETED', 'REJECTED'],
            },
          },
        });
      }
    }

    if (!filter.OR.length) {
      delete filter.OR;
    }

    return { page: { skip, limit }, filter };
  }, [skip, limit, filters]);

  const { data: bids, isLoading: bidsIsLoading } = useRpcSchemaQuery('bid.list', fetchPayload);
  const { data: assets, isFetching: assetsIsLoading } = useRpcSchemaQuery(
    'asset.list',
    { filter: { bid: { id: bids?.items?.map(({ id }) => id) } } },
    { enabled: !!bids?.total },
  );
  const { data: lots, isFetching: lotsIsLoading } = useRpcSchemaQuery(
    'lot.list',
    { filter: { bid: { id: bids?.items?.map(({ id }) => id) } }, include: { offerMaker: true } },
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

  const findLot = useCallback(
    (bid: DeskGatewaySchema.Bid) => lots?.items?.find((lot) => lot.id === bid.lotKey.id),
    [lots],
  );

  const findAsset = useCallback(
    (bid: DeskGatewaySchema.Bid) => {
      const lot = findLot(bid);

      return assets?.items?.find((asset) => asset.id === lot.attributes.INVEST_DOC_ASSET_PK);
    },
    [assets, findLot],
  );

  const findDeal = useCallback(
    (bid: DeskGatewaySchema.Bid) => deals?.items?.find((deal) => deal.bidKey.id === bid.id),
    [deals],
  );

  const findOfferMaker = useCallback(
    (bid: DeskGatewaySchema.Bid) => {
      const lot = findLot(bid);

      if (!lot) return;

      return lots.links.find(
        (value) => value.resource === 'user' && value.id === lot.offerMaker.id,
      ) as DeskGatewaySchema.User;
    },
    [lots, findLot],
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
            lot={findLot(item)}
            asset={findAsset(item)}
            deal={findDeal(item)}
            offerMaker={findOfferMaker(item)}
            onClick={() => {
              const deal = findDeal(item);
              if (deal) {
                router.navigateComponent(MBPages.Deal.__id__, { id: deal.id }, {});
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
