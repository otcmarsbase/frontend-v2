import { FC, ReactNode } from 'react';

import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';

export interface NotificationBellItemProps {
  title: ReactNode;
  text: ReactNode;
  date: number;
  unread: boolean;
  onClick?: () => void;
}

export const NotificationBellItem: FC<NotificationBellItemProps> = ({ title, text, date, unread, onClick }) => {
  return (
    <Box w="full" cursor={onClick ? 'pointer' : 'default'} onClick={onClick}>
      <Flex mb="0.25rem" alignItems="center" justifyContent="space-between">
        <Text fontWeight="600">{title}</Text>
        {unread && <Circle size="0.5rem" bg="orange.500" />}
      </Flex>
      <Text mb="0.75rem" fontSize="sm" color="dark.200">
        {text}
      </Text>
      <Text fontSize="sm" color="dark.200">
        {formatDistance(date, new Date(), { addSuffix: true })}
      </Text>
    </Box>
  );
};
