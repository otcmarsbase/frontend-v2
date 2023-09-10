import { Input, InputGroup, InputLeftAddon, InputProps } from '@chakra-ui/react';

export interface InputWebsiteProps extends InputProps {
  protocol?: string;
}

export const InputWebsiteRegex =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

export const InputWebsite: React.FC<InputWebsiteProps> = ({ protocol = 'https://', size, ...inputProps }) => {
  return (
    <InputGroup size={size}>
      <InputLeftAddon children={protocol} />
      <Input {...inputProps} />
    </InputGroup>
  );
};
