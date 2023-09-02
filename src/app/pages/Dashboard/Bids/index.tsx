import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { LotRow, LotStatus, LotTypeChip } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { Chip, EmptyData, List, Pagination, PaginationProps } from '@shared/ui-kit';
import { format } from 'date-fns';

const MyBids: React.FC = observer(() => {
  const router = useRouter();
  const [bids, setBids] = useState<Resource.Bid.Bid[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadBids = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBids([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBids();
  }, [loadBids]);

  const [paginationOptions] = useState<PaginationProps>({
    page: 1,
    pageSize: 25,
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  return (
    <VStack width="full">
      <List
        width="full"
        items={bids}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={<EmptyData onCreate={() => {}} createButtonLabel="Create offers" />}
        itemRender={(item) => (
          // <LotRow
          //   onClick={() => router.navigateComponent(MBPages.Marketplace.Home, { id: '' }, {})}
          //   lot={{
          //     id: item.id,
          //     type: item,
          //     lotName: item.lotName,
          //     lotIconName: item.lotIconName,
          //     direction: item.offerType,
          //     isHot: item.isHot,
          //     status: <LotStatus value={item.status} />,
          //     fields: [
          //       {
          //         label: 'Lot Type',
          //         value: <LotTypeChip headingProps={{ variant: 'h6' }} lotType={item.lotType} />,
          //       },
          //       {
          //         label: 'Published at',
          //         value: format(item.publishedAt, 'dd.MM.yyyy'),
          //       },
          //       {
          //         label: 'Bid FDV',
          //         value: (
          //           <HStack fontWeight={600}>
          //             <Text whiteSpace="nowrap">
          //               {item.fdv.toLocaleString('en-US', {
          //                 maximumFractionDigits: 0,
          //               })}
          //             </Text>
          //             <Text whiteSpace="nowrap" color="dark.50">
          //               $
          //             </Text>
          //           </HStack>
          //         ),
          //       },
          //       {
          //         label: 'Bid size',
          //         value: (
          //           <HStack fontWeight={600}>
          //             <Text whiteSpace="nowrap">{item.bidSize}</Text>
          //             <Text whiteSpace="nowrap" color="dark.50">
          //               %
          //             </Text>
          //           </HStack>
          //         ),
          //       },
          //       {
          //         label: 'Offer Maker',
          //         value: <Chip offerMaker={item.offerMaker} offerMakerIcon={item.offerMakerIcon} />,
          //       },
          //       {
          //         label: 'Direct Seller/Or not',
          //         value: item.isDirectSeller ? 'yes' : 'nope',
          //       },
          //       {
          //         label: 'Location',
          //         value: (
          //           <Heading fontSize="1rem" fontWeight="500" lineHeight="1.5rem">
          //             {item.location}
          //           </Heading>
          //         ),
          //       },
          //     ],
          //   }}
          // />
          <></>
        )}
      />

      <Pagination {...paginationOptions} onChange={onChangePage} />
    </VStack>
  );
});

MyBids.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_BIDS">{children}</Layouts.DashboardLayout>;

export default MyBids;
