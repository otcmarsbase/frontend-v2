import { FC } from 'react';

import { MoneyText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonPrice: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Price per unit">
      <MoneyText fontSize="sm" fontWeight={500} value={lot.attributes.COMMON_PRICE} abbreviated />
    </InfoElement>
  );
};
