import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const TokenVestingCalendar: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Vesting calendar">
      <Text fontSize="sm" fontWeight={800}>
        {lot.attributes.TOKEN_VESTING_PERIOD || '-'}
      </Text>
    </InfoElement>
  );
};
