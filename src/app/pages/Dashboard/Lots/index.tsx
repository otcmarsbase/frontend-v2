import { useCallback, useEffect, useMemo, useState } from 'react';

import { LotRow, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { Empty, List, Pagination, useLoadingCallback, usePagination } from '@shared/ui-kit';

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
  const { setTotal, isEmpty, skip, limit, ...paginationProps } = usePagination();

  const fetchPayload = useMemo<RPC.DTO.DealListMy.Payload>(() => {
    return { skip, limit, ...filters };
  }, [skip, limit, filters]);

  const fetchItems = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('lot.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      for (const { attributes } of items) {
        if (attributes.INVEST_DOC_ASSET_PK) {
          const asset = await rpcSchema.send('asset.getById', { id: attributes.INVEST_DOC_ASSET_PK });
          assets.push(asset);
        }
      }

      setItems(items);
      setAssets(assets);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
    true,
  );

  const findAsset = useCallback(
    (assetId: Resource.Asset.AssetKey['id']) => assets.find((asset) => asset.id === assetId),
    [assets],
  );

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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
            asset={findAsset(item.attributes.INVEST_DOC_ASSET_PK)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
          />
        )}
        footer={items.length > 0 && <Pagination {...paginationProps} />}
      />
    </VStack>
  );
};

Lots.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_LOTS">{children}</Layouts.DashboardLayout>;

export default Lots;
