import { FC } from 'react';

import pages from '@app/pages';
import { Button, Link, VStack } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { LinkComponent } from '@shared/ui-kit';

export const Sidebar: FC = () => {
  return (
    <VStack w="full">
      <LinkComponent page={pages.Profile.Home} pageProps={{}}>
        <Button
          px="6"
          py="4"
          as={Link}
          border="2px solid"
          borderColor="dark.800"
          borderRadius="sm"
          fontWeight="bold"
          color="dark.200"
          fontSize="2md"
          w="full"
          display="flex"
          leftIcon={<UIIcons.Common.ProfileIcon />}
          variant="unstyled"
          justifyContent="flex-start"
          _hover={{
            textDecoration: 'none',
            borderColor: 'orange.300',
            color: 'white',
          }}
        >
          My profile
        </Button>
      </LinkComponent>
      <LinkComponent page={pages.Profile.Notification} pageProps={{}}>
        <Button
          px="6"
          py="4"
          as={Link}
          border="2px solid"
          borderColor="dark.800"
          borderRadius="sm"
          fontWeight="bold"
          color="dark.200"
          fontSize="2md"
          w="full"
          display="flex"
          leftIcon={<UIIcons.Common.NotificationIcon />}
          variant="unstyled"
          justifyContent="flex-start"
          _hover={{
            textDecoration: 'none',
            borderColor: 'orange.300',
            color: 'white',
          }}
        >
          Notification
        </Button>
      </LinkComponent>
      <LinkComponent page={pages.Profile.Settings} pageProps={{}}>
        <Button
          px="6"
          py="4"
          as={Link}
          border="2px solid"
          borderColor="dark.800"
          borderRadius="sm"
          fontWeight="bold"
          color="dark.200"
          fontSize="2md"
          w="full"
          display="flex"
          leftIcon={<UIIcons.Common.SettingsIcon />}
          variant="unstyled"
          justifyContent="flex-start"
          _hover={{
            textDecoration: 'none',
            borderColor: 'orange.300',
            color: 'white',
          }}
        >
          Settings
        </Button>
      </LinkComponent>
    </VStack>
  );
};
