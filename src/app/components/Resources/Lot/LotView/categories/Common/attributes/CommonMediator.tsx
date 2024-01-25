import { FC } from 'react';

import { MediatorTypeDictionary } from '@app/dictionary';
import { Text } from '@chakra-ui/react';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonMediator: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label={lot.attributes.COMMON_DIRECTION === 'BUY' ? 'Buyer' : 'Seller'}>
      <Text fontWeight="500" fontSize="sm">
        {MediatorTypeDictionary.get(lot.attributes.COMMON_MEDIATOR).title}
      </Text>
    </InfoElement>
  );
};
