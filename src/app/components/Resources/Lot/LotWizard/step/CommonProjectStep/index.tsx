import { FC } from 'react';

import {
  CommonOfferMakerTypesInput,
  CommonTelegramInput,
  CommonBidMakerTypesInput,
  CommonDeadlineInput,
} from '../../form';

export const CommonProjectStep: FC = () => {
  return (
    <>
      <CommonOfferMakerTypesInput />
      <CommonTelegramInput />
      <CommonBidMakerTypesInput />
      <CommonDeadlineInput />
    </>
  );
};
