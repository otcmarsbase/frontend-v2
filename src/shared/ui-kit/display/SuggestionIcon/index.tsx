import { forwardRef, IconProps } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export const SuggestionIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <UIIcons.Common.InfoIcon color="dark.50" fontSize="0.6rem" {...props} ref={ref} />
));
