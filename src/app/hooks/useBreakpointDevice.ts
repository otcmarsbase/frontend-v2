import { UseBreakpointOptions, useBreakpointValue } from '@chakra-ui/react';

export const useBreakpointDevice = (options: UseBreakpointOptions = { ssr: false }) => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false }, options);
  const isTablet = useBreakpointValue({ base: false, sm: false, md: true, lg: false, xl: false }, options);
  const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true }, options);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
