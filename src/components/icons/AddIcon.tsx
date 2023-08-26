import { createIcon } from '@chakra-ui/react';

export const AddIcon = createIcon({
  displayName: 'AddIcon',
  viewBox: '0 0 24 24',
  path: [
    <path
      d="M12 5V19"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M5 12H19"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
