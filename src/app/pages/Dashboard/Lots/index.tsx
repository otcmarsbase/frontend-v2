import { useCallback, useEffect, useState } from 'react';

import { LotRow, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Resource } from '@schema/api-gateway';
import { EmptyData, List, Pagination, PaginationProps } from '@shared/ui-kit';

export interface LotsProps {
  filters?: {
    search?: string;
    directions?: Resource.Common.TradeDirection[];
    minValue?: number;
    maxValue?: number;
  };
}

export const Lots: React.FC<LotsProps> = (props) => {
  const rpcSchema = useRpcSchemaClient();
  const router = useRouter();
  const [lots, setLots] = useState<Resource.Lot.Lot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadLots = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await rpcSchema.send('lot.listMy', {});
      setLots(result.items);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLots();
  }, [loadLots]);

  const [paginationOptions] = useState<PaginationProps>({
    page: 1,
    pageSize: 25,
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, pageSize: number) => {}, []);

  return (
    <VStack width="full">
      <List
        width="full"
        items={lots}
        itemKey={(item) => item.id}
        isLoading={isLoading}
        emptyText={<EmptyData onCreate={() => {}} createButtonLabel="Create offers" />}
        itemRender={(item) => (
          <LotRow
            lot={item}
            asset={{} as any}
            onClick={() => router.navigateComponent(MBPages.Lot.__id__, { id: item.id }, {})}
          />
        )}
      />
      <Pagination {...paginationOptions} onChange={onChangePage} />
    </VStack>
  );
};

Lots.getLayout = ({ children }) => <Layouts.DashboardLayout tabType="MY_LOTS">{children}</Layouts.DashboardLayout>;

export default Lots;
