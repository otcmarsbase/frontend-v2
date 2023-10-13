import { Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';

import { SocialBlock } from './atoms';

export interface FooterProps {
  links: React.ReactNode[];
  about: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
  socials: {
    linktreeUrl?: string;
    twitterUrl?: string;
    githubUrl?: string;
    discordUrl?: string;
    mediumUrl?: string;
    telegramUrl?: string;
  };
  copyrightText: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ links, about, socials, copyrightText }) => {
  return (
    <HStack width="full" padding="6rem 0 4rem">
      <HStack display="flex" justifyContent="space-between" width="full">
        <HStack alignItems="flex-start" gap="8.5rem">
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
                {link}
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
        <VStack gap="1.5rem" alignItems="flex-end">
          <SocialBlock
            github={socials.githubUrl}
            twitter={socials.twitterUrl}
            telegram={socials.telegramUrl}
            medium={socials.mediumUrl}
            discord={socials.discordUrl}
          />
          <Text fontSize="sm" color="dark.50">
            {copyrightText}
          </Text>
        </VStack>
      </HStack>
    </HStack>
  );
};
