import { createIcon } from '@chakra-ui/react';

export const DirectionIcon = createIcon({
  displayName: 'DirectionIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'transparent',
  },
  path: [
    <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    <path d="M19 19L5 19L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  ],
});
