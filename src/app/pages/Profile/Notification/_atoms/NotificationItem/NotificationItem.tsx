import { useRpcSchemaClient } from '@app/components';
import { getNotificationText, getNotificationTitle } from '@app/utils';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { useQueryClient } from '@tanstack/react-query';
import { formatDistance } from 'date-fns';
import { handleNotificationClick } from 'src/app/utils/handleNotificationClick';

import Icon from './assets/icon.png';

interface NotificationItemProps {
  notification: DeskGatewaySchema.Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const schemaClient = useRpcSchemaClient();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleClick = async () => {
    handleNotificationClick(router, notification)();

    await schemaClient.send('notification.makeRead', {
      isReaded: true,
      filter: { notificationIds: [notification.notificationId] },
    });

    queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('notification') });
  };

  return (
    <Flex
      onClick={handleClick}
      cursor="pointer"
      gap={{ base: 3, lg: 6 }}
      justifyContent="space-between"
      p={4}
      bg="dark.900"
      borderRadius={12}
    >
      <Box w={{ base: '2.25rem', lg: '3.25rem' }} h={{ base: '2.25rem', lg: '3.25rem' }} borderRadius="full">
        <Image src={Icon} />
      </Box>
      <Flex
        flexGrow={1}
        gap={{ base: 3, lg: 6 }}
        justifyContent="space-between"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box flexGrow={1}>
          <Text mb={1} fontWeight={600} color="white">
            {getNotificationTitle(notification)}
          </Text>
          <Text fontWeight={500} fontSize="sm" color="dark.100">
            {getNotificationText(notification)}
          </Text>
        </Box>
        <Text fontWeight={500} fontSize="sm" color="dark.100" textAlign={{ lg: 'right' }}>
          {formatDistance(notification.createdAt, new Date(), { addSuffix: true })}
        </Text>
      </Flex>
    </Flex>
  );
}
