import { TextProps, Text } from '@chakra-ui/react';
import { format } from 'numerable';

interface NumberTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
}

export const NumberText = ({
  value,
  abbreviated,
  addon,
  ...textProps
}: NumberTextProps) => {
  return (
    <Text {...textProps}>
      {format(value, `0.00${abbreviated ? 'a' : ''}`)}
      {addon && <>&nbsp;{addon}</>}
    </Text>
  );
};
