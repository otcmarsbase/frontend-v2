import { UILogic, useAuth } from '@app/components';
import { HStack, Box, Square, Link, Button } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { Dropdown } from '@shared/ui-kit';

export function RightBlock() {
  const { isAuthorized, signOut } = useAuth();

  return (
    <HStack>
      <HStack gap="2.5rem" mr="1.7rem">
        <Dropdown
          trigger="hover"
          items={[
            { label: 'Dev', as: 'a', href: '#' },
            { label: 'Twitter', as: 'a', href: '#' },
            { label: 'Facebook', as: 'a', href: '#' },
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

        <Link fontWeight="400" color="dark.50" whiteSpace="nowrap" fontSize="xs">
          How it works?
        </Link>
      </HStack>

      <Box mr="1.5rem">
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
      <HStack gap="0.6rem">
        {/* <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Common.NotificationIcon w="1.125rem" h="1.125rem" />
        </Square> */}
        <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Language.EnglishIcon w="1.125rem" h="1.125rem" />
        </Square>
      </HStack>
    </HStack>
  );
}