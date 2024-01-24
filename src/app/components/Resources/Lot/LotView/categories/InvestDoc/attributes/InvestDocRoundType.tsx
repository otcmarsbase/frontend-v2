import { FC } from 'react';

import { InvestmentRoundBadge } from 'src/app/components/index.imports';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const InvestDocRoundType: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Investment round">
      <InvestmentRoundBadge value={lot.attributes.INVEST_DOC_ROUND_TYPE} />
    </InfoElement>
  );
};
