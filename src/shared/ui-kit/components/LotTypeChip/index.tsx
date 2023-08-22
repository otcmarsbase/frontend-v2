import { Text, TextProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

const lotTypeTexts: Record<Resource.Lot.LotType, string> = {
  SAFE: 'SAFE',
  SAFT: 'SAFT',
  TOKEN_WARRANT: 'Token warrant',
};

const lotTypeBgColors: Record<Resource.Lot.LotType, string> = {
  SAFE: '#EF5DA8',
  SAFT: '#5D5FEF',
  TOKEN_WARRANT: '#FF5B37',
};

export interface LotTypeChipProps extends TextProps {
  lotType: Resource.Lot.LotType;
}

export const LotTypeChip = ({ lotType, ...textProps }) => {
  return (
    <Text
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      fontSize="2xs"
      color="white"
      fontWeight="600"
      bg={lotTypeBgColors[lotType]}
      {...textProps}
    >
      {lotTypeTexts[lotType]}
    </Text>
  );
};
