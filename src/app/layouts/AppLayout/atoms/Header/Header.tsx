import { UILogic } from '@app/components';
import pages from '@app/pages';
import { HStack, Box, Divider, VStack, Link } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Logo, LinkComponent } from '@shared/ui-kit';

import { RightBlock } from './atoms';

export function Header() {
  const router = useRouter();

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
          <Logo onClick={() => router.navigateComponent(pages.Home, {}, {})} cursor="pointer" />
          <HStack
            gap="3.75rem"
            color="white"
            fontSize="0.6875rem"
            _hover={{ textDecoration: 'none' }}
            textTransform="uppercase"
            fontFamily="promo"
          >
            <LinkComponent page={pages.Marketplace.Home} pageProps={{}}>
              <Link>OTC Desk</Link>
            </LinkComponent>

            <UILogic.AuthAction>
              <LinkComponent page={pages.Dashboard.Home} pageProps={{}}>
                <Link>My Dashboard</Link>
              </LinkComponent>
            </UILogic.AuthAction>

            <UILogic.AuthAction>
              <LinkComponent page={pages.Lot.Create.Home} pageProps={{}}>
                <Link>Create offer</Link>
              </LinkComponent>
            </UILogic.AuthAction>
          </HStack>
        </HStack>
        <Box color="white">
          <RightBlock />
        </Box>
      </HStack>
      <Divider height="px" bgGradient="linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)" border="none" />
    </VStack>
  );
}
