import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useCreateOfferModal } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import LotView from '@app/pages/dashboard/lotView';
import { DashboardListType } from '@app/store';
import { Button, VStack } from '@chakra-ui/react';
import { Paginate, Dashboard, Common } from '@shared/types';
import { List, LotStatus } from '@shared/ui-kit';
import { Pagination } from '@shared/ui-logic';
import { EmptyData, OfferRow } from '@shared/ui-molecules';

import MyBids from '../bids';

import { mockRequest } from './mockRequest';

export interface MyOfferProps {
  filters?: {
    search?: string;
    directions?: Common.Direction[];
    minValue?: number;
    maxValue?: number;
  };
}

// TODO Fix problem
// const MyOffersPageSchema = {
//   filters: {
//     search: PageSchema.stringParser,
//     directions: PageSchema.arrayParser(
//       PageSchema.enumParser<Common.Direction>(['BUY', 'SELL']),
//     ),
//     minValue: PageSchema.numberParser,
//     maxValue: PageSchema.numberParser,
//   },
// } satisfies PageSchema<MyOfferProps>;

export const MyOffers: React.FC<MyOfferProps> = observer((props) => {
  const [offers, setOffers] = useState<Dashboard.OfferItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // console.log(props);
  // const parsedProps = PageSchema.resolve(props, MyOffersPageSchema);

  const openCreateOfferModal = useCreateOfferModal();

  const loadOffers = useCallback(async () => {
    setIsLoading(true);
    try {
      const offers = await mockRequest({});
      setOffers(offers);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOffers();
  }, [loadOffers]);

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
      <Button
        onClick={() => {
          router.navigateComponent(
            MyOffers,
            {
              filters: {
                search: '123',
                directions: ['BUY', 'SELL'],
                test: [
                  { type: 'SHORT', count: 1, good: { name: 'L0' } },
                  { type: 'LONG', count: 5, good: { name: 'Bitoin' } },
                ],
              },
            },
            { replace: true },
          );
        }}
      >
        Click
      </Button>
      <List
        width="full"
        items={offers}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={
          <EmptyData
            onCreate={openCreateOfferModal}
            createButtonLabel="Create offers"
          />
        }
        itemRender={(item) => (
          <OfferRow
            lot={{
              id: item.id,
              lotName: item.lotName,
              lotIconName: item.lotIconName,
              direction: item.offerType,
              isHot: item.isHot,
              status: <LotStatus value={item.status} />,
              fields: [
                { label: 'Lot type', value: item.lotType },
                { label: 'Published at', value: item.publishedAt },
                { label: 'FDV', value: item.fdv },
                { label: 'Lot value', value: item.lotValue },
                { label: 'Vertical', value: item.verticalCount },
                { label: 'Finished at', value: item.finishedAt },
                { label: 'Total Bids Place', value: item.totalBidsPlace },
              ],
            }}
            handleClickLot={({ id }) =>
              router.navigateComponent(LotView, { id })
            }
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

// MyOffers.pageSchema = MyOffersPageSchema;

MyOffers.getLayout = ({ children }) => (
  <Layouts.DashboardLayout
    onChangeListType={(listType) => {
      if (listType === DashboardListType.BIDS)
        router.navigateComponent(MyBids, {});
    }}
    listType={DashboardListType.ORDERS}
  >
    {children}
  </Layouts.DashboardLayout>
);

export default MyOffers;
