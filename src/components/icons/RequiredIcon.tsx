import { createIcon } from '@chakra-ui/react';

export const RequiredIcon = createIcon({
  displayName: 'RequiredIcon',
  viewBox: '0 0 10 10',
  defaultProps: {
    color: 'red.500',
  },
  path: [
    <path
      d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
      fill="currentColor"
    />,
    <path
      d="M4.47445 8L4.56204 5.70833L2.52555 6.9375L2 6.0625L4.14599 5L2 3.9375L2.52555 3.0625L4.56204 4.29167L4.47445 2H5.52555L5.43796 4.29167L7.47445 3.0625L8 3.9375L5.85401 5L8 6.0625L7.47445 6.9375L5.43796 5.70833L5.52555 8H4.47445Z"
      fill="white"
    />,
  ],
});
