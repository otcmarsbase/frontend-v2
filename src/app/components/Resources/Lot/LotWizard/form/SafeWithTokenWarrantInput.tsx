import { FC } from 'react';

import { FormControlCheckboxInput } from './FormControlCheckboxInput';
import { BaseInputProps } from './types';

const NAME = 'SAFE_WITH_TOKEN_WARRANT_INPUT';

export const SafeWithTokenWarrantInput: FC<BaseInputProps> = (props) => (
  <FormControlCheckboxInput name={NAME} label="Token Warrant" {...props} />
);
