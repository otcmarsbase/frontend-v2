import { Tooltip as ChakraTooltip, TooltipProps, forwardRef } from '@chakra-ui/react';

export const Tooltip = forwardRef<TooltipProps, typeof ChakraTooltip>(({ hasArrow = true, ...props }, ref) => (
  <ChakraTooltip hasArrow ref={ref} {...props} />
));
