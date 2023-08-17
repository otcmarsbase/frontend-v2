import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Dashboard } from '@shared/types';

const lotStatusTexts: Record<Dashboard.OfferStatus, string> = {
  DRAFT: 'Draft',
  ON_MODERATION: 'On Moderation',
  ACTIVE: 'Active',
  ENDED: 'Ended',
  HALF_FIELD: 'Half-field',
};

const lotStatusColors: Record<Dashboard.OfferStatus, string> = {
  DRAFT: 'dark.50',
  ON_MODERATION: '#F9C409',
  ACTIVE: '#34A853',
  ENDED: 'red.500',
  HALF_FIELD: '#FF5B37',
};

export interface LotStatusProps extends BoxProps {
  value: Dashboard.OfferStatus;
}

export const LotStatus = ({ value, ...boxProps }: LotStatusProps):JSX.Element => {
  const color = lotStatusColors[value];

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {lotStatusTexts[value]}
      </Text>
    </HStack>
  );
};
