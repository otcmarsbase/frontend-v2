import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { Button, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Empty, List, Pagination, PaginationProps } from '@shared/ui-kit';

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
  const [deals, setDeals] = useState<Resource.Deal.Deal[]>([]);
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadBids = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('deals.listMy', {});
      setDeals(result.items);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema]);

  const loadAssets = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('asset.list', {});
      setAssets(result.items);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema]);

  const loadLots = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('lot.listActive', {});
      setLots(result.items);
    } finally {
      setIsLoading(false);
    }
  }, [rpcSchema]);

  useEffect(() => {
    loadBids();
    loadAssets();
    loadLots();
  }, [loadBids, loadAssets, loadLots]);

  const [paginationOptions] = useState<PaginationProps>({
    page: 1,
    pageSize: 25,
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  return (
    <VStack width="full">
      <List
        width="full"
        items={deals}
        itemKey={(item) => item.id}
        isLoading={isLoading}
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
          //   asset={assets.find((asset) => asset.id === (item.assetPK as Resource.Asset.AssetKey).id)}
          //   onClick={() => undefined}
          // />
          <></>
        )}
        footer={deals.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
      />
    </VStack>
  );
});

Deals.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_DEALS">{children}</Layouts.DashboardLayout>;

export default Deals;
