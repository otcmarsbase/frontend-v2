import { Input, InputGroup, InputProps } from '@chakra-ui/react';

export const InputWebsiteRegex = /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g;

export const InputWebsite: React.FC<InputProps> = ({ size, ...inputProps }) => {
  return (
    <InputGroup size={size}>
      <Input {...inputProps} />
    </InputGroup>
  );
};
