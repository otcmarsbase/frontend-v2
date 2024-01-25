import { FC } from 'react';

import { BooleanChip } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const InvestDocWithReassign: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Re-Assign">
      <BooleanChip value={lot.attributes.INVEST_DOC_WITH_REASSIGN} />
    </InfoElement>
  );
};
