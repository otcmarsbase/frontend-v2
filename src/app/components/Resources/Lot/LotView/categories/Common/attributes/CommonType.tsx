import { FC } from 'react';

import { LotTypeChip } from '@app/components';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonType: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Type">
      <LotTypeChip withTokenWarrant={lot.attributes.SAFE_WITH_TOKEN_WARRANT} value={lot.type} />
    </InfoElement>
  );
};
