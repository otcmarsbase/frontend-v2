import { TextProps, Text } from '@chakra-ui/react';
import { format } from 'numerable';

interface TextNumberProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
}

export const TextNumber = ({ value, abbreviated, addon, ...textProps }: TextNumberProps) => {
  return (
    <Text {...textProps}>
      {format(value, `0.00${abbreviated ? 'a' : ''}`)}
      {addon && <>&nbsp;{addon}</>}
    </Text>
  );
};
