import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { LotCard, useRpcSchemaClient } from '@app/components';
import * as Layouts from '@app/layouts';
import { MBPages } from '@app/pages';
import { Button, HStack, Heading, SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { RPC, Resource } from '@schema/api-gateway';
import { Pagination, PaginationPayload } from '@schema/common';
import { motion } from 'framer-motion';

export const OtcDesk: React.FC = observer(() => {
  const schema = useRpcSchemaClient();
  const router = useRouter();

  const [columnsCount, setColumnsCount] = useState(4);
  const [lots, setLots] = useState<RPC.DTO.LotListActive.Result>({
    items: [],
    total: 0,
  });

  const [paginationPayload] = useState<PaginationPayload>({
    skip: 1,
    limit: 25,
  });

  const [pagination] = useState<Pagination<Resource.Lot.Lot>>({
    items: [],
    total: 30,
  });

  const onChangePage = useCallback(async (page: number, limit: number) => {}, []);

  const toggleColumnsCount = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

  const loadLots = useCallback(async () => {
    const lots = await schema.send('lot.listActive', {});
    setLots(lots);
  }, []);

  useEffect(() => {
    loadLots();
  }, [loadLots]);

  return (
    <VStack alignItems="start">
      <Heading variant="pageHeader">OTC Desk</Heading>
      <Text>TODO OTC Filters</Text>
      <Button onClick={toggleColumnsCount}>Toggle sidebar</Button>
      <HStack alignItems="start" w="full" gap="2rem">
        {columnsCount === 3 && (
          <Box w="20rem">
            <Text color="white">TODO FILTERS SIDEBAR</Text>
          </Box>
        )}
        <SimpleGrid w="full" columns={columnsCount} spacing="2rem">
          {lots.items.map((lot) => (
            <motion.div layout key={lot.id}>
              <LotCard
                lot={lot}
                asset={{} as any}
                onClick={() => router.navigateComponent(MBPages.Lot.__id__ as any, { id: lot.id }, {})}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </HStack>
    </VStack>
  );
});

OtcDesk.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default OtcDesk;
