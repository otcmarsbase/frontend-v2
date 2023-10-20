import { FC } from 'react';

import { InvestDocTypeInput, CommonDirectionInput, InvestDocAssetInput } from '../../form';

export const InvestDocStartStep: FC = () => {
  return (
    <>
      <CommonDirectionInput />
      <InvestDocTypeInput />
      <InvestDocAssetInput />
    </>
  );
};
