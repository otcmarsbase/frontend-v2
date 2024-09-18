import { UILogic, useAuth, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import pages from '@app/pages';
import { getNotificationText, getNotificationTitle } from '@app/utils';
import { HStack, Box, Square, Button, Text, useDisclosure, Hide } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { AppConfig } from '@shared/config';
import { UIIcons } from '@shared/ui-icons';
import { Dropdown, NotificationBell, NotificationBellItem, NotificationBellTrigger } from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';
import { AuthAccountPanel } from 'src/app/components/Resources/Auth/AuthAccountPanel';
import { handleNotificationClick } from 'src/app/utils/handleNotificationClick';

export function RightBlock() {
  const { isAuthorized } = useAuth();
  const router = useRouter();
  const schemaClient = useRpcSchemaClient();
  const queryClient = useQueryClient();

  const notificationBellDisclosure = useDisclosure();

  const { data: notifications } = useRpcSchemaQuery('notification.list', {
    filter: { isReaded: false },
    sort: { createdAt: 'DESC' },
  });

  const unreadCount = (notifications?.items ?? []).length;

  const handleReadAll = async () => {
    await schemaClient.send('notification.makeRead', {
      isReaded: true,
      filter: { notificationIds: notifications.items.map((item) => item.notificationId) },
    });

    queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('notification') });
    notificationBellDisclosure.onClose();
  };

  const handleRead = async (notification: DeskGatewaySchema.Notification) => {
    await schemaClient.send('notification.makeRead', {
      isReaded: true,
      filter: { notificationIds: [notification.notificationId] },
    });

    queryClient.invalidateQueries({ predicate: ({ queryKey }) => queryKey[0]?.toString()?.includes('notification') });
  };

  return (
    <HStack>
      <Hide below="md">
        <Dropdown
          trigger="hover"
          items={[
            {
              label: 'Twitter',
              as: 'a',
              href: AppConfig.socials.twitterUrl,
              icon: UIIcons.Social.TwitterIcon,
              target: '_blank',
            },
            {
              label: 'LinkedIn',
              as: 'a',
              href: AppConfig.socials.linkedinUrl,
              icon: UIIcons.Social.LinkedinIcon,
              target: '_blank',
            },
            {
              label: 'Telegram',
              as: 'a',
              href: AppConfig.socials.telegramUrl,
              icon: UIIcons.Social.TelegramIcon,
              target: '_blank',
            },
            {
              label: 'Medium',
              as: 'a',
              href: AppConfig.socials.mediumUrl,
              icon: UIIcons.Social.MediumIcon,
              target: '_blank',
            },
            {
              label: 'Linktree',
              as: 'a',
              href: AppConfig.socials.linktreeUrl,
              icon: UIIcons.Social.LinktreeIcon,
              target: '_blank',
            },
            {
              label: 'Github',
              as: 'a',
              href: AppConfig.socials.githubUrl,
              icon: UIIcons.Social.GithubIcon,
              target: '_blank',
            },
            {
              label: 'YouTube',
              as: 'a',
              href: AppConfig.socials.youtubeUrl,
              icon: UIIcons.Social.YoutubeIcon,
              target: '_blank',
            },
          ]}
        >
          <Button
            fontSize="xs"
            variant="link"
            _hover={{
              textDecor: 'none',
            }}
            color="dark.50"
            rightIcon={<UIIcons.Common.DownIcon />}
          >
            Community
          </Button>
        </Dropdown>

        <Button
          as="a"
          href={AppConfig.links.howItWorksURL}
          target="_blank"
          fontWeight="400"
          color="#f9c409"
          border="1px solid #f9c409"
          whiteSpace="nowrap"
          backgroundColor="rgba(249, 196, 9, 0.1)"
          fontSize="xs"
          size="sm"
          _hover={{
            backgroundColor: 'rgba(249, 196, 9, 0.2)',
          }}
        >
          How it works?
        </Button>
      </Hide>

      <UILogic.AuthConnectButton>
        <AuthAccountPanel />
      </UILogic.AuthConnectButton>

      {isAuthorized && (
        <Hide below="md">
          <NotificationBell
            unreadCount={unreadCount}
            items={notifications?.items ?? []}
            renderTrigger={() => (
              <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem" cursor="pointer">
                <NotificationBellTrigger hasUnread={!!unreadCount} />
              </Square>
            )}
            renderItem={(item) => (
              <NotificationBellItem
                title={getNotificationTitle(item)}
                text={getNotificationText(item)}
                date={item.createdAt}
                unread={!item.isReaded}
                onClick={() => {
                  handleNotificationClick(router, item);
                  handleRead(item);
                  notificationBellDisclosure.onClose();
                }}
              />
            )}
            onReadAll={handleReadAll}
            onViewAll={() => {
              router.navigateComponent(pages.Profile.Notification, {}, {});
              notificationBellDisclosure.onClose();
            }}
            placement="bottom-end"
            empty={
              <Text color="dark.200">
                At the moment you do not have any notifications yet. As soon as it is there it will&nbsp;be&nbsp;here
              </Text>
            }
            {...notificationBellDisclosure}
          />
        </Hide>
      )}
    </HStack>
  );
}
