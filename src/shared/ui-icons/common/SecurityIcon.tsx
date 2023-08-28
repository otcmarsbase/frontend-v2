import { createIcon } from '@chakra-ui/react';

export const SecurityIcon = createIcon({
  displayName: 'SecurityIcon',
  viewBox: '0 0 24 24',
  path: [
    <path
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  ],
});
