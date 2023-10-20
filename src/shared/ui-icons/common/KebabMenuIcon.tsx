import { createIcon } from '@chakra-ui/react';

export const KebabMenuIcon = createIcon({
  displayName: 'KebabMenuIcon',
  viewBox: '0 0 32 32',
  defaultProps: {
    w: 32,
    h: 32,
  },
  path: [
    <circle cx="16" cy="6.66667" r="2.66667" fill="currentColor" />,
    <circle cx="16" cy="16" r="2.66667" fill="currentColor" />,
    <ellipse cx="16" cy="25.3334" rx="2.66667" ry="2.66667" fill="currentColor" />,
  ],
});
