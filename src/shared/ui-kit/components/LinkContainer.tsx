import { FC, ReactNode } from 'react';

import {
  Box,
  ComponentWithAs,
  Heading,
  HStack,
  IconProps,
  Img,
} from '@chakra-ui/react';

export interface ILinksContainer {
  icon: ComponentWithAs<'svg', IconProps>;
  text: string;
  href: string;
}
export const LinksContainer: FC<ILinksContainer> = ({ icon, text, href }) => {
  return (
    <HStack
      borderRadius="0.25rem"
      bg="rgba(255, 255, 255, 0.10)"
      padding="0.25rem 0.75rem"
      onClick={() => console.log('href', href)}
    >
      <Box color="white">'+'</Box>
      <Heading variant="h5" fontWeight="500" color="dark.50">
        {text}
      </Heading>
    </HStack>
  );
};
