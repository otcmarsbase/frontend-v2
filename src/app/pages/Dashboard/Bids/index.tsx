import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { UILogic, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { DashboardFilters } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource, RPC } from '@schema/desk-gateway';
import { Empty, List, Pagination, useLoadingCallback, usePagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

const MyBids: React.FC = () => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [items, setItems] = useState<Resource.Bid.Bid[]>([]);
  const { setTotal, isEmpty, skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<RPC.DTO.BidListMy.Payload>(() => {
    const status = filters.status.length
      ? (filters.status.flatMap((value) => {
          switch (value) {
            case 'active':
              return ['ACTIVE'];
            case 'moderated':
              return ['ON_MODERATION'];
            case 'ended':
              return ['REJECTED', 'DEAL'];
            default:
              return [];
          }
        }) as Resource.Bid.Enums.BidStatus[])
      : undefined;

    return { skip, limit, status };
  }, [skip, limit, filters]);

  const fetchItems = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('bid.listMy', fetchPayload);
      const assets: Resource.Asset.Asset[] = [];

      for (const { assetKey } of items) {
        const asset = await rpcSchema.send('asset.getById', assetKey);
        assets.push(asset);
      }

      setItems(items);
      setTotal(total);
    }, [rpcSchema, fetchPayload, setTotal]),
    true,
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
        footer={items.length > 0 && <Pagination {...paginationProps} />}
        itemRender={(item) => (
          <UILogic.BidRow
            bid={item}
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
