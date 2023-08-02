import { observer } from 'mobx-react-lite';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import { DashboardListType } from '@app/store';
import { EmptyData } from '@shared/ui-kit';
import pages from '../..';
import MyOffers from '../offers';

enum BidType {
  BUY = 'buy',
  SELL = 'sell',
}

export interface MyBidItem {
  id: number;
  isHot: boolean;
  bidType: BidType;
}

const bids = [] as MyBidItem[];

export const MyBids: React.FC = observer(() => {
  if (!bids.length)
    return (
      <EmptyData
        onCreate={() => router.navigateComponent(pages.offers.create, {})}
        createButtonLabel="Create offers"
      />
    );

  return <>Bids To do</>;
});

MyBids.getLayout = ({ children }) => (
  <Layouts.DashboardLayout
    onChangeListType={(listType) => {
      if (listType === DashboardListType.ORDERS)
        router.navigateComponent(MyOffers, {});
    }}
    listType={DashboardListType.BIDS}
  >
    {children}
  </Layouts.DashboardLayout>
);

export default MyBids;
