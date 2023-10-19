import { FC } from 'react';

import { InvestDocTypeInput, CommonDirectionInput } from '../../form';

export const InvestDocStartStep: FC = () => {
  return (
    <>
      <CommonDirectionInput />
      <InvestDocTypeInput />
    </>
  );
};
