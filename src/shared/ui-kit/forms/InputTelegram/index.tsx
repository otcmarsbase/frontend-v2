import { Input, InputGroup, InputProps } from '@chakra-ui/react';

export const InputTelegramRegex = /.*\B(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/g;

export const InputTelegram: React.FC<InputProps> = ({ size, ...inputProps }) => {
  return (
    <InputGroup size={size}>
      <Input {...inputProps} />
    </InputGroup>
  );
};
