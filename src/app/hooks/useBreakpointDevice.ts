import { useBreakpointValue } from '@chakra-ui/react';

export const useBreakpointDevice = () => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false });
  const isTablet = useBreakpointValue({ base: false, sm: false, md: true, lg: false, xl: false });
  const isDesktop = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
