import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const TokenLockupPeriod: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Lockup period">
      <Text fontWeight={800} fontSize="sm">
        {lot.attributes.TOKEN_LOCKUP_PERIOD || '-'}
      </Text>
    </InfoElement>
  );
};
