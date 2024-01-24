import { FC } from 'react';

import { ParticipantTypesText } from '@app/components';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonBidMakerTypes: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Type of bidder">
      <ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_BID_MAKER_TYPES} empty={'No limitations'} />
    </InfoElement>
  );
};
