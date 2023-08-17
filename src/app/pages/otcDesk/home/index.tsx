import { useCallback, useState } from 'react';

import { observer } from 'mobx-react-lite';

import * as Layouts from '@app/layouts';
import {
  Button,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { Paginate, Dashboard } from '@shared/types';
import { LotItem, LotItemProps } from '@shared/ui-molecules';
import { motion } from 'framer-motion';

import { OTCFilters } from './components';
import lotsMock from './lotsMock.json';

// TODO Так не делать, в будущем появится тип с бэкенда
const lots = lotsMock.lots as LotItemProps[];

export const OtcDesk: React.FC = observer(() => {
  const [columnsCount, setColumnsCount] = useState(4);

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

  const toggleColumnsCount = () => {
    setColumnsCount((count) => (count === 3 ? 4 : 3));
  };

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
          {lots.map((lot) => (
            <motion.div layout key={lot.id}>
              <LotItem {...lot} />
            </motion.div>
          ))}
        </SimpleGrid>
      </HStack>
    </VStack>
  );
});

OtcDesk.getLayout = ({ children }) => (
  <Layouts.AppLayout>{children}</Layouts.AppLayout>
);

export default OtcDesk;
