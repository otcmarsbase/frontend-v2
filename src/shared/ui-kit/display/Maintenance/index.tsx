import { Heading } from '@chakra-ui/react';
import { Flex, Logo } from '@shared/ui-kit';

import BgSvg from './assets/bg.svg';

export const Maintenance = () => {
  return (
    <Flex
      minH="100vh"
      w="full"
      alignItems="center"
      justifyContent="center"
      bgImage={BgSvg}
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPos="center bottom"
      pos="relative"
    >
      <Logo pos="absolute" top="7rem" />
      <Heading fontSize={{ base: '1.5rem', md: '3rem', lg: '4rem' }} textAlign="center" maxW="70rem">
        Platform undergoing technical maintenance
      </Heading>
    </Flex>
  );
};
