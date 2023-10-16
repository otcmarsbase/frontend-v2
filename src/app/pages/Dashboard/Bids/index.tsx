import { useCallback, useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/otc-desk-gateway';
import { Empty, List, Pagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

const MyBids: React.FC = observer(() => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [items, setItems] = useState<Resource.Bid.Bid[]>([]);
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    const { page, pageSize } = paginationOptions;
    const skip = (page - 1) * pageSize;

    return { skip, limit: pageSize };
  }, [paginationOptions]);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const { items, total } = await rpcSchema.send('bid.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      for (const { assetKey } of items) {
        const asset = await rpcSchema.send('asset.getById', assetKey);
        assets.push(asset);
      }

      setItems(items);
      setAssets(assets);
      setTotal(total);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema, fetchPayload]);

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
        isLoading={isLoading}
        loader={ListLoader}
        emptyText={
          <Empty
            createButton={
              <UILogic.AuthAction>
                <Button onClick={() => {}}>Create bid</Button>
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
              if (item.deal) {
                router.navigateComponent(MBPages.Deal.__id__, { id: item.deal.id }, {});
              } else {
                router.navigateComponent(MBPages.Lot.__id__, { id: item.lotKey.id }, {});
              }
            }}
          />
        )}
      />
    </VStack>
  );
});

MyBids.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_BIDS">{children}</Layouts.DashboardLayout>;

export default MyBids;
