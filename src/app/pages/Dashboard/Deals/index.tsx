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

const Deals: React.FC = () => {
  const router = useRouter();
  const { skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.DealList.Payload>(() => {
    const status = filters.status.length
      ? (filters.status.flatMap((value) => {
          switch (value) {
            case 'active':
              return ['NEGOTIATION'];
            case 'ended':
              return ['COMPLETED', 'REJECTED'];
            default:
              return [];
          }
        }) as DeskGatewaySchema.DealStatus[])
      : undefined;

    return { page: { skip, limit }, filter: { status }, include: { bid: { lot: { asset: true } } } };
  }, [skip, limit, filters]);

  const { data: deals, isFetching } = useRpcSchemaQuery('deal.list', fetchPayload);

  const findBid = useCallback(
    (deal: DeskGatewaySchema.Deal) =>
      deals.links.find((link) => link.resource === 'bid' && link.id === deal.bidKey.id) as DeskGatewaySchema.Bid,
    [deals],
  );

  const findLot = useCallback(
    (deal: DeskGatewaySchema.Deal) => {
      const bid = findBid(deal);
      return deals.links.find((link) => link.resource === 'lot' && link.id === bid.lotKey.id) as DeskGatewaySchema.Lot;
    },

    [deals, findBid],
  );

  const findAsset = useCallback(
    (deal: DeskGatewaySchema.Deal) => {
      const lot = findLot(deal);
      return deals.links.find(
        (link) => link.resource === 'asset' && link.id === lot.attributes.INVEST_DOC_ASSET_PK,
      ) as DeskGatewaySchema.Asset;
    },

    [deals, findLot],
  );

  return (
    <VStack width="full">
      <List
        width="full"
        items={deals?.items}
        itemKey={(item) => item.id}
        isLoading={isFetching}
        loader={ListLoader}
        emptyText={
          <Empty
            description="Unfortunately, you don't have any deals yet. You can go to the marketplace and view the lots of interest"
            createButton={
              <UILogic.AuthAction>
                <Button onClick={() => router.navigateComponent(MBPages.Marketplace.Home, {}, {})}>
                  Go to marketplace
                </Button>
              </UILogic.AuthAction>
            }
          />
        }
        itemRender={(item) => (
          <UILogic.DealRow
            deal={item}
            lot={findLot(item)}
            asset={findAsset(item)}
            onClick={() => router.navigateComponent(MBPages.Deal.__id__, { id: item.id }, {})}
          />
        )}
        footer={deals?.total > 0 && <Pagination {...paginationProps} total={deals.total} />}
      />
    </VStack>
  );
};

Deals.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_DEALS">{children}</Layouts.DashboardLayout>;

export default Deals;
