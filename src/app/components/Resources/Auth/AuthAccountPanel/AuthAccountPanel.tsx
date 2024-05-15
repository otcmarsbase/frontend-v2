import pages from '@app/pages';
import {
  Box,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { LinkComponent } from '@shared/ui-kit';

import { useAuth } from '../AuthProvider';

import { AccountInfo } from './atoms';

export function AuthAccountPanel() {
  const { account, signOut, connectorInfo } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Popover trigger="hover" onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
      <PopoverTrigger>
        <Box
          borderRadius="base"
          height={10}
          bg="dark.800"
          padding="0.4rem"
          paddingLeft="0.6rem"
          userSelect="none"
          cursor="pointer"
          display="flex"
          alignItems="center"
        >
          <AccountInfo connectorInfo={connectorInfo} nickname={account.nickname} />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        bg="dark.700"
        borderColor="dark.700"
        maxW="56"
        rounded="light"
        textTransform="none"
        fontFamily="body"
        fontSize="sm"
      >
        <PopoverArrow bg="dark.700" />
        <PopoverBody px="5" py="4">
          <Box mb={4}>
            <AccountInfo connectorInfo={connectorInfo} nickname={account.nickname} />
          </Box>

          <VStack spacing={3} mb={4} alignItems="flex-start">
            <LinkComponent page={pages.Profile.Home} pageProps={{}} onClick={onClose} overrideClick={false}>
              <HStack as={Link}>
                <UIIcons.Common.ProfileIcon w="1.125rem" h="1.125rem" color="white" />
                <Text color="#C8CDD0">My Profile</Text>
              </HStack>
            </LinkComponent>
            <LinkComponent page={pages.Favorite.Home} pageProps={{}} onClick={onClose} overrideClick={false}>
              <HStack as={Link}>
                <UIIcons.Common.FavoriteIcon w="1.125rem" h="1.125rem" stroke="white" fill="transparent" />
                <Text color="#C8CDD0">My favorite lots</Text>
              </HStack>
            </LinkComponent>
            <LinkComponent page={pages.Profile.Notification} pageProps={{}} onClick={onClose} overrideClick={false}>
              <HStack as={Link}>
                <UIIcons.Common.NotificationIcon w="1.125rem" h="1.125rem" color="white" />
                <Text color="#C8CDD0">Notification</Text>
              </HStack>
            </LinkComponent>
            <LinkComponent page={pages.Profile.Settings} pageProps={{}} onClick={onClose} overrideClick={false}>
              <HStack as={Link}>
                <UIIcons.Common.SettingsIcon w="1.125rem" h="1.125rem" color="white" />
                <Text color="#C8CDD0">Settings</Text>
              </HStack>
            </LinkComponent>
          </VStack>

          <Box textAlign="center">
            <Link
              color="orange.300"
              onClick={() => {
                signOut();
                onClose();
              }}
            >
              Log out
            </Link>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
