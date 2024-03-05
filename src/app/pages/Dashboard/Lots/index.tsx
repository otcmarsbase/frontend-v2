import { useCallback, useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { LotRow, UILogic, useRpcSchemaQuery } from '@app/components';
import * as Layouts from '@app/layouts';
import { DashboardFilters } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Empty, List, Pagination, usePagination } from '@shared/ui-kit';

import { ListLoader } from './_atoms';

export const Lots: React.FC = () => {
  const router = useRouter();
  const { skip, limit, ...paginationProps } = usePagination();

  const filters = useWatch({ name: 'filters' }) as DashboardFilters;

  const fetchPayload = useMemo<DeskGatewaySchema.RPC.DTO.LotList.Payload>(() => {
    const status = filters.status.length
      ? (filters.status.flatMap((value) => {
          switch (value) {
            case 'active':
              return ['ACTIVE'];
            case 'moderated':
              return ['ON_MODERATION'];
            case 'ended':
              return ['REJECTED', 'COMPLETED', 'ARCHIVED'];
            default:
              return [];
          }
        }) as DeskGatewaySchema.LotStatus[])
      : undefined;

    return { page: { skip, limit }, filter: { status, onlyMy: true } };
  }, [skip, limit, filters]);

  const { data: lots, isFetching: lotsIsLoading } = useRpcSchemaQuery('lot.list', fetchPayload);
  const { data: assets, isFetching: assetsIsLoading } = useRpcSchemaQuery(
    'asset.list',
    { filter: { lot: { id: lots?.items?.map(({ id }) => id) } } },
    { enabled: !!lots?.total },
  );

  const findAsset = useCallback(
    (assetId: DeskGatewaySchema.AssetKey['id']) => assets?.items?.find((asset) => asset.id === assetId),
    [assets],
  );

  return (
    <VStack width="full">
      <List
        width="full"
        items={lots?.items}
        itemKey={(item) => item.id}
        isLoading={lotsIsLoading || assetsIsLoading}
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
        footer={lots?.total > 0 && <Pagination {...paginationProps} />}
      />
    </VStack>
  );
};

Lots.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_LOTS">{children}</Layouts.DashboardLayout>;

export default Lots;
