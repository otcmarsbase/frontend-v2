import { useCallback, useMemo } from 'react';

import { UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { Empty, List, Pagination, usePagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

export interface DealsProps {
  filters?: {
    search?: string;
    directions?: Resource.Common.Enums.TradeDirection[];
    minValue?: number;
    maxValue?: number;
  };
}

const Deals: React.FC<DealsProps> = ({ filters }) => {
  const router = useRouter();
  const { skip, limit, ...paginationProps } = usePagination();

  const fetchPayload = useMemo<RPC.DTO.DealListMy.Payload>(() => {
    return { skip, limit, ...filters };
  }, [skip, limit, filters]);

  const { data: deals, isLoading: dealsIsLoading } = useRpcSchemaQuery('deal.listMy', fetchPayload);
  const { data: assets, isLoading: assetsIsLoading } = useRpcSchemaQuery(
    'asset.list',
    { deals: deals?.items?.map(({ id }) => id) },
    { enabled: !!deals },
  );
  const { data: lots, isLoading: lotsIsLoading } = useRpcSchemaQuery(
    'lot.listMy',
    { deals: deals?.items?.map(({ id }) => id) },
    { enabled: !!deals },
  );

  const findAsset = useCallback(
    (assetId: Resource.Asset.AssetKey['id']) => assets?.items?.find((asset) => asset.id === assetId),
    [assets],
  );

  const findLot = useCallback(
    (lotId: Resource.Lot.LotKey['id']) => lots?.items?.find((lot) => lot.id === lotId),
    [lots],
  );

  return (
    <VStack width="full">
      <List
        width="full"
        items={deals?.items}
        itemKey={(item) => item.id}
        isLoading={dealsIsLoading || lotsIsLoading || assetsIsLoading}
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
            lot={findLot(item.lotKey.id)}
            asset={findAsset(item.assetKey.id)}
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
