import { FC } from 'react';

import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';

export interface NotificationBellItemProps {
  title: string;
  description: string;
  date: Date | number;
  unread?: boolean;
  onClick?: () => void;
}

export const NotificationBellItem: FC<NotificationBellItemProps> = ({ title, description, unread, date }) => {
  return (
    <Box>
      <Flex mb="0.25rem" alignItems="center" justifyContent="space-between">
        <Text fontWeight="600">{title}</Text>
        {unread && <Circle size="0.5rem" bg="orange.500" />}
      </Flex>
      <Text mb="0.75rem" fontSize="sm" color="dark.200">
        {description}
      </Text>
      <Text fontSize="sm" color="dark.200">
        {formatDistance(new Date(), date, { addSuffix: true })}
      </Text>
    </Box>
  );
};
