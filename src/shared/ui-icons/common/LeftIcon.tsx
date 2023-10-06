import { createIcon } from '@chakra-ui/react';

export const LeftIcon = createIcon({
  displayName: 'LeftIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'transparent'
  },
  path: [
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  ],
});
