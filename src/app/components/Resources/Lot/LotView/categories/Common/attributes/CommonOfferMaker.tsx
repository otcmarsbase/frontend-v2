import { FC } from 'react';

import { AccountAvatar } from '@app/components';

import { InfoElement } from '../../../_atoms';
import { useLotView } from '../../../useLotView';

export const CommonOfferMaker: FC = () => {
  const { lot } = useLotView();

  return (
    <InfoElement label="Owner">
      <AccountAvatar nickname={lot.offerMaker.nickname} />
    </InfoElement>
  );
};
