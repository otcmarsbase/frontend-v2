import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useCreateOfferModal } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import pages from '@app/pages';
import { DashboardListType } from '@app/store';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { Common, Dashboard, Paginate } from '@shared/types';
import { DealStatus, List, LotTypeChip } from '@shared/ui-kit';
import { Pagination } from '@shared/ui-logic';
import { EmptyData, LotRow } from '@shared/ui-molecules';
import { format } from 'date-fns';

import { dealsMock } from './dealsMock';

const DealsArr = dealsMock;

export interface IMyDealsrProps {
  filters?: {
    search?: string;
    directions?: Common.Direction[];
    minValue?: number;
    maxValue?: number;
  };
}

const MyDeals: React.FC<IMyDealsrProps> = observer(() => {
  const [bids, setBids] = useState<Dashboard.IDealItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openCreateOfferModal = useCreateOfferModal();

  const loadDeals = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBids(DealsArr);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDeals();
  }, [loadDeals]);

  const [paginationOptions] = useState<Paginate.PaginationOptions>({
    page: 1,
    limit: 25,
  });
  const [events] = useState<Paginate.PaginationItems<Dashboard.OfferItem>>({
    total: 30,
    items: [],
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  return (
    <VStack width="full">
      <List
        width="full"
        items={bids}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={<EmptyData onCreate={openCreateOfferModal} createButtonLabel="Create offers" />}
        itemRender={(item) => (
          <LotRow
            onClick={({ id }) => router.navigateComponent(pages.dashboard.deal, { id })}
            lot={{
              id: item.id,
              lotName: item.lotName,
              lotIconName: item.lotIconName,
              direction: item.offerType,
              isHot: null,
              status: null,
              fields: [
                {
                  label: 'Lot Type',
                  value: <LotTypeChip headingProps={{ variant: 'h6' }} lotType={item.lotType} />,
                },
                {
                  label: 'Lot ID',
                  value: (
                    <HStack fontWeight={600}>
                      <Text variant="h1" whiteSpace="nowrap">
                        #{item.lotId}
                      </Text>
                    </HStack>
                  ),
                },
                {
                  label: 'Deal size',
                  value: (
                    <HStack fontWeight={600}>
                      <Text whiteSpace="nowrap">
                        {item.dealSize.toLocaleString('en-US', {
                          maximumFractionDigits: 0,
                        })}
                      </Text>
                      <Text whiteSpace="nowrap" color="dark.50">
                        $
                      </Text>
                    </HStack>
                  ),
                },
                {
                  label: 'Deal FDV',
                  value: (
                    <HStack fontWeight={600}>
                      <Text whiteSpace="nowrap">
                        {item.dealFDV.toLocaleString('en-US', {
                          maximumFractionDigits: 0,
                        })}
                      </Text>
                      <Text whiteSpace="nowrap" color="dark.50">
                        $
                      </Text>
                    </HStack>
                  ),
                },
                {
                  label: 'Created time',
                  value: format(item.createdAt, 'dd.mm.yyyy'),
                },
                {
                  label: 'Status',
                  value: <DealStatus value={item.status} />,
                },
              ],
            }}
          />
        )}
      />

      <Pagination
        total={events.total}
        pageSize={paginationOptions.limit}
        page={paginationOptions.page}
        onChange={onChangePage}
      />
    </VStack>
  );
});

MyDeals.getLayout = ({ children }) => (
  <Layouts.DashboardLayout
    onChangeListType={(listType) => {
      if (listType === DashboardListType.ORDERS) router.navigateComponent(pages.dashboard.offers, {});
      if (listType === DashboardListType.DEALS) router.navigateComponent(pages.dashboard.deals, {});
      if (listType === DashboardListType.BIDS) router.navigateComponent(pages.dashboard.bids, {});
    }}
    listType={DashboardListType.DEALS}
  >
    {children}
  </Layouts.DashboardLayout>
);

export default MyDeals;
