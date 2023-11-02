import { InputGroup, InputProps } from '@chakra-ui/react';

import { InputMask } from '../InputMask';

export const InputTelegramRegex = /.*\B(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/g;

export const InputTelegram: React.FC<InputProps> = ({ size, ...inputProps }) => {
  const TelegramMask =
    inputProps.value?.toString().length < 5
      ? `@${new Array(5).fill('*').join('')}`
      : `@${new Array(32).fill('*').join('')}`;

  return (
    <InputGroup size={size}>
      <InputMask
        toUnmaskedValue={(maskedValue) => maskedValue.replace(/^@/g, '')}
        mask={TelegramMask}
        alwaysShowMask
        maskChar=""
        {...inputProps}
      />
    </InputGroup>
  );
};
