import { createIcon } from '@chakra-ui/react';

export const OfferTypeIcon = createIcon({
  displayName: 'OfferTypeIcon',
  viewBox: '0 0 24 24',
  path: [
    <path
      d="M19 5L5 19"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />,
    <path
      d="M19 19L5 19L5 5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />,
  ],
});
