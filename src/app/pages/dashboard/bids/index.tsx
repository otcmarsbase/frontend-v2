import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useCreateOfferModal } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import MyDeals from '@app/pages/dashboard/deals';
import Lot from '@app/pages/dashboard/lot';
import { DashboardListType } from '@app/store';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Dashboard, Paginate } from '@shared/types';
import { List, LotStatus, LotTypeChip } from '@shared/ui-kit';
import { Pagination } from '@shared/ui-logic';
import { EmptyData, LotRow } from '@shared/ui-molecules';
import { format } from 'date-fns';

import MyOffers from '../offers';

import { bidsMock } from './bidsMock';
import { UserDataChip } from './components';

const BidsArr = bidsMock as unknown as Dashboard.IBidItem[];

const MyBids: React.FC = observer(() => {
  const [bids, setBids] = useState<Dashboard.IBidItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openCreateOfferModal = useCreateOfferModal();

  const loadBids = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBids(BidsArr);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBids();
  }, [loadBids]);

  const [paginationOptions] = useState<Paginate.PaginationOptions>({
    page: 1,
    limit: 25,
  });
  const [events] = useState<Paginate.PaginationItems<Dashboard.OfferItem>>({
    total: 30,
    items: [],
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {},
  []);

  return (
    <VStack width="full">
      <List
        width="full"
        items={bids}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={
          <EmptyData
            onCreate={openCreateOfferModal}
            createButtonLabel="Create offers"
          />
        }
        itemRender={(item) => (
          <LotRow
            onClick={({ id }) => router.navigateComponent(Lot, { id })}
            lot={{
              id: item.id,
              lotName: item.lotName,
              lotIconName: item.lotIconName,
              direction: item.offerType,
              isHot: item.isHot,
              status: <LotStatus value={item.status} />,
              fields: [
                {
                  label: 'Lot Type',
                  value: (
                    <LotTypeChip
                      headingProps={{ variant: 'h6' }}
                      lotType={item.lotType}
                    />
                  ),
                },
                {
                  label: 'Published at',
                  value: format(item.publishedAt, 'dd.MM.yyyy'),
                },
                {
                  label: 'Bid FDV',
                  value: (
                    <HStack fontWeight={600}>
                      <Text whiteSpace="nowrap">
                        {item.fdv.toLocaleString('en-US', {
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
                  label: 'Bid size',
                  value: (
                    <HStack fontWeight={600}>
                      <Text whiteSpace="nowrap">{item.bidSize}</Text>
                      <Text whiteSpace="nowrap" color="dark.50">
                        %
                      </Text>
                    </HStack>
                  ),
                },
                {
                  label: 'Offer Maker',
                  value: (
                    <UserDataChip
                      offerMaker={item.offerMaker}
                      offerMakerIcon={item.offerMakerIcon}
                    />
                  ),
                },
                {
                  label: 'Direct Seller/Or not',
                  value: item.isDirectSeller ? 'yes' : 'nope',
                },
                {
                  label: 'Location',
                  value: (
                    <Heading
                      fontSize="1rem"
                      fontWeight="500"
                      lineHeight="1.5rem"
                    >
                      {item.location}
                    </Heading>
                  ),
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

MyBids.getLayout = ({ children }) => (
  <Layouts.DashboardLayout
    onChangeListType={(listType) => {
      if (listType === DashboardListType.ORDERS)
        router.navigateComponent(MyOffers, {});
      if (listType === DashboardListType.DEALS)
        router.navigateComponent(MyDeals, {});
      if (listType === DashboardListType.BIDS)
        router.navigateComponent(MyBids, {});
    }}
    listType={DashboardListType.BIDS}
  >
    {children}
  </Layouts.DashboardLayout>
);

export default MyBids;
