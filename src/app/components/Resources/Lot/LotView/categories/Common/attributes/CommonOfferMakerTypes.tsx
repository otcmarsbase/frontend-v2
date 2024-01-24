import { FC } from 'react';

import { ParticipantTypesText } from '@app/components';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonOfferMakerTypes: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Offer maker">
      <ParticipantTypesText fontSize="sm" value={lot.attributes.COMMON_OFFER_MAKER_TYPES} />
    </InfoElement>
  );
};
