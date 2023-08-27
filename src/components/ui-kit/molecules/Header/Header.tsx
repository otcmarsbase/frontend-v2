import React from 'react';

import pages from '@app/pages';
import { HStack, Box, Divider, VStack } from '@chakra-ui/react';

import { Logo } from '../../display';
import { LinkComponent } from '../../feedback';

export interface HeaderProps {
  items: React.ReactNode[];
  rightContent: React.ReactNode;
}

export function Header({ items, rightContent }: HeaderProps) {
  return (
    <VStack gap="0">
      <HStack
        width="full"
        bg="dark.900"
        alignItems="center"
        height="5rem"
        paddingLeft="3.5rem"
        paddingRight="0.75rem"
        justifyContent="space-between"
      >
        <HStack gap="4.5rem">
          <LinkComponent page={pages.Home} pageProps={{}}>
            <Logo />
          </LinkComponent>
          <HStack
            gap="3.75rem"
            color="white"
            fontSize="0.6875rem"
            _hover={{ textDecoration: 'none' }}
            textTransform="uppercase"
            fontFamily="promo"
          >
            {items.map((item, id) => (
              <React.Fragment key={id}>{item}</React.Fragment>
            ))}
          </HStack>
        </HStack>
        <Box color="white">{rightContent}</Box>
      </HStack>
      <Divider height="px" bgGradient="linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)" border="none" />
    </VStack>
  );
}
