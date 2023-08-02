import { createIcon } from '@chakra-ui/react';

export const CloseModalIcon = createIcon({
  displayName: 'CloseModalIcon',
  viewBox: '0 0 24 24',
  path: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path d="M18 6L6 18" stroke="#515460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#515460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  ),
});
