import { createIcon } from '@chakra-ui/react';

export const RightIcon = createIcon({
  displayName: 'RightIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'transparent'
  },
  path: [
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  ],
});
