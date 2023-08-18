import { BoxProps, Circle, HStack, Text } from '@chakra-ui/react';
import { Dashboard } from '@shared/types';

const DEAL_STATUS_TEXTS: Record<Dashboard.TDealStatus, string> = {
  COMPLETED: 'Completed',
  NEGOTIATION: 'Negotiation',
  ENDED: 'Ended',
}
const DEAL_STATUS_COLORS: Record<Dashboard.TDealStatus, string> = {
  COMPLETED: '#34A853',
  NEGOTIATION: '#F9C409',
  ENDED: 'red.500'
};

export interface DealStatusProps extends BoxProps {
  value: Dashboard.TDealStatus;
}

export const DealStatus = ({
  value,
  ...boxProps
}: DealStatusProps): JSX.Element => {
  const color = DEAL_STATUS_COLORS[value];

  return (
    <HStack {...boxProps} gap="0.25rem">
      <Circle size="0.5rem" bg={color} />
      <Text color={color} fontSize="sm" fontWeight={500} lineHeight="1.5rem">
        {DEAL_STATUS_TEXTS[value]}
      </Text>
    </HStack>
  );
};
