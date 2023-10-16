import { useCallback, useEffect, useMemo, useState } from 'react';

import { LotRow, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/otc-desk-gateway';
import { Empty, List, Pagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

export interface LotsProps {
  filters?: {
    search?: string;
    direction?: Resource.Common.Enums.TradeDirection;
    minContractValue?: number;
    maxContractValue?: number;
  };
}

export const Lots: React.FC<LotsProps> = ({ filters }) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [items, setItems] = useState<Resource.Lot.Lot[]>([]);
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

  const fetchPayload = useMemo<RPC.DTO.LotListMy.Payload>(() => {
    const { page, pageSize } = paginationOptions;
    const skip = (page - 1) * pageSize;

    return { skip, limit: pageSize, ...filters };
  }, [paginationOptions, filters]);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const { items, total } = await rpcSchema.send('lot.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      for (const { assetPK } of items) {
        const asset = await rpcSchema.send('asset.getById', assetPK as Resource.Asset.AssetKey);
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
                <Button onClick={() => router.navigateComponent(MBPages.Lot.Create.Home, undefined, {})}>
                  Create offer
                </Button>
              </UILogic.AuthAction>
            }
          />
        }
        itemRender={(item) => (
          <LotRow
            lot={item}
            asset={findAsset(item.assetPK as Resource.Asset.AssetKey)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
          />
        )}
        footer={items.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
      />
    </VStack>
  );
};

Lots.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_LOTS">{children}</Layouts.DashboardLayout>;

export default Lots;
