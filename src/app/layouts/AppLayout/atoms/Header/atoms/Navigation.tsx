import { AuthAction } from '@app/components';
import pages from '@app/pages';
import { HStack } from '@chakra-ui/react';
import { LinkComponent } from '@shared/ui-kit';

import { HeaderLink } from './HeaderLink';
import { Markets } from './Markets';

export function Navigation() {
  return (
    <HStack
      gap={5}
      color="white"
      fontSize="0.6875rem"
      _hover={{ textDecoration: 'none' }}
      display={{
        base: 'none',
        lg: 'flex',
      }}
      textTransform="uppercase"
      fontFamily="promo"
    >
      <LinkComponent page={pages.Home} pageProps={{}}>
        <HeaderLink>Main</HeaderLink>
      </LinkComponent>

      <Markets />

      <AuthAction>
        <LinkComponent page={pages.Dashboard.Home} pageProps={{}}>
          <HeaderLink>My Dashboard</HeaderLink>
        </LinkComponent>
      </AuthAction>

      <AuthAction>
        <LinkComponent page={pages.Lot.Create.Home} pageProps={{ direction: 'BUY' }}>
          <HeaderLink>Create Offer</HeaderLink>
        </LinkComponent>
      </AuthAction>
    </HStack>
  );
}
