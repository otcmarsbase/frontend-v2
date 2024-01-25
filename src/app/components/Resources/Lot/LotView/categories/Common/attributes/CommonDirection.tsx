import { FC } from 'react';

import { TradeDirectionText } from '@app/components';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonDirection: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Lot">
      <TradeDirectionText variant="ghost" value={lot.attributes.COMMON_DIRECTION} />
    </InfoElement>
  );
};
