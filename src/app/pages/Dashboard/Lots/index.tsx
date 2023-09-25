import { useCallback, useEffect, useState } from 'react';

import { LotRow, UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { Empty, List, Pagination, PaginationProps } from '@shared/ui-kit';

export interface LotsProps {
  filters?: {
    search?: string;
    directions?: Resource.Common.TradeDirection[];
    minValue?: number;
    maxValue?: number;
  };
}

export const Lots: React.FC<LotsProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadLots = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('lot.listActive', {});
      setLots(result.items);
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

  useEffect(() => {
    loadLots();
    loadAssets();
  }, [loadLots, loadAssets]);

  const [paginationOptions] = useState<PaginationProps>({
    page: 1,
    pageSize: 25,
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, pageSize: number) => {}, []);

  if (!assets.length) return;

  return (
    <VStack width="full">
      <List
        width="full"
        items={lots}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={
          <Empty
            createButton={
              <UILogic.AuthAction>
                <Button onClick={() => router.navigateComponent(MBPages.Lot.Create.Home, {}, {})}>Create offer</Button>
              </UILogic.AuthAction>
            }
          />
        }
        itemRender={(item) => (
          <LotRow
            lot={item}
            asset={assets.find((asset) => asset.id === item.asset.id)}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
          />
        )}
        footer={lots.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
      />
    </VStack>
  );
};

Lots.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_LOTS">{children}</Layouts.DashboardLayout>;

export default Lots;
