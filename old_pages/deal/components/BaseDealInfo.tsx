import React, { FC } from 'react';

import { router } from '@app/logic';
import pages from '@app/pages';
import { Box, Heading, HStack, Img, VStack } from '@chakra-ui/react';
import { ArrowUp } from '@shared/assets';
import { Dashboard } from '@shared/types';
import { CopyIcon, DealStatus } from '@shared/ui-kit';
import { format } from 'date-fns';

import { RowChip } from './RowChip';

export interface IBaseDealInfo {
  lotName: string;
  createdAt: Date;
  id: string;
  status: Dashboard.TDealStatus;
  lotId: number;
  lotIconName: string;
}

export const BaseDealInfo: FC<IBaseDealInfo> = ({ lotName, createdAt, id, status, lotId, lotIconName }) => {
  const copyID = (id) => {
    console.log('copyToClipboard', id);
  };

  const pushToLot = () => {
    router.navigateComponent(pages.marketplace.__id, { id: id }, {});
  };
  return (
    <HStack w="100%" justifyContent="space-between" padding="2rem 1.25rem">
      <VStack>
        <HStack>
          <Box>
            <Img w="2.25rem" src={lotIconName} alt={'avtr'} />
          </Box>
          <Heading variant="h2" letterSpacing="-0.0125rem">
            {lotName}
          </Heading>
        </HStack>
        <HStack onClick={pushToLot}>
          <Heading variant="h5" fontWeight="600" color="dark.50">
            Go to lot
          </Heading>
          <ArrowUp />
        </HStack>
      </VStack>
      <VStack alignItems="flex-end">
        <RowChip
          label="Deal ID"
          children={
            <HStack onClick={() => copyID(id)}>
              <Heading variant="h5" fontWeight="500">
                {id}
              </Heading>
              <CopyIcon w="1rem" h="1rem" />
            </HStack>
          }
        />
        <RowChip
          label="Created time"
          children={
            <HStack>
              <Heading variant="h5" fontWeight="500">
                {format(createdAt, 'dd.mm.yyyy')} {format(createdAt, 'hh:mm')}
              </Heading>
            </HStack>
          }
        />
        <RowChip
          label="Status"
          children={
            <HStack>
              <DealStatus value={status} />
            </HStack>
          }
        />
      </VStack>
    </HStack>
  );
};
