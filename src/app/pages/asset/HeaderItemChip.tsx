import React, { FC } from 'react';

// import { HEADER_FIELD_TITLES_BY_PARAM } from '@app/pages/dashboard/asset/constants';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import { commaSeparatedNumber } from '@shared/utils';

import { HEADER_FIELD_TITLES_BY_PARAM } from './constants';

export interface IHeaderItemChip {
  param: keyof typeof HEADER_FIELD_TITLES_BY_PARAM;
  value: number;
}
export const HeaderItemChip: FC<IHeaderItemChip> = ({ param, value }) => {
  return (
    <VStack gap="0">
      <HStack justifyContent="flex-start" w="100%">
        <Heading variant="h5" fontWeight="500">
          {commaSeparatedNumber(value, 0)}
        </Heading>
        {param === 'offersOnSell' || param === 'offersOnBuy' ? null : (
          <Heading variant="h5" fontWeight="500" color="dark.50">
            $
          </Heading>
        )}
      </HStack>
      <Heading variant="h5" fontWeight="600" color="dark.50">
        {HEADER_FIELD_TITLES_BY_PARAM[param]}
      </Heading>
    </VStack>
  );
};
