import { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useRPCSchema } from '@app/hooks';
import * as Layouts from '@app/layouts';
import { router } from '@app/logic';
import * as pages from '@app/pages';
import { Button, HStack, Heading, SimpleGrid, VStack, Text, Box } from '@chakra-ui/react';
import { RPC } from '@schema/api-gateway';
import { PaginationPayload } from '@schema/common';
import { Paginate, Dashboard } from '@shared/types';
import { LotCard } from '@shared/ui-molecules';
import { motion } from 'framer-motion';

import { OTCFilters } from './components';

export const OtcDesk: React.FC = observer(() => {
  const schema = useRPCSchema();

  const [columnsCount, setColumnsCount] = useState(4);
  const [lots, setLots] = useState<RPC.DTO.LotListActive.Result>({
    items: [],
    total: 0,
  });

  const [paginationOptions] = useState<PaginationPayload>({
    skip: 1,
    limit: 25,
  });

  const [events] = useState<Paginate.PaginationItems<Dashboard.OfferItem>>({
    total: 30,
    items: [],
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
      <OTCFilters />
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
              <LotCard lot={lot} onClick={() => router.navigateComponent(pages.asset, { name: null }, {})} />
            </motion.div>
          ))}
        </SimpleGrid>
      </HStack>
    </VStack>
  );
});

OtcDesk.getLayout = ({ children }) => <Layouts.AppLayout>{children}</Layouts.AppLayout>;

export default OtcDesk;