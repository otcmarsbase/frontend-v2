import { FC } from 'react';

import { getContractSize } from '@app/utils';
import { MoneyText, PercentText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export interface CommonSummaryProps {
  percent?: boolean;
}

export const CommonSummary: FC<CommonSummaryProps> = ({ percent = false }) => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Contract size">
      <MoneyText
        value={lot.attributes.COMMON_SUMMARY}
        fontSize="sm"
        format="0,0.X"
        fontWeight={800}
        currencyTextProps={{
          color: 'dark.50',
        }}
      />
      {percent ? (
        <MoneyText fontSize="xs" fontWeight={500} value={getContractSize(lot)} abbreviated />
      ) : (
        <PercentText fontSize="xs" fontWeight={500} value={getContractSize(lot)} />
      )}
    </InfoElement>
  );
};
