import { createIcon } from '@chakra-ui/react';

export const DownloadIcon = createIcon({
  displayName: 'DownloadIcon',
  viewBox: '0 0 16 16',
  defaultProps: {
    fill: 'transparent',
  },
  path: [
    <path
      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M4.66602 6.66406L7.99935 9.9974L11.3327 6.66406"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M8 10V2"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ],
});
