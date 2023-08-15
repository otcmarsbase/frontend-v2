import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';

type LotStatusValue =
  | 'draft'
  | 'onModeration'
  | 'active'
  | 'ended'
  | 'halfField';

const lotStatusTexts: Record<LotStatusValue, string> = {
  draft: 'Draft',
  onModeration: 'On Moderation',
  active: 'Active',
  ended: 'Ended',
  halfField: 'Half-field',
};

const lotStatusColors: Record<LotStatusValue, string> = {
  draft: 'dark.50',
  onModeration: '#F9C409',
  active: '#34A853',
  ended: 'red.500',
  halfField: '#FF5B37',
};

export interface LotStatusProps extends BoxProps {
  value: LotStatusValue;
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
