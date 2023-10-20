import { createIcon } from '@chakra-ui/react';

export const ProcessingIcon = createIcon({
  displayName: 'ProcessingIcon',
  viewBox: '0 0 16 16',
  defaultProps: {
    fill: 'transparent',
  },
  path: [
    <path
      d="M13 7.375C12.8472 6.27514 12.3369 5.25604 11.5479 4.47468C10.7589 3.69333 9.73485 3.19307 8.63354 3.05097C7.53224 2.90887 6.41476 3.1328 5.45325 3.68828C4.49174 4.24376 3.73953 5.09996 3.3125 6.125M3 3.625V6.125H5.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M3 8.625C3.15285 9.72486 3.66308 10.744 4.4521 11.5253C5.24112 12.3067 6.26515 12.8069 7.36646 12.949C8.46776 13.0911 9.58524 12.8672 10.5467 12.3117C11.5083 11.7562 12.2605 10.9 12.6875 9.875M13 12.375V9.875H10.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
