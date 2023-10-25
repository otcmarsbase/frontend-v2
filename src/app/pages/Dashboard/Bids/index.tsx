import { useCallback, useEffect, useMemo, useState } from 'react';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { Empty, List, Pagination, useLoadingCallback } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

interface MyBidsProps {
  filters?: {
    status?: Resource.Bid.Enums.BidStatus[];
  };
}

const MyBids: React.FC<MyBidsProps> = ({ filters }) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [items, setItems] = useState<Resource.Bid.Bid[]>([]);
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const paginationOptions = useMemo(
    () => ({
      page,
      total,
      pageSize: 10,
    }),
    [page, total],
  );

  const fetchPayload = useMemo<RPC.DTO.BidListMy.Payload>(() => {
    const skip = (paginationOptions.page - 1) * paginationOptions.pageSize;

    return { skip, limit: paginationOptions.pageSize, ...filters };
  }, [paginationOptions.page, paginationOptions.pageSize, filters]);

  const fetchItems = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('bid.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      for (const { assetKey } of items) {
        const asset = await rpcSchema.send('asset.getById', assetKey);
        assets.push(asset);
      }

      setItems(items);
      setAssets(assets);
      setTotal(total);
    }, [rpcSchema, fetchPayload]),
    true,
  );

  const findAsset = useCallback(
    (assetPK: Resource.Asset.AssetKey) => assets.find((asset) => asset.id === assetPK.id),
    [assets],
  );

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onChangePage = (page: number) => setPage(page);

  return (
    <VStack width="full">
      <List
        width="full"
        items={items}
        itemKey={(item) => item.id}
        isLoading={fetchItems.isLoading}
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
        footer={items.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
        itemRender={(item) => (
          <UILogic.BidRow
            bid={item}
            asset={findAsset(item.assetKey)}
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
