import { observer } from 'mobx-react-lite';

import { useStore } from '@app/store';
import { Grid, GridItem, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { AppConfig, AppConfigType } from '@shared/config';

import { SocialBlock } from './atoms';

export interface FooterProps {
  links: {
    title: string;
    href: string;
  }[];
  about: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
  socials: AppConfigType['socials'];
  copyrightText: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = observer(({ links, about, socials, copyrightText }) => {
  const { systemStore } = useStore();

  return (
    <HStack width="full" padding={{ base: '1rem', lg: '6rem 0 4rem' }}>
      <HStack
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        width="full"
      >
        <HStack
          alignItems="flex-start"
          gap={{ base: '1.5rem', lg: '8.5rem' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Grid templateColumns="repeat(2, 1fr)" rowGap="0.75rem" columnGap="3rem">
            {links.map((link, index) => (
              <GridItem
                key={index}
                fontSize="sm"
                color="dark.50"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Text href={link.href} target="_blank" as={Link}>
                  {link.title}
                </Text>
              </GridItem>
            ))}
          </Grid>
          <VStack maxWidth="20rem" alignItems="flex-start">
            <Text color="white" fontSize="sm">
              {about.title}
            </Text>
            <Text fontSize="sm" color="dark.50">
              {about.description}
            </Text>
          </VStack>
        </HStack>
        <VStack gap="1.5rem" alignItems={{ base: 'center', lg: 'flex-end' }}>
          <SocialBlock
            github={socials.githubUrl}
            twitter={socials.twitterUrl}
            telegram={socials.telegramUrl}
            medium={socials.mediumUrl}
            linkedin={socials.linkedinUrl}
            linktree={socials.linktreeUrl}
            youtube={socials.youtubeUrl}
            instagram={socials.instagramUrl}
          />
          <Text fontSize="sm" color="dark.50">
            {copyrightText}
          </Text>
          <VStack alignItems="flex-end" gap="0.2rem">
            <Text fontSize="xs" color="dark.50">
              API Version: {systemStore.apiVersion}
            </Text>
            <Text fontSize="xs" color="dark.50">
              Client Version: {AppConfig.version}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </HStack>
  );
});
