import pages from '@app/pages';
import { HStack, Divider, VStack, Hide } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Logo } from '@shared/ui-kit';

import { RightBlock } from './atoms';
import { Navigation } from './atoms/Navigation';

export function Header() {
  const router = useRouter();

  return (
    <VStack gap="0">
      <HStack
        width="full"
        bg="dark.900"
        alignItems="center"
        height="5rem"
        paddingLeft={{ base: '0.75rem', lg: '3.5rem' }}
        paddingRight="0.75rem"
        justifyContent="space-between"
      >
        <HStack gap={{ base: '0', lg: '3rem' }}>
          <Logo onClick={() => router.navigateComponent(pages.Home, {}, {})} cursor="pointer" />
          <Hide below="lg">
            <Navigation />
          </Hide>
        </HStack>
        <RightBlock />
      </HStack>
      <Divider height="px" bgGradient="linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)" border="none" />
    </VStack>
  );
}
