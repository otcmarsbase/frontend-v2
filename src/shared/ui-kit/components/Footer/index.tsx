import { HTMLAttributeAnchorTarget } from 'react';

import {
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';

export interface FooterProps {
  links: {
    label: string;
    href?: { url: string; target?: HTMLAttributeAnchorTarget };
    onClick?: () => void;
  }[];
  about: {
    title: string;
    description: string;
  };
  socials: { icon: typeof Icon; href: string }[];
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({
  links,
  about,
  socials,
  copyright,
}) => {
  return (
    <HStack width="full" padding="6.5rem 7.87rem">
      <HStack display="flex" justifyContent="space-between" width="full">
        <HStack alignItems="flex-start" gap="8.5rem">
          <Grid
            templateColumns="repeat(2, 1fr)"
            rowGap="0.75rem"
            columnGap="3rem"
          >
            {links.map((link, index) => (
              <GridItem key={index}>
                <Link
                  href={link.href?.url}
                  target={link.href?.target}
                  onClick={link.onClick}
                  fontSize="sm"
                  color="dark.50"
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
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
          <Grid templateColumns="repeat(6, 1fr)" columnGap="1.75rem">
            {socials.map((social, index) => {
              const { href, icon: SocialIcon } = social;
              return (
                <GridItem key={index}>
                  <Link target="_blank" href={href}>
                    <SocialIcon color="dark.50" />
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
          <Text fontSize="sm" color="dark.50">
            {copyright}
          </Text>
        </VStack>
      </HStack>
    </HStack>
  );
};
