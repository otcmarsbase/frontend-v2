import { UILogic, useAuth, useRpcSchemaClient, useRpcSchemaQuery } from '@app/components';
import pages from '@app/pages';
import { getNotificationText, getNotificationTitle } from '@app/utils';
import { HStack, Box, Square, Link, Button, Text } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { AppConfig } from '@shared/config';
import { UIIcons } from '@shared/ui-icons';
import {
  Dropdown,
  LinkComponent,
  NotificationBell,
  NotificationBellItem,
  NotificationBellTrigger,
} from '@shared/ui-kit';
import { useQueryClient } from '@tanstack/react-query';

export function RightBlock() {
  const { isAuthorized, signOut } = useAuth();
  const router = useRouter();
  const schemaClient = useRpcSchemaClient();
  const queryClient = useQueryClient();

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
  };

  return (
    <HStack>
      <HStack gap="2.5rem" mr="1.7rem" display={{ base: 'none', md: 'flex' }}>
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
              label: 'Instagram',
              as: 'a',
              href: AppConfig.socials.instagramUrl,
              icon: UIIcons.Social.InstagramIcon,
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
      </HStack>

      <Box mr={{ base: '0', md: '1.5rem' }}>
        <UILogic.AuthConnectButton>
          <HStack gap="1rem">
            <UILogic.AuthAccountPanel />

            {isAuthorized && (
              <Button
                variant="link"
                display={{ base: 'none', md: 'block' }}
                fontSize="sm"
                onClick={signOut}
                color="orange.300"
              >
                Logout
              </Button>
            )}
          </HStack>
        </UILogic.AuthConnectButton>
      </Box>
      <HStack gap="0.6rem" display={{ base: 'none', md: 'flex' }}>
        {isAuthorized && (
          <>
            <LinkComponent page={pages.Profile.Home} pageProps={{}}>
              <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem" cursor="pointer">
                <UIIcons.Common.ProfileIcon w="1.125rem" h="1.125rem" />
              </Square>
            </LinkComponent>

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
                />
              )}
              onReadAll={handleReadAll}
              onViewAll={() => router.navigateComponent(pages.Profile.Notification, {}, {})}
              placement="bottom-end"
              empty={
                <Text color="dark.200">
                  At the moment you do not have any notifications yet. As soon as it is there it will&nbsp;be&nbsp;here
                </Text>
              }
            />

            <LinkComponent page={pages.Favorite.Home} pageProps={{}}>
              <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem" cursor="pointer">
                <UIIcons.Common.FavoriteIcon w="1.125rem" h="1.125rem" fill="transparent" stroke="white" />
              </Square>
            </LinkComponent>
          </>
        )}
        <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Language.EnglishIcon w="1.125rem" h="1.125rem" />
        </Square>
      </HStack>
    </HStack>
  );
}
