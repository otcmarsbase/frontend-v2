import { Fragment, ReactNode, useMemo } from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Flex,
  HStack,
  Text,
  Circle,
  Link,
  PopoverHeader,
  PopoverFooter,
  Box,
  PopoverProps,
} from '@chakra-ui/react';

export interface NotificationBellProps<T> extends PopoverProps {
  unreadCount: number;
  items: T[];
  renderTrigger: () => ReactNode;
  renderItem: (item: T) => ReactNode;
  onReadAll: () => Promise<void>;
  onViewAll: () => void;
  empty: ReactNode;
}

export const NotificationBell = <T,>({
  unreadCount,
  renderTrigger,
  items,
  renderItem,
  empty,
  ...popoverProps
}: NotificationBellProps<T>) => {
  const isEmpty = useMemo(() => !items.length, [items]);

  return (
    <Popover {...popoverProps}>
      <PopoverTrigger>{renderTrigger()}</PopoverTrigger>
      <PopoverContent bg="dark.800" border="none" rounded="0.5rem" width={{ base: 'sm', md: isEmpty ? 'sm' : 'md' }}>
        <PopoverHeader borderBottom="1px solid rgba(81, 84, 96, 0.3)">
          <Flex alignItems="center" justifyContent="space-between" w="full">
            <HStack spacing="2">
              <Text fontWeight="700">Notification</Text>
              <Circle size="1.5rem" bg="orange.500" fontSize="xs" fontWeight="600">
                {unreadCount}
              </Circle>
            </HStack>
            <Link color="dark.200" fontSize="sm">
              Mark all as read
            </Link>
          </Flex>
        </PopoverHeader>
        <PopoverBody maxH="lg" overflow="auto">
          {isEmpty ? (
            empty
          ) : (
            <VStack spacing="0.75rem">
              {items.map((item, index) => {
                return (
                  <Fragment key={index}>
                    {renderItem(item)}
                    {index !== items.length - 1 && <Box height="1px" w="full" bg="rgba(81, 84, 96, 0.3)" />}
                  </Fragment>
                );
              })}
            </VStack>
          )}
        </PopoverBody>
        <PopoverFooter borderTop="1px solid rgba(81, 84, 96, 0.3)">
          <Link color="orange.300" fontSize="sm">
            View all notifications
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
