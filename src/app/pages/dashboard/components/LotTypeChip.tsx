import { Text, TextProps } from '@chakra-ui/react';
import { LotFlow } from '@shared/types';

export const getTypeOfDealChipColors = (lotType: LotFlow.LotType) => {
  switch (lotType) {
    case 'SAFE':
      return '#EF5DA8';
    case 'SAFT':
      return '#5D5FEF';
    case 'TOKEN_WARRANT':
      return '#FF5B37';
    default:
      return '#EF5DA8';
  }
};

export interface LotTypeChipProps extends TextProps {
  lotType: LotFlow.LotType;
}

export const LotTypeChip = ({ lotType, ...textProps }) => {
  return (
    <Text
      textTransform="uppercase"
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      fontSize="sm"
      bg={getTypeOfDealChipColors(lotType)}
      {...textProps}
    >
      {lotType}
    </Text>
  );
};
