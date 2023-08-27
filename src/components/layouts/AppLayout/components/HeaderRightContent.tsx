import { observer } from 'mobx-react-lite';

import { HStack, Box, Square, Link, Button } from '@chakra-ui/react';
import { UIIcons } from '@components/icons';
import { Dropdown } from '@components/ui-kit';
import { UILogic } from '@components/ui-logic';

export const HeaderRightContent = observer(() => {
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
        <UILogic.WalletConnectButton>
          <UILogic.WalletAccountPanel />
        </UILogic.WalletConnectButton>
      </Box>
      <HStack gap="0.6rem">
        <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Common.NotificationIcon w="1.125rem" h="1.125rem" />
        </Square>
        <Square size="2.5rem" bg="rgba(37, 38, 40, 0.50)" borderRadius="0.5rem">
          <UIIcons.Language.EnglishIcon w="1.125rem" h="1.125rem" />
        </Square>
      </HStack>

      <HStack>
        <Dropdown items={[{ label: 'Account' }, { label: 'Settings' }, { label: 'Log out' }]}>
          <UIIcons.Common.KebabMenuIcon
            w="2rem"
            color="dark.200"
            transition="all 0.3s"
            _hover={{ color: 'orange.500' }}
            h="2rem"
          />
        </Dropdown>
      </HStack>
    </HStack>
  );
});
