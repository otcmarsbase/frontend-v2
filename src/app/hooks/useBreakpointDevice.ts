import { UseBreakpointOptions, useBreakpointValue } from '@chakra-ui/react';

export const useBreakpointDevice = (options: UseBreakpointOptions = { ssr: false }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: true, xl: false }, options);
  const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: false, xl: true }, options);

  return {
    isMobile,
    isDesktop,
  };
};
