import { FC } from 'react';

import { MoneyText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonMinFilterSummary: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Min Bid">
      <MoneyText
        value={lot.attributes.COMMON_MIN_FILTER_SUMMARY}
        fontSize="sm"
        abbreviated
        format="0,0.X"
        fontWeight={800}
        currencyTextProps={{
          color: 'dark.50',
        }}
      />
    </InfoElement>
  );
};
