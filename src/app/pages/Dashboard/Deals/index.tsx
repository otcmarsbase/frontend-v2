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

const Deals: React.FC = () => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [items, setItems] = useState<Resource.Deal.Deal[]>([]);
  const { setTotal, isEmpty, skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<RPC.DTO.DealListMy.Payload>(() => {
    const status = filters.status.length
      ? (filters.status.flatMap((value) => {
          switch (value) {
            case 'active':
              return ['NEGOTIATION'];
            case 'ended':
              return ['COMPLETED', 'REJECTED'];
            default:
              return [];
          }
        }) as Resource.Deal.Enums.DealStatus[])
      : undefined;

    return { skip, limit, status };
  }, [skip, limit, filters]);

  const fetchItems = useLoadingCallback(
    useCallback(async () => {
      const { items, total } = await rpcSchema.send('deal.listMy', fetchPayload);
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
            onClick={() => router.navigateComponent(MBPages.Deal.__id__, { id: item.id }, {})}
          />
        )}
        footer={items.length > 0 && <Pagination {...paginationProps} />}
      />
    </VStack>
  );
};

Deals.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_DEALS">{children}</Layouts.DashboardLayout>;

export default Deals;
