import { FC } from 'react';

import { MoneyText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonPrice: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Price 0.01% token share">
      <MoneyText fontSize="sm" fontWeight={500} value={lot.attributes.COMMON_PRICE} abbreviated />
    </InfoElement>
  );
};
