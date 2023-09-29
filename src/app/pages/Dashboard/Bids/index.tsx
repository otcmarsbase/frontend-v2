import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { Button, VStack } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { Empty, List, Pagination, PaginationProps } from '@shared/ui-kit';

const MyBids: React.FC = observer(() => {
  const rpcSchema = useRpcSchemaClient();
  const [bids, setBids] = useState<Resource.Bid.Bid[]>([]);
  const [assets, setAssets] = useState<Resource.Asset.Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadBids = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('bid.listMy', {});
      setBids(result.items);
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
    loadBids();
    loadAssets();
  }, [loadBids, loadAssets]);

  const [paginationOptions] = useState<PaginationProps>({
    page: 1,
    pageSize: 25,
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  if (!assets.length) return;

  return (
    <VStack width="full">
      <List
        width="full"
        items={bids}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={
          <Empty
            createButton={
              <UILogic.AuthAction>
                <Button onClick={() => {}}>Create bid</Button>
              </UILogic.AuthAction>
            }
          />
        }
        footer={bids.length > 0 && <Pagination {...paginationOptions} onChange={onChangePage} />}
        itemRender={(item) => (
          // <UILogic.BidRow
          //   bid={item}
          //   asset={assets.find((asset) => asset.id === (item.assetPK as Resource.Asset.AssetKey).id)}
          // />
          <></>
        )}
      />
    </VStack>
  );
});

MyBids.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_BIDS">{children}</Layouts.DashboardLayout>;

export default MyBids;
