import { createIcon } from '@chakra-ui/react';

export const CloseIcon = createIcon({
  displayName: 'CloseIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    color: 'white',
  },
  path: [
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
