import { FC } from 'react';

import { DateText } from '@shared/ui-kit';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const TokenTGE: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Estimate TGE Date">
      <DateText value={typeof lot.attributes.TOKEN_TGE === 'number' ? lot.attributes.TOKEN_TGE : undefined} />
    </InfoElement>
  );
};
