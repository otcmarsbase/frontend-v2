import { ReactNode, useMemo } from 'react';

import pages from '@app/pages';
import {
  Box,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AppConfig } from '@shared/config';
import { UIIcons } from '@shared/ui-icons';
import { LinkComponent } from '@shared/ui-kit';

import { HeaderLink } from './HeaderLink';

export function Markets() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Popover trigger="hover" onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
      <PopoverTrigger>
        <HeaderLink>
          <HStack>
            <Box>Mars Markets</Box> <UIIcons.Common.ArrowDown />
          </HStack>
        </HeaderLink>
      </PopoverTrigger>
      <PopoverContent
        bg="dark.700"
        borderColor="dark.700"
        maxW="64"
        rounded="light"
        textTransform="none"
        fontFamily="body"
        fontSize="sm"
      >
        <PopoverArrow bg="dark.700" />
        <PopoverBody px="5" py="4">
          <VStack alignItems="flex-start" mb="4">
            <MarketLink
              page={pages.Marketplace.Home}
              label="Web3 secondaries"
              icon={<UIIcons.Market.Web3SecondariesIcon />}
              onClick={onClose}
            />
            <MarketLink label="Fundraising (Soon)" icon={<UIIcons.Market.FundraisingIcon />} />
            <MarketLink label="Web2 secondaries (Soon)" icon={<UIIcons.Market.Web2SecondariesIcon />} />
            <MarketLink label="Real world assets (Soon)" icon={<UIIcons.Market.RWAIcon />} />
            <MarketLink label="Syndicate deals (Soon)" icon={<UIIcons.Market.SyndicateDealsIcon />} />
            <MarketLink label="M&A (Soon)" icon={<UIIcons.Market.MAIcon />} />
          </VStack>
          <Link
            color="orange.300"
            fontWeight="medium"
            fontSize="xs"
            href={AppConfig.socials.telegramUrl}
            target="_blank"
          >
            All markets in Telegram
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

interface MarketLinkProps {
  page?: React.FC;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

function MarketLink({ page, label, icon, onClick }: MarketLinkProps) {
  const inner = useMemo(() => {
    return (
      <HStack as={Link}>
        <Flex
          border="1px solid"
          borderColor="dark.300"
          w="6"
          h="6"
          alignItems="center"
          justifyContent="center"
          fontSize="xs"
          rounded="micro"
        >
          {icon}
        </Flex>
        <Text>{label}</Text>
      </HStack>
    );
  }, [icon, label]);

  if (page) {
    return (
      <LinkComponent page={page} pageProps={{}} onClick={onClick} overrideClick={false}>
        {inner}
      </LinkComponent>
    );
  }

  return (
    <Box opacity="0.5" userSelect="none" pointerEvents="none">
      {inner}
    </Box>
  );
}
