import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import { VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { EmptyData, List, Pagination, PaginationProps } from '@shared/ui-kit';

export interface DealsProps {
  filters?: {
    search?: string;
    directions?: Resource.Common.TradeDirection[];
    minValue?: number;
    maxValue?: number;
  };
}

const Deals: React.FC<DealsProps> = observer(() => {
  const router = useRouter();
  const [deals, setDeals] = useState<Resource.Deal.Deal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadDeals = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeals([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDeals();
  }, [loadDeals]);

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
        items={deals}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={<EmptyData onCreate={() => {}} createButtonLabel="Create offers" />}
        itemRender={(item) => (
          // TODO replace to DealRow
          // <LotRow
          //   onClick={() => router.navigateComponent(MBPages.Deal.__id__ as any, { id: item.id }, {})}
          //   lot={{
          //     id: item.id,
          //     lotName: item.lotName,
          //     lotIconName: item.lotIconName,
          //     direction: item.offerType,
          //     isHot: null,
          //     status: null,
          //     fields: [
          //       {
          //         label: 'Lot Type',
          //         value: <LotTypeChip headingProps={{ variant: 'h6' }} lotType={item.lotType} />,
          //       },
          //       {
          //         label: 'Lot ID',
          //         value: (
          //           <HStack fontWeight={600}>
          //             <Text variant="h1" whiteSpace="nowrap">
          //               #{item.lotId}
          //             </Text>
          //           </HStack>
          //         ),
          //       },
          //       {
          //         label: 'Deal size',
          //         value: (
          //           <HStack fontWeight={600}>
          //             <Text whiteSpace="nowrap">
          //               {item.dealSize.toLocaleString('en-US', {
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
          //         label: 'Deal FDV',
          //         value: (
          //           <HStack fontWeight={600}>
          //             <Text whiteSpace="nowrap">
          //               {item.dealFDV.toLocaleString('en-US', {
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
          //         label: 'Created time',
          //         value: format(item.createdAt, 'dd.mm.yyyy'),
          //       },
          //       {
          //         label: 'Status',
          //         value: <DealStatus value={item.status} />,
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

Deals.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_DEALS">{children}</Layouts.DashboardLayout>;

export default Deals;
