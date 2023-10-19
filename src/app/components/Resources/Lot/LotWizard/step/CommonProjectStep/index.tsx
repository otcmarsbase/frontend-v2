import { FC } from 'react';

import { CommonOfferMakerTypesInput, CommonBidMakerTypesInput } from '../../form';

export const CommonProjectStep: FC = () => {
  return (
    <>
      <CommonOfferMakerTypesInput />
      <CommonBidMakerTypesInput />
    </>
  );
};
