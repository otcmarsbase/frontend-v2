import { InvestmentRoundDictionary } from '@app/dictionary';
import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/desk-gateway';

export interface InvestmentRoundBadgeProps extends TextProps {
  value?: Resource.Common.Enums.InvestRound;
}

export const InvestmentRoundBadge: React.FC<InvestmentRoundBadgeProps> = ({ value, ...textProps }) => {
  return value ? (
    <Text
      color="white"
      fontSize="sm"
      fontWeight={800}
      px="0.75rem"
      lineHeight="1.5rem"
      bg="orange.500"
      borderRadius="6.25rem"
      {...textProps}
    >
      {InvestmentRoundDictionary.get(value).title}
    </Text>
  ) : (
    <Text fontSize="sm" {...textProps}>
      -
    </Text>
  );
};
