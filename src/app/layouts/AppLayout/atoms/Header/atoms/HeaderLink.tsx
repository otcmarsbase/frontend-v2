import { Box, Circle, forwardRef, HStack, Link, LinkProps } from '@chakra-ui/react';

export const HeaderLink = forwardRef<LinkProps, typeof Link>(({ children, ...props }, ref) => {
  return (
    <Link {...props} ref={ref} display="inline-flex" alignItems="center" flexDir="column" role="group" _hover={{}}>
      <Box
        transitionProperty="transform"
        transitionDuration="var(--chakra-transition-duration-fast)"
        transitionTimingFunction="var(--chakra-transition-easing-ease-in-out)"
        _groupHover={{ transform: 'translateY(-0.2rem)' }}
      >
        {children}
      </Box>
      <HStack
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transitionProperty="opacity"
        transitionDuration="var(--chakra-transition-duration-fast)"
        transitionTimingFunction="var(--chakra-transition-easing-ease-in-out)"
      >
        <Circle pos="absolute" bottom={-1} _groupHover={{ pos: 'relative' }} size={1} backgroundColor="orange.500" />
        <Circle pos="absolute" bottom={-1} _groupHover={{ pos: 'relative' }} size={1} backgroundColor="orange.500" />
        <Circle pos="absolute" bottom={-1} _groupHover={{ pos: 'relative' }} size={1} backgroundColor="orange.500" />
      </HStack>
    </Link>
  );
});
