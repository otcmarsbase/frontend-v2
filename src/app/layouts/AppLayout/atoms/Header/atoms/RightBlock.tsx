import { UILogic, useAuth } from '@app/components';
import { HStack, Box, Square, Link, Button } from '@chakra-ui/react';
import { AppConfig } from '@shared/config';
import { UIIcons } from '@shared/ui-icons';
import { Dropdown } from '@shared/ui-kit';

export function RightBlock() {
  const { isAuthorized, signOut } = useAuth();

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

        <Link
          href={AppConfig.links.howItWorksURL}
          target="_blank"
          fontWeight="400"
          color="dark.50"
          whiteSpace="nowrap"
          fontSize="xs"
        >
          How it works?
        </Link>
      </HStack>

      <Box mr={{ base: '0', md: '1.5rem' }}>
        <UILogic.AuthConnectButton>
          <HStack gap="1rem">
            <UILogic.AuthAccountPanel />

            {isAuthorized && (
              <Button variant="link" fontSize="sm" onClick={signOut} color="orange.300">
                Logout
              </Button>
            )}
          </HStack>
        </UILogic.AuthConnectButton>
      </Box>
      <HStack gap="0.6rem" display={{ base: 'none', md: 'flex' }}>
        <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Language.EnglishIcon w="1.125rem" h="1.125rem" />
        </Square>
      </HStack>
    </HStack>
  );
}
