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

    return {
      page: { skip, limit },
      filter: { status, onlyMy: true },
      include: { asset: true, lotTransactionStatsAggregation: true },
    };
  }, [skip, limit, filters]);

  const { data: lots, isFetching } = useRpcSchemaQuery('lot.list', fetchPayload);

  const findAsset = useCallback(
    (assetId: DeskGatewaySchema.AssetKey['id']) =>
      !isFetching &&
      (lots.links.find((link) => link.resource === 'asset' && link.id === assetId) as DeskGatewaySchema.Asset),
    [lots, isFetching],
  );

  const findStat = useCallback(
    (lotId: DeskGatewaySchema.LotKey['id']) =>
      !isFetching &&
      (lots.links.find(
        (link) => link.resource === 'lot_transaction_stats_aggregation' && link.id === lotId,
      ) as DeskGatewaySchema.LotTransactionStatsAggregation),
    [lots, isFetching],
  );

  return (
    <VStack width="full">
      <List
        width="full"
        items={lots?.items}
        itemKey={(item) => item.id}
        isLoading={isFetching}
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
            stat={findStat(item.id)}
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
