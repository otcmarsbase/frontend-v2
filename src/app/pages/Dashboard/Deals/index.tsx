import { useCallback, useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { Button, VStack } from '@chakra-ui/react';
import { Resource, RPC } from '@schema/api-gateway';
import { Empty, List, Pagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

export interface DealsProps {
  filters?: {
    search?: string;
    directions?: Resource.Common.Enums.TradeDirection[];
    minValue?: number;
    maxValue?: number;
  };
}

const Deals: React.FC<DealsProps> = observer(() => {
  const rpcSchema = useRpcSchemaClient();
  const [items, setItems] = useState<Resource.Deal.Deal[]>([]);
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
      const { items, total } = await rpcSchema.send('deals.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      // for (const { assetPK } of items) {
      //   const asset = await rpcSchema.send('asset.getById', assetPK as Resource.Asset.AssetKey);
      //   assets.push(asset);
      // }

      setItems(items);
      setAssets(assets);
      setTotal(total);
    } finally {
      setTimeout(() => setIsLoading(false), 200);
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
                <Button onClick={() => {}}>Create deal</Button>
              </UILogic.AuthAction>
            }
          />
        }
        itemRender={(item) => (
          // <UILogic.DealRow
          //   deal={item}
          //   asset={findAsset(item.assetPK as Resource.Asset.AssetKey)}
          //   onClick={() => undefined}
          // />
          <></>
        )}
        footer={items.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
      />
    </VStack>
  );
});

Deals.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_DEALS">{children}</Layouts.DashboardLayout>;

export default Deals;
