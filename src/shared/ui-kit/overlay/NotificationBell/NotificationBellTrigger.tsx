import { FC } from 'react';

import { Box, Circle } from '@chakra-ui/react';
import { BellIcon } from 'src/shared/ui-icons/common';

export interface NotificationBellTriggerProps {
  hasUnread: boolean;
}

export const NotificationBellTrigger: FC<NotificationBellTriggerProps> = ({ hasUnread }) => {
  return (
    <Box pos="relative">
      <BellIcon />
      {hasUnread && (
        <Circle size="0.4rem" bg="orange.500" border="1px solid #18171E" pos="absolute" right=".1rem" top="0.2rem" />
      )}
    </Box>
  );
};
