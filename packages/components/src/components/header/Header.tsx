import {HTMLAttributeAnchorTarget, ReactNode} from 'react';
import { HStack, Box, Image, Divider, VStack, Link } from '@chakra-ui/react';
import LogoPng from '../../assets/logo.png';

export type HeaderMenuItem = {
  label: string;
  href?: { url: string; target?: HTMLAttributeAnchorTarget };
  onClick?: () => void;
};

export interface HeaderProps {
  menuItems: HeaderMenuItem[];
  rightContent: ReactNode;
  logoHref?: string;
}

export const Header = ({
  menuItems,
  logoHref = '#',
  rightContent,
}: HeaderProps) => {
  return (
    <VStack gap="0">
      <HStack
        width="100%"
        bg="dark.900"
        alignItems="center"
        height="5rem"
        paddingLeft="3.5rem"
        paddingRight="0.75rem"
        justifyContent="space-between"
      >
        <HStack gap="4.5rem">
          <Link href={logoHref}>
            <Image width="8rem" src={LogoPng} alt="OTC MarsBase" />
          </Link>
          <HStack gap="3.75rem" color="white">
            {menuItems.map((item, id) => {
              const { label, onClick, href } = item;
              return (
                <Link
                  href={href?.url}
                  fontSize="0.6875rem"
                  textTransform="uppercase"
                  target={href?.target}
                  fontFamily="menuItem"
                  onClick={onClick}
                  key={label}
                >
                  {label}
                </Link>
              );
            })}
          </HStack>
        </HStack>
        <Box color="white">{rightContent}</Box>
      </HStack>
      <Divider
        height="px"
        bgGradient="linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)"
      />
    </VStack>
  );
};
