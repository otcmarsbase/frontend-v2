import { FC } from 'react';

import { FormControlCheckboxInput } from './FormControlCheckboxInput';
import { BaseInputProps } from './types';

const NAME = 'INVEST_DOC_WITH_REASSIGN_INPUT';

export const InvestDocWithReassignInput: FC<BaseInputProps> = (props) => (
  <FormControlCheckboxInput
    name={NAME}
    label="Re-assign"
    tooltip='"Re-assign" means that the offer-maker allows the resale or transfer of their lot.'
    {...props}
  />
);
