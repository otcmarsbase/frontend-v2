import { FC } from 'react';

import { MoneyText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const InvestDocFdv: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Lot FDV">
      <MoneyText
        value={lot.attributes.INVEST_DOC_FDV}
        fontSize="sm"
        format="0,0.X"
        fontWeight={800}
        currencyTextProps={{
          color: 'dark.50',
        }}
      />
    </InfoElement>
  );
};
