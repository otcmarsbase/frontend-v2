import { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useCreateOfferModal } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import { DashboardListType } from '@app/store';
import { Paginate, Dashboard } from '@shared/types';
import { LotRow, EmptyData, LotStatus } from '@shared/ui-kit';
import {LotTypeChip} from "@shared/ui-kit/components/LotTypeChip";
import { Pagination } from '@shared/ui-logic';
import MyBids from '../bids';
import offersMock from './offersMock.json';


const offers = offersMock.offers as Dashboard.OfferItem[];

const MyOffers: React.FC = observer(() => {
  const openCreateOfferModal = useCreateOfferModal();

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

  if (!offers.length)
    return (
      <EmptyData
        onCreate={openCreateOfferModal}
        createButtonLabel="Create offers"
      />
    );

  return (
    <>
      {offers.map(offer => {
        return (
          <LotRow
            key={offer.id}
            lotId={offer.id}
            lotName={offer.lotName}
            lotIconName={offer.lotIconName}
            type={offer.offerType}
            isHot={offer.isHot}
            status={<LotStatus value={offer.status} />}
            fields={[
              { label: 'Lot Type', value: <LotTypeChip headingProps={{variant:'h6'}} lotType={offer.lotType}/>},
              { label: 'Published at', value: offer.publishedAt },
              { label: 'FDV', value: offer.fdv },
              { label: 'Lot value', value: offer.lotValue },
              { label: 'Vertical', value: offer.verticalCount },
              { label: 'Finished at', value: offer.finishedAt },
              { label: 'Total Bids Place', value: offer.totalBidsPlace },
            ]}
          />
        );
      })}
      <Pagination
        total={events.total}
        pageSize={paginationOptions.limit}
        page={paginationOptions.page}
        onChange={onChangePage}
      />
    </>
  );
});

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
